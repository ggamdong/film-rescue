// 카드 JSON 검증. 단독 실행: node tools/validate-cards.mjs [파일...]  (기본: data/cards/*.json)
// 다른 스크립트에서는 validateCards(cards) 를 import 해서 쓴다.
import { readFileSync, readdirSync, existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

export const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
export const STAGES = ["planning", "funding", "casting", "shooting", "post", "marketing", "release"];
export const STAT_KEYS = ["budget", "schedule", "morale", "quality", "buzz"];
const MAX_DELTA = 25;

export function loadJsonCards(file) {
  const raw = JSON.parse(readFileSync(file, "utf8"));
  const arr = Array.isArray(raw) ? raw : raw.cards;
  if (!Array.isArray(arr)) throw new Error(`${file}: 배열 또는 {cards:[...]} 형식이어야 합니다`);
  return arr;
}

export function validateCards(cards, { knownIds = new Set() } = {}) {
  const errors = [], warns = [];
  const ids = new Set(knownIds);
  const e = (id, m) => errors.push(`[${id}] ${m}`), w = (id, m) => warns.push(`[${id}] ${m}`);
  const hasKo = (s) => /[가-힣]/.test(String(s));
  cards.forEach((c, i) => {
    const id = c.id || `#${i}`;
    if (!c.id || !/^[a-z0-9-]+$/.test(c.id)) e(id, "id는 소문자/숫자/하이픈만 (예: shoot-07)");
    if (ids.has(c.id)) e(id, "id 중복"); ids.add(c.id);
    if (!STAGES.includes(c.stage)) e(id, `stage 값 오류: ${c.stage}`);
    if (!c.title || !hasKo(c.title)) e(id, "title 누락/한국어 아님");
    if (c.type && !["crisis", "chance"].includes(c.type)) e(id, `type 값 오류: ${c.type} (crisis|chance)`);
    if (!c.desc || c.desc.length < 20) e(id, "desc가 너무 짧음(20자 이상)");
    if (c.desc && c.desc.length > 220) w(id, `desc가 김(${c.desc.length}자, 모바일에선 160자 내외 권장)`);
    if (!Array.isArray(c.choices) || c.choices.length < 2 || c.choices.length > 3) e(id, "choices는 2~3개");
    if (c.cond) {
      for (const k of Object.keys(c.cond)) {
        if (STAT_KEYS.includes(k)) { const r = c.cond[k]; if (!Array.isArray(r) || r.length !== 2 || r[0] > r[1]) e(id, `cond.${k}는 [min,max]`); }
        else if (!["has", "not", "genre"].includes(k)) e(id, `cond에 알 수 없는 키: ${k}`);
      }
    }
    (c.choices || []).forEach((ch, j) => {
      const cid = `${id}/choice${j + 1}`;
      if (!ch.text || !hasKo(ch.text)) e(cid, "text 누락");
      if (!Array.isArray(ch.outcomes) || !ch.outcomes.length) return e(cid, "outcomes 누락");
      const sum = ch.outcomes.reduce((a, o) => a + (o.p || 0), 0);
      if (Math.abs(sum - 1) > 0.011) e(cid, `확률 합이 1이 아님 (${sum.toFixed(2)})`);
      ch.outcomes.forEach((o, k) => {
        const oid = `${cid}/o${k + 1}`;
        if (typeof o.p !== "number" || o.p <= 0 || o.p > 1) e(oid, "p는 0~1 숫자");
        if (!o.text || !hasKo(o.text)) e(oid, "결과 text 누락");
        if (o.fx == null || typeof o.fx !== "object") e(oid, "fx 객체 필요(빈 객체 가능)");
        else for (const [k2, v] of Object.entries(o.fx)) {
          if (!STAT_KEYS.includes(k2)) e(oid, `fx에 알 수 없는 스탯: ${k2}`);
          else if (typeof v !== "number" || Math.abs(v) > MAX_DELTA) e(oid, `fx.${k2}=${v} (±${MAX_DELTA} 이내 정수)`);
        }
        for (const key of ["set", "unset"]) if (o[key] && (!Array.isArray(o[key]) || o[key].some((f) => !/^[a-z0-9_]+$/.test(f)))) e(oid, `${key}는 snake_case 플래그 배열`);
      });
    });
  });
  return { errors, warns };
}

export function allCardFiles(dir = path.join(ROOT, "data", "cards")) {
  if (!existsSync(dir)) return [];
  return readdirSync(dir).filter((f) => f.endsWith(".json")).sort().map((f) => path.join(dir, f));
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const files = process.argv.slice(2).length ? process.argv.slice(2) : allCardFiles();
  let all = [], bad = 0;
  for (const f of files) {
    let cards; try { cards = loadJsonCards(f); } catch (err) { console.error(`✖ ${f}: ${err.message}`); bad++; continue; }
    const { errors, warns } = validateCards(cards, { knownIds: new Set(all.map((c) => c.id)) });
    all = all.concat(cards);
    console.log(`${errors.length ? "✖" : "✔"} ${path.relative(ROOT, f)}: ${cards.length}장${errors.length ? `, 오류 ${errors.length}` : ""}${warns.length ? `, 경고 ${warns.length}` : ""}`);
    errors.forEach((m) => console.log("   오류 " + m)); warns.forEach((m) => console.log("   경고 " + m));
    if (errors.length) bad++;
  }
  const byStage = {}; all.forEach((c) => (byStage[c.stage] = (byStage[c.stage] || 0) + 1));
  console.log(`총 ${all.length}장 — ` + STAGES.map((s) => `${s} ${byStage[s] || 0}`).join(", "));
  process.exit(bad ? 1 : 0);
}
