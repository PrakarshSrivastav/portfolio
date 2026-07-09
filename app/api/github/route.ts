import { NextResponse } from "next/server"

export const revalidate = 1800

const username = "PrakarshSrivastav"

export async function GET() {
  try {
    const [userResponse, eventsResponse] = await Promise.all([
      fetch(`https://api.github.com/users/${username}`, { next: { revalidate: 1800 } }),
      fetch(`https://api.github.com/users/${username}/events/public`, { next: { revalidate: 1800 } }),
    ])

    if (!userResponse.ok || !eventsResponse.ok) {
      return NextResponse.json({ error: "GitHub unavailable" }, { status: 503 })
    }

    const user = await userResponse.json()
    const events = await eventsResponse.json()
    const push = events.find((event: { type: string }) => event.type === "PushEvent")
    const commit = push?.payload?.commits?.[0]

    if (!push || !commit) {
      return NextResponse.json({ error: "No recent push" }, { status: 404 })
    }

    return NextResponse.json({
      publicRepos: user.public_repos,
      repo: push.repo.name,
      message: commit.message,
      url: `https://github.com/${push.repo.name}`,
      pushedAt: push.created_at,
    })
  } catch {
    return NextResponse.json({ error: "GitHub unavailable" }, { status: 503 })
  }
}
