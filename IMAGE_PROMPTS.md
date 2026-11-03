# 이미지 프롬프트 (Nano Banana용)

각 코드 블록을 통째로 복사해 붙여 넣으면 됩니다(공통 스타일 문장이 이미 끝에 붙어 있음).
생성한 PNG는 블록 위의 **저장 파일명**으로 저장하고 `node tools/import-images.mjs` 를 실행하면
우측 하단 워터마크를 잘라내고 webp로 변환해 `img/` 에 넣습니다. 이미지가 없는 자리는 이모지로 대체되므로 있는 것부터 넣어도 됩니다.

✅ 표시는 이미 img/ 에 들어간 이미지입니다. 새로 뽑을 건 표시 없는 블록만 보면 됩니다.

## 1. 타이틀 / OG (가로 16:9)

**`assets/raw/cover.png`** ✅ 이미 있음 (다시 뽑을 때만 아래 사용)

<details><summary>프롬프트</summary>

```text
A small Korean cinema at golden hour with a blank marquee, a hopeful producer in a wrinkled suit standing in front of it holding a giant film reel like a steering wheel, crew members peeking from behind, pigeons on the marquee. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight even in disasters, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

</details>

`assets/raw/og.png` 은 cover 이미지를 1200x630으로 잘라 써도 됩니다.

## 2. 단계 기본 표지 (가로 16:9) — 카드 개별 이미지가 없을 때 대신 보입니다

**`assets/raw/stages/planning.png`** ✅ 이미 있음 (다시 뽑을 때만 아래 사용)

<details><summary>프롬프트</summary>

```text
A tiny Seoul production office buried in script pages, a producer with huge eye bags happily taping a 'Version 4' page to a wall already covered with crossed-out plans, cat sleeping on the printer. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight even in disasters, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

</details>

**`assets/raw/stages/funding.png`** ✅ 이미 있음 (다시 뽑을 때만 아래 사용)

<details><summary>프롬프트</summary>

```text
A shiny corporate meeting room, three investors in suits leaning back with identical skeptical faces, the producer presenting a glowing pie chart that is almost entirely one bright slice with a sliver missing. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight even in disasters, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

</details>

**`assets/raw/stages/casting.png`** ✅ 이미 있음 (다시 뽑을 때만 아래 사용)

<details><summary>프롬프트</summary>

```text
A bright audition room, a long line of hopeful actors in wildly different costumes (knight, nurse, zombie) stretching out the door, one bored casting director with a coffee. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight even in disasters, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

</details>

**`assets/raw/stages/shooting.png`** ✅ 이미 있음 (다시 뽑을 때만 아래 사용)

<details><summary>프롬프트</summary>

```text
A chaotic but cheerful outdoor film set in the rain, crew holding umbrellas over a camera, the director shouting through a megaphone while standing in a puddle, clapperboard mid-air. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight even in disasters, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

</details>

**`assets/raw/stages/post.png`** ✅ 이미 있음 (다시 뽑을 때만 아래 사용)

<details><summary>프롬프트</summary>

```text
A cozy editing room at 3am, an editor with twelve coffee cups stacked into a tower, the director asleep on the couch hugging a hard drive, timeline glowing on the monitor. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight even in disasters, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

</details>

**`assets/raw/stages/marketing.png`** ✅ 이미 있음 (다시 뽑을 때만 아래 사용)

<details><summary>프롬프트</summary>

```text
A busy subway passage, a marketing team frantically pasting a colorful film poster while commuters stream past glued to their phones, one kid pointing at the poster. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight even in disasters, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

</details>

**`assets/raw/stages/release.png`** ✅ 이미 있음 (다시 뽑을 때만 아래 사용)

<details><summary>프롬프트</summary>

```text
A multiplex lobby on opening morning, the whole crew peeking nervously from behind a standee at the ticket counter where exactly one customer is buying a ticket. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight even in disasters, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

</details>

## 3. 엔딩 결과 카드 이미지 (가로 4:3)

**`assets/raw/endings/bankrupt.png`** ✅ 이미 있음 (다시 뽑을 때만 아래 사용)

<details><summary>프롬프트</summary>

```text
A producer sitting on a stack of script boxes in an emptied office eating cup noodles, a blank sign taped to the glass door, pigeons walking in through the open door, afternoon sunshine. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight even in disasters, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

</details>

**`assets/raw/endings/boycott.png`** ✅ 이미 있음 (다시 뽑을 때만 아래 사용)

<details><summary>프롬프트</summary>

```text
An empty film set at sunrise, equipment abandoned mid-setup, a single director's chair with a lone director sitting in it holding a megaphone, a tumbleweed of gaffer tape rolling by. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight even in disasters, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

</details>

**`assets/raw/endings/delayed.png`** ✅ 이미 있음 (다시 뽑을 때만 아래 사용)

<details><summary>프롬프트</summary>

```text
A dusty external hard drive wrapped in masking tape sitting on a shelf like a shrine, wall calendar with years flipping away, a spider web connecting the drive to a trophy. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight even in disasters, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

</details>

**`assets/raw/endings/ott.png`** ✅ 이미 있음 (다시 뽑을 때만 아래 사용)

<details><summary>프롬프트</summary>

```text
A cozy living room at night, a family asleep on the couch in front of a TV showing a streaming menu, the film's thumbnail tiny in the corner, cat watching instead. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight even in disasters, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

</details>

**`assets/raw/endings/cult.png`** ✅ 이미 있음 (다시 뽑을 때만 아래 사용)

<details><summary>프롬프트</summary>

```text
A tiny old single-screen theater, one elderly viewer in the middle row clapping alone with popcorn flying, a torn ticket stub in the foreground, dusty projector beam sparkling. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight even in disasters, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

</details>

**`assets/raw/endings/flop.png`** ✅ 이미 있음 (다시 뽑을 때만 아래 사용)

<details><summary>프롬프트</summary>

```text
A cinema lobby where a staff member on a ladder peels down the film's poster while a giant blockbuster poster rolls down next to it, the producer watching with a forced smile. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight even in disasters, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

</details>

**`assets/raw/endings/even.png`** ✅ 이미 있음 (다시 뽑을 때만 아래 사용)

<details><summary>프롬프트</summary>

```text
A modest wrap party in a Korean BBQ restaurant, tired crew members clinking soju glasses with relieved smiles, grill smoke, a hand-drawn 'we survived' banner. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight even in disasters, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

</details>

**`assets/raw/endings/hit.png`** ✅ 이미 있음 (다시 뽑을 때만 아래 사용)

<details><summary>프롬프트</summary>

```text
A sold-out cinema lobby packed with excited people, a snaking queue past standees, confetti falling, the producer being lifted on the crew's shoulders. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight even in disasters, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

</details>

**`assets/raw/endings/mega.png`** ✅ 이미 있음 (다시 뽑을 때만 아래 사용)

<details><summary>프롬프트</summary>

```text
A stage greeting in a packed auditorium, hundreds of phone flashes like stars, a giant celebratory banner seen from behind the stage, the director bowing so deep the cap falls off. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight even in disasters, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

</details>

## 4. 카드 개별 표지 (가로 16:9) — 아직 없는 카드 0장 / 있음 93장

자주 나오는 카드(등장 조건 없음)부터 적었습니다.

### 4-1. 자주 나오는 카드 (0장)

### 4-2. 조건부 카드 (0장)

### 4-3. 이미 이미지가 있는 카드 (93장)

다시 뽑고 싶을 때만: plan-11(폐업 제작사의 대본 창고), plan-12(무료 자문 교수), fund-12(세무사의 전화), fund-13(조건 없는 투자), cast-12(오디션 마지막 번호), cast-13(톱배우의 출연료 반값 제안), shoot-15(예보에 없던 노을), shoot-16(무료 세트 제공), post-12(편집기사의 야근 선물), post-13(AI 더빙 솔루션), mkt-12(거장의 SNS 한 줄), mkt-13(성과 후 결제 바이럴), rel-12(경쟁 대작의 상영 중단), rel-13(극장 체인의 특별 상영 제안), plan-01(시나리오 4고, 더 나빠졌다), plan-02(원작자 최종 승인 조항), plan-03(제목 회의에 온 임원 조카), plan-04(같은 소재 영화가 먼저 크랭크인), plan-05(지역 영상위 지원금 공모), plan-06(피칭 중 조는 심사위원), plan-07(선배의 자문료), plan-08(러닝타임 160분), plan-09(실화의 유족에게서 온 전화), plan-10(조감독 후보 두 명), fund-01(담당자가 이직했다), fund-02(투자 조건: 신인 배우 끼워 넣기), fund-03(코인 부자의 전액 투자), fund-04(생수 PPL의 야망), fund-05(해외 선판매 제안), fund-06(투자심사 D-1, 감독의 반란), fund-07(크라우드펀딩 리워드), fund-08(이름값 30%), fund-09(코인이 폭락했다), fund-10(시장님의 조건), fund-11(메인 투자 전면 철회), cast-01(톱배우의 조건), cast-02(확정 직전의 폭로글), cast-03(감독의 페르소나), cast-04(아이돌 캐스팅 제안), cast-05(출연료 대신 지분), cast-06(오디션장의 투자사 대표 딸), cast-07(아역 배우 어머니), cast-08(선판매 조건 미이행 통보), cast-09(대역 없이 직접 한다), cast-10(불매 해시태그), cast-11(캐스팅 조건은 감독 교체), shoot-01(장마가 일주일 당겨졌다), shoot-02(확성기 든 주민들), shoot-03(주연 배우 발목 부상), shoot-04(감독과 촬영감독의 조명 전쟁), shoot-05(드론 추락), shoot-06(엑스트라 200명 중 50명), shoot-07(현장 사진 유출), shoot-08(스태프 급여일), shoot-09(아이돌의 월드투어), shoot-10(해외 로케 비자 거절), shoot-11(47번째 '한 컷 더'), shoot-12(영상위 감사), shoot-13(와이어 15미터), shoot-14(유튜버의 현장 방문 요청), post-01(1차 편집본 2시간 48분), post-02(CG 업체 폐업), post-03(전곡 오케스트라), post-04(청소년 관람불가), post-05(블라인드 시사 설문), post-06(상영금지 가처분), post-07(이 영화는 색깔이 없다), post-08(제작자 컷 발각), post-09(해외 영화제 초청 가능성), post-10(후시녹음 날의 감기), post-11(파일 인질극), mkt-01(개봉일이 겹쳤다), mkt-02(예고편 A안과 B안), mkt-03(단체 관람 영업), mkt-04(예매율 관리 패키지), mkt-05(라디오 생방송 사고), mkt-06(별 한 개 반), mkt-07(무대인사 거부), mkt-08(포스터 표절 의혹), mkt-09(OTT 전량 구매 제안), mkt-10(주제곡 춤 챌린지), mkt-11(청불은 TV 광고가 안 된다), rel-01(상영관이 약속의 절반), rel-02(개봉 당일 열애설), rel-03(예매율 조작 기사), rel-04(개봉 전날, 감독이 사라졌다), rel-05(개봉 주말, 국가대표 결승전), rel-06(단체 관람 버스가 다른 극장으로), rel-07(GV에서 '결말을 모르겠다'), rel-08(조조 관객 한 명의 2,000자 리뷰), rel-09(입소문이 터질 조짐), rel-10(OTT 공개일 서버 장애), rel-11(경쟁작의 호재)

