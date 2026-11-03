// data/cards/*.json (검수 완료 카드) 을 합쳐 cards.js 로 만든다. draft/ 폴더는 포함하지 않는다.
// 사용: node tools/build-cards.mjs
import { writeFileSync } from "node:fs";
import path from "node:path";
import { ROOT, STAGES, allCardFiles, loadJsonCards, validateCards } from "./validate-cards.mjs";

const files = allCardFiles();
let all = [], failed = false;
for (const f of files) {
  const cards = loadJsonCards(f);
  const { errors } = validateCards(cards, { knownIds: new Set(all.map((c) => c.id)) });
  if (errors.length) { failed = true; console.error(`✖ ${path.relative(ROOT, f)}`); errors.forEach((m) => console.error("   " + m)); }
  all = all.concat(cards);
}
if (failed) { console.error("오류가 있어 cards.js 를 만들지 않았습니다."); process.exit(1); }

const byStage = {}; all.forEach((c) => (byStage[c.stage] = (byStage[c.stage] || 0) + 1));
const out = `// 자동 생성 파일. 직접 수정하지 말고 data/cards/*.json 을 고친 뒤 \`node tools/build-cards.mjs\` 를 실행하세요.
// ${new Date().toISOString().slice(0, 10)} · ${all.length}장 · ${STAGES.map((s) => `${s} ${byStage[s] || 0}`).join(", ")}
window.FILM_CARDS = ${JSON.stringify(all)};
`;
writeFileSync(path.join(ROOT, "cards.js"), out);
console.log(`✔ cards.js: ${all.length}장 (${files.map((f) => path.basename(f)).join(", ")})`);
console.log("   " + STAGES.map((s) => `${s} ${byStage[s] || 0}`).join(" · "));
