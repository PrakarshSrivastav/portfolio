import { NextResponse } from "next/server"

export const revalidate = 3600

const username = "prakarshsrivastav"
const endpoint = "https://leetcode.com/graphql"

async function leetcodeQuery<T>(query: string, variables: Record<string, string | number>) {
  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      referer: `https://leetcode.com/${username}/`,
    },
    body: JSON.stringify({ query, variables }),
    next: { revalidate: 3600 },
  })

  if (!response.ok) {
    throw new Error("LeetCode request failed")
  }

  return response.json() as Promise<{ data?: T }>
}

export async function GET() {
  try {
    const activityPayload = await leetcodeQuery<{
      recentAcSubmissionList: { title: string; titleSlug: string; timestamp: string }[]
      matchedUser?: {
        submitStatsGlobal?: {
          acSubmissionNum?: { difficulty: string; count: number }[]
        }
      }
    }>(
      `
        query userActivity($username: String!) {
          recentAcSubmissionList(username: $username, limit: 1) {
            title
            titleSlug
            timestamp
          }
          matchedUser(username: $username) {
            submitStatsGlobal {
              acSubmissionNum {
                difficulty
                count
              }
            }
          }
        }
      `,
      { username },
    )

    const submission = activityPayload.data?.recentAcSubmissionList?.[0]

    if (!submission) {
      return NextResponse.json({ error: "No recent submissions" }, { status: 404 })
    }

    const questionPayload = await leetcodeQuery<{ question?: { difficulty?: string } }>(
      `
        query questionData($titleSlug: String!) {
          question(titleSlug: $titleSlug) {
            difficulty
          }
        }
      `,
      { titleSlug: submission.titleSlug },
    )

    const counts = activityPayload.data?.matchedUser?.submitStatsGlobal?.acSubmissionNum ?? []
    const countByDifficulty = (difficulty: string) => counts.find((item) => item.difficulty === difficulty)?.count

    return NextResponse.json({
      title: submission.title,
      titleSlug: submission.titleSlug,
      difficulty: questionPayload.data?.question?.difficulty,
      easy: countByDifficulty("Easy"),
      medium: countByDifficulty("Medium"),
      hard: countByDifficulty("Hard"),
    })
  } catch {
    return NextResponse.json({ error: "LeetCode unavailable" }, { status: 503 })
  }
}
