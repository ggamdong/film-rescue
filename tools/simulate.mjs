// 밸런스 시뮬레이터: index.html 의 CORE 구간을 그대로 읽어 N판을 자동으로 돌리고 엔딩 분포를 출력한다.
// 사용: node tools/simulate.mjs [--n 1000] [--policy random|greedy|safe] [--genre thriller] [--seed 1]
//   random: 선택지를 무작위로 고름   greedy: 기대 효과 합이 가장 큰 선택지   safe: 생존 스탯 기대 손실이 가장 작은 선택지
import { readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const args = process.argv.slice(2);
const opt = (n, d) => { const i = args.indexOf(n); return i >= 0 ? args[i + 1] : d; };
const N = Number(opt("--n", 1000)), POLICY = opt("--policy", "random"), GENRE = opt("--genre", null), SEED0 = Number(opt("--seed", 1));

const html = readFileSync(path.join(ROOT, "index.html"), "utf8");
const m = html.match(/\/\* CORE-START[\s\S]*?\*\/([\s\S]*?)\/\* CORE-END \*\//);
if (!m) { console.error("index.html 에서 CORE 구간을 찾지 못했습니다"); process.exit(1); }
const FR = new Function(m[1] + "\nreturn FR;")();
const cardsSrc = readFileSync(path.join(ROOT, "cards.js"), "utf8");
const CARDS = new Function("window", cardsSrc + "\nreturn window.FILM_CARDS;")({});

const expect = (ch) => ch.outcomes.reduce((acc, o) => { for (const k in o.fx) acc[k] = (acc[k] || 0) + o.p * o.fx[k]; return acc; }, {});
function policy(st, card, rng) {
  if (POLICY === "random") return Math.floor(rng() * card.choices.length);
  const scores = card.choices.map((ch) => {
    const ex = expect(ch);
    if (POLICY === "safe") return FR.SURVIVAL.reduce((a, k) => a + Math.min(0, ex[k] || 0) * (st.stats[k] <= 25 ? 3 : 1), 0) + 0.3 * ((ex.quality || 0) + (ex.buzz || 0));
    return Object.values(ex).reduce((a, b) => a + b, 0);
  });
  return scores.indexOf(Math.max(...scores));
}

const tiers = {}, overAt = [], auds = [], finalStats = { budget: 0, schedule: 0, morale: 0, quality: 0, buzz: 0 }, cardUse = {}, fallbacks = {};
const prng = FR.makeRng(SEED0 * 7919);
for (let i = 0; i < N; i++) {
  const genre = GENRE || FR.GENRES[i % FR.GENRES.length].key;
  const st = FR.newGame({ seed: SEED0 + i, cards: CARDS, title: "sim", genre });
  while (!FR.isFinished(st)) {
    const card = FR.drawCard(st);
    if (card.fallback) fallbacks[card.stage] = (fallbacks[card.stage] || 0) + 1; else cardUse[card.id] = (cardUse[card.id] || 0) + 1;
    FR.choose(st, policy(st, card, prng));
    FR.nextTurn(st);
  }
  const end = FR.finish(st);
  tiers[end.tier] = (tiers[end.tier] || 0) + 1;
  if (st.over) overAt.push(st.turn); else auds.push(end.audience);
  for (const k in finalStats) finalStats[k] += st.stats[k];
}
const pct = (n) => (100 * n / N).toFixed(1).padStart(5) + "%";
console.log(`\n오늘도 크랭크인! · ${N}판 · policy=${POLICY}${GENRE ? " · genre=" + GENRE : ""} · 카드 ${CARDS.length}장\n`);
console.log("엔딩 분포");
for (const t of ["bankrupt", "boycott", "delayed", "ott", "cult", "flop", "even", "hit", "mega"]) if (tiers[t]) console.log(`  ${t.padEnd(9)} ${pct(tiers[t])}  ${"█".repeat(Math.round(50 * tiers[t] / N))}`);
if (overAt.length) console.log(`\n조기 종료 ${pct(overAt.length)} · 평균 ${(overAt.reduce((a, b) => a + b, 0) / overAt.length).toFixed(1)}턴째`);
if (auds.length) { auds.sort((a, b) => a - b); const q = (p) => auds[Math.floor(p * (auds.length - 1))].toLocaleString("ko-KR"); console.log(`관객 수 (완주 ${auds.length}판): 중앙값 ${q(0.5)} · 하위10% ${q(0.1)} · 상위10% ${q(0.9)} · 최대 ${q(1)}`); }
console.log("평균 최종 스탯: " + Object.entries(finalStats).map(([k, v]) => `${FR.STATS[k]} ${(v / N).toFixed(0)}`).join(" · "));
const fb = Object.entries(fallbacks); if (fb.length) console.log("기본(대체) 카드 사용: " + fb.map(([s, n]) => `${s} ${n}회`).join(", ") + "  ← 이 단계 카드가 부족합니다");
const never = CARDS.filter((c) => !cardUse[c.id]).map((c) => c.id); if (never.length) console.log(`한 번도 안 나온 카드 ${never.length}장: ${never.join(", ")}`);
const top = Object.entries(cardUse).sort((a, b) => b[1] - a[1]).slice(0, 5); console.log("가장 자주 나온 카드: " + top.map(([id, n]) => `${id}(${n})`).join(", "));
