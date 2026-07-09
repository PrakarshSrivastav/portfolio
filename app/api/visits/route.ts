import { kv } from "@vercel/kv"
import { NextResponse } from "next/server"

export const dynamic = "force-dynamic"

export async function GET(request: Request) {
  if (!process.env.KV_REST_API_URL || !process.env.KV_REST_API_TOKEN) {
    return NextResponse.json({ error: "Visit counter is not configured" }, { status: 503 })
  }

  try {
    const alreadyCounted = request.headers.get("x-portfolio-counted") === "1"
    const key = "portfolio:visits"
    const count = alreadyCounted ? await kv.get<number>(key) : await kv.incr(key)

    return NextResponse.json({ count: count ?? 0 })
  } catch {
    return NextResponse.json({ error: "Visit counter is unavailable" }, { status: 503 })
  }
}
