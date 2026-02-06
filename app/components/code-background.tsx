"use client"

import { useEffect, useRef } from "react"

export default function CodeBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Code snippets
    const codeSnippets = [
      "function hello() { return 'world' }",
      "const sum = (a, b) => a + b",
      "import React from 'react'",
      "class Node { constructor() {} }",
      "SELECT * FROM users",
      "for (let i = 0; i < 10; i++)",
      "public static void main()",
      "def process_data(data):",
      "<div className='container'>",
      "npm install next",
      "git commit -m 'fix'",
      "async function fetchData()",
      "@RestController",
      "useState, useEffect",
      "docker-compose up",
      "if (x > y) return true",
      "try { } catch (e) { }",
      "const [data, setData] = useState()",
      "export default function App()",
      "return new Promise((resolve) => {})",
    ]

    // Color schemes
    const colors = {
      particles: ["rgba(100, 149, 237, 0.2)", "rgba(65, 105, 225, 0.2)", "rgba(30, 144, 255, 0.2)"],
      text: ["rgba(100, 149, 237, 0.4)", "rgba(65, 105, 225, 0.4)", "rgba(30, 144, 255, 0.4)"],
      lines: ["rgba(100, 149, 237, 0.1)", "rgba(65, 105, 225, 0.1)", "rgba(30, 144, 255, 0.1)"],
    }

    // Particle class
    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string
      alpha: number
      text: string | null
      fontSize: number
      rotation: number
      rotationSpeed: number

      constructor(isCodeSnippet = false) {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 3 + 1
        this.speedX = (Math.random() - 0.5) * 0.5
        this.speedY = (Math.random() - 0.5) * 0.5
        this.color = colors.particles[Math.floor(Math.random() * colors.particles.length)]
        this.alpha = Math.random() * 0.2 + 0.1
        this.rotation = Math.random() * Math.PI * 2
        this.rotationSpeed = (Math.random() - 0.5) * 0.01

        if (isCodeSnippet) {
          this.text = codeSnippets[Math.floor(Math.random() * codeSnippets.length)]
          this.fontSize = Math.random() * 8 + 8
          this.color = colors.text[Math.floor(Math.random() * colors.text.length)]
          // Slower movement for text
          this.speedX = (Math.random() - 0.5) * 0.2
          this.speedY = (Math.random() - 0.5) * 0.2
        } else {
          this.text = null
          this.fontSize = 0
        }
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY
        this.rotation += this.rotationSpeed

        // Wrap around edges with a buffer
        const buffer = this.text ? 200 : 0 // Larger buffer for text particles
        if (this.x > canvas.width + buffer) this.x = -buffer
        else if (this.x < -buffer) this.x = canvas.width + buffer
        if (this.y > canvas.height + buffer) this.y = -buffer
        else if (this.y < -buffer) this.y = canvas.height + buffer
      }

      draw() {
        if (!ctx) return

        if (this.text) {
          ctx.save()
          ctx.translate(this.x, this.y)
          ctx.rotate(this.rotation)
          ctx.font = `${this.fontSize}px monospace`
          ctx.fillStyle = this.color
          ctx.fillText(this.text, 0, 0)
          ctx.restore()
        } else {
          ctx.fillStyle = this.color
          ctx.beginPath()
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
          ctx.fill()
        }
      }
    }

    let particlesArray: Particle[] = []

    // Initialize particles
    const initParticles = () => {
      particlesArray = []
      const numberOfParticles = Math.min(80, Math.max(30, window.innerWidth / 20))
      const numberOfCodeSnippets = Math.min(15, Math.max(5, window.innerWidth / 100))

      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle())
      }

      for (let i = 0; i < numberOfCodeSnippets; i++) {
        particlesArray.push(new Particle(true))
      }
    }

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      // Create new particles after resize
      initParticles()
    }

    // Connect particles with lines
    const connectParticles = () => {
      if (!ctx) return
      const maxDistance = 120

      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          if (particlesArray[a].text || particlesArray[b].text) continue // Skip text particles for connections

          const dx = particlesArray[a].x - particlesArray[b].x
          const dy = particlesArray[a].y - particlesArray[b].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < maxDistance) {
            const opacity = 0.15 * (1 - distance / maxDistance)
            ctx.strokeStyle = colors.lines[Math.floor(Math.random() * colors.lines.length)]
            ctx.globalAlpha = opacity
            ctx.lineWidth = 0.5
            ctx.beginPath()
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y)
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y)
            ctx.stroke()
            ctx.globalAlpha = 1
          }
        }
      }
    }

    // Initialize canvas and particles
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Animation loop
    const animate = () => {
      if (!ctx) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update()
        particlesArray[i].draw()
      }

      // Connect particles with lines if they're close enough
      connectParticles()

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10" style={{ pointerEvents: "none" }} />
}
