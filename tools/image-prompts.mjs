// 이미지 생성용 프롬프트 목록을 IMAGE_PROMPTS.md 로 뽑는다 (Nano Banana 등에 붙여 넣기용).
// 사용: node tools/image-prompts.mjs [--cards]   (--cards 를 주면 카드 개별 표지 프롬프트까지 포함)
// 파일명 규칙: assets/raw/<폴더>/<이름>.png 로 저장 → node tools/import-images.mjs → img/<폴더>/<이름>.webp
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const withCards = process.argv.includes("--cards");
const CARDS = new Function("window", readFileSync(path.join(ROOT, "cards.js"), "utf8") + "\nreturn window.FILM_CARDS;")({});

const STYLE = "Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.";
const STAGES = {
  planning: "a tiny Seoul production office buried in script pages, a producer with huge eye bags happily taping a 'Version 4' page to a wall already covered with crossed-out plans, cat sleeping on the printer",
  funding: "a shiny corporate meeting room, three investors in suits leaning back with identical skeptical faces, the producer presenting a glowing pie chart that is almost entirely one bright slice with a sliver missing",
  casting: "a bright audition room, a long line of hopeful actors in wildly different costumes (knight, nurse, zombie) stretching out the door, one bored casting director with a coffee",
  shooting: "a chaotic but cheerful outdoor film set in the rain, crew holding umbrellas over a camera, the director shouting through a megaphone while standing in a puddle, clapperboard mid-air",
  post: "a cozy editing room at 3am, an editor with twelve coffee cups stacked into a tower, the director asleep on the couch hugging a hard drive, timeline glowing on the monitor",
  marketing: "a busy subway passage, a marketing team frantically pasting a colorful film poster while commuters stream past glued to their phones, one kid pointing at the poster",
  release: "a multiplex lobby on opening morning, the whole crew peeking nervously from behind a standee at the ticket counter where exactly one customer is buying a ticket",
};
const ENDINGS = {
  bankrupt: "a producer sitting on a stack of script boxes in an emptied office eating cup noodles, a blank sign taped to the glass door, pigeons walking in through the open door, afternoon sunshine",
  boycott: "an empty film set at sunrise, equipment abandoned mid-setup, a single director's chair with a lone director sitting in it holding a megaphone, a tumbleweed of gaffer tape rolling by",
  delayed: "a dusty external hard drive wrapped in masking tape sitting on a shelf like a shrine, wall calendar with years flipping away, a spider web connecting the drive to a trophy",
  ott: "a cozy living room at night, a family asleep on the couch in front of a TV showing a streaming menu, the film's thumbnail tiny in the corner, cat watching instead",
  cult: "a tiny old single-screen theater, one elderly viewer in the middle row clapping alone with popcorn flying, a torn ticket stub in the foreground, dusty projector beam sparkling",
  flop: "a cinema lobby where a staff member on a ladder peels down the film's poster while a giant blockbuster poster rolls down next to it, the producer watching with a forced smile",
  even: "a modest wrap party in a Korean BBQ restaurant, tired crew members clinking soju glasses with relieved smiles, grill smoke, a hand-drawn 'we survived' banner",
  hit: "a sold-out cinema lobby packed with excited people, a snaking queue past standees, confetti falling, the producer being lifted on the crew's shoulders",
  mega: "a stage greeting in a packed auditorium, hundreds of phone flashes like stars, a giant celebratory banner seen from behind the stage, the director bowing so deep the cap falls off",
};

const block = (file, prompt) => `**\`${file}\`**\n\n\`\`\`text\n${prompt}\n\`\`\`\n\n`;
const cap = (p) => p[0].toUpperCase() + p.slice(1);

let md = `# 이미지 프롬프트 (Nano Banana용)

각 코드 블록을 통째로 복사해 붙여 넣으면 됩니다(공통 스타일 문장이 이미 끝에 붙어 있음).
생성한 PNG는 블록 위의 **저장 파일명**으로 저장하고 \`node tools/import-images.mjs\` 를 실행하면
우측 하단 워터마크를 잘라내고 webp로 변환해 \`img/\` 에 넣습니다. 이미지가 없는 자리는 이모지로 대체되므로 있는 것부터 넣어도 됩니다.

✅ 표시는 이미 img/ 에 들어간 이미지입니다. 새로 뽑을 건 표시 없는 블록만 보면 됩니다.

## 1. 타이틀 / OG (가로 16:9)

`;
const haveImg = (rel) => existsSync(path.join(ROOT, "img", rel));
const blockOr = (file, imgRel, prompt) => haveImg(imgRel) ? `**\`${file}\`** ✅ 이미 있음 (다시 뽑을 때만 아래 사용)

<details><summary>프롬프트</summary>

\`\`\`text
${prompt}
\`\`\`

</details>

` : block(file, prompt);
md += blockOr("assets/raw/cover.png", "cover.webp", `A small Korean cinema at golden hour with a blank marquee, a hopeful producer in a wrinkled suit standing in front of it holding a giant film reel like a steering wheel, crew members peeking from behind, pigeons on the marquee. ${STYLE}`);
md += `\`assets/raw/og.png\` 은 cover 이미지를 1200x630으로 잘라 써도 됩니다.\n\n## 2. 단계 기본 표지 (가로 16:9) — 카드 개별 이미지가 없을 때 대신 보입니다\n\n`;
for (const [k, p] of Object.entries(STAGES)) md += blockOr(`assets/raw/stages/${k}.png`, `stages/${k}.webp`, `${cap(p)}. ${STYLE}`);
md += `## 3. 엔딩 결과 카드 이미지 (가로 4:3)\n\n`;
for (const [k, p] of Object.entries(ENDINGS)) md += blockOr(`assets/raw/endings/${k}.png`, `endings/${k}.webp`, `${cap(p)}. ${STYLE}`);

if (withCards) {
  // data/card-scenes.json 의 영어 장면 묘사를 우선 사용. 이미 img/cards/<id>.webp 가 있으면 "있음"으로 표시하고 뒤로 보낸다.
  let scenes = {}; try { scenes = JSON.parse(readFileSync(path.join(ROOT, "data", "card-scenes.json"), "utf8")); } catch {}
  const has = (c) => existsSync(path.join(ROOT, "img", "cards", c.id + ".webp"));
  const prompt = (c) => `${scenes[c.id] ? scenes[c.id] + "." : `A comedic scene from a Korean film-production story, "${c.title}": ${c.desc}`} ${STYLE}`;
  const missing = CARDS.filter((c) => !has(c)), done = CARDS.filter(has);
  const common = missing.filter((c) => !c.cond), rare = missing.filter((c) => c.cond);
  md += `## 4. 카드 개별 표지 (가로 16:9) — 아직 없는 카드 ${missing.length}장 / 있음 ${done.length}장\n\n자주 나오는 카드(등장 조건 없음)부터 적었습니다.\n\n### 4-1. 자주 나오는 카드 (${common.length}장)\n\n`;
  for (const c of common) md += `#### ${c.title} (${c.id})\n\n` + block(`assets/raw/cards/${c.id}.png`, prompt(c));
  md += `### 4-2. 조건부 카드 (${rare.length}장)\n\n`;
  for (const c of rare) md += `#### ${c.title} (${c.id})\n\n` + block(`assets/raw/cards/${c.id}.png`, prompt(c));
  if (done.length) md += `### 4-3. 이미 이미지가 있는 카드 (${done.length}장)\n\n다시 뽑고 싶을 때만: ` + done.map((c) => `${c.id}(${c.title})`).join(", ") + "\n\n";
}

writeFileSync(path.join(ROOT, "IMAGE_PROMPTS.md"), md);
console.log(`✔ IMAGE_PROMPTS.md (${withCards ? "카드 포함 " + CARDS.length + "장" : "타이틀·단계·엔딩만; --cards 로 카드별 프롬프트 추가"})`);
