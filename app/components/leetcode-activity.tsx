"use client"

import { useEffect, useState } from "react"

interface LeetCodeActivity {
  title: string
  titleSlug: string
  difficulty?: string
  easy?: number
  medium?: number
  hard?: number
}

export default function LeetCodeActivity() {
  const [activity, setActivity] = useState<LeetCodeActivity | null>(null)

  useEffect(() => {
    let cancelled = false

    async function loadActivity() {
      try {
        const response = await fetch("/api/leetcode")
        if (!response.ok) return
        const data = (await response.json()) as LeetCodeActivity
        if (!cancelled && data?.title && data?.titleSlug) {
          setActivity(data)
        }
      } catch {
        if (!cancelled) setActivity(null)
      }
    }

    loadActivity()

    return () => {
      cancelled = true
    }
  }, [])

  if (!activity) return null

  return (
    <section className="py-10">
      <div className="container mx-auto max-w-screen-xl px-4">
        <div className="rounded-md border bg-card/80 p-5">
          <p className="mb-2 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Latest LeetCode Activity
          </p>
          <a
            href={`https://leetcode.com/problems/${activity.titleSlug}/`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-semibold hover:text-primary"
          >
            {activity.title}
          </a>
          <div className="mt-3 flex flex-wrap gap-2 text-xs text-muted-foreground">
            {activity.difficulty && <span className="rounded-md bg-muted px-2 py-1">{activity.difficulty}</span>}
            {typeof activity.easy === "number" && <span>Easy {activity.easy}</span>}
            {typeof activity.medium === "number" && <span>Medium {activity.medium}</span>}
            {typeof activity.hard === "number" && <span>Hard {activity.hard}</span>}
          </div>
        </div>
      </div>
    </section>
  )
}
