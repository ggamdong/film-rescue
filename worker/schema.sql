-- 오늘의 영화 리더보드. 같은 시드(날짜 덱)끼리만 비교한다.
CREATE TABLE IF NOT EXISTS scores (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  seed INTEGER NOT NULL,
  ip_hash TEXT NOT NULL,          -- 같은 기기(IP)는 시드당 첫 결과만 집계
  audience INTEGER NOT NULL,      -- 0 = 조기 종료/OTT
  tier TEXT NOT NULL,
  title TEXT NOT NULL,
  genre TEXT NOT NULL,
  picks TEXT,                     -- [[cardId, choiceIdx], ...] 소수파 선택 집계용 (기존 DB는 ALTER TABLE scores ADD COLUMN picks TEXT)
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  UNIQUE (seed, ip_hash)
);
CREATE INDEX IF NOT EXISTS idx_scores_seed_aud ON scores (seed, audience);
