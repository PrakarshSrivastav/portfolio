"use client"

import { ChevronDown } from "lucide-react"
import { useEffect, useState } from "react"

interface ScrollArrowProps {
  targetId?: string
  className?: string
}

export default function ScrollArrow({ targetId = "now", className = "" }: ScrollArrowProps) {
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

  const scrollToTarget = () => {
    document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" })
  }

  if (!visible) return null

  return (
    <div
      className={`absolute left-1/2 bottom-8 z-20 -translate-x-1/2 cursor-pointer ${className}`}
      onClick={scrollToTarget}
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
