"use client"

import { useEffect, useState } from "react"

export default function VisitCounter() {
  const [count, setCount] = useState<number | null>(null)

  useEffect(() => {
    let cancelled = false

    async function loadVisits() {
      try {
        const sessionKey = "portfolio-visit-counted"
        const counted = sessionStorage.getItem(sessionKey)
        const response = await fetch("/api/visits", {
          method: "GET",
          headers: counted ? { "x-portfolio-counted": "1" } : undefined,
          cache: "no-store",
        })

        if (!response.ok) return

        const data = (await response.json()) as { count?: number }
        if (!cancelled && typeof data.count === "number") {
          setCount(data.count)
          sessionStorage.setItem(sessionKey, "1")
        }
      } catch {
        if (!cancelled) setCount(null)
      }
    }

    loadVisits()

    return () => {
      cancelled = true
    }
  }, [])

  if (count === null) return null

  return <span className="text-xs text-muted-foreground">👀 {count.toLocaleString()} visits</span>
}
