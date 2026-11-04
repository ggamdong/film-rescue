// Claude Code CLI(claude -p)로 위기 카드를 생성해 data/cards/draft/ 에 저장한다. 게임 실행과는 완전히 분리되어 있다.
// 사용: node tools/generate-cards.mjs --stage shooting --n 10 [--model sonnet] [--theme "심의, 배급"] [--out data/cards/draft/파일.json]
//       node tools/generate-cards.mjs --all --n 10     (7단계 각각 n장씩, 파일 7개)
// 검수 후 draft/ 파일을 data/cards/ 로 옮기고 node tools/build-cards.mjs 를 실행하면 게임에 반영된다.
import { spawn } from "node:child_process";
import { existsSync, readdirSync, statSync, writeFileSync, mkdirSync } from "node:fs";
import os from "node:os";
import path from "node:path";
import { ROOT, STAGES, STAT_KEYS, allCardFiles, loadJsonCards, validateCards } from "./validate-cards.mjs";

const args = process.argv.slice(2);
const opt = (n, d) => { const i = args.indexOf(n); return i >= 0 ? args[i + 1] : d; };
const STAGE = opt("--stage"), N = Number(opt("--n", 10)), MODEL = opt("--model", process.env.CLAUDE_MODEL || "sonnet");
const THEME = opt("--theme", ""), ALL = args.includes("--all");
if (!ALL && !STAGES.includes(STAGE)) { console.error(`--stage 는 ${STAGES.join("|")} 중 하나, 또는 --all`); process.exit(1); }

// 데스크톱 앱이 번들한 claude.exe 를 찾는다 (interrogation-room/engine.js 와 동일)
export function findClaudeBin() {
  if (process.env.CLAUDE_BIN && existsSync(process.env.CLAUDE_BIN)) return process.env.CLAUDE_BIN;
  const base = path.join(os.homedir(), "AppData", "Local", "Claude-Data");
  const hits = [];
  try {
    for (const d of readdirSync(base)) {
      const cc = path.join(base, d, "claude-code"); if (!existsSync(cc)) continue;
      for (const ver of readdirSync(cc)) {
        const vdir = path.join(cc, ver); if (!statSync(vdir).isDirectory()) continue;
        for (const hash of readdirSync(vdir)) { const exe = path.join(vdir, hash, "claude.exe"); if (existsSync(exe)) hits.push({ exe, m: statSync(exe).mtimeMs }); }
      }
    }
  } catch {}
  hits.sort((a, b) => b.m - a.m);
  return hits[0]?.exe ?? "claude";
}
function cleanEnv() { const env = {}; for (const [k, v] of Object.entries(process.env)) { if (k.startsWith("CLAUDE") || k.startsWith("ANTHROPIC")) continue; env[k] = v; } return env; }

function askModel({ system, prompt, schema }) {
  return new Promise((resolve, reject) => {
    const a = ["-p", "--output-format", "json", "--model", MODEL, "--max-turns", "5", "--system-prompt", system, "--json-schema", JSON.stringify(schema),
      "--disallowedTools", "Bash,Read,Edit,Write,Glob,Grep,WebFetch,WebSearch,Agent,NotebookEdit"];
    const child = spawn(findClaudeBin(), a, { env: cleanEnv(), windowsHide: true });
    let out = "", err = "";
    child.stdout.on("data", (d) => (out += d)); child.stderr.on("data", (d) => (err += d));
    child.on("error", reject);
    child.on("close", () => {
      let data; try { data = JSON.parse(out); } catch { return reject(new Error("CLI가 JSON을 돌려주지 않음: " + (out || err).slice(0, 300))); }
      if (data.is_error) return reject(new Error("CLI 오류: " + (data.result || JSON.stringify(data.error || data).slice(0, 300))));
      let obj = data.structured_output;
      if (!obj) { try { obj = JSON.parse(data.result); } catch { const m = String(data.result).match(/\{[\s\S]*\}/); if (m) { try { obj = JSON.parse(m[0]); } catch {} } } }
      if (!obj) return reject(new Error("구조화 출력 없음: " + String(data.result).slice(0, 300)));
      resolve({ obj, cost: data.total_cost_usd, ms: data.duration_ms });
    });
    child.stdin.end(prompt);
  });
}

const STAGE_KO = { planning: "기획", funding: "투자", casting: "캐스팅", shooting: "촬영", post: "후반", marketing: "마케팅", release: "개봉" };
const STAGE_HINT = {
  planning: "시나리오, 원작 판권, 제목, 장르 선택, 경쟁 기획, 지원금 공모, 피칭, 감독과의 의견 충돌, 실화 당사자",
  funding: "투자사 심사, 담당자 교체, 조건부 투자(배우 끼워 넣기, PPL), 선판매, 크라우드펀딩, 지자체 지원, 공동제작 지분, 투자 철회",
  casting: "톱배우 조건, 논란/폭로, 아이돌 캐스팅, 오디션 낙하산, 아역, 소속사 갑질, 출연료 협상, 감독 페르소나, 특별출연",
  shooting: "날씨, 로케이션 민원, 부상, 스태프 갈등, 장비 사고, 엑스트라, 현장 유출, 급여 지연, 비자, 추가 회차, 안전 문제, 밤샘",
  post: "편집 분량 싸움, CG 업체, 음악, 심의 등급, 블라인드 시사, 색보정, 후시녹음, 영화제 출품, 잔금 미지급, 자막/오타",
  marketing: "개봉일 경쟁, 예고편, 단체 관람 영업, 예매율 조작 유혹, 인터뷰 사고, 평론가 혹평, 무대인사, 포스터 논란, OTT 제안, 챌린지, 예능 출연 압박",
  release: "상영관 수, 열애설, 개봉 주 이슈, GV 사고, 입소문, 스포일러, 관객 이벤트, 2주차 생존, 리뷰 조작 의혹, 조조 관객",
};

const schema = {
  type: "object", additionalProperties: false, required: ["cards"],
  properties: { cards: { type: "array", items: {
    type: "object", additionalProperties: false, required: ["slug", "title", "desc", "choices"],
    properties: {
      slug: { type: "string", description: "영문 소문자/하이픈 짧은 식별자 (예: drone-crash)" },
      type: { type: "string", enum: ["crisis", "chance"], description: "crisis=위기(기본) / chance=기회(행운 또는 함정)" },
      title: { type: "string" }, desc: { type: "string" },
      cond: { type: "object", additionalProperties: false, properties: Object.fromEntries([...STAT_KEYS.map((k) => [k, { type: "array", items: { type: "integer" }, minItems: 2, maxItems: 2 }]), ["has", { type: "array", items: { type: "string" } }], ["any", { type: "array", items: { type: "string" } }], ["not", { type: "array", items: { type: "string" } }]]) },
      choices: { type: "array", minItems: 2, maxItems: 3, items: {
        type: "object", additionalProperties: false, required: ["text", "outcomes"],
        properties: { text: { type: "string" }, outcomes: { type: "array", minItems: 1, maxItems: 3, items: {
          type: "object", additionalProperties: false, required: ["p", "fx", "text"],
          properties: { p: { type: "number" }, text: { type: "string" }, set: { type: "array", items: { type: "string" } },
            fx: { type: "object", additionalProperties: false, properties: Object.fromEntries(STAT_KEYS.map((k) => [k, { type: "integer" }])) } },
        } } },
      } },
    },
  } } },
};

const SYSTEM = `당신은 한국 영화 제작 현장을 잘 아는 블랙코미디 작가다. 웹게임 "오늘도 크랭크인!"의 위기 이벤트 카드를 JSON으로 쓴다.
게임: 플레이어는 망해 가는 한국 영화의 제작자. 기획→투자→캐스팅→촬영→후반→마케팅→개봉 14턴 동안 매 턴 카드 하나를 받고 선택지를 고른다.
상태값(0~100): budget 예산, schedule 일정(여유), morale 현장 사기, quality 완성도, buzz 화제성. 예산·일정·사기가 0이면 즉시 배드엔딩. 완성도·화제성은 엔딩(관객 수) 계산에 쓰인다.
문체 규칙:
- 건조하고 짧은 문장. 설명하지 말고 보여 준다. 마지막 문장에 한 번 비튼다. 예: "임원은 흐뭇했다. 제목은 검색이 안 된다. 느낌표 때문이다."
- 실존 인물·회사·작품의 실명 금지. 특정인을 연상시키는 묘사도 피한다. 혐오·비하 표현 금지.
- desc는 2~3문장, 160자 이내. 선택지 text는 20자 이내의 행동. 결과 text는 1~3문장.
설계 규칙:
- 선택지 2~3개. 각 선택지의 outcomes 확률 p 합은 정확히 1. 안전한 선택지는 outcomes 1개, 도박성 선택지는 2개(성공/실패).
- fx는 정수, 보통 ±2~±8, 극적인 경우 최대 ±15. 예산 감소는 특히 가볍게(선택지 평균 -1 수준). 공짜 이득은 없다: 얻는 게 있으면 잃는 게 있다. 빈 fx({})도 허용.
- 어떤 선택지도 항상 정답이 되면 안 된다. 트레이드오프가 분명해야 한다.
- 이야기를 잇고 싶으면 set 으로 snake_case 플래그를 켜고, 후속 카드는 cond.has 로 그 플래그를 요구한다. 기존 플래그: star, idol, festival, scandal_star, scandal_light, fake_booking, trailer_lie, director_replaced, injury, city_scene, family_blessing, crowd_cameo, rival_project, director_gone, connection, group_sales, ott_deal, personal_debt, revenue_share, profit_actor, crypto_money, need_star, no_stunt, region_shoot, lawsuit_risk, r_rated, webtoon_ip, new_investor, investor_actor, angel_investor. 새 플래그를 만들어도 된다.
- cond 는 선택 사항. 상태값 범위([min,max])나 플래그(has=모두, any=하나라도, not=없어야)로 등장 조건을 걸 수 있다. 톱배우·아이돌·원작·크라우드펀딩·선판매·OTT 계약 같은 전제가 있는 카드는 반드시 해당 플래그를 조건으로 걸어라(star, idol, webtoon_ip, crowdfund, presale, ott_deal, unknown_lead 등). 카드의 60% 이상은 cond 없이 언제든 나올 수 있어야 한다.
단계 정합성(중요):
- 카드는 지정된 단계에서 '실제로 그 시점에 벌어지는 일'이어야 한다. 단어가 아니라 시점으로 판단한다. 예: 투자는 기본적으로 프리 단계지만 '촬영 중 추가 투자 유치'는 촬영 카드, '대본 리딩'은 배우가 있어야 하니 캐스팅 이후, '예고편·기자 시사·평점'은 마케팅 이후, '관객 반응·무대인사·N차 관람'은 개봉 카드.
- cond.has 로 요구하는 플래그는 이 단계보다 앞 단계(또는 같은 단계)에서 켜지는 것만 쓴다. 플래그가 켜지는 단계: 기획 webtoon_ip·region_shoot·rival_project·lawsuit_risk·r_rated / 투자 presale·crowdfund·grant·local_subsidy·angel_investor·chairman_money·patron·crypto_money·personal_debt·revenue_share·new_investor·investor_actor·need_star·connection / 캐스팅 star·idol·unknown_lead·profit_actor·star_control·scandal_star / 촬영 injury·no_stunt·director_replaced·director_gone·city_scene·crowd_cameo·family_blessing / 후반 festival·two_endings·tragic_ending·free_vfx·ai_dub / 마케팅 ott_deal·fake_booking·trailer_lie·viral_scam·group_sales·scandal_light.
카드 유형 비율(type):
- crisis(약 70%): 위기. 어느 선택지든 뭔가를 잃는다. 덜 잃는 쪽을 고르는 게임.
- chance(약 30%): 겉보기엔 좋은 일. 플레이어 화면에는 "기회"로만 표시되어 둘을 구별할 수 없다.
  · 행운(chance의 절반): 정말 좋은 일. 받으면 대체로 이득, 소소한 대가 정도. 거절 선택지는 효과 없음.
  · 함정(chance의 나머지 절반): 행운처럼 보이지만 수락 시 60~75% 확률로 더 큰 손해(공짜 제안의 숨은 조건, 조건 없는 투자, 무료 솔루션 등). 25~40%는 진짜 행운이어서 의심만 하면 손해 보게 만든다.
- 가끔(10장 중 1장 이하) 도박 카드: 올인 선택지 하나가 큰 이득(+15~20) 아니면 큰 손해(-15~20)로 갈린다.`;

async function genStage(stage, n, existingTitles) {
  const prompt = `단계: ${STAGE_KO[stage]} (${stage}). 이 단계에서 일어날 법한 위기 카드 ${n}장을 만들어라.
소재 힌트: ${STAGE_HINT[stage]}${THEME ? `\n이번 배치 중점 소재: ${THEME}` : ""}
이미 있는 카드 제목(겹치지 않게): ${existingTitles.join(" / ") || "(없음)"}
slug 는 겹치지 않는 영문 소문자-하이픈으로.`;
  const { obj, cost, ms } = await askModel({ system: SYSTEM, prompt, schema });
  return { cards: obj.cards, cost, ms };
}

const existing = allCardFiles().flatMap((f) => loadJsonCards(f));
const draftDir = path.join(ROOT, "data", "cards", "draft"); mkdirSync(draftDir, { recursive: true });
const existingDrafts = allCardFiles(draftDir).flatMap((f) => loadJsonCards(f));
const knownIds = new Set([...existing, ...existingDrafts].map((c) => c.id));
const stamp = new Date().toISOString().slice(0, 16).replace(/[-:T]/g, "").slice(0, 12);

for (const stage of ALL ? STAGES : [STAGE]) {
  const titles = [...existing, ...existingDrafts].filter((c) => c.stage === stage).map((c) => c.title);
  process.stdout.write(`▶ ${STAGE_KO[stage]} ${N}장 생성 중 (${MODEL})... `);
  let res; try { res = await genStage(stage, N, titles); } catch (err) { console.error("\n✖ " + err.message); continue; }
  const prefix = { planning: "plan", funding: "fund", casting: "cast", shooting: "shoot", post: "post", marketing: "mkt", release: "rel" }[stage];
  const cards = res.cards.map((c) => {
    let id = `${prefix}-${String(c.slug || "").toLowerCase().replace(/[^a-z0-9-]/g, "-").replace(/-+/g, "-").replace(/^-|-$/g, "") || "card"}`;
    let k = 2; const base = id; while (knownIds.has(id)) id = `${base}-${k++}`; knownIds.add(id);
    const { slug, type, ...rest } = c; return { id, stage, ...(type === "chance" ? { type } : {}), ...rest };
  });
  const { errors, warns } = validateCards(cards);
  const out = opt("--out") && !ALL ? path.resolve(ROOT, opt("--out")) : path.join(draftDir, `gen-${stage}-${stamp}.json`);
  writeFileSync(out, JSON.stringify(cards, null, 2) + "\n");
  console.log(`${cards.length}장 → ${path.relative(ROOT, out)}  ($${(res.cost || 0).toFixed(3)}, ${Math.round((res.ms || 0) / 1000)}s)`);
  errors.forEach((m) => console.log("   오류 " + m)); warns.forEach((m) => console.log("   경고 " + m));
  if (errors.length) console.log("   ↑ 오류가 있는 카드는 검수 때 고치거나 지우세요. (build 단계에서 막힙니다)");
}
console.log("\n검수 후: draft 파일을 data/cards/ 로 옮기고  node tools/build-cards.mjs");
