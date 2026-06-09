"use client"

import { useEffect, useRef } from "react"

type Star = {
  x: number
  y: number
  radius: number
  baseOpacity: number
  twinkleSpeed: number
  phase: number
}

export function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let stars: Star[] = []
    let animationFrame = 0
    let dpr = Math.min(window.devicePixelRatio || 1, 2)

    const buildStars = () => {
      const count = Math.floor((window.innerWidth * window.innerHeight) / 6000)
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        radius: Math.random() * 1.3 + 0.3,
        baseOpacity: Math.random() * 0.6 + 0.2,
        twinkleSpeed: Math.random() * 0.02 + 0.005,
        phase: Math.random() * Math.PI * 2,
      }))
    }

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      buildStars()
    }

    const draw = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
      for (const star of stars) {
        star.phase += star.twinkleSpeed
        const opacity = star.baseOpacity + Math.sin(star.phase) * 0.25
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${Math.max(0, opacity)})`
        ctx.fill()
      }
      animationFrame = requestAnimationFrame(draw)
    }

    resize()
    draw()
    window.addEventListener("resize", resize)

    return () => {
      cancelAnimationFrame(animationFrame)
      window.removeEventListener("resize", resize)
    }
  }, [])

  return <canvas ref={canvasRef} className="pointer-events-none fixed inset-0 h-full w-full" aria-hidden="true" />
}
