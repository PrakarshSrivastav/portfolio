"use client"

import { ChevronDown } from "lucide-react"
import { useEffect, useState } from "react"

export default function ScrollArrow() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setVisible(window.scrollY < 100)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToEditorial = () => {
    document.getElementById("editorial")?.scrollIntoView({ behavior: "smooth" })
  }

  if (!visible) return null

  return (
    <div
      className="fixed left-1/2 bottom-8 -translate-x-1/2 z-50 cursor-pointer"
      onClick={scrollToEditorial}
      aria-label="Scroll down"
    >
      <div className="flex flex-col items-center animate-bounce">
        <span className="text-xs text-muted-foreground mb-1">
          Scroll
        </span>
        <ChevronDown className="h-6 w-6 text-primary" />
      </div>
    </div>
  )
}
