// 이미지 생성용 프롬프트 목록을 IMAGE_PROMPTS.md 로 뽑는다 (Nano Banana 등에 붙여 넣기용).
// 사용: node tools/image-prompts.mjs   (없는 이미지가 위, 이미 있는 이미지는 맨 아래 접힘. 다시 만들 이미지는 REDO 에 적는다)
// 파일명 규칙: assets/raw/<폴더>/<이름>.png 로 저장 → node tools/import-images.mjs → img/<폴더>/<이름>.webp
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
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

const block = (file, prompt, note) => `**\`${file}\`**${note ? ` — ${note}` : ""}\n\n\`\`\`text\n${prompt}\n\`\`\`\n\n`;
const fold = (file, prompt) => `<details><summary><code>${file}</code></summary>\n\n\`\`\`text\n${prompt}\n\`\`\`\n\n</details>\n\n`;
const cap = (p) => p[0].toUpperCase() + p.slice(1);
const haveImg = (rel) => existsSync(path.join(ROOT, "img", rel));

// 다시 만들기를 권하는 이미지: id → 이유 (검수하며 추가/삭제)
const REDO = {
  "cast-13": "사무실 책상 구도가 다른 카드와 비슷해 장소·시간을 바꿔 다시 생성",
  "cast-free-casting-director": "사무실 책상 구도가 다른 카드와 비슷해 장소·시간을 바꿔 다시 생성",
  "cast-lead-script-veto": "사무실 책상 구도가 다른 카드와 비슷해 장소·시간을 바꿔 다시 생성",
  "fund-title-change-demand": "사무실 책상 구도가 다른 카드와 비슷해 장소·시간을 바꿔 다시 생성",
  "cast-star-reprice": "사무실 책상 구도가 다른 카드와 비슷해 장소·시간을 바꿔 다시 생성",
  "mkt-bgm-copyright-claim": "사무실 책상 구도가 다른 카드와 비슷해 장소·시간을 바꿔 다시 생성",
  "post-subtitle-typo-premiere": "사무실 책상 구도가 다른 카드와 비슷해 장소·시간을 바꿔 다시 생성",
  "fund-backers-group-chat": "사무실 책상 구도가 다른 카드와 비슷해 장소·시간을 바꿔 다시 생성",
  "plan-07": "사무실 책상 구도가 다른 카드와 비슷해 장소·시간을 바꿔 다시 생성",
  "fund-committee-nap": "사무실 책상 구도가 다른 카드와 비슷해 장소·시간을 바꿔 다시 생성",
  "mkt-influencer-free-review": "사무실 책상 구도가 다른 카드와 비슷해 장소·시간을 바꿔 다시 생성",
  "mkt-02": "사무실 책상 구도가 다른 카드와 비슷해 장소·시간을 바꿔 다시 생성",
  "plan-12": "사무실 책상 구도가 다른 카드와 비슷해 장소·시간을 바꿔 다시 생성",
  "mkt-10": "사무실 책상 구도가 다른 카드와 비슷해 장소·시간을 바꿔 다시 생성",
  "cast-wardrobe-sponsor-offer": "사무실 책상 구도가 다른 카드와 비슷해 장소·시간을 바꿔 다시 생성",
  "fund-deposit-delayed-again": "사무실 책상 구도가 다른 카드와 비슷해 장소·시간을 바꿔 다시 생성",
  "plan-08": "사무실 책상 구도가 다른 카드와 비슷해 장소·시간을 바꿔 다시 생성",
  "fund-fund-manager-unreachable": "사무실 책상 구도가 다른 카드와 비슷해 장소·시간을 바꿔 다시 생성",
};

const COVER_PROMPT = `A small Korean cinema at golden hour with a blank marquee, a hopeful producer in a wrinkled suit standing in front of it holding a giant film reel like a steering wheel, crew members peeking from behind, pigeons on the marquee. ${STYLE}`;
const fixed = [ // 타이틀·단계·엔딩
  { file: "assets/raw/cover.png", img: "cover.webp", prompt: COVER_PROMPT, label: "타이틀 (16:9)" },
  ...Object.entries(STAGES).map(([k, p]) => ({ file: `assets/raw/stages/${k}.png`, img: `stages/${k}.webp`, prompt: `${cap(p)}. ${STYLE}`, label: `단계 표지 ${k} (16:9)` })),
  ...Object.entries(ENDINGS).map(([k, p]) => ({ file: `assets/raw/endings/${k}.png`, img: `endings/${k}.webp`, prompt: `${cap(p)}. ${STYLE}`, label: `엔딩 ${k} (4:3)` })),
];

let scenes = {}; try { scenes = JSON.parse(readFileSync(path.join(ROOT, "data", "card-scenes.json"), "utf8")); } catch {}
const cardPrompt = (c) => `${scenes[c.id] ? scenes[c.id].replace(/[.\s]+$/, "") + "." : `A comedic scene from a Korean film-production story: ${c.desc}`} ${STYLE}`;
const cardFile = (c) => `assets/raw/cards/${c.id}.png`;
const cardHas = (c) => haveImg(`cards/${c.id}.webp`);

const fixedMissing = fixed.filter((x) => !haveImg(x.img)), fixedHave = fixed.filter((x) => haveImg(x.img));
const missing = CARDS.filter((c) => !cardHas(c)), have = CARDS.filter(cardHas);
const common = missing.filter((c) => !c.cond), rare = missing.filter((c) => c.cond);
const redo = CARDS.filter((c) => REDO[c.id] && cardHas(c));

let md = `# 이미지 프롬프트 (Nano Banana용)

각 코드 블록을 통째로 복사해 붙여 넣으면 됩니다(공통 스타일 문장 포함). 생성한 PNG는 \`assets/raw/inbox/\` 에 아무 이름으로 넣어도 되고,
블록 위의 파일명으로 저장해 두면 더 빠릅니다. \`node tools/import-images.mjs\` 가 워터마크를 잘라 webp로 \`img/\` 에 넣습니다.

- **1부: 새로 만들 것** (없는 이미지 ${fixedMissing.length + missing.length}장 + 다시 만들기 권장 ${redo.length}장)
- **2부: 이미 있음** ${fixedHave.length + have.length}장 — 맨 아래, 접혀 있음. 다시 뽑을 때만 펼치세요.

---

# 1부. 새로 만들 것

`;
if (fixedMissing.length) { md += `## 1-0. 타이틀·단계·엔딩 중 없는 것 (${fixedMissing.length})\n\n`; for (const x of fixedMissing) md += block(x.file, x.prompt, x.label); }
md += `## 1-1. 자주 나오는 카드 — 등장 조건 없음 (${common.length}장)\n\n`;
for (const c of common) md += `#### ${c.title} (${c.id})\n\n` + block(cardFile(c), cardPrompt(c));
md += `## 1-2. 조건부 카드 — 특정 상황에서만 등장 (${rare.length}장)\n\n`;
for (const c of rare) md += `#### ${c.title} (${c.id})\n\n` + block(cardFile(c), cardPrompt(c));
md += `## 1-3. 다시 만들기 권장 (${redo.length}장)\n\n이미 그림은 있지만 장면이 안 맞거나 글자가 보이는 것들. 새 그림이 들어오면 교체합니다.\n\n`;
for (const c of redo) md += `#### ${c.title} (${c.id})\n\n` + block(cardFile(c), cardPrompt(c), `이유: ${REDO[c.id]}`);

md += `---\n\n# 2부. 이미 있음 (${fixedHave.length + have.length}장)\n\n<details><summary>타이틀·단계·엔딩 ${fixedHave.length}장 펼치기</summary>\n\n`;
for (const x of fixedHave) md += `**${x.label}**\n\n` + fold(x.file, x.prompt);
md += `</details>\n\n<details><summary>카드 ${have.length}장 펼치기</summary>\n\n`;
for (const c of have) md += `**${c.title}** (${c.id})\n\n` + fold(cardFile(c), cardPrompt(c));
md += `</details>\n`;

writeFileSync(path.join(ROOT, "IMAGE_PROMPTS.md"), md);
console.log(`✔ IMAGE_PROMPTS.md — 새로 만들 것 ${fixedMissing.length + missing.length}장, 다시 만들기 ${redo.length}장, 이미 있음 ${fixedHave.length + have.length}장`);
