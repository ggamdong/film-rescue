# 이미지 프롬프트 (Nano Banana용)

각 코드 블록을 통째로 복사해 붙여 넣으면 됩니다(공통 스타일 문장이 이미 끝에 붙어 있음).
생성한 PNG는 블록 위의 **저장 파일명**으로 저장하고 `node tools/import-images.mjs` 를 실행하면
우측 하단 워터마크를 잘라내고 webp로 변환해 `img/` 에 넣습니다. 이미지가 없는 자리는 이모지로 대체되므로 있는 것부터 넣어도 됩니다.

✅ 표시는 이미 img/ 에 들어간 이미지입니다. 새로 뽑을 건 표시 없는 블록만 보면 됩니다.

## 1. 타이틀 / OG (가로 16:9)

**`assets/raw/cover.png`** ✅ 이미 있음 (다시 뽑을 때만 아래 사용)

<details><summary>프롬프트</summary>

```text
A small Korean cinema at golden hour with a blank marquee, a hopeful producer in a wrinkled suit standing in front of it holding a giant film reel like a steering wheel, crew members peeking from behind, pigeons on the marquee. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

</details>

`assets/raw/og.png` 은 cover 이미지를 1200x630으로 잘라 써도 됩니다.

## 2. 단계 기본 표지 (가로 16:9) — 카드 개별 이미지가 없을 때 대신 보입니다

**`assets/raw/stages/planning.png`** ✅ 이미 있음 (다시 뽑을 때만 아래 사용)

<details><summary>프롬프트</summary>

```text
A tiny Seoul production office buried in script pages, a producer with huge eye bags happily taping a 'Version 4' page to a wall already covered with crossed-out plans, cat sleeping on the printer. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

</details>

**`assets/raw/stages/funding.png`** ✅ 이미 있음 (다시 뽑을 때만 아래 사용)

<details><summary>프롬프트</summary>

```text
A shiny corporate meeting room, three investors in suits leaning back with identical skeptical faces, the producer presenting a glowing pie chart that is almost entirely one bright slice with a sliver missing. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

</details>

**`assets/raw/stages/casting.png`** ✅ 이미 있음 (다시 뽑을 때만 아래 사용)

<details><summary>프롬프트</summary>

```text
A bright audition room, a long line of hopeful actors in wildly different costumes (knight, nurse, zombie) stretching out the door, one bored casting director with a coffee. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

</details>

**`assets/raw/stages/shooting.png`** ✅ 이미 있음 (다시 뽑을 때만 아래 사용)

<details><summary>프롬프트</summary>

```text
A chaotic but cheerful outdoor film set in the rain, crew holding umbrellas over a camera, the director shouting through a megaphone while standing in a puddle, clapperboard mid-air. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

</details>

**`assets/raw/stages/post.png`** ✅ 이미 있음 (다시 뽑을 때만 아래 사용)

<details><summary>프롬프트</summary>

```text
A cozy editing room at 3am, an editor with twelve coffee cups stacked into a tower, the director asleep on the couch hugging a hard drive, timeline glowing on the monitor. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

</details>

**`assets/raw/stages/marketing.png`** ✅ 이미 있음 (다시 뽑을 때만 아래 사용)

<details><summary>프롬프트</summary>

```text
A busy subway passage, a marketing team frantically pasting a colorful film poster while commuters stream past glued to their phones, one kid pointing at the poster. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

</details>

**`assets/raw/stages/release.png`** ✅ 이미 있음 (다시 뽑을 때만 아래 사용)

<details><summary>프롬프트</summary>

```text
A multiplex lobby on opening morning, the whole crew peeking nervously from behind a standee at the ticket counter where exactly one customer is buying a ticket. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

</details>

## 3. 엔딩 결과 카드 이미지 (가로 4:3)

**`assets/raw/endings/bankrupt.png`** ✅ 이미 있음 (다시 뽑을 때만 아래 사용)

<details><summary>프롬프트</summary>

```text
A producer sitting on a stack of script boxes in an emptied office eating cup noodles, a blank sign taped to the glass door, pigeons walking in through the open door, afternoon sunshine. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

</details>

**`assets/raw/endings/boycott.png`** ✅ 이미 있음 (다시 뽑을 때만 아래 사용)

<details><summary>프롬프트</summary>

```text
An empty film set at sunrise, equipment abandoned mid-setup, a single director's chair with a lone director sitting in it holding a megaphone, a tumbleweed of gaffer tape rolling by. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

</details>

**`assets/raw/endings/delayed.png`** ✅ 이미 있음 (다시 뽑을 때만 아래 사용)

<details><summary>프롬프트</summary>

```text
A dusty external hard drive wrapped in masking tape sitting on a shelf like a shrine, wall calendar with years flipping away, a spider web connecting the drive to a trophy. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

</details>

**`assets/raw/endings/ott.png`** ✅ 이미 있음 (다시 뽑을 때만 아래 사용)

<details><summary>프롬프트</summary>

```text
A cozy living room at night, a family asleep on the couch in front of a TV showing a streaming menu, the film's thumbnail tiny in the corner, cat watching instead. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

</details>

**`assets/raw/endings/cult.png`** ✅ 이미 있음 (다시 뽑을 때만 아래 사용)

<details><summary>프롬프트</summary>

```text
A tiny old single-screen theater, one elderly viewer in the middle row clapping alone with popcorn flying, a torn ticket stub in the foreground, dusty projector beam sparkling. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

</details>

**`assets/raw/endings/flop.png`** ✅ 이미 있음 (다시 뽑을 때만 아래 사용)

<details><summary>프롬프트</summary>

```text
A cinema lobby where a staff member on a ladder peels down the film's poster while a giant blockbuster poster rolls down next to it, the producer watching with a forced smile. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

</details>

**`assets/raw/endings/even.png`** ✅ 이미 있음 (다시 뽑을 때만 아래 사용)

<details><summary>프롬프트</summary>

```text
A modest wrap party in a Korean BBQ restaurant, tired crew members clinking soju glasses with relieved smiles, grill smoke, a hand-drawn 'we survived' banner. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

</details>

**`assets/raw/endings/hit.png`** ✅ 이미 있음 (다시 뽑을 때만 아래 사용)

<details><summary>프롬프트</summary>

```text
A sold-out cinema lobby packed with excited people, a snaking queue past standees, confetti falling, the producer being lifted on the crew's shoulders. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

</details>

**`assets/raw/endings/mega.png`** ✅ 이미 있음 (다시 뽑을 때만 아래 사용)

<details><summary>프롬프트</summary>

```text
A stage greeting in a packed auditorium, hundreds of phone flashes like stars, a giant celebratory banner seen from behind the stage, the director bowing so deep the cap falls off. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

</details>

## 4. 카드 개별 표지 (가로 16:9) — 아직 없는 카드 123장 / 있음 105장

자주 나오는 카드(등장 조건 없음)부터 적었습니다.

### 4-1. 자주 나오는 카드 (111장)

#### 발굴된 과거 인터뷰 (cast-old-interview-dig)

**`assets/raw/cards/cast-old-interview-dig.png`**

```text
A director replaying an old interview clip on a laptop for the third time, the young actor in the clip shrugging with a script tossed over the shoulder, the current actor hiding behind a plant. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 팬덤의 캐스팅 반대 청원 (cast-fandom-petition)

**`assets/raw/cards/cast-fandom-petition.png`**

```text
A crowd of webtoon fans holding blank protest signs and pointing at an actor's hair, the actor touching their hair in confusion, the director holding up a color swatch helplessly. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 원로 배우의 우정 출연 (cast-veteran-cameo-offer)

**`assets/raw/cards/cast-veteran-cameo-offer.png`**

```text
A dignified elderly actor arriving at a tiny set with only a lunchbox, the whole crew standing at attention with jaws dropped, the director bowing deeply. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 오디션의 재발견 (cast-hidden-gem-audition)

**`assets/raw/cards/cast-hidden-gem-audition.png`**

```text
An audition room at closing time, an applicant pulled back in from the hallway with a crooked number tag, three judges leaning forward in unison with sparkles in their eyes, a misplaced folder on the floor. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 의상 협찬 제안 (cast-wardrobe-sponsor-offer)

**`assets/raw/cards/cast-wardrobe-sponsor-offer.png`**

```text
A fashion brand rep wheeling in a rack of flashy clothes all bearing the same oversized abstract emblem, the costume designer fainting, the lead actor dressed head to toe in logos. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 무료 연기 코치 제안 (cast-free-acting-coach)

**`assets/raw/cards/cast-free-acting-coach.png`**

```text
An acting academy headmaster in a cape dramatically coaching a lead actor on set, the director watching from the monitor with crossed arms, the actor performing two different expressions at once. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 팬클럽의 단체 선결제 (cast-fanclub-prepay)

**`assets/raw/cards/cast-fanclub-prepay.png`**

```text
A fan club president in a headband handing a brick of cash to the producer with a sweet smile, behind her a wall of fans holding light sticks, a tiny note card pinned to the cash. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 소속사의 파격 제안 (cast-agency-free-lead)

**`assets/raw/cards/cast-agency-free-lead.png`**

```text
A big agency CEO on the phone being suspiciously polite with a halo and tiny devil horns, a famous actor gift-wrapped in a box with a giant bow on the producer's desk. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 투자사 이름이 틀렸다 (fund-pitch-deck-wrong-name)

**`assets/raw/cards/fund-pitch-deck-wrong-name.png`**

```text
A producer frozen in front of a projector screen three minutes before a pitch, pointing at a glowing typo-shaped blob on the first slide, investors filing into the room behind. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 손익분기 질문 (fund-breakeven-question)

**`assets/raw/cards/fund-breakeven-question.png`**

```text
A silent boardroom where an investor asks a question with a floating question mark, the whole production team sweating with empty thought bubbles, one person secretly googling under the table. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 새 담당자는 장르가 싫다 (fund-reviewer-hates-genre)

**`assets/raw/cards/fund-reviewer-hates-genre.png`**

```text
A new investment manager pushing a film reel away with a disgusted face while a ghost from the film sits politely in the corner of the meeting room looking offended. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 자동차 PPL의 눈물 (fund-car-ppl-crying-scene)

**`assets/raw/cards/fund-car-ppl-crying-scene.png`**

```text
A tearful breakup scene shot inside a gleaming brand-new sedan, the car's steering wheel emblem shining brighter than the actor's tears, a car company rep giving thumbs up through the windshield. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 선판매 대금 인하 요청 (fund-presale-price-cut)

**`assets/raw/cards/fund-presale-price-cut.png`**

```text
A distributor handing over a contract where only one number box is visibly shrunk with a tiny scissor cut, the producer holding yesterday's identical contract for comparison. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 지원금 영수증 증빙 (fund-subsidy-receipt-audit)

**`assets/raw/cards/fund-subsidy-receipt-audit.png`**

```text
A production team drowning in a mountain of crumpled receipts, one person holding a card statement upside down, a government official with a stamp waiting at the door with a kind but firm smile. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 공동제작사의 40% (fund-co-production-forty-percent)

**`assets/raw/cards/fund-co-production-forty-percent.png`**

```text
A foreign co-producer in a video call cutting a cake-shaped film reel into a huge slice for himself, the Korean producer left with a sliver, the director hugging the editing scissors protectively. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 후원자 단톡방 (fund-backers-group-chat)

**`assets/raw/cards/fund-backers-group-chat.png`**

```text
A giant phone screen showing a group chat exploding with hundreds of avatars voting with raised hands, the producer buried under notification bubbles, the director hiding the script behind his back. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 입금이 사흘 늦는다 (fund-deposit-delayed-again)

**`assets/raw/cards/fund-deposit-delayed-again.png`**

```text
A producer staring at a bank app on a phone showing an empty balance, three identical calendar pages torn off on the desk, the investment manager's speech bubble repeating the same shrug. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 완성보증보험 요구 (fund-completion-bond-demand)

**`assets/raw/cards/fund-completion-bond-demand.png`**

```text
An insurance agent reading the script and his glasses popping off, a premium figure on a calculator doubling with smoke, the producer holding a tiny umbrella labeled by a shield icon. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 투자사의 해피엔딩 (fund-investor-happy-ending)

**`assets/raw/cards/fund-investor-happy-ending.png`**

```text
An investor executive cheerfully suggesting a group hug ending while the script's dead protagonist, drawn as a ghost, floats behind him shaking his head, the director speechless. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 펀드 담당자가 사라졌다 (fund-fund-manager-unreachable)

**`assets/raw/cards/fund-fund-manager-unreachable.png`**

```text
A producer in an investment firm lobby surrounded by empty chairs and a secretary pointing vaguely out the window, a phone with a dead battery icon, a clock showing many hours passed. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 가위바위보 투자 (fund-investor-rock-paper-scissors)

**`assets/raw/cards/fund-investor-rock-paper-scissors.png`**

```text
A tipsy investor at a Korean bar table throwing rock with a dead-serious face, the producer hesitating with a trembling hand, a pile of cash on one side and half a pile on the other. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 영상위원회 제작지원 선정 (fund-film-commission-grant)

**`assets/raw/cards/fund-film-commission-grant.png`**

```text
A producer receiving a cheerful phone call while a tall tower of blank forms grows next to the desk, a glowing bag of money at the very top of the tower. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 대학 동기의 소액 투자 (fund-college-friend-investor)

**`assets/raw/cards/fund-college-friend-investor.png`**

```text
A college friend appearing at the office door after ten years with a small envelope and a huge grin, an old group photo on the wall, the producer squinting trying to remember the name. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 해외 마켓 피칭 초청 (fund-market-pitch-buyer)

**`assets/raw/cards/fund-market-pitch-buyer.png`**

```text
A producer and director pitching at a busy international film market booth, a crowd of buyers with name badges nodding politely, a plane ticket and hotel bill floating overhead like clouds. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 무료 법률 자문 (fund-free-legal-review)

**`assets/raw/cards/fund-free-legal-review.png`**

```text
A very friendly lawyer in a shiny suit handing back a contract with a bow on it, a second much thicker document peeking out from his briefcase, the producer relieved and unaware. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 무이자 브릿지론 (fund-zero-interest-bridge-loan)

**`assets/raw/cards/fund-zero-interest-bridge-loan.png`**

```text
A loan officer covering the guarantor line of a contract with one finger and smiling too wide, a zero percent sign floating above, a tiny fee monster hiding under the desk. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 공짜 VFX 패키지 (fund-free-vfx-package)

**`assets/raw/cards/fund-free-vfx-package.png`**

```text
A startup VFX team showing a three-second dazzling demo on a tablet, behind them a whiteboard with one lonely sticky note, the producer dazzled with stars in the eyes. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 예능 고정 멘트 요청 (mkt-variety-show-pressure)

**`assets/raw/cards/mkt-variety-show-pressure.png`**

```text
A film actor on a colorful variety show set being hit with a toy hammer in a game, a tiny film poster shoved into the corner of the screen, the producer watching from backstage checking a stopwatch. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 감독의 친절한 인터뷰 (mkt-director-spoiler-interview)

**`assets/raw/cards/mkt-director-spoiler-interview.png`**

```text
A director happily explaining the ending to a journalist with big hand gestures, the journalist's eyes wide, the publicist diving across the table to cover the director's mouth too late. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 스크린이 줄었다 (mkt-screen-count-cut)

**`assets/raw/cards/mkt-screen-count-cut.png`**

```text
A cinema lobby where a staff member replaces the film's tiny poster frame with a giant rival poster, a schedule board with the film squeezed into one corner slot. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 시사회 음향 사고 (mkt-premiere-sound-failure)

**`assets/raw/cards/mkt-premiere-sound-failure.png`**

```text
A VIP premiere where the on-screen actor's mouth is open while the sound engineer and the theater manager point at each other in the projection booth, the audience leaning sideways in confusion. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 평론가 시사 여부 (mkt-critic-preview-dilemma)

**`assets/raw/cards/mkt-critic-preview-dilemma.png`**

```text
A producer at a fork in the road: one path leads to a room full of critics sharpening pencils, the other to a locked door with reporters peeking through the keyhole. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 굿즈 5천 개 (mkt-goods-overstock)

**`assets/raw/cards/mkt-goods-overstock.png`**

```text
A warehouse stacked with five thousand acrylic keyrings all showing the smiling face of the protagonist, the producer holding one up next to a script page marked with a skull doodle. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 배우의 맛집 게시물 (mkt-actor-food-post)

**`assets/raw/cards/mkt-actor-food-post.png`**

```text
A lead actor happily eating a steaming bowl of soup in a small restaurant while a phone on the table explodes with hearts, the marketing team pressing their faces against the restaurant window. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 포스터 오타 3만 장 (mkt-poster-typo)

**`assets/raw/cards/mkt-poster-typo.png`**

```text
A cinema wall covered with posters, a director staring at his own misspelled name with a photo in hand, the marketing team sweating behind him holding a roll of tape. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 텅 빈 무대인사 (mkt-empty-stage-greeting)

**`assets/raw/cards/mkt-empty-stage-greeting.png`**

```text
Actors on a cinema stage smiling brightly at a half-empty auditorium, their eyes clearly not smiling, a single fan waving a light stick from the back row. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 개봉 주 광고 몰빵 (mkt-all-in-ad-week)

**`assets/raw/cards/mkt-all-in-ad-week.png`**

```text
A city street where every bus, subway wall and billboard shows the same film poster face, the marketing team cheering on the sidewalk, the producer holding an empty piggy bank. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 버스 광고 면 무상 제공 (mkt-free-bus-ads)

**`assets/raw/cards/mkt-free-bus-ads.png`**

```text
An outdoor advertising boss handing over keys to an empty bus-side billboard with a genuine warm smile, a bus wrapped with the film's art rolling past, the producer waiting for a catch that never comes. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 관객이 만든 짧은 영상 (mkt-viral-fan-edit)

**`assets/raw/cards/mkt-viral-fan-edit.png`**

```text
A teenager's fifteen-second fan edit of the film playing on phones all over a subway car, the view counter spinning, the editor of the film watching over a stranger's shoulder with pride and confusion. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 극장 추천작 선정 (mkt-theater-pick-banner)

**`assets/raw/cards/mkt-theater-pick-banner.png`**

```text
A cinema chain employee hanging a huge banner of the film in a bright lobby, moviegoers below buying popcorn and looking up, the producer pinching themselves. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 무료 리뷰 인플루언서 (mkt-influencer-free-review)

**`assets/raw/cards/mkt-influencer-free-review.png`**

```text
A popular influencer in a ring light recording a review with an already-finished video thumbnail on the laptop, a tiny ad-disclosure sticker being peeled off and tossed in the bin. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 무료 AI 홍보 솔루션 (mkt-free-ai-promo)

**`assets/raw/cards/mkt-free-ai-promo.png`**

```text
A startup founder presenting an AI tool spitting out hundreds of posters, one poster showing a hand with seven fingers, a seventeen-page terms document curling across the floor. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 장르 회의 3시간째 (plan-genre-roulette)

**`assets/raw/cards/plan-genre-roulette.png`**

```text
A three-hour meeting room with exhausted writers slumped over, three genre posters taped together into one chaotic collage, the investment team leader proudly announcing the merger. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 감독의 엔딩 고집 (plan-ending-fight)

**`assets/raw/cards/plan-ending-fight.png`**

```text
A director holding a tombstone prop and an investor holding a bouquet of balloons, both pointing at the same empty audience seats, the producer between them with two scripts. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 제목이 이미 상표 (plan-title-trademark)

**`assets/raw/cards/plan-title-trademark.png`**

```text
A producer googling the working title and finding a fried chicken franchise mascot, a calm lawyer sliding an invoice across the desk, the chicken mascot waving from a billboard outside. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 시나리오 유출 (plan-script-leak)

**`assets/raw/cards/plan-script-leak.png`**

```text
A forum post showing a leaked script page with the twist highlighted, dozens of comment bubbles, the writer peeking at the screen from behind a pillar while clutching the original. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 작가가 잠수 탔다 (plan-writer-vanishes)

**`assets/raw/cards/plan-writer-vanishes.png`**

```text
A producer calling a dead phone while looking at the writer's social media post of a tropical beach with a cocktail, the writer in the photo giving a thumbs up labeled with a lightbulb. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 실화 당사자의 출연 요구 (plan-real-person-casting)

**`assets/raw/cards/plan-real-person-casting.png`**

```text
A middle-aged real-life person in a suit practicing dramatic poses in front of a mirror in the production office, the actual actor cast for the role watching nervously from the sofa. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### "AI 요소 넣어라" (plan-ai-pitch-demand)

**`assets/raw/cards/plan-ai-pitch-demand.png`**

```text
A pitch meeting for a Joseon-era historical drama where an investment director points at a cardboard robot standing among actors in traditional costumes, the historical consultant fainting. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 시놉시스가 기사로 (plan-synopsis-spoiled)

**`assets/raw/cards/plan-synopsis-spoiled.png`**

```text
A producer reading a sensational news article on a tablet while the writer holds a script whose last pages are blank, both exchanging a look of panic. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 판권 경매 막판 (plan-rights-auction)

**`assets/raw/cards/plan-rights-auction.png`**

```text
A tense auction room for a novel's film rights, a rival producer confidently raising a paddle, our producer with a trembling hand raising a paddle and an empty wallet. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 지원금 서류 반려 (plan-subsidy-paperwork)

**`assets/raw/cards/plan-subsidy-paperwork.png`**

```text
A producer at midnight surrounded by rejected forms with red circles around a single stamp position, a clock ticking toward the deadline, a sleeping assistant with a stamp pad on the face. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 콘티 3천 컷 (plan-storyboard-3000)

**`assets/raw/cards/plan-storyboard-3000.png`**

```text
A director proudly presenting a storyboard that stacks taller than himself, the producer flipping through pages with a face growing paler, one drawing of a red plastic bag circled. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 대본 리딩에서 웃음 (plan-table-read-laugh)

**`assets/raw/cards/plan-table-read-laugh.png`**

```text
A table read where actors perform a tragic climax while two crew members at the back cover their mouths giggling, the director's smile frozen like a mask. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 경쟁사의 스카우트 (plan-rival-poach-writer)

**`assets/raw/cards/plan-rival-poach-writer.png`**

```text
A co-writer closing a laptop slowly while a rival company's phone call glows on the desk, the producer and director peeking from behind the door with worried faces. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 은퇴한 거장의 윤문 (plan-retired-writer-gift)

**`assets/raw/cards/plan-retired-writer-gift.png`**

```text
An elderly legendary screenwriter in a cardigan reading a draft at the office table while the producer nervously hand-drips coffee with a shaky kettle, red pen marks glowing on the pages. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 기획개발 우수상 (plan-dev-prize)

**`assets/raw/cards/plan-dev-prize.png`**

```text
A director frozen at a podium holding a trophy with mouth open and no words, a calendar on the wall showing the same date circled for shooting prep, the producer clapping too hard. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 공짜로 빌려주는 저택 (plan-free-location-owner)

**`assets/raw/cards/plan-free-location-owner.png`**

```text
A kindly old man opening the gate of a beautiful traditional Korean mansion garden for a film crew, offering snacks on a tray, the producer holding a suspiciously short one-page contract. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 플랫폼의 선구매 제안 (plan-preorder-platform-offer)

**`assets/raw/cards/plan-preorder-platform-offer.png`**

```text
A streaming platform executive handing over a giant check with one hand while the other hand quietly holds editing scissors behind his back, the director eyeing the scissors. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 유명 작가의 공동 각색 (plan-free-cowriter-fame)

**`assets/raw/cards/plan-free-cowriter-fame.png`**

```text
A famous screenwriter arriving with sunglasses and an entourage, his name already bigger than the title on a mock poster, the original writer shrinking into a tiny corner of the frame. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 자막 오타 발견 (post-subtitle-typo-premiere)

**`assets/raw/cards/post-subtitle-typo-premiere.png`**

```text
A junior staffer frozen in front of a subtitle monitor two hours before the premiere, a single wrong character glowing red in a love confession scene, the whole team rushing in with coffee. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### CG 업체의 잔금 독촉 (post-vfx-final-payment)

**`assets/raw/cards/post-vfx-final-payment.png`**

```text
A VFX company holding a glowing hard drive hostage behind a glass door, a cheerful goodbye note from the departed manager taped on the glass, the producer pressing a bank app. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 감독의 분량 사수 (post-final-cut-tug)

**`assets/raw/cards/post-final-cut-tug.png`**

```text
A director barricaded inside an editing room with a film-strip tape across the door, an investor outside holding a sign with scissors drawn on it, the editor passing snacks through a gap. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 삽입곡 저작권 확인 불가 (post-ost-copyright-missing)

**`assets/raw/cards/post-ost-copyright-missing.png`**

```text
A director shrugging about a friend's song while a map on the wall shows a pin on a very remote city, the music supervisor holding a phone with no signal bars. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 색보정실 정전 (post-grading-power-outage)

**`assets/raw/cards/post-grading-power-outage.png`**

```text
A color grading suite gone dark with only emergency lights, the colorist staring out the window serenely, the producer frantically pressing a save key on a dead keyboard. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 엔딩이 두 개다 (post-two-endings-screening)

**`assets/raw/cards/post-two-endings-screening.png`**

```text
A test screening survey result drawn as a perfectly split pie, six people on each side of the aisle in a tiny theater, the director and investor each holding a different ending reel. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 렌더팜 추가 청구서 (post-render-overtime-bill)

**`assets/raw/cards/post-render-overtime-bill.png`**

```text
A render farm server room glowing red hot with a tiny on-screen explosion, an electricity meter spinning wildly, the producer fanning a smoking invoice. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 크레딧에서 사라진 이름 (post-credits-name-missing)

**`assets/raw/cards/post-credits-name-missing.png`**

```text
A rolling credits screen with one conspicuous gap, the lighting chief standing silently in the editing room doorway with folded arms, the junior lighting assistant unaware and smiling in the hallway. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 믹싱실 옆 공사 (post-mixing-studio-construction)

**`assets/raw/cards/post-mixing-studio-construction.png`**

```text
A sound mixing studio where the sound director pulls off his headphones as a giant drill from the next building pokes through the wall, the mixing console lights flickering. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 후시 배우의 해외 일정 (post-adr-actor-abroad)

**`assets/raw/cards/post-adr-actor-abroad.png`**

```text
A supporting actor waving from an airplane window while the sound booth below sits empty with a microphone, a stranger with a vaguely similar face being pushed toward the booth. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 엔딩 재촬영 올인 (post-reshoot-ending-allin)

**`assets/raw/cards/post-reshoot-ending-allin.png`**

```text
A half-dismantled set with a director pushing all his poker chips forward, half the crew already walking away with gear toward another set, dark rain clouds gathering overhead. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 무명 작곡가의 습작 (post-free-score-composer)

**`assets/raw/cards/post-free-score-composer.png`**

```text
A humble neighborhood composer standing shyly in the doorway with headphones and a small USB stick, the editing room team listening with tears welling up as the scene on screen finally feels right. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 스튜디오 공실 (post-studio-vacancy-discount)

**`assets/raw/cards/post-studio-vacancy-discount.png`**

```text
A luxurious post-production suite with a half-price tag swinging from the door, the producer peeking in with disbelief, a mystery film crew sneaking out the back exit. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 원로 편집감독의 검수 (post-veteran-editor-checkup)

**`assets/raw/cards/post-veteran-editor-checkup.png`**

```text
A legendary elderly editor with a single cup of coffee pointing at thirty-three spots on a timeline with a pencil, the director sweating and holding three of the notes tightly to his chest. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 무료 자막 번역 제안 (post-free-translation-service)

**`assets/raw/cards/post-free-translation-service.png`**

```text
A smiling translation agent handing over subtitles while a cartoon robot behind him mistranslates a bowl of soup into a flag, foreign buyers in a screening room laughing at the wrong scene. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 공짜 예고편 제작 (post-free-trailer-edit)

**`assets/raw/cards/post-free-trailer-edit.png`**

```text
A startup video team presenting a dazzling trailer full of car chases and fireworks while the actual film reel, showing a quiet office scene, sits confused on the table. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 배급사의 개봉일 앞당김 (post-early-release-offer)

**`assets/raw/cards/post-early-release-offer.png`**

```text
A distributor pointing at a golden empty slot on a release calendar with a huge smile, the post-production team behind holding a progress bar that is barely over half full. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 월요일 아침, 상영관 삭감 (rel-monday-screen-cut)

**`assets/raw/cards/rel-monday-screen-cut.png`**

```text
A producer on a Monday morning phone call with a very polite cinema manager whose politeness is drawn as sparkles, a screening schedule behind losing slots like falling leaves. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 결말을 방송한 스트리머 (rel-spoiler-streamer)

**`assets/raw/cards/rel-spoiler-streamer.png`**

```text
A streamer reading the film's ending aloud to a chat window full of shocked faces, the producer watching the stream on a phone and sliding down a wall, thirty thousand viewer icons. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### GV 중 꺼지지 않은 마이크 (rel-gv-mic-incident)

**`assets/raw/cards/rel-gv-mic-incident.png`**

```text
A director and an actor whispering sharply backstage after a Q&A, a microphone on the stage still glowing red and the entire audience leaning toward it with cupped ears. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 리뷰 조작 의혹 (rel-review-bot-suspicion)

**`assets/raw/cards/rel-review-bot-suspicion.png`**

```text
Two hundred identical five-star review cards raining down on a cinema lobby, the producer and marketing team looking at each other with raised hands of innocence, an investor employee whistling nearby. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 2주차 생존 회의 (rel-second-week-survival)

**`assets/raw/cards/rel-second-week-survival.png`**

```text
A tiny production team gathered around a cinema's weekly schedule board like a hospital chart, a heart-monitor line drawn above the film's row barely blipping, popcorn as snacks. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 관객 이벤트 굿즈 품절 (rel-goods-sold-out)

**`assets/raw/cards/rel-goods-sold-out.png`**

```text
A line of fans wrapping twice around a cinema building clutching photo card sleeves, an empty goods box at the front, the auditorium behind the glass nearly empty. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 무대인사 지각 (rel-stage-greeting-late)

**`assets/raw/cards/rel-stage-greeting-late.png`**

```text
Supporting actors on a cinema stage bowing to a waiting audience, the lead actor's silhouette visible on a giant screen at a different cinema across the street, a manager pointing at traffic. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 자막 밀린 상영 (rel-projection-subtitle-error)

**`assets/raw/cards/rel-projection-subtitle-error.png`**

```text
A weekend screening where the actress on screen cries while the audience bursts out laughing, a subtitle bar dangling several seconds behind like a loose tail. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 평론가 별점 한 개 (rel-critic-one-star)

**`assets/raw/cards/rel-critic-one-star.png`**

```text
A famous critic holding up a single star like a tiny lantern in front of a cinema, the runtime on the poster very short, the production team measuring the poster with a tape. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 폭우 주의보 (rel-heavy-rain-weekend)

**`assets/raw/cards/rel-heavy-rain-weekend.png`**

```text
A torrential downpour outside a cinema, an usher holding a basket of umbrellas at the door, a family across the street cozy on their couch watching the rain through the window. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 불법 유출본 등장 (rel-piracy-leak)

**`assets/raw/cards/rel-piracy-leak.png`**

```text
A film playing crisply on a laptop in a dark room with a pirate flag sticker on the lid, a lawyer bill stacking up next to it, the producer looking at the view counter rising. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 감독의 인터뷰 한마디 (rel-director-interview-gaffe)

**`assets/raw/cards/rel-director-interview-gaffe.png`**

```text
A director mid-sentence in an interview with a speech bubble that explodes into a storm of angry phone notifications across the city skyline, the publicist fainting. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 시사회 빈자리 (rel-empty-preview-seats)

**`assets/raw/cards/rel-empty-preview-seats.png`**

```text
A grand VIP premiere hall with two hundred reserved seat covers and only thirty people, one guest raising a hand to ask about parking, actors on stage smiling bravely. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 역주행 올인 제안 (rel-all-in-late-screens)

**`assets/raw/cards/rel-all-in-late-screens.png`**

```text
A producer dumping an entire piggy bank onto a cinema booking desk in week three, the distribution team leader shrugging with a 'maybe' expression, a tiny upward arrow drawn on a napkin. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 팝콘 브랜드 무료 콜라보 (rel-popcorn-collab)

**`assets/raw/cards/rel-popcorn-collab.png`**

```text
A snack company rep presenting colorful popcorn buckets shaped like the film's characters, the second page of a contract unfolding into a very long scroll behind him, a cinema manager frowning in the distance. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 예능 프로그램 출연 제안 (rel-variety-show-offer)

**`assets/raw/cards/rel-variety-show-offer.png`**

```text
A variety show writer grinning far too wide while holding an invitation card, the film's cast peeking at the TV studio door where a giant pair of editing scissors hangs over the entrance. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 한 장면이 밈이 됐다 (rel-meme-scene-viral)

**`assets/raw/cards/rel-meme-scene-viral.png`**

```text
A supporting actor failing to open a door in a three-second clip shown on countless phone screens on a subway, the same actor on the street being recognized and asked to open a door. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 통신사 할인 제휴 (rel-telecom-discount-tie)

**`assets/raw/cards/rel-telecom-discount-tie.png`**

```text
A telecom company marketing team presenting a stack of discount coupons featuring the film, a tiny logo line sliding into the end credits on a monitor, moviegoers lining up with their phones. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 밤샘 사흘째 (shoot-third-night-shoot)

**`assets/raw/cards/shoot-third-night-shoot.png`**

```text
A night film set at 4am where a junior lighting assistant sleeps standing up against a light stand, the director with bloodshot eyes raising one finger for one more take, the moon yawning. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 밥차가 길을 잃었다 (shoot-catering-van-lost)

**`assets/raw/cards/shoot-catering-van-lost.png`**

```text
A catering van stuck on a mountain road following a GPS arrow pointing uphill, eighty hungry crew members on the set below staring at the mountain, the director calling for action. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 발전차가 멈췄다 (shoot-generator-blackout)

**`assets/raw/cards/shoot-generator-blackout.png`**

```text
A film set where the generator truck lets out a tiny puff of smoke and all lights die, a mechanic tapping it with a wrench, the sun sliding down behind the hills on a timer. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 옆집 개의 출연료 (shoot-neighbor-dog-barking)

**`assets/raw/cards/shoot-neighbor-dog-barking.png`**

```text
A sound recordist pulling off headphones in despair while a small dog next door barks proudly at every take over the fence, the dog's owner shrugging with a leash. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 단톡방 전쟁 (shoot-crew-group-chat-war)

**`assets/raw/cards/shoot-crew-group-chat-war.png`**

```text
A film set where seventy crew members stare at their phones at the same moment, the assistant director frozen with a phone and a face of pure horror, a speech bubble with a delete button crossed out. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 3회차만 더 (shoot-extra-shooting-days)

**`assets/raw/cards/shoot-extra-shooting-days.png`**

```text
A director holding up three fingers on the final shooting day, the production manager opening and closing a calculator like a clam, the schedule board with no empty days left. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 렌즈가 떨어졌다 (shoot-lens-drop)

**`assets/raw/cards/shoot-lens-drop.png`**

```text
A camera assistant watching a lens fall in slow motion with a tiny soft sound effect, the entire crew gasping in a circle, a price tag floating above the lens with many zeros drawn as circles. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 체류 기간 D-2 (shoot-foreign-actor-visa-expiry)

**`assets/raw/cards/shoot-foreign-actor-visa-expiry.png`**

```text
A foreign supporting actor holding a passport with an hourglass on it, an administrative agent sprinting across the set with a briefcase, the schedule being filmed backwards with arrows. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 안전관리자의 연필 (shoot-safety-officer-inspection)

**`assets/raw/cards/shoot-safety-officer-inspection.png`**

```text
A safety officer with a pencil and a long checklist ticking red marks on a chaotic film set, a dangling light, a loose cable, a ladder balanced on a chair, the producer sweating. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 연막이 너무 잘 나왔다 (shoot-smoke-machine-alarm)

**`assets/raw/cards/shoot-smoke-machine-alarm.png`**

```text
A hotel hallway filling with movie fog as fire alarm lights flash, hotel guests in bathrobes evacuating past the film crew, the smoke machine operator giving a sheepish thumbs up. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 말이 달리지 않는다 (shoot-horse-wont-gallop)

**`assets/raw/cards/shoot-horse-wont-gallop.png`**

```text
A chase scene set where a horse calmly eats grass at the starting line while the whole crew waits, the horse owner stroking its mane and speaking about its feelings, the director lying on the ground. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 지자체 로케 지원금 (shoot-local-subsidy-offer)

**`assets/raw/cards/shoot-local-subsidy-offer.png`**

```text
A county official arriving at a rural film set with a two-page form and a very thick tourism brochure, pointing at the mountain view and then at the camera with a hopeful smile. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 단역의 한 컷 (shoot-veteran-bit-actor)

**`assets/raw/cards/shoot-veteran-bit-actor.png`**

```text
A middle-aged bit-part actor delivering a single line that freezes the entire film set, the director turning off the monitor and clapping, a tiny daily pay envelope on the table. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 국밥집 사장님의 호의 (shoot-diner-owner-sponsor)

**`assets/raw/cards/shoot-diner-owner-sponsor.png`**

```text
A warm soup restaurant owner serving free meals to a whole film crew, her enormous restaurant sign looming in the background of every camera angle, the cinematographer trying to frame around it. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 장비 렌탈 무료 시연 (shoot-free-camera-rental)

**`assets/raw/cards/shoot-free-camera-rental.png`**

```text
A rental company rep presenting a shiny new cinema camera on a velvet cushion, the third page of the contract with microscopic fine print held under a magnifying glass by the producer. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 조건 없는 현장 후원 (shoot-no-strings-sponsor)

**`assets/raw/cards/shoot-no-strings-sponsor.png`**

```text
A food company secretary waving goodbye after dropping off a bag of money on the set, in the next shot the protagonist eating instant noodles in every scene including a funeral. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

### 4-2. 조건부 카드 (12장)

#### 엔젤의 시나리오 의견 (fund-angel-investor-opinion)

**`assets/raw/cards/fund-angel-investor-opinion.png`**

```text
An angel investor with little wings reading a script and pointing at a skyscraper office through the window, the producer nodding with a frozen smile while the writer silently screams. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 리뷰 알바 의혹 (mkt-review-brigade)

**`assets/raw/cards/mkt-review-brigade.png`**

```text
A phone screen full of identical five-star reviews with the same avatar silhouettes, a magnifying glass revealing they are all the same sentence, the producer sweating. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 예고편 환불 소동 (mkt-trailer-backlash)

**`assets/raw/cards/mkt-trailer-backlash.png`**

```text
A line of angry viewers at a cinema refund counter holding tickets, a trailer screen behind showing a giant explosion while the movie poster next to it shows only a quiet smoky field. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 개봉 주 열애설 (mkt-scandal-opening-week)

**`assets/raw/cards/mkt-scandal-opening-week.png`**

```text
A lead actor surrounded by camera flashes outside a cinema on opening day, the film poster behind him being ignored by all the reporters, the producer hiding behind the standee. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 극장 상영 기간 단축 (mkt-ott-window-squeeze)

**`assets/raw/cards/mkt-ott-window-squeeze.png`**

```text
A tug of war over a film reel between a streaming platform executive in a hoodie and a cinema manager in a uniform, the producer stretched in the middle like a rubber band. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 웹툰 팬들의 청원 (plan-webtoon-fans-petition)

**`assets/raw/cards/plan-webtoon-fans-petition.png`**

```text
A crowd of webtoon fans holding up a height chart and a silver wig toward a confused lead actor, the director holding the webtoon and the actor side by side with a measuring tape. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 등급 재심의 접수 (post-rating-reappeal-deadline)

**`assets/raw/cards/post-rating-reappeal-deadline.png`**

```text
A rating board clerk handing back a film reel with three scenes flagged by red tabs, the producer looking at a calendar with two days left, the audience silhouette behind cut in half. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 주연 배우의 분량 요청 (post-star-screentime-demand)

**`assets/raw/cards/post-star-screentime-demand.png`**

```text
A star's manager measuring close-up shots on a monitor with a ruler and a stopwatch, the editor sighing, the supporting actor's face on the screen shrinking frame by frame. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 영화제 접수 D-3 (post-festival-deadline-d3)

**`assets/raw/cards/post-festival-deadline-d3.png`**

```text
An editor racing a calendar with three days circled, a festival submission portal glowing on one screen and a blank green-screen shot on the other, the director pressing refresh. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 팬덤의 단체 대관 (rel-fan-group-screening)

**`assets/raw/cards/rel-fan-group-screening.png`**

```text
Three cinema auditoriums packed with a fan club waving matching light sticks, the fan club president with a headset directing like a general, the producer watching from the back with awe. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 붕대 풀고 복귀 (shoot-actor-comeback-shoot)

**`assets/raw/cards/shoot-actor-comeback-shoot.png`**

```text
An actor unwinding a bandage with a heroic face while a doctor and an insurance agent chase after him across the set, the stunt coordinator hiding a crash mat behind his back. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 하도급 대금 독촉 (shoot-subcontractor-demand)

**`assets/raw/cards/shoot-subcontractor-demand.png`**

```text
A set construction company boss standing at the set entrance holding a padlock key and a bill, the crew behind the locked door peeking through gaps, the producer offering a handshake and a tiny envelope. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

### 4-3. 이미 이미지가 있는 카드 (105장)

다시 뽑고 싶을 때만: plan-11(폐업 제작사의 대본 창고), plan-12(무료 자문 교수), fund-12(세무사의 전화), fund-13(조건 없는 투자), cast-12(오디션 마지막 번호), cast-13(톱배우의 출연료 반값 제안), shoot-15(예보에 없던 노을), shoot-16(무료 세트 제공), post-12(편집기사의 야근 선물), post-13(AI 더빙 솔루션), mkt-12(거장의 SNS 한 줄), mkt-13(성과 후 결제 바이럴), rel-12(경쟁 대작의 상영 중단), rel-13(극장 체인의 특별 상영 제안), cast-audition-video-leak(유출된 오디션 영상), cast-agency-bundle-deal(소속사의 패키지 영업), cast-star-rider-list(매니저가 보낸 요청사항), cast-child-actor-hours(아역의 하루는 네 시간), cast-chemistry-read-fail(케미 리딩의 침묵), cast-upfront-fee-demand(출연료 100% 선지급), cast-cameo-screentime(특별출연의 분량 협상), cast-ex-couple-casting(전 연인 캐스팅 사고), cast-casting-misreport(캐스팅 오보 기사), cast-double-booking-star(배우의 이중 스케줄), cast-unknown-lead-allin(감독의 무명 주연 올인), cast-star-reprice(서명 직전 재협상), plan-01(시나리오 4고, 더 나빠졌다), plan-02(원작자 최종 승인 조항), plan-03(제목 회의에 온 임원 조카), plan-04(같은 소재 영화가 먼저 크랭크인), plan-05(지역 영상위 지원금 공모), plan-06(피칭 중 조는 심사위원), plan-07(선배의 자문료), plan-08(러닝타임 160분), plan-09(실화의 유족에게서 온 전화), plan-10(조감독 후보 두 명), fund-01(담당자가 이직했다), fund-02(투자 조건: 신인 배우 끼워 넣기), fund-03(코인 부자의 전액 투자), fund-04(생수 PPL의 야망), fund-05(해외 선판매 제안), fund-06(투자심사 D-1, 감독의 반란), fund-07(크라우드펀딩 리워드), fund-08(이름값 30%), fund-09(코인이 폭락했다), fund-10(시장님의 조건), fund-11(메인 투자 전면 철회), cast-01(톱배우의 조건), cast-02(확정 직전의 폭로글), cast-03(감독의 페르소나), cast-04(아이돌 캐스팅 제안), cast-05(출연료 대신 지분), cast-06(오디션장의 투자사 대표 딸), cast-07(아역 배우 어머니), cast-08(선판매 조건 미이행 통보), cast-09(대역 없이 직접 한다), cast-10(불매 해시태그), cast-11(캐스팅 조건은 감독 교체), shoot-01(장마가 일주일 당겨졌다), shoot-02(확성기 든 주민들), shoot-03(주연 배우 발목 부상), shoot-04(감독과 촬영감독의 조명 전쟁), shoot-05(드론 추락), shoot-06(엑스트라 200명 중 50명), shoot-07(현장 사진 유출), shoot-08(스태프 급여일), shoot-09(아이돌의 월드투어), shoot-10(해외 로케 비자 거절), shoot-11(47번째 '한 컷 더'), shoot-12(영상위 감사), shoot-13(와이어 15미터), shoot-14(유튜버의 현장 방문 요청), post-01(1차 편집본 2시간 48분), post-02(CG 업체 폐업), post-03(전곡 오케스트라), post-04(청소년 관람불가), post-05(블라인드 시사 설문), post-06(상영금지 가처분), post-07(이 영화는 색깔이 없다), post-08(제작자 컷 발각), post-09(해외 영화제 초청 가능성), post-10(후시녹음 날의 감기), post-11(파일 인질극), mkt-01(개봉일이 겹쳤다), mkt-02(예고편 A안과 B안), mkt-03(단체 관람 영업), mkt-04(예매율 관리 패키지), mkt-05(라디오 생방송 사고), mkt-06(별 한 개 반), mkt-07(무대인사 거부), mkt-08(포스터 표절 의혹), mkt-09(OTT 전량 구매 제안), mkt-10(주제곡 춤 챌린지), mkt-11(청불은 TV 광고가 안 된다), rel-01(상영관이 약속의 절반), rel-02(개봉 당일 열애설), rel-03(예매율 조작 기사), rel-04(개봉 전날, 감독이 사라졌다), rel-05(개봉 주말, 국가대표 결승전), rel-06(단체 관람 버스가 다른 극장으로), rel-07(GV에서 '결말을 모르겠다'), rel-08(조조 관객 한 명의 2,000자 리뷰), rel-09(입소문이 터질 조짐), rel-10(OTT 공개일 서버 장애), rel-11(경쟁작의 호재)

