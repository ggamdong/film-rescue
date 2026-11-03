// 생성 이미지 임포트: 우측 하단 워터마크 영역을 잘라내고, 크기를 줄여 webp로 변환한다.
// 사용: node tools/import-images.mjs [--crop 10] [--max 1280] [--force]
//   읽기  assets/raw/**/*.{png,jpg,jpeg,webp}   (하위 폴더 cards/ stages/ endings/ 유지, inbox/ 는 건너뜀)
//   쓰기  img/<같은 경로>/<같은 이름>.webp   (cards/ 는 960px·품질 75, 나머지는 --max·품질 85)
// ffmpeg 가 PATH 에 있어야 한다.
import { readdirSync, mkdirSync, existsSync, statSync } from "node:fs";
import { spawnSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const RAW = path.join(root, "assets", "raw");
const OUT = path.join(root, "img");
const args = process.argv.slice(2);
const opt = (name, def) => { const i = args.indexOf(name); return i >= 0 ? Number(args[i + 1]) : def; };
const CROP = opt("--crop", 10);   // 아래·오른쪽 가장자리에서 잘라낼 비율(%) — 워터마크가 우측 하단에 있음
const MAX = opt("--max", 1280);  // 크롭 후 최대 가로/세로
const FORCE = args.includes("--force"); // 기본은 원본이 더 새로운 파일만 변환(증분)

if (!existsSync(RAW)) { console.error("assets/raw 폴더가 없습니다. 생성 이미지를 먼저 넣으세요"); process.exit(1); }
const files = [];
(function walk(d) { for (const f of readdirSync(d)) { const p = path.join(d, f); if (statSync(p).isDirectory()) { if (f !== "inbox") walk(p); } else if (/\.(png|jpe?g|webp)$/i.test(f)) files.push(p); } })(RAW);
if (!files.length) { console.log("assets/raw 에 이미지가 없습니다"); process.exit(0); }

const k = (100 - CROP) / 100;
// 폴더별 출력 규칙: 카드 표지는 화면에 작게 나오므로 더 줄인다 (모바일 가로 520px, 고해상도 기준 ~1,000px면 충분)
const RULES = { cards: { max: 960, quality: 75 } };
const ruleFor = (rel) => RULES[rel.split(path.sep)[0]] || { max: MAX, quality: 85 };
const vfFor = (max) => `crop=iw*${k}:ih*${k}:0:0,scale='min(${max},iw)':'min(${max},ih)':force_original_aspect_ratio=decrease`;

let ok = 0, skipped = 0;
for (const src of files) {
  const rel = path.relative(RAW, src);
  const dst = path.join(OUT, path.dirname(rel), path.parse(rel).name + ".webp");
  mkdirSync(path.dirname(dst), { recursive: true });
  if (!FORCE && existsSync(dst) && statSync(dst).mtimeMs >= statSync(src).mtimeMs) { skipped++; continue; }
  const rule = ruleFor(rel);
  const r = spawnSync("ffmpeg", ["-y", "-loglevel", "error", "-i", src, "-vf", vfFor(rule.max), "-quality", String(rule.quality), dst], { stdio: "inherit" });
  if (r.status === 0) { ok++; console.log("ok ", path.relative(root, dst)); }
  else console.error("FAIL", rel, r.error?.message ?? "");
}
console.log(`${ok}장 변환, ${skipped}장 건너뜀(이미 최신) / 전체 ${files.length}장 (우측 하단 ${CROP}% 크롭, 최대 ${MAX}px, --force 로 전부 다시)`);
