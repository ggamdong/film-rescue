# 오늘도 크랭크인! (Film Rescue)

망해 가는 한국 영화의 제작자가 되어 기획 → 투자 → 캐스팅 → 촬영 → 후반 → 마케팅 → 개봉, 14턴의 위기를 넘기는 블랙코미디 웹게임.
끝에는 누적 관객 수와 한 줄 운명이 적힌 성적표가 나오고, Wordle처럼 복사해 공유할 수 있다.

- **실행 중 LLM 호출 없음.** 카드는 미리 만들어 `cards.js`에 담고, 게임은 그 카드를 조합해서 돈다.
- **의존성 없는 단일 HTML** (`index.html`) + 카드 데이터(`cards.js`). 빌드 도구 없이 정적 호스팅에 바로 올라간다.
- 다크 톤, 모바일 우선. 이미지는 없어도 돌아가고, 있으면 자동으로 채워진다.

## 폴더 구조

```
film-rescue/
├─ index.html            게임 본체 (UI + 게임 로직 CORE 구간)
├─ cards.js              빌드 산출물: data/cards/*.json 을 합친 것 (직접 수정 금지)
├─ data/cards/           ✅ 검수 완료 카드 (여기 있는 json만 게임에 들어감)
│   ├─ seed.json           손으로 쓴 시드 위기 카드 79장
│   ├─ chance.json         기회 카드 14장 (진짜 행운 7, 행운처럼 보이는 함정 7)
│   └─ draft/              🟡 생성 스크립트가 뱉는 미검수 카드 (빌드에 포함 안 됨)
├─ img/                  이미지 (webp). 없으면 이모지 플레이스홀더
│   ├─ cover.webp          타이틀 화면 (16:9)
│   ├─ og.webp             링크 미리보기 (1200x630)
│   ├─ stages/<stage>.webp 단계 기본 표지 (16:9) — 카드 개별 이미지 없을 때
│   ├─ cards/<card-id>.webp 카드 개별 표지 (16:9, 선택)
│   └─ endings/<tier>.webp 결과 카드 이미지 (4:3)
├─ assets/raw/           생성 원본(PNG) 두는 곳. 같은 하위 폴더 구조 유지
├─ tools/
│   ├─ build-cards.mjs     data/cards/*.json → cards.js (검증 포함)
│   ├─ validate-cards.mjs  카드 스키마 검증
│   ├─ generate-cards.mjs  claude -p 로 카드 생성 → data/cards/draft/
│   ├─ simulate.mjs        1,000판 자동 플레이로 엔딩 분포 확인
│   ├─ image-prompts.mjs   이미지 생성용 프롬프트 목록(IMAGE_PROMPTS.md) 출력
│   └─ import-images.mjs   assets/raw → img (워터마크 크롭 + webp, ffmpeg 필요)
└─ IMAGE_PROMPTS.md      이미지 프롬프트와 저장 파일명 표
```

## 로컬에서 돌려 보기

`index.html` 을 더블클릭해도 된다 (`file://` 에서도 동작하도록 fetch 대신 `<script src="cards.js">` 를 쓴다).
서버로 띄우려면:

```bash
npx --yes serve -l 8787 .
```

## 게임 규칙 (엔진 요약)

| 항목 | 값 |
|---|---|
| 단계/턴 | 기획 2, 투자 2, 캐스팅 2, 촬영 3, 후반 2, 마케팅 2, 개봉 1 = **14턴** |
| 상태값 | 예산 · 일정 · 사기 · 완성도 · 화제성, 각 0~100 |
| 시작값 | 예산 50, 일정 55, 사기 60, 완성도 40, 화제성 15 (+ 장르 보정) |
| 매 턴 소모 | 예산 −1, 일정 −1 (돈과 시간은 가만히 있어도 줄어든다) |
| 생존 조건 | **예산·일정·사기** 중 하나라도 0 → 즉시 종료 (제작 중단 / 개봉 연기 / 현장 붕괴) |
| 성적 스탯 | **완성도·화제성**은 0이 되어도 진행. 엔딩 계산에만 쓰임 |
| 관객 수 | `score = 0.5·완성도 + 0.4·화제성 + 0.1·(사기+일정)/2` → `10^(2.4 + 0.07·score) × 플래그 배수 × 운(0.7~1.3)`, 상한 1,500만 |
| 결과 지표 | 누적 관객, 손익(억, 관객×3,500원 − 제작비), 손익분기 달성 여부, 평론 평점(완성도 기반 10점), 관객 평점(완성도·화제성 기반 10점) |
| 엔딩 9종 | 제작 중단 · 현장 붕괴 · 개봉 연기 · OTT 직행 · 전설의 괴작(<5만) · 쪽박(<60만) · 본전치기(<200만) · 흥행 성공(<800만) · 천만급 |
| 덱 시드 | `?s=숫자`. 기본은 KST 날짜(`YYMMDD`)라 같은 날엔 모두 같은 덱이고 자정에 자동으로 바뀐다. '무작위 영화'는 매번 랜덤 시드 |
| 오늘의 영화 완료 | 기기 `localStorage`(`fr_daily_<시드>`)에 선택 순서를 저장. 같은 덱은 결정적이라 선택만 재생하면 결과 화면이 복원된다. 완료 후엔 무작위 영화가 기본 버튼 |

같은 카드는 한 판에 두 번 나오지 않는다. 단계에 뽑을 카드가 없으면 `index.html` 안의 `FALLBACK` 기본 카드가 나온다.
플래그(`set`)로 켜진 상태는 다른 카드의 등장 조건(`cond.has` / `cond.any` / `cond.not`)이 되어 이야기가 이어진다. 이어지는 카드는 등장 가중치가 3배다.
주요 플래그: `star`(톱배우) `idol`(아이돌 주연) `unknown_lead`(무명 주연) `webtoon_ip` `crowdfund` `presale` `grant`/`region_shoot`/`local_subsidy`/`city_scene`(지원금) `ott_deal`(OTT 전량 판매: 이후 극장·무대인사 카드 차단) `festival` `r_rated` `injury` `fake_booking` `trailer_lie` `scandal_star`.
새 카드를 쓸 때 톱배우·아이돌·원작·펀딩·선판매 같은 전제가 있으면 반드시 조건을 건다. 예: 팬클럽 카드는 `"any": ["star","idol"]`, 무명 주연을 뽑는 카드는 `"not": ["star","idol","unknown_lead"]`.

## 카드 추가하기

### 1) 카드 형식

```jsonc
{
  "id": "shoot-05",              // 소문자/숫자/하이픈. 접두어: plan fund cast shoot post mkt rel
  "stage": "shooting",           // planning | funding | casting | shooting | post | marketing | release
  "type": "chance",              // 선택. 생략=위기(crisis). chance=기회 카드(행운이든 함정이든 화면엔 "✨ 기회"로만 표시)
  "title": "드론 추락",
  "desc": "상황 묘사 2~3문장 (160자 내외)",
  "cond": {                      // 선택. 없으면 언제든 등장
    "budget": [0, 35],           //   상태값 범위 [min, max]
    "has": ["idol"],             //   필요한 플래그 (모두)
    "any": ["star", "idol"],     //   하나라도 있으면
    "not": ["star"]              //   있으면 안 되는 플래그
  },
  "weight": 1,                   // 선택. 등장 가중치
  "choices": [                   // 2~3개
    { "text": "재촬영한다",
      "outcomes": [              // p 합계 = 1
        { "p": 0.7, "fx": { "schedule": -6, "budget": -5 }, "text": "결과 문구", "set": ["flag_name"] },
        { "p": 0.3, "fx": {}, "text": "다른 결과" }
      ] }
  ]
}
```

- `fx` 는 정수, 보통 ±3~±12, 최대 ±25. 빈 객체 `{}` 허용.
- 실존 인물·회사 실명 금지.
- 카드 유형 섞기: 위기 약 70%, 기회 약 30%(그중 절반은 진짜 행운, 절반은 수락하면 60~75% 확률로 더 크게 잃는 함정). 플레이어는 둘을 구별할 수 없어야 한다.

### 2) 손으로 추가

`data/cards/` 에 json 파일을 만들거나 `seed.json` 에 덧붙인 뒤:

```bash
node tools/build-cards.mjs
```

검증을 통과한 카드만 `cards.js` 에 들어간다. 오류가 있으면 파일과 카드 id를 찍어 주고 빌드를 멈춘다.

### 3) Claude Code CLI로 생성

생성은 게임과 완전히 분리된 **오프라인 작업**이다. 데스크톱 앱이 번들한 `claude.exe` 를 자동으로 찾는다(`CLAUDE_BIN` 환경변수로 지정 가능).

```bash
node tools/generate-cards.mjs --stage shooting --n 10
```

```bash
node tools/generate-cards.mjs --all --n 15 --theme "심의, 배급사 갑질, 예능 출연 압박"
```

- 결과는 `data/cards/draft/gen-<stage>-<시각>.json` 에 들어간다. **빌드에는 포함되지 않는다.**
- 파일을 열어 톤·사실성·밸런스를 검수하고, 못 쓰는 카드는 지우고, 살릴 카드만 남긴 뒤 `data/cards/` 로 옮긴다.
- 다시 `node tools/build-cards.mjs`. id 중복은 빌드가 잡아 준다.
- 200장 목표: 시드 79장 + 단계별 15~20장 생성 2회면 넉넉하다.

### 4) 밸런스 확인

```bash
node tools/simulate.mjs --n 1000 --policy random
```

`--policy greedy|safe`, `--genre zombie` 로 바꿔 볼 수 있다. 엔딩 분포, 조기 종료율, 한 번도 안 나온 카드, 기본 카드가 쓰인 단계를 알려 준다.
카드를 늘린 뒤 너무 쉬우면 `index.html` CORE 구간의 `BURN` 이나 관객 공식 절편(`2.4`)을 손본다.

현재 228장 기준 무작위 선택 1,000판: 조기 종료 약 12%, 괴작 약 30%, 쪽박 약 45%, 본전 이상 약 11%. 기대 효과가 큰 선택만 고르면 본전 이상 35% 안팎. 생성 카드는 시드보다 수치가 가혹하게 나오는 경향이 있어 예산 감소 0.6배, 사기 감소 0.8배, 화제성·완성도 증가 1.3배로 보정해 넣었다.

## 이미지 넣기

1. `node tools/image-prompts.mjs` → `IMAGE_PROMPTS.md` 에 없는 이미지 프롬프트가 위에, 이미 있는 것은 맨 아래 접혀서 나온다. 다시 만들 이미지는 스크립트의 `REDO` 에 id와 이유를 적는다.
2. 생성한 PNG를 표의 파일명대로 `assets/raw/…` 에 둔다 (예: `assets/raw/endings/flop.png`).
3. `node tools/import-images.mjs` (ffmpeg 필요). 우측 하단 10%를 잘라 워터마크를 없애고 webp로 `img/…` 에 넣는다. 원본이 더 새로운 파일만 변환하며 `--force` 로 전부 다시 한다. `cards/` 는 960px·품질 75(장당 약 80KB), 나머지는 1280px·품질 85. `--crop 10 --max 1600` 식으로 조절.
4. 이미지가 없는 자리는 이모지(카드는 단계 표지)로 대체되므로 일부만 넣어도 된다. 현재 타이틀·OG·단계 7·엔딩 9·카드 93장이 모두 들어 있다(`img/` 약 11MB). 새 카드를 추가하면 `IMAGE_PROMPTS.md` 를 다시 뽑아 "있음" 표시가 없는 카드만 만들면 된다.
5. 생성 이미지는 `assets/raw/inbox/` 에 아무 이름으로 넣어도 된다(임포트 도구는 이 폴더를 건너뜀). 검수 후 `assets/raw/cards/<card-id>.jpg` 처럼 규칙 이름으로 옮기고 임포트한다. 처리한 원본은 `assets/raw/inbox/used/` 로.

## 배포

빌드 과정이 없다. 저장소 루트를 그대로 올리면 된다. `node_modules` 도 없다.

**GitHub Pages**
1. 저장소에 push → Settings → Pages → Source: `Deploy from a branch`, Branch: `main` / `/ (root)`.
2. `https://<계정>.github.io/<저장소>/` 로 접속. 공유 링크의 `?s=` 시드가 그대로 붙는다.

**Cloudflare Pages**
1. Workers & Pages → Create → Pages → 저장소 연결.
2. Build command 비움, Build output directory `/`. 끝.

배포 전 체크리스트: `node tools/build-cards.mjs` 로 `cards.js` 를 최신으로, `img/og.webp` 가 있으면 링크 미리보기가 생긴다, `index.html` 의 `og:url`·`og:image` 는 절대 주소(crank-in.today)로 박혀 있으니 다른 주소로 옮기면 두 줄을 바꾼다. 커스텀 도메인은 루트의 `CNAME` 파일(GitHub Pages가 읽음)과 HOSTING.KR 의 DNS 레코드(A 4개 → GitHub Pages IP, www CNAME → ggamdong.github.io)로 연결되어 있다. 리더보드 Worker 의 `ALLOWED_ORIGINS` 에도 같은 주소가 들어가야 한다.

## 카드 정합성 체크리스트 (검수 때 반드시)

- **단계**: 단어가 아니라 시점으로 판단한다. 대본 리딩은 캐스팅 이후, 예고편·기자 시사는 마케팅, 관객 반응·무대인사는 개봉. 촬영 중 추가 투자 유치처럼 투자 얘기라도 촬영 시점이면 촬영 카드다.
- **플래그**: `cond.has/any` 로 요구하는 플래그는 그 단계보다 앞(또는 같은 단계)에서 켜져야 한다. 생성기 프롬프트에 플래그별 단계표가 있다.
- **장르**: 사극·범인·좀비·귀신·폭발·실화·'코미디가 아니다'처럼 장르를 전제한 문장이 있으면 `cond.genre: ["period", ...]` 로 묶는다. 장르 키: thriller·comedy·drama·melo·zombie·period·occult·disaster(블록버스터)·sports·docu. 실화 카드는 좀비 액션만 빼고 전부, 배우 액션 카드는 스릴러·좀비·사극·블록버스터·스포츠만. 가족 코미디로 시작했는데 "이 영화는 조선 시대 사극이다"가 뜨면 안 된다. 중립 표현으로 고칠 수 있으면 그쪽이 낫다(모든 장르에서 쓰이므로).
- 검사 스크립트는 없고 눈으로 본다. `node tools/simulate.mjs --genre comedy` 처럼 장르별로 돌려 기본(대체) 카드가 안 나오는지 확인한다.

## 리더보드 · 집계 · 기록

- **오늘의 영화 리더보드**: `worker/` 의 Cloudflare Worker + D1. 배포 주소는 `index.html` 의 `LEADERBOARD_URL`(현재 `https://film-rescue-lb.ggamdong.workers.dev`). 비우면 UI가 숨겨진다. 오늘의 영화 결과만 제출하며 같은 IP는 시드당 첫 결과만 집계된다. 운영 방법은 `worker/README.md`.
- **방문·이벤트 집계**: GoatCounter(무료) 스크립트가 들어 있고 `data-goatcounter` 가 비어 있으면 스스로 제거된다. https://www.goatcounter.com 에서 사이트를 만들고 그 주소(`https://<code>.goatcounter.com/count`)를 `index.html` 의 `data-goatcounter` 에 넣으면 시작·완료·복사·공유·이미지 저장 이벤트가 `ev/...` 경로로 쌓인다.
- **내 기록 / 엔딩 도감**: 기기 `localStorage`(`fr_stats`)에 플레이 수, 최고 관객, 엔딩 9종 발견 여부, 만난 카드 id를 저장해 첫 화면에 보여 준다. 서버로 보내지 않는다.
- **연속 출석(스트릭)**: `fr_stats.streak = {cur, best, last}`. 오늘 날짜 덱의 오늘의 영화를 끝내면 `last`가 어제(KST 일수 −1)일 때 +1, 아니면 1부터. 하루 건너뛰면 0으로 보이고 최고 기록만 남는다. 2일 이상이면 결과 화면과 공유 텍스트에 `🔥 N일 연속 크랭크인` 줄이 붙는다.
- **오늘의 결과 분포**: Worker `/stats` 의 `dist`(엔딩별 인원)를 받아 리더보드 아래에 조기 종료·OTT·괴작·쪽박·본전·흥행 6구간 막대로 그린다(`DIST_GROUPS`). 참가자 3명 미만이면 숨긴다.

## 수정 포인트 빠른 안내

| 바꾸고 싶은 것 | 위치 |
|---|---|
| 턴 수·단계 | `index.html` CORE `STAGES` |
| 시작값·장르 보정 | `START`, `GENRES` |
| 엔딩 구간·운명 문구·한줄평 | `TIERS`, `FATES`, `FLAG_FATES`, `CRITIC` |
| 플래그가 관객 수에 주는 배수 | `MULT` |
| 플래그 한글 이름(결과 카드 '기록') | UI 쪽 `FLAG_KO` |
| 공유 텍스트 포맷 | `shareText` (리더보드 순위 줄 포함) |
| 리더보드 주소 / 집계 코드 | UI 쪽 `LEADERBOARD_URL`, `<script data-goatcounter>` |
| 결과 이미지(PNG 1080×1350) 레이아웃 | UI 쪽 `drawCanvas` |
