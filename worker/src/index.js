// 오늘도 크랭크인! 리더보드 API (Cloudflare Worker + D1)
//   POST /submit  {seed, audience, tier, title, genre}  → 저장 후 그 시드의 통계 반환
//   GET  /stats?seed=261103&audience=120000             → 통계만 반환
// 응답: { count, avg, median, beat (내가 이긴 비율 0~100), rank, top: [{title, genre, audience, tier}] }
const TIERS = new Set(["bankrupt", "boycott", "delayed", "ott", "cult", "flop", "even", "hit", "mega"]);

function cors(req, env) {
  const origin = req.headers.get("Origin") || "";
  const allowed = (env.ALLOWED_ORIGINS || "").split(",").map((s) => s.trim()).filter(Boolean);
  const ok = allowed.includes(origin);
  return {
    "Access-Control-Allow-Origin": ok ? origin : allowed[0] || "*",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "content-type",
    "Access-Control-Max-Age": "86400",
    "Vary": "Origin",
    "Cache-Control": "no-store",
    "Content-Type": "application/json; charset=utf-8",
  };
}
const json = (obj, status, headers) => new Response(JSON.stringify(obj), { status, headers });

async function ipHash(req, salt) {
  const ip = req.headers.get("CF-Connecting-IP") || "0.0.0.0";
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(ip + "|" + salt));
  return [...new Uint8Array(buf)].slice(0, 12).map((b) => b.toString(16).padStart(2, "0")).join("");
}

async function stats(env, seed, audience) {
  const agg = await env.DB.prepare("SELECT COUNT(*) AS n, AVG(audience) AS avg, SUM(audience < ?1) AS below, SUM(audience <= ?1) AS belowEq FROM scores WHERE seed = ?2")
    .bind(audience, seed).first();
  const n = agg?.n || 0;
  let median = 0;
  if (n) {
    const row = await env.DB.prepare("SELECT audience FROM scores WHERE seed = ?1 ORDER BY audience LIMIT 1 OFFSET ?2").bind(seed, Math.floor((n - 1) / 2)).first();
    median = row?.audience || 0;
  }
  const top = (await env.DB.prepare("SELECT title, genre, audience, tier FROM scores WHERE seed = ?1 ORDER BY audience DESC, id ASC LIMIT 5").bind(seed).all()).results || [];
  const beat = n ? Math.round((100 * (agg.below || 0)) / n) : 0;          // 내가 이긴 사람 비율
  const rank = n ? n - (agg.belowEq || 0) + 1 : 1;                         // 공동 순위(높은 관객이 1위)
  return { count: n, avg: Math.round(agg?.avg || 0), median, beat, rank, top };
}

export default {
  async fetch(req, env) {
    const h = cors(req, env);
    if (req.method === "OPTIONS") return new Response(null, { status: 204, headers: h });
    const url = new URL(req.url);
    try {
      if (req.method === "GET" && url.pathname === "/stats") {
        const seed = Number(url.searchParams.get("seed")), audience = Math.max(0, Number(url.searchParams.get("audience") || 0));
        if (!Number.isInteger(seed) || seed < 0) return json({ error: "bad seed" }, 400, h);
        return json(await stats(env, seed, audience), 200, h);
      }
      if (req.method === "POST" && url.pathname === "/submit") {
        const b = await req.json().catch(() => null);
        if (!b) return json({ error: "bad json" }, 400, h);
        const seed = Number(b.seed), audience = Math.round(Number(b.audience));
        const title = String(b.title || "").slice(0, 24), genre = String(b.genre || "").slice(0, 16), tier = String(b.tier || "");
        if (!Number.isInteger(seed) || seed < 0 || !Number.isFinite(audience) || audience < 0 || audience > 15_000_000 || !TIERS.has(tier) || !title)
          return json({ error: "bad payload" }, 400, h);
        const hash = await ipHash(req, env.SALT || "crank-in");
        // 같은 IP는 시드당 첫 결과만 저장 (오늘의 영화는 하루 한 번이 기본)
        const r = await env.DB.prepare("INSERT OR IGNORE INTO scores (seed, ip_hash, audience, tier, title, genre) VALUES (?1, ?2, ?3, ?4, ?5, ?6)")
          .bind(seed, hash, audience, tier, title, genre).run();
        const mine = await env.DB.prepare("SELECT audience FROM scores WHERE seed = ?1 AND ip_hash = ?2").bind(seed, hash).first();
        const s = await stats(env, seed, mine?.audience ?? audience);
        return json({ ...s, accepted: !!r.meta?.changes, recorded: mine?.audience ?? audience }, 200, h);
      }
      if (url.pathname === "/" || url.pathname === "/health") return json({ ok: true, service: "film-rescue-lb" }, 200, h);
      return json({ error: "not found" }, 404, h);
    } catch (e) {
      return json({ error: String(e.message || e) }, 500, h);
    }
  },
};
