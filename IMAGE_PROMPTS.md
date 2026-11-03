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

## 4. 카드 개별 표지 (가로 16:9) — 아직 없는 카드 135장 / 있음 93장

자주 나오는 카드(등장 조건 없음)부터 적었습니다.

### 4-1. 자주 나오는 카드 (122장)

#### 유출된 오디션 영상 (cast-audition-video-leak)

**`assets/raw/cards/cast-audition-video-leak.png`**

```text
A comedic scene from a Korean film-production story, "유출된 오디션 영상": 주연 후보의 오디션 영상이 커뮤니티에 올라왔다. 조회수는 폭발했고 연기는 평이했다. 댓글 1위는 '이 분이 이 역?'이다. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight even in disasters, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 소속사의 패키지 영업 (cast-agency-bundle-deal)

**`assets/raw/cards/cast-agency-bundle-deal.png`**

```text
A comedic scene from a Korean film-production story, "소속사의 패키지 영업": 소속사가 주연 계약서에 조건을 붙였다. 신인 셋을 조연으로 써 달라는 것이다. 이들은 '연기 전공'이라고 소개됐다. 전공은 서류에 없다. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight even in disasters, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 매니저가 보낸 요청사항 (cast-star-rider-list)

**`assets/raw/cards/cast-star-rider-list.png`**

```text
A comedic scene from a Korean film-production story, "매니저가 보낸 요청사항": 톱배우 측이 A4 여섯 장짜리 요청사항을 보냈다. 대기실 온도는 22.5도, 생수는 특정 산지, 감독과의 첫 식사는 비공개다. 7번 항목은 '요청사항 비공개'다. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight even in disasters, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 아역의 하루는 네 시간 (cast-child-actor-hours)

**`assets/raw/cards/cast-child-actor-hours.png`**

```text
A comedic scene from a Korean film-production story, "아역의 하루는 네 시간": 노무사가 아역의 촬영 가능 시간을 계산해 왔다. 하루 네 시간이다. 감독이 계산한 필요 시간은 열한 시간이다. 둘 다 계산기를 맞게 두들겼다. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight even in disasters, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 케미 리딩의 침묵 (cast-chemistry-read-fail)

**`assets/raw/cards/cast-chemistry-read-fail.png`**

```text
A comedic scene from a Korean film-production story, "케미 리딩의 침묵": 두 주연의 첫 대본 리딩. 감독은 눈물을 기대했다. 현장에는 침묵이 흘렀고 누군가의 휴대폰이 울렸다. 연인 역이다. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight even in disasters, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 출연료 100% 선지급 (cast-upfront-fee-demand)

**`assets/raw/cards/cast-upfront-fee-demand.png`**

```text
A comedic scene from a Korean film-production story, "출연료 100% 선지급": 배우 측이 출연료 전액 선지급을 요구했다. 이유는 '이전 제작사의 사례'다. 사례는 구체적이다. 그 제작사가 지금 우리 건물 5층이다. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight even in disasters, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 특별출연의 분량 협상 (cast-cameo-screentime)

**`assets/raw/cards/cast-cameo-screentime.png`**

```text
A comedic scene from a Korean film-production story, "특별출연의 분량 협상": 특별출연 배우가 '특별'을 이유로 분량을 늘려 달라고 한다. 처음엔 한 장면이었다. 지금은 회상 장면 여섯 개다. 극 중 이름도 생겼다. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight even in disasters, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 전 연인 캐스팅 사고 (cast-ex-couple-casting)

**`assets/raw/cards/cast-ex-couple-casting.png`**

```text
A comedic scene from a Korean film-production story, "전 연인 캐스팅 사고": 캐스팅 직전에 알았다. 두 주연이 헤어진 지 석 달이다. 아무도 몰랐고 당사자들만 몰랐던 것처럼 행동했다. 키스신은 4번 씬이다. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight even in disasters, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 캐스팅 오보 기사 (cast-casting-misreport)

**`assets/raw/cards/cast-casting-misreport.png`**

```text
A comedic scene from a Korean film-production story, "캐스팅 오보 기사": '톱배우 A, 신작 확정' 기사가 떴다. 출처는 '관계자'다. 계약은 안 했다. 배우 측은 기사를 보고 이 작품을 처음 알았다. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight even in disasters, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 발굴된 과거 인터뷰 (cast-old-interview-dig)

**`assets/raw/cards/cast-old-interview-dig.png`**

```text
A comedic scene from a Korean film-production story, "발굴된 과거 인터뷰": 캐스팅이 알려지자 주연의 10년 전 인터뷰가 올라왔다. '시나리오는 안 읽는다'고 말한다. 조회수는 올라갔다. 감독이 그 영상을 세 번 봤다. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight even in disasters, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 배우의 이중 스케줄 (cast-double-booking-star)

**`assets/raw/cards/cast-double-booking-star.png`**

```text
A comedic scene from a Korean film-production story, "배우의 이중 스케줄": 주연의 다른 드라마 촬영이 우리 크랭크인과 열흘 겹친다. 소속사는 '조정 가능'이라 한다. 조정하는 쪽이 누구인지는 말하지 않았다. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight even in disasters, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 팬덤의 캐스팅 반대 청원 (cast-fandom-petition)

**`assets/raw/cards/cast-fandom-petition.png`**

```text
A comedic scene from a Korean film-production story, "팬덤의 캐스팅 반대 청원": 원작 팬덤이 주연 캐스팅 반대 청원을 시작했다. 서명 2만 명. 이유는 '머리 색이 다르다'다. 감독은 머리 색이 중요한 영화가 아니라고 한다. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight even in disasters, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 감독의 무명 주연 올인 (cast-unknown-lead-allin)

**`assets/raw/cards/cast-unknown-lead-allin.png`**

```text
A comedic scene from a Korean film-production story, "감독의 무명 주연 올인": 감독이 오디션에서 본 무명 배우 한 명을 고집한다. 이름이 없고 필모도 없다. 눈빛만 있다. 투자사는 이름을 원한다. 올인하면 결과가 크게 갈린다. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight even in disasters, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 원로 배우의 우정 출연 (cast-veteran-cameo-offer)

**`assets/raw/cards/cast-veteran-cameo-offer.png`**

```text
A comedic scene from a Korean film-production story, "원로 배우의 우정 출연": 한 원로 배우가 시나리오를 읽고 특별출연을 자청했다. 출연료는 밥 한 끼. 감독의 오랜 은사라고 한다. 소식을 들은 제작부는 눈을 의심했다. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight even in disasters, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 오디션의 재발견 (cast-hidden-gem-audition)

**`assets/raw/cards/cast-hidden-gem-audition.png`**

```text
A comedic scene from a Korean film-production story, "오디션의 재발견": 탈락 처리했던 지원자가 마지막 순서로 다시 불려 왔다. 서류가 다른 폴더에 있었다. 대사를 읽자 심사위원들이 서로 쳐다봤다. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight even in disasters, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 의상 협찬 제안 (cast-wardrobe-sponsor-offer)

**`assets/raw/cards/cast-wardrobe-sponsor-offer.png`**

```text
A comedic scene from a Korean film-production story, "의상 협찬 제안": 패션 브랜드가 주연 의상 전체를 협찬하겠다고 한다. 조건은 '자연스러운 노출'이다. 노출은 자연스러울 것이다. 계약서에 '매 장면'이라고 적혀 있다. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight even in disasters, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 무료 연기 코치 제안 (cast-free-acting-coach)

**`assets/raw/cards/cast-free-acting-coach.png`**

```text
A comedic scene from a Korean film-production story, "무료 연기 코치 제안": 유명 연기 학원 원장이 주연 배우를 무료로 지도하겠다고 한다. 대신 '지도 배우'로 크레딧에 올려 달라 한다. 우리는 이걸 호의로 읽기로 했다. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight even in disasters, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 팬클럽의 단체 선결제 (cast-fanclub-prepay)

**`assets/raw/cards/cast-fanclub-prepay.png`**

```text
A comedic scene from a Korean film-production story, "팬클럽의 단체 선결제": 주연 배우의 팬클럽이 시사회 티켓 3천 장을 미리 사겠다고 한다. 공동구매로 현금이 들어온다. 팬클럽 회장은 '작은 요청이 하나'라고 말했다. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight even in disasters, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 소속사의 파격 제안 (cast-agency-free-lead)

**`assets/raw/cards/cast-agency-free-lead.png`**

```text
A comedic scene from a Korean film-production story, "소속사의 파격 제안": 대형 소속사가 인기 배우를 출연료 없이 주연으로 보내겠다고 한다. 소속사 대표가 직접 전화했다. 말투가 공손했다. 이쯤 되면 의심을 해야 한다. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight even in disasters, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 투자사 이름이 틀렸다 (fund-pitch-deck-wrong-name)

**`assets/raw/cards/fund-pitch-deck-wrong-name.png`**

```text
A comedic scene from a Korean film-production story, "투자사 이름이 틀렸다": 심사 발표 3분 전, 슬라이드 첫 장에서 오타를 발견했다. 투자사 이름이다. 경쟁사 이름과 한 글자 차이다. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight even in disasters, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 손익분기 질문 (fund-breakeven-question)

**`assets/raw/cards/fund-breakeven-question.png`**

```text
A comedic scene from a Korean film-production story, "손익분기 질문": 심사역이 묻는다. 손익분기 관객이 몇 명입니까. 아무도 계산해 본 적이 없다. 회의실이 조용하다. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight even in disasters, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 새 담당자는 장르가 싫다 (fund-reviewer-hates-genre)

**`assets/raw/cards/fund-reviewer-hates-genre.png`**

```text
A comedic scene from a Korean film-production story, "새 담당자는 장르가 싫다": 후임 심사역이 첫 미팅에서 말했다. 저는 이런 장르 안 봅니다. 그리고 우리 영화를 그 장르라고 정리했다. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight even in disasters, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 자동차 PPL의 눈물 (fund-car-ppl-crying-scene)

**`assets/raw/cards/fund-car-ppl-crying-scene.png`**

```text
A comedic scene from a Korean film-production story, "자동차 PPL의 눈물": 자동차 회사가 PPL 2억 원을 제안했다. 조건은 하나다. 주인공이 차 안에서 울 것. 그 장면은 이별 장면이다. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight even in disasters, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 선판매 대금 인하 요청 (fund-presale-price-cut)

**`assets/raw/cards/fund-presale-price-cut.png`**

```text
A comedic scene from a Korean film-production story, "선판매 대금 인하 요청": 배급사가 선판매 계약서를 다시 보내왔다. 금액 칸만 달라졌다. 사유는 시장 상황이다. 어제까지는 아니었다. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight even in disasters, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 지원금 영수증 증빙 (fund-subsidy-receipt-audit)

**`assets/raw/cards/fund-subsidy-receipt-audit.png`**

```text
A comedic scene from a Korean film-production story, "지원금 영수증 증빙": 지자체 지원금 정산 서류를 내라고 한다. 영수증 원본이 필요하다. 스태프 회식 영수증은 대부분 카드 명세서뿐이다. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight even in disasters, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 공동제작사의 40% (fund-co-production-forty-percent)

**`assets/raw/cards/fund-co-production-forty-percent.png`**

```text
A comedic scene from a Korean film-production story, "공동제작사의 40%": 해외 공동제작사가 투자 조건을 보냈다. 지분 40퍼센트, 최종 편집권은 협의. 협의란 그쪽 의견을 말한다. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight even in disasters, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 후원자 단톡방 (fund-backers-group-chat)

**`assets/raw/cards/fund-backers-group-chat.png`**

```text
A comedic scene from a Korean film-production story, "후원자 단톡방": 크라우드펀딩 후원자 312명이 단톡방을 열었다. 요구는 간단하다. 시나리오 공개, 캐스팅 투표, 엔딩 투표. 아직 촬영 전이다. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight even in disasters, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 입금이 사흘 늦는다 (fund-deposit-delayed-again)

**`assets/raw/cards/fund-deposit-delayed-again.png`**

```text
A comedic scene from a Korean film-production story, "입금이 사흘 늦는다": 투자금 입금일이다. 담당자가 말한다. 내부 결재가 하루만 더 걸립니다. 어제도 같은 말을 했다. 그저께도. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight even in disasters, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 완성보증보험 요구 (fund-completion-bond-demand)

**`assets/raw/cards/fund-completion-bond-demand.png`**

```text
A comedic scene from a Korean film-production story, "완성보증보험 요구": 투자사가 완성보증보험을 요구한다. 영화가 끝까지 나온다는 보증이다. 보험사가 시나리오를 읽더니 보험료를 두 배로 불렀다. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight even in disasters, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 투자사의 해피엔딩 (fund-investor-happy-ending)

**`assets/raw/cards/fund-investor-happy-ending.png`**

```text
A comedic scene from a Korean film-production story, "투자사의 해피엔딩": 투자사 임원이 시사회 대신 시나리오를 읽었다. 의견은 하나다. 마지막에 다 같이 살면 안 될까요. 주인공은 이미 죽었다. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight even in disasters, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 펀드 담당자가 사라졌다 (fund-fund-manager-unreachable)

**`assets/raw/cards/fund-fund-manager-unreachable.png`**

```text
A comedic scene from a Korean film-production story, "펀드 담당자가 사라졌다": 서명 직전에 담당자와 연락이 끊겼다. 전화는 꺼져 있다. 비서는 출장이라고 한다. 어디로 갔는지는 비서도 모른다. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight even in disasters, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 가위바위보 투자 (fund-investor-rock-paper-scissors)

**`assets/raw/cards/fund-investor-rock-paper-scissors.png`**

```text
A comedic scene from a Korean film-production story, "가위바위보 투자": 투자자가 술자리에서 말했다. 계약서 필요 없어요. 가위바위보로 합시다. 이기면 투자금 두 배, 지면 반으로. 진심인 눈이다. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight even in disasters, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 영상위원회 제작지원 선정 (fund-film-commission-grant)

**`assets/raw/cards/fund-film-commission-grant.png`**

```text
A comedic scene from a Korean film-production story, "영상위원회 제작지원 선정": 영상위원회에서 연락이 왔다. 제작지원 대상으로 선정되었다고 한다. 지원금은 현금이다. 서류는 많지만 현금이다. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight even in disasters, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 대학 동기의 소액 투자 (fund-college-friend-investor)

**`assets/raw/cards/fund-college-friend-investor.png`**

```text
A comedic scene from a Korean film-production story, "대학 동기의 소액 투자": 십 년 만에 연락 온 대학 동기가 투자하고 싶다고 했다. 금액은 크지 않다. 조건은 하나다. 시사회 초대장. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight even in disasters, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 해외 마켓 피칭 초청 (fund-market-pitch-buyer)

**`assets/raw/cards/fund-market-pitch-buyer.png`**

```text
A comedic scene from a Korean film-production story, "해외 마켓 피칭 초청": 해외 영화제 마켓에서 피칭 초청이 왔다. 바이어 여럿이 관심을 보인다고 한다. 항공료와 숙박은 제작사 부담이다. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight even in disasters, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 무료 법률 자문 (fund-free-legal-review)

**`assets/raw/cards/fund-free-legal-review.png`**

```text
A comedic scene from a Korean film-production story, "무료 법률 자문": 한 로펌이 투자계약서 검토를 무료로 해 주겠다고 한다. 영화계 지원 사업이라는 설명이다. 담당 변호사는 매우 친절하다. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight even in disasters, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 무이자 브릿지론 (fund-zero-interest-bridge-loan)

**`assets/raw/cards/fund-zero-interest-bridge-loan.png`**

```text
A comedic scene from a Korean film-production story, "무이자 브릿지론": 한 대부업체가 투자 확정까지 브릿지론을 무이자로 빌려준다고 한다. 서류는 간단하다. 담당자가 보증인란을 손가락으로 가린다. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight even in disasters, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 공짜 VFX 패키지 (fund-free-vfx-package)

**`assets/raw/cards/fund-free-vfx-package.png`**

```text
A comedic scene from a Korean film-production story, "공짜 VFX 패키지": 신생 VFX 스튜디오가 후반 작업을 무료로 해 주겠다고 한다. 포트폴리오가 필요하다는 이유다. 데모 영상은 훌륭하다. 짧다. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight even in disasters, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 예능 고정 멘트 요청 (mkt-variety-show-pressure)

**`assets/raw/cards/mkt-variety-show-pressure.png`**

```text
A comedic scene from a Korean film-production story, "예능 고정 멘트 요청": 배급사가 인기 예능 출연을 잡아 왔다. 조건은 하나다. 영화 얘기는 3분 안에 끝낸다. 나머지 40분은 배우가 게임을 한다. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight even in disasters, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 감독의 친절한 인터뷰 (mkt-director-spoiler-interview)

**`assets/raw/cards/mkt-director-spoiler-interview.png`**

```text
A comedic scene from a Korean film-production story, "감독의 친절한 인터뷰": 감독이 인터뷰에서 결말을 말했다. 기자가 놀라자 감독은 한 번 더 설명했다. 기사는 이미 올라갔다. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight even in disasters, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 스크린이 줄었다 (mkt-screen-count-cut)

**`assets/raw/cards/mkt-screen-count-cut.png`**

```text
A comedic scene from a Korean film-production story, "스크린이 줄었다": 개봉 사흘 전, 극장이 스크린을 깎았다. 같은 날 개봉하는 영화가 더 많은 좌석을 약속했다. 좌석은 약속으로 만든다. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight even in disasters, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 시사회 음향 사고 (mkt-premiere-sound-failure)

**`assets/raw/cards/mkt-premiere-sound-failure.png`**

```text
A comedic scene from a Korean film-production story, "시사회 음향 사고": VIP 시사회 시작 10분. 대사가 한 박자씩 늦다. 엔지니어는 영화 탓이라 하고, 극장은 영화 파일 탓이라 한다. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight even in disasters, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 평론가 시사 여부 (mkt-critic-preview-dilemma)

**`assets/raw/cards/mkt-critic-preview-dilemma.png`**

```text
A comedic scene from a Korean film-production story, "평론가 시사 여부": 평론가 시사회를 열지 말지 정해야 한다. 열면 리뷰가 나온다. 안 열면 열지 않았다는 기사가 나온다. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight even in disasters, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 굿즈 5천 개 (mkt-goods-overstock)

**`assets/raw/cards/mkt-goods-overstock.png`**

```text
A comedic scene from a Korean film-production story, "굿즈 5천 개": 제작팀이 주인공 얼굴 아크릴 키링을 5천 개 발주했다. 입금은 끝났다. 주인공은 후반부에 죽는다. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight even in disasters, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 배우의 맛집 게시물 (mkt-actor-food-post)

**`assets/raw/cards/mkt-actor-food-post.png`**

```text
A comedic scene from a Korean film-production story, "배우의 맛집 게시물": 주연 배우가 SNS에 국밥 사진을 올렸다. 영화 홍보는 아니다. 팔로워 반응은 영화보다 뜨겁다. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight even in disasters, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 포스터 오타 3만 장 (mkt-poster-typo)

**`assets/raw/cards/mkt-poster-typo.png`**

```text
A comedic scene from a Korean film-production story, "포스터 오타 3만 장": 전국 극장에 포스터가 걸렸다. 감독 이름이 틀렸다. 감독은 그 사실을 사진으로 받았다. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight even in disasters, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 텅 빈 무대인사 (mkt-empty-stage-greeting)

**`assets/raw/cards/mkt-empty-stage-greeting.png`**

```text
A comedic scene from a Korean film-production story, "텅 빈 무대인사": 주말 무대인사 현장. 객석 절반이 비었다. 배우들은 환하게 웃는다. 눈은 웃지 않는다. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight even in disasters, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 개봉 주 광고 몰빵 (mkt-all-in-ad-week)

**`assets/raw/cards/mkt-all-in-ad-week.png`**

```text
A comedic scene from a Korean film-production story, "개봉 주 광고 몰빵": 홍보팀이 남은 예산을 개봉 주 광고에 몰자고 한다. 지하철, 버스, 극장 전광판이 영화 얼굴로 덮인다. 잔고도 같이 덮인다. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight even in disasters, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 버스 광고 면 무상 제공 (mkt-free-bus-ads)

**`assets/raw/cards/mkt-free-bus-ads.png`**

```text
A comedic scene from a Korean film-production story, "버스 광고 면 무상 제공": 옥외광고사 대표가 비는 버스 광고 면을 영화에 주겠다고 한다. 계약서에는 제작비 지원 관련 문구가 없다. 정말 그냥이다. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight even in disasters, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 관객이 만든 짧은 영상 (mkt-viral-fan-edit)

**`assets/raw/cards/mkt-viral-fan-edit.png`**

```text
A comedic scene from a Korean film-production story, "관객이 만든 짧은 영상": 한 관객이 영화 장면을 15초로 편집해 올렸다. 조회수가 이미 백만을 넘었다. 원작자는 모른다. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight even in disasters, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 극장 추천작 선정 (mkt-theater-pick-banner)

**`assets/raw/cards/mkt-theater-pick-banner.png`**

```text
A comedic scene from a Korean film-production story, "극장 추천작 선정": 대형 극장 체인 직원이 영화를 이번 달 추천작으로 올리겠다고 한다. 로비 배너와 예매창 첫 화면이 포함이다. 비용은 없다. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight even in disasters, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 무료 리뷰 인플루언서 (mkt-influencer-free-review)

**`assets/raw/cards/mkt-influencer-free-review.png`**

```text
A comedic scene from a Korean film-production story, "무료 리뷰 인플루언서": 구독자 200만 인플루언서가 영화를 무료로 리뷰하겠다고 한다. 영상 앞에 '광고' 표시는 편하게 빼자고 했다. 영상은 이미 만들어 뒀다. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight even in disasters, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 무료 AI 홍보 솔루션 (mkt-free-ai-promo)

**`assets/raw/cards/mkt-free-ai-promo.png`**

```text
A comedic scene from a Korean film-production story, "무료 AI 홍보 솔루션": 스타트업이 AI 홍보 툴을 무료로 쓰라고 한다. 기사, 포스터, 댓글까지 자동으로 만든다. 약관은 열일곱 쪽이다. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight even in disasters, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 장르 회의 3시간째 (plan-genre-roulette)

**`assets/raw/cards/plan-genre-roulette.png`**

```text
A comedic scene from a Korean film-production story, "장르 회의 3시간째": 멜로, 스릴러, 코미디가 팽팽하다. 투자사 팀장이 말한다. "다 합치죠." 아무도 반대하지 않았다. 다들 지쳤다. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight even in disasters, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 감독의 엔딩 고집 (plan-ending-fight)

**`assets/raw/cards/plan-ending-fight.png`**

```text
A comedic scene from a Korean film-production story, "감독의 엔딩 고집": 감독은 주인공이 죽는 엔딩을 원한다. 투자사는 살아야 한다고 한다. 두 사람 모두 "관객을 위해서"라고 말했다. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight even in disasters, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 제목이 이미 상표 (plan-title-trademark)

**`assets/raw/cards/plan-title-trademark.png`**

```text
A comedic scene from a Korean film-production story, "제목이 이미 상표": 가제 '봄날은 간다고 했다'를 검색했다. 같은 이름의 닭강정 프랜차이즈가 나왔다. 변호사는 침착했다. 청구서도 침착했다. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight even in disasters, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 시나리오 유출 (plan-script-leak)

**`assets/raw/cards/plan-script-leak.png`**

```text
A comedic scene from a Korean film-production story, "시나리오 유출": 커뮤니티에 대본 PDF가 올라왔다. 반전이 3페이지에 있다. 댓글 1위는 "이거 영화 아님?"이다. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight even in disasters, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 작가가 잠수 탔다 (plan-writer-vanishes)

**`assets/raw/cards/plan-writer-vanishes.png`**

```text
A comedic scene from a Korean film-production story, "작가가 잠수 탔다": 5고를 약속한 작가의 전화가 꺼졌다. SNS에는 제주도 사진이 올라왔다. 캡션은 '영감'이다. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight even in disasters, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 실화 당사자의 출연 요구 (plan-real-person-casting)

**`assets/raw/cards/plan-real-person-casting.png`**

```text
A comedic scene from a Korean film-production story, "실화 당사자의 출연 요구": 모델이 된 인물이 직접 전화했다. "제 역은 제가 하죠." 연기 경험은 동창회 장기자랑이 전부다. 의지는 확고하다. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight even in disasters, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### "AI 요소 넣어라" (plan-ai-pitch-demand)

**`assets/raw/cards/plan-ai-pitch-demand.png`**

```text
A comedic scene from a Korean film-production story, ""AI 요소 넣어라"": 투자사 이사가 피칭 자료를 넘기며 말했다. "요즘 AI 안 들어가면 안 돼요." 이 영화는 조선 시대 사극이다. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight even in disasters, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 시놉시스가 기사로 (plan-synopsis-spoiled)

**`assets/raw/cards/plan-synopsis-spoiled.png`**

```text
A comedic scene from a Korean film-production story, "시놉시스가 기사로": 제작 발표 전에 시놉시스가 기사로 났다. 제목은 '충격 결말 예고'다. 결말은 아직 안 썼다. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight even in disasters, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 판권 경매 막판 (plan-rights-auction)

**`assets/raw/cards/plan-rights-auction.png`**

```text
A comedic scene from a Korean film-production story, "판권 경매 막판": 인기 소설 판권 경매가 열렸다. 경쟁사가 마지막 호가를 불렀다. 우리 통장은 이미 얇다. 담당자가 손가락을 든다. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight even in disasters, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 지원금 서류 반려 (plan-subsidy-paperwork)

**`assets/raw/cards/plan-subsidy-paperwork.png`**

```text
A comedic scene from a Korean film-production story, "지원금 서류 반려": 지원금 신청서가 반려됐다. 사유는 '붙임 3의 서식 오류'다. 붙임 3은 도장 위치 하나다. 마감은 내일이다. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight even in disasters, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 콘티 3천 컷 (plan-storyboard-3000)

**`assets/raw/cards/plan-storyboard-3000.png`**

```text
A comedic scene from a Korean film-production story, "콘티 3천 컷": 감독이 콘티를 가져왔다. 3천 컷이다. 대사 없는 장면이 40분이다. 프로듀서는 페이지를 넘기다 멈췄다. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight even in disasters, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 대본 리딩에서 웃음 (plan-table-read-laugh)

**`assets/raw/cards/plan-table-read-laugh.png`**

```text
A comedic scene from a Korean film-production story, "대본 리딩에서 웃음": 첫 대본 리딩이 끝났다. 비극의 클라이맥스에서 스태프 몇이 웃었다. 감독은 "그럴 수 있죠"라고 했다. 표정은 아니었다. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight even in disasters, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 경쟁사의 스카우트 (plan-rival-poach-writer)

**`assets/raw/cards/plan-rival-poach-writer.png`**

```text
A comedic scene from a Korean film-production story, "경쟁사의 스카우트": 우리 공동 작가에게 경쟁사가 연락했다. 조건은 두 배다. 작가는 "고민해 볼게요"라고 말하고 노트북을 닫았다. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight even in disasters, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 은퇴한 거장의 윤문 (plan-retired-writer-gift)

**`assets/raw/cards/plan-retired-writer-gift.png`**

```text
A comedic scene from a Korean film-production story, "은퇴한 거장의 윤문": 은퇴한 시나리오 작가가 우연히 초고를 읽었다. 무료로 윤문해 주겠다고 한다. 조건은 하나다. 커피는 직접 내려 달라는 것이다. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight even in disasters, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 기획개발 우수상 (plan-dev-prize)

**`assets/raw/cards/plan-dev-prize.png`**

```text
A comedic scene from a Korean film-production story, "기획개발 우수상": 공모전 기획개발 부문에서 우수상 연락이 왔다. 상금이 있고 시상식도 있다. 시상식 날짜는 촬영 준비일과 겹친다. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight even in disasters, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 공짜로 빌려주는 저택 (plan-free-location-owner)

**`assets/raw/cards/plan-free-location-owner.png`**

```text
A comedic scene from a Korean film-production story, "공짜로 빌려주는 저택": 고택 주인이 먼저 연락했다. "촬영지로 쓰세요. 돈은 안 받아요." 인상은 좋았다. 계약서는 한 장이다. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight even in disasters, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 플랫폼의 선구매 제안 (plan-preorder-platform-offer)

**`assets/raw/cards/plan-preorder-platform-offer.png`**

```text
A comedic scene from a Korean film-production story, "플랫폼의 선구매 제안": 스트리밍 플랫폼이 대본만 보고 선구매하겠다고 한다. 금액이 크다. 계약서에 '편집 협의권' 조항이 있다. 협의는 한쪽에서만 한다. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight even in disasters, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 유명 작가의 공동 각색 (plan-free-cowriter-fame)

**`assets/raw/cards/plan-free-cowriter-fame.png`**

```text
A comedic scene from a Korean film-production story, "유명 작가의 공동 각색": 흥행 작가가 이 기획에 흥미를 보인다. 공동 각색을 무료로 해 주겠단다. 계약서에는 '원안 크레딧 및 수익 지분 협의'라고 쓰여 있다. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight even in disasters, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 자막 오타 발견 (post-subtitle-typo-premiere)

**`assets/raw/cards/post-subtitle-typo-premiere.png`**

```text
A comedic scene from a Korean film-production story, "자막 오타 발견": 시사 당일 아침, 막내가 자막을 읽다 멈췄다. 주인공의 고백이 '사랑해'가 아니라 '사망해'다. 시사는 두 시간 뒤다. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight even in disasters, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### CG 업체의 잔금 독촉 (post-vfx-final-payment)

**`assets/raw/cards/post-vfx-final-payment.png`**

```text
A comedic scene from a Korean film-production story, "CG 업체의 잔금 독촉": CG 업체가 내용증명을 보냈다. 잔금을 안 주면 최종 렌더 파일을 못 준단다. 담당자는 어제 퇴사했고, 인수인계는 '화이팅'이었다. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight even in disasters, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 감독의 분량 사수 (post-final-cut-tug)

**`assets/raw/cards/post-final-cut-tug.png`**

```text
A comedic scene from a Korean film-production story, "감독의 분량 사수": 투자사는 20분을 덜어내라 한다. 감독은 한 프레임도 못 뺀단다. 편집실 문에는 '출입 시 노크 필수. 답은 없음'이라 적혔다. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight even in disasters, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 삽입곡 저작권 확인 불가 (post-ost-copyright-missing)

**`assets/raw/cards/post-ost-copyright-missing.png`**

```text
A comedic scene from a Korean film-production story, "삽입곡 저작권 확인 불가": 명장면에 깔린 노래의 권리자를 아무도 모른다. 감독은 '친구가 쓴 곡'이라 했다. 그 친구는 지금 연락이 안 되는 도시에 산다. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight even in disasters, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 색보정실 정전 (post-grading-power-outage)

**`assets/raw/cards/post-grading-power-outage.png`**

```text
A comedic scene from a Korean film-production story, "색보정실 정전": 색보정 사흘째, 건물이 정전됐다. 저장을 안 한 마지막 두 시간치가 사라졌다. 컬러리스트는 조용히 창밖을 본다. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight even in disasters, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 엔딩이 두 개다 (post-two-endings-screening)

**`assets/raw/cards/post-two-endings-screening.png`**

```text
A comedic scene from a Korean film-production story, "엔딩이 두 개다": 감독이 찍은 엔딩은 비극, 투자사가 원하는 엔딩은 해피다. 시사 설문 결과는 반반이었다. 표본 열두 명이다. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight even in disasters, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 렌더팜 추가 청구서 (post-render-overtime-bill)

**`assets/raw/cards/post-render-overtime-bill.png`**

```text
A comedic scene from a Korean film-production story, "렌더팜 추가 청구서": 폭발 장면 렌더에 예상의 세 배 시간이 걸렸다. 청구서에 '전기료'라는 항목이 생겼다. 영화 속 폭발은 사실 작았다. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight even in disasters, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 크레딧에서 사라진 이름 (post-credits-name-missing)

**`assets/raw/cards/post-credits-name-missing.png`**

```text
A comedic scene from a Korean film-production story, "크레딧에서 사라진 이름": 가편집 크레딧에서 조명팀 막내 이름이 빠졌다. 본인은 모른다. 알아챈 건 조명감독이다. 그는 지금 편집실 앞에 서 있다. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight even in disasters, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 믹싱실 옆 공사 (post-mixing-studio-construction)

**`assets/raw/cards/post-mixing-studio-construction.png`**

```text
A comedic scene from a Korean film-production story, "믹싱실 옆 공사": 믹싱 마지막 날, 옆 건물에서 드릴이 울린다. 사운드 감독이 헤드폰을 벗었다. '이게 환경음이면 좋겠네요.' Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight even in disasters, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 후시 배우의 해외 일정 (post-adr-actor-abroad)

**`assets/raw/cards/post-adr-actor-abroad.png`**

```text
A comedic scene from a Korean film-production story, "후시 배우의 해외 일정": 조연 배우가 해외 광고 촬영 때문에 후시녹음을 못 온다. 대사는 서른두 줄 남았다. 소속사는 '목소리 비슷한 분'을 추천했다. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight even in disasters, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 엔딩 재촬영 올인 (post-reshoot-ending-allin)

**`assets/raw/cards/post-reshoot-ending-allin.png`**

```text
A comedic scene from a Korean film-production story, "엔딩 재촬영 올인": 가편집 엔딩이 영 밋밋하다. 감독이 말한다. 세트 철거 전 하루만 더 찍으면 된다고. 스태프 절반은 이미 다른 현장에 갔다. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight even in disasters, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 무명 작곡가의 습작 (post-free-score-composer)

**`assets/raw/cards/post-free-score-composer.png`**

```text
A comedic scene from a Korean film-production story, "무명 작곡가의 습작": 동네 작곡가가 메일을 보냈다. '이 영화 보고 곡을 써 봤습니다. 필요하시면 그냥 쓰세요.' 첨부 곡은 이상하게 장면과 맞는다. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight even in disasters, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 스튜디오 공실 (post-studio-vacancy-discount)

**`assets/raw/cards/post-studio-vacancy-discount.png`**

```text
A comedic scene from a Korean film-production story, "스튜디오 공실": 유명 후반 스튜디오의 예약이 취소됐다. 같은 방을 이틀간 절반 가격에 쓸 수 있단다. 취소한 팀은 어느 영화인지 말하지 않았다. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight even in disasters, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 원로 편집감독의 검수 (post-veteran-editor-checkup)

**`assets/raw/cards/post-veteran-editor-checkup.png`**

```text
A comedic scene from a Korean film-production story, "원로 편집감독의 검수": 업계 원로 편집감독이 시사를 보고 연락했다. 커피 한 잔 값이면 2시간 검수를 해 주겠단다. 현장엔 '그 사람이 잘랐다'는 전설이 있다. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight even in disasters, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 무료 자막 번역 제안 (post-free-translation-service)

**`assets/raw/cards/post-free-translation-service.png`**

```text
A comedic scene from a Korean film-production story, "무료 자막 번역 제안": 해외 배급용 자막을 무료로 번역해 주겠다는 업체가 나타났다. 납기는 사흘, 비용은 0원, 계약서는 한 쪽이다. 담당자는 웃고 있다. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight even in disasters, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 공짜 예고편 제작 (post-free-trailer-edit)

**`assets/raw/cards/post-free-trailer-edit.png`**

```text
A comedic scene from a Korean film-production story, "공짜 예고편 제작": 신생 영상 회사가 예고편을 공짜로 만들어 주겠단다. 포트폴리오가 필요하단다. 샘플 영상은 번쩍번쩍했고 우리 영화가 아니었다. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight even in disasters, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 배급사의 개봉일 앞당김 (post-early-release-offer)

**`assets/raw/cards/post-early-release-offer.png`**

```text
A comedic scene from a Korean film-production story, "배급사의 개봉일 앞당김": 배급사가 개봉을 2주 앞당기자고 한다. 경쟁작이 없는 황금 시즌이란다. 후반 작업은 아직 40% 남았다. 그 이야기는 안 했다. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight even in disasters, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 월요일 아침, 상영관 삭감 (rel-monday-screen-cut)

**`assets/raw/cards/rel-monday-screen-cut.png`**

```text
A comedic scene from a Korean film-production story, "월요일 아침, 상영관 삭감": 극장 담당자가 월요일 아침 전화를 걸었다. 목소리가 정중했다. 정중한 전화는 대개 나쁜 소식이다. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight even in disasters, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 결말을 방송한 스트리머 (rel-spoiler-streamer)

**`assets/raw/cards/rel-spoiler-streamer.png`**

```text
A comedic scene from a Korean film-production story, "결말을 방송한 스트리머": 개봉 사흘째, 한 스트리머가 결말을 생방송으로 읽어 줬다. 시청자 삼만 명이 채팅창에 '헐'을 쳤다. 그중 극장에 갈 사람은 없다. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight even in disasters, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### GV 중 꺼지지 않은 마이크 (rel-gv-mic-incident)

**`assets/raw/cards/rel-gv-mic-incident.png`**

```text
A comedic scene from a Korean film-production story, "GV 중 꺼지지 않은 마이크": GV가 끝났다. 감독과 배우가 무대 뒤에서 서로 한마디씩 했다. 마이크는 켜져 있었다. 객석은 끝까지 앉아 있었다. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight even in disasters, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 리뷰 조작 의혹 (rel-review-bot-suspicion)

**`assets/raw/cards/rel-review-bot-suspicion.png`**

```text
A comedic scene from a Korean film-production story, "리뷰 조작 의혹": 별점 만점 리뷰 이백 개가 같은 시간에 올라왔다. 문장 구조가 같다. 우리가 시킨 적은 없다. 누가 우리를 돕고 있다. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight even in disasters, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 2주차 생존 회의 (rel-second-week-survival)

**`assets/raw/cards/rel-second-week-survival.png`**

```text
A comedic scene from a Korean film-production story, "2주차 생존 회의": 개봉 일주일 차. 극장은 2주차 상영 여부를 이번 주말 성적으로 정한다고 했다. 이번 주말은 어제 끝났다. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight even in disasters, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 관객 이벤트 굿즈 품절 (rel-goods-sold-out)

**`assets/raw/cards/rel-goods-sold-out.png`**

```text
A comedic scene from a Korean film-production story, "관객 이벤트 굿즈 품절": 첫 주 관객 이벤트로 포토카드를 준다고 했다. 오픈런 줄이 건물을 두 바퀴 돌았다. 영화를 보려는 줄은 아니다. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight even in disasters, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 무대인사 지각 (rel-stage-greeting-late)

**`assets/raw/cards/rel-stage-greeting-late.png`**

```text
A comedic scene from a Korean film-production story, "무대인사 지각": 무대인사 한 시간 전. 주연배우의 매니저가 '교통이 막혀서'라고 했다. 배우는 이미 다른 극장 무대에 올라 있었다. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight even in disasters, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 자막 밀린 상영 (rel-projection-subtitle-error)

**`assets/raw/cards/rel-projection-subtitle-error.png`**

```text
A comedic scene from a Korean film-production story, "자막 밀린 상영": 주말 저녁 상영에서 자막이 오 초씩 늦게 나왔다. 배우가 울 때 자막은 웃었다. 관객은 영화를 코미디로 이해했다. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight even in disasters, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 평론가 별점 한 개 (rel-critic-one-star)

**`assets/raw/cards/rel-critic-one-star.png`**

```text
A comedic scene from a Korean film-production story, "평론가 별점 한 개": 유력 매체 평론가가 별 한 개를 줬다. 한 줄 평은 '상영 시간이 길다'였다. 러닝타임은 94분이다. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight even in disasters, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 폭우 주의보 (rel-heavy-rain-weekend)

**`assets/raw/cards/rel-heavy-rain-weekend.png`**

```text
A comedic scene from a Korean film-production story, "폭우 주의보": 개봉 첫 토요일, 기상청이 호우 특보를 내렸다. 극장은 실내라 괜찮다고 했다. 관객은 집도 실내라고 했다. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight even in disasters, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 불법 유출본 등장 (rel-piracy-leak)

**`assets/raw/cards/rel-piracy-leak.png`**

```text
A comedic scene from a Korean film-production story, "불법 유출본 등장": 개봉 닷새 만에 영화가 공유 사이트에 올라왔다. 화질은 극장판 그대로다. 조회수는 극장판보다 높다. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight even in disasters, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 감독의 인터뷰 한마디 (rel-director-interview-gaffe)

**`assets/raw/cards/rel-director-interview-gaffe.png`**

```text
A comedic scene from a Korean film-production story, "감독의 인터뷰 한마디": 감독이 인터뷰에서 말했다. '관객이 이해 못 하면 관객 몫이죠.' 기사 제목은 그 문장 전체였다. 조회수 이백만이다. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight even in disasters, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 시사회 빈자리 (rel-empty-preview-seats)

**`assets/raw/cards/rel-empty-preview-seats.png`**

```text
A comedic scene from a Korean film-production story, "시사회 빈자리": VIP 시사회 초대장을 이백 장 보냈다. 서른 명이 왔다. 그중 열 명은 주차 정산을 물었다. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight even in disasters, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 역주행 올인 제안 (rel-all-in-late-screens)

**`assets/raw/cards/rel-all-in-late-screens.png`**

```text
A comedic scene from a Korean film-production story, "역주행 올인 제안": 삼 주차에 입소문이 살짝 붙었다. 배급 팀장이 말했다. '상영관 선결제하면 역주행 갑니다. 아마도요.' 아마도가 제일 비싸다. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight even in disasters, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 팝콘 브랜드 무료 콜라보 (rel-popcorn-collab)

**`assets/raw/cards/rel-popcorn-collab.png`**

```text
A comedic scene from a Korean film-production story, "팝콘 브랜드 무료 콜라보": 스낵 회사가 영화 캐릭터 팝콘통을 전량 무료로 만들어 주겠다고 했다. 계약서는 두 쪽이다. 두 번째 쪽이 더 길다. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight even in disasters, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 예능 프로그램 출연 제안 (rel-variety-show-offer)

**`assets/raw/cards/rel-variety-show-offer.png`**

```text
A comedic scene from a Korean film-production story, "예능 프로그램 출연 제안": 인기 예능에서 출연진 전원을 초대했다. 조건은 '편집은 맡겨 달라'였다. 작가가 웃었다. 웃음이 너무 넓었다. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight even in disasters, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 한 장면이 밈이 됐다 (rel-meme-scene-viral)

**`assets/raw/cards/rel-meme-scene-viral.png`**

```text
A comedic scene from a Korean film-production story, "한 장면이 밈이 됐다": 영화 속 어색한 한 장면이 짤로 퍼졌다. 조연이 문을 못 여는 삼 초다. 조연은 이제 길에서 알아본다. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight even in disasters, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 통신사 할인 제휴 (rel-telecom-discount-tie)

**`assets/raw/cards/rel-telecom-discount-tie.png`**

```text
A comedic scene from a Korean film-production story, "통신사 할인 제휴": 통신사 마케팅 팀이 연락했다. 이번 달 VIP 회원에게 영화 할인권을 뿌린다고 한다. 우리 영화가 목록에 있다. 대가는 로고 한 줄이다. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight even in disasters, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 밤샘 사흘째 (shoot-third-night-shoot)

**`assets/raw/cards/shoot-third-night-shoot.png`**

```text
A comedic scene from a Korean film-production story, "밤샘 사흘째": 새벽 4시. 조명팀 막내가 서서 잔다. 감독은 '오늘만 더'라고 말한다. 어제도 같은 문장이었다. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight even in disasters, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 밥차가 길을 잃었다 (shoot-catering-van-lost)

**`assets/raw/cards/shoot-catering-van-lost.png`**

```text
A comedic scene from a Korean film-production story, "밥차가 길을 잃었다": 점심 밥차가 내비게이션을 믿고 산으로 올라갔다. 스태프 80명은 허기졌다. 감독은 이미 레디를 불렀다. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight even in disasters, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 발전차가 멈췄다 (shoot-generator-blackout)

**`assets/raw/cards/shoot-generator-blackout.png`**

```text
A comedic scene from a Korean film-production story, "발전차가 멈췄다": 클라이맥스 촬영 중 발전차가 조용히 숨을 거뒀다. 정비 기사는 두 시간 걸린다고 했다. 해는 한 시간 뒤에 진다. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight even in disasters, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 옆집 개의 출연료 (shoot-neighbor-dog-barking)

**`assets/raw/cards/shoot-neighbor-dog-barking.png`**

```text
A comedic scene from a Korean film-production story, "옆집 개의 출연료": 동시녹음 팀이 헤드폰을 벗었다. 옆집 개가 모든 테이크에서 대사를 친다. 주인은 개를 말릴 수 없다고 했다. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight even in disasters, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 단톡방 전쟁 (shoot-crew-group-chat-war)

**`assets/raw/cards/shoot-crew-group-chat-war.png`**

```text
A comedic scene from a Korean film-production story, "단톡방 전쟁": 조연출이 제작부장에게 보낼 험담을 전체 단톡방에 올렸다. 읽음 숫자가 순식간에 70이 됐다. 삭제는 불가능하다. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight even in disasters, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 3회차만 더 (shoot-extra-shooting-days)

**`assets/raw/cards/shoot-extra-shooting-days.png`**

```text
A comedic scene from a Korean film-production story, "3회차만 더": 감독이 분량이 모자란다고 했다. 촬영은 이미 계획의 마지막 날이다. 제작부장은 계산기를 열었다가 닫았다. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight even in disasters, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 렌즈가 떨어졌다 (shoot-lens-drop)

**`assets/raw/cards/shoot-lens-drop.png`**

```text
A comedic scene from a Korean film-production story, "렌즈가 떨어졌다": 촬영 보조가 렌즈를 놓쳤다. 땅에 닿는 소리는 의외로 가벼웠다. 값은 그렇지 않다. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight even in disasters, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 체류 기간 D-2 (shoot-foreign-actor-visa-expiry)

**`assets/raw/cards/shoot-foreign-actor-visa-expiry.png`**

```text
A comedic scene from a Korean film-production story, "체류 기간 D-2": 외국인 조연의 체류 기간이 이틀 남았다. 남은 촬영은 닷새다. 출입국 서류는 영어가 아니라 행정어다. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight even in disasters, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 안전관리자의 연필 (shoot-safety-officer-inspection)

**`assets/raw/cards/shoot-safety-officer-inspection.png`**

```text
A comedic scene from a Korean film-production story, "안전관리자의 연필": 현장 안전관리자가 체크리스트를 꺼냈다. 항목 열두 개 중 아홉 개가 불합격이다. 남은 세 개는 빈칸이다. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight even in disasters, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 연막이 너무 잘 나왔다 (shoot-smoke-machine-alarm)

**`assets/raw/cards/shoot-smoke-machine-alarm.png`**

```text
A comedic scene from a Korean film-production story, "연막이 너무 잘 나왔다": 안개 장면용 연막기가 호텔 화재경보기를 울렸다. 스프링클러는 참았다. 투숙객은 참지 않았다. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight even in disasters, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 말이 달리지 않는다 (shoot-horse-wont-gallop)

**`assets/raw/cards/shoot-horse-wont-gallop.png`**

```text
A comedic scene from a Korean film-production story, "말이 달리지 않는다": 추격 장면에 투입된 말이 출발선에서 풀을 뜯는다. 말 주인은 '기분이 중요하다'고 했다. 말의 기분이다. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight even in disasters, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 지자체 로케 지원금 (shoot-local-subsidy-offer)

**`assets/raw/cards/shoot-local-subsidy-offer.png`**

```text
A comedic scene from a Korean film-production story, "지자체 로케 지원금": 군청 담당자가 찾아왔다. 지역을 담은 장면이 있으면 지원금을 준다고 한다. 서류는 두 장이다. 팸플릿은 열두 장이다. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight even in disasters, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 단역의 한 컷 (shoot-veteran-bit-actor)

**`assets/raw/cards/shoot-veteran-bit-actor.png`**

```text
A comedic scene from a Korean film-production story, "단역의 한 컷": 단역으로 온 중년 배우가 한 컷에서 현장을 얼렸다. 감독이 모니터를 끄고 박수를 쳤다. 출연료는 일당 12만 원이다. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight even in disasters, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 국밥집 사장님의 호의 (shoot-diner-owner-sponsor)

**`assets/raw/cards/shoot-diner-owner-sponsor.png`**

```text
A comedic scene from a Korean film-production story, "국밥집 사장님의 호의": 로케 앞 국밥집 사장님이 스태프 식사를 한 달 내겠다고 한다. 조건은 간판이 화면에 한 번 나오는 것이다. 간판은 이미 크다. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight even in disasters, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 장비 렌탈 무료 시연 (shoot-free-camera-rental)

**`assets/raw/cards/shoot-free-camera-rental.png`**

```text
A comedic scene from a Korean film-production story, "장비 렌탈 무료 시연": 신생 렌탈사가 최신 카메라를 한 달 무료로 대여해 주겠다고 한다. 계약서는 세 쪽이다. 마지막 쪽에 작은 글씨가 있다. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight even in disasters, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 조건 없는 현장 후원 (shoot-no-strings-sponsor)

**`assets/raw/cards/shoot-no-strings-sponsor.png`**

```text
A comedic scene from a Korean film-production story, "조건 없는 현장 후원": 한 식품사가 촬영 지원금을 보냈다. 조건은 없다고 했다. 대표 비서가 '곧 연락드린다'고 덧붙였다. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight even in disasters, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

### 4-2. 조건부 카드 (13장)

#### 서명 직전 재협상 (cast-star-reprice)

**`assets/raw/cards/cast-star-reprice.png`**

```text
A comedic scene from a Korean film-production story, "서명 직전 재협상": 도장 찍기 전날 밤. 톱배우 측이 출연료를 한 번 더 논의하자고 한다. 이유는 '같은 시기 다른 제안'이다. 어떤 제안인지는 보여 주지 않는다. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight even in disasters, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 엔젤의 시나리오 의견 (fund-angel-investor-opinion)

**`assets/raw/cards/fund-angel-investor-opinion.png`**

```text
A comedic scene from a Korean film-production story, "엔젤의 시나리오 의견": 엔젤 투자자가 시나리오를 읽었다. 감상은 세 줄이다. 주인공을 CEO로, 배경을 강남으로, 결말에 자기 사무실을 넣자. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight even in disasters, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 리뷰 알바 의혹 (mkt-review-brigade)

**`assets/raw/cards/mkt-review-brigade.png`**

```text
A comedic scene from a Korean film-production story, "리뷰 알바 의혹": 별점 만점 후기가 한 시간에 백 개 달렸다. 말투가 전부 같다. 누군가 캡처를 올렸다. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight even in disasters, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 예고편 환불 소동 (mkt-trailer-backlash)

**`assets/raw/cards/mkt-trailer-backlash.png`**

```text
A comedic scene from a Korean film-production story, "예고편 환불 소동": 예고편에는 폭파 장면이 있었다. 본편에는 폭파 후 장면만 있다. 관객이 환불 창구에 줄을 섰다. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight even in disasters, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 개봉 주 열애설 (mkt-scandal-opening-week)

**`assets/raw/cards/mkt-scandal-opening-week.png`**

```text
A comedic scene from a Korean film-production story, "개봉 주 열애설": 주연 배우 스캔들 기사가 개봉 주에 다시 나왔다. 기자는 시기를 맞춘 우연이라 한다. 우연은 늘 정확하다. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight even in disasters, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 극장 상영 기간 단축 (mkt-ott-window-squeeze)

**`assets/raw/cards/mkt-ott-window-squeeze.png`**

```text
A comedic scene from a Korean film-production story, "극장 상영 기간 단축": OTT 측이 공개 시점을 앞당기자고 했다. 극장은 반대한다. 이틀 뒤에도 극장은 반대하고, OTT는 웃는다. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight even in disasters, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 웹툰 팬들의 청원 (plan-webtoon-fans-petition)

**`assets/raw/cards/plan-webtoon-fans-petition.png`**

```text
A comedic scene from a Korean film-production story, "웹툰 팬들의 청원": 각색 소식에 원작 팬이 청원을 시작했다. 요구는 세 가지다. 주인공 키 185cm. 머리색 은발. 결말 변경 금지. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight even in disasters, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 등급 재심의 접수 (post-rating-reappeal-deadline)

**`assets/raw/cards/post-rating-reappeal-deadline.png`**

```text
A comedic scene from a Korean film-production story, "등급 재심의 접수": 심의 결과가 나왔다. 장면 세 개를 고치면 등급이 내려간다. 고치는 데 이틀, 안 고치면 관객이 반 토막이다. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight even in disasters, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 주연 배우의 분량 요청 (post-star-screentime-demand)

**`assets/raw/cards/post-star-screentime-demand.png`**

```text
A comedic scene from a Korean film-production story, "주연 배우의 분량 요청": 주연 배우 매니저가 편집본을 봤다. '클로즈업이 조연보다 4초 짧아요.' 4초는 영화에서 길다. 이 편집본에서는 더 길다. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight even in disasters, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 영화제 접수 D-3 (post-festival-deadline-d3)

**`assets/raw/cards/post-festival-deadline-d3.png`**

```text
A comedic scene from a Korean film-production story, "영화제 접수 D-3": 영화제 출품 마감이 사흘 남았다. 후반 작업은 닷새가 더 필요하다. 접수 사이트에는 '미완성본 가능'이라 적혔다. 작은 글씨로 '불리'도 있다. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight even in disasters, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 팬덤의 단체 대관 (rel-fan-group-screening)

**`assets/raw/cards/rel-fan-group-screening.png`**

```text
A comedic scene from a Korean film-production story, "팬덤의 단체 대관": 주연배우의 팬클럽이 상영관 세 개를 통째로 빌렸다. 회장이 말했다. '저희가 알아서 할게요.' 알아서 하는 건 처음이다. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight even in disasters, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 붕대 풀고 복귀 (shoot-actor-comeback-shoot)

**`assets/raw/cards/shoot-actor-comeback-shoot.png`**

```text
A comedic scene from a Korean film-production story, "붕대 풀고 복귀": 부상 배우가 의사 허락 없이 복귀했다. '프로는 아프다고 안 한다'는 것이다. 보험사는 이미 아프다. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight even in disasters, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

#### 하도급 대금 독촉 (shoot-subcontractor-demand)

**`assets/raw/cards/shoot-subcontractor-demand.png`**

```text
A comedic scene from a Korean film-production story, "하도급 대금 독촉": 세트 업체 사장이 현장에 직접 왔다. 손에는 청구서와 세트 열쇠가 있다. 열쇠는 잠긴 문을 향해 있다. Bright flat 2D animation style, Korean webtoon meets Ghibli-like background art, clean linework, soft cel shading, warm saturated colors, cheerful daylight even in disasters, comedic exaggerated poses and expressions, slightly chibi proportions, wide shot, no real people. IMPORTANT: absolutely no text of any kind — no letters, no words, no numbers, no typography in any language; every paper, screen, sign, banner, poster and label is either blank or filled only with meaningless wavy scribbles.
```

### 4-3. 이미 이미지가 있는 카드 (93장)

다시 뽑고 싶을 때만: plan-11(폐업 제작사의 대본 창고), plan-12(무료 자문 교수), fund-12(세무사의 전화), fund-13(조건 없는 투자), cast-12(오디션 마지막 번호), cast-13(톱배우의 출연료 반값 제안), shoot-15(예보에 없던 노을), shoot-16(무료 세트 제공), post-12(편집기사의 야근 선물), post-13(AI 더빙 솔루션), mkt-12(거장의 SNS 한 줄), mkt-13(성과 후 결제 바이럴), rel-12(경쟁 대작의 상영 중단), rel-13(극장 체인의 특별 상영 제안), plan-01(시나리오 4고, 더 나빠졌다), plan-02(원작자 최종 승인 조항), plan-03(제목 회의에 온 임원 조카), plan-04(같은 소재 영화가 먼저 크랭크인), plan-05(지역 영상위 지원금 공모), plan-06(피칭 중 조는 심사위원), plan-07(선배의 자문료), plan-08(러닝타임 160분), plan-09(실화의 유족에게서 온 전화), plan-10(조감독 후보 두 명), fund-01(담당자가 이직했다), fund-02(투자 조건: 신인 배우 끼워 넣기), fund-03(코인 부자의 전액 투자), fund-04(생수 PPL의 야망), fund-05(해외 선판매 제안), fund-06(투자심사 D-1, 감독의 반란), fund-07(크라우드펀딩 리워드), fund-08(이름값 30%), fund-09(코인이 폭락했다), fund-10(시장님의 조건), fund-11(메인 투자 전면 철회), cast-01(톱배우의 조건), cast-02(확정 직전의 폭로글), cast-03(감독의 페르소나), cast-04(아이돌 캐스팅 제안), cast-05(출연료 대신 지분), cast-06(오디션장의 투자사 대표 딸), cast-07(아역 배우 어머니), cast-08(선판매 조건 미이행 통보), cast-09(대역 없이 직접 한다), cast-10(불매 해시태그), cast-11(캐스팅 조건은 감독 교체), shoot-01(장마가 일주일 당겨졌다), shoot-02(확성기 든 주민들), shoot-03(주연 배우 발목 부상), shoot-04(감독과 촬영감독의 조명 전쟁), shoot-05(드론 추락), shoot-06(엑스트라 200명 중 50명), shoot-07(현장 사진 유출), shoot-08(스태프 급여일), shoot-09(아이돌의 월드투어), shoot-10(해외 로케 비자 거절), shoot-11(47번째 '한 컷 더'), shoot-12(영상위 감사), shoot-13(와이어 15미터), shoot-14(유튜버의 현장 방문 요청), post-01(1차 편집본 2시간 48분), post-02(CG 업체 폐업), post-03(전곡 오케스트라), post-04(청소년 관람불가), post-05(블라인드 시사 설문), post-06(상영금지 가처분), post-07(이 영화는 색깔이 없다), post-08(제작자 컷 발각), post-09(해외 영화제 초청 가능성), post-10(후시녹음 날의 감기), post-11(파일 인질극), mkt-01(개봉일이 겹쳤다), mkt-02(예고편 A안과 B안), mkt-03(단체 관람 영업), mkt-04(예매율 관리 패키지), mkt-05(라디오 생방송 사고), mkt-06(별 한 개 반), mkt-07(무대인사 거부), mkt-08(포스터 표절 의혹), mkt-09(OTT 전량 구매 제안), mkt-10(주제곡 춤 챌린지), mkt-11(청불은 TV 광고가 안 된다), rel-01(상영관이 약속의 절반), rel-02(개봉 당일 열애설), rel-03(예매율 조작 기사), rel-04(개봉 전날, 감독이 사라졌다), rel-05(개봉 주말, 국가대표 결승전), rel-06(단체 관람 버스가 다른 극장으로), rel-07(GV에서 '결말을 모르겠다'), rel-08(조조 관객 한 명의 2,000자 리뷰), rel-09(입소문이 터질 조짐), rel-10(OTT 공개일 서버 장애), rel-11(경쟁작의 호재)

