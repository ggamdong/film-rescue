# 리더보드 Worker (Cloudflare Workers + D1)

오늘의 영화(같은 날짜 시드)끼리 관객 수를 비교해 "N명 중 상위 X%"를 돌려준다. 무작위 영화는 시드가 제각각이라 보내지 않는다.

## 최초 배포 (한 번)

```bash
npx wrangler login
```

```bash
cd worker && npx wrangler d1 create film-rescue-lb
```

출력된 `database_id` 를 `wrangler.toml` 의 `REPLACE_ME` 자리에 넣은 뒤:

```bash
cd worker && npx wrangler d1 execute film-rescue-lb --remote --file=schema.sql
```

```bash
cd worker && npx wrangler deploy
```

배포 주소(`https://film-rescue-lb.<계정>.workers.dev`)를 `index.html` 의 `LEADERBOARD_URL` 에 넣고 푸시하면 켜진다. 비워 두면 리더보드 UI가 숨겨진다.

## API

| 메서드 | 경로 | 설명 |
|---|---|---|
| POST | `/submit` | `{seed, audience, tier, title, genre}` 저장 후 통계 반환. 같은 IP는 시드당 첫 결과만 저장 |
| GET | `/stats?seed=&audience=` | 통계만 조회 |

응답: `{count, avg, median, beat, rank, top:[{title,genre,audience,tier}]}`. `beat` 는 내가 이긴 사람 비율(0~100).

## 운영

- `ALLOWED_ORIGINS`(wrangler.toml)에 배포 도메인을 넣는다. 다른 출처의 요청은 CORS에서 막힌다.
- 어뷰징은 IP당 시드 1회 + 값 범위 검증 정도만 막는다. 공개 후 이상치가 보이면 `wrangler d1 execute ... --command "DELETE FROM scores WHERE audience > 12000000"` 식으로 정리.
- 비용: Workers 무료 10만 요청/일, D1 무료 500만 읽기/일. 이 게임 규모에선 0원.
