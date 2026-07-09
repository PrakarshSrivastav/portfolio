"use client"

import { useEffect, useState } from "react"

interface GithubStats {
  publicRepos: number
  repo: string
  message: string
  url: string
  pushedAt: string
}

export default function GithubStats() {
  const [stats, setStats] = useState<GithubStats | null>(null)

  useEffect(() => {
    let cancelled = false

    async function loadStats() {
      try {
        const response = await fetch("/api/github")
        if (!response.ok) return
        const data = (await response.json()) as GithubStats
        if (!cancelled && data?.repo) {
          setStats(data)
        }
      } catch {
        if (!cancelled) setStats(null)
      }
    }

    loadStats()

    return () => {
      cancelled = true
    }
  }, [])

  if (!stats) return null

  return (
    <section className="py-10">
      <div className="container mx-auto max-w-screen-xl px-4">
        <div className="grid gap-4 rounded-md border bg-card/80 p-5 md:grid-cols-[180px_1fr]">
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-primary">Recently Pushed</p>
            <p className="mt-2 text-sm text-muted-foreground">{stats.publicRepos} public repos</p>
          </div>
          <div>
            <a href={stats.url} target="_blank" rel="noopener noreferrer" className="font-semibold hover:text-primary">
              {stats.repo}
            </a>
            <p className="mt-1 text-sm text-muted-foreground">{stats.message}</p>
            <p className="mt-2 text-xs text-muted-foreground">{new Date(stats.pushedAt).toLocaleDateString()}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
