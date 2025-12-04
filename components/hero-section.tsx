"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, Download, Mail } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      size: number
      opacity: number
    }> = []

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.1,
      })
    }

    let animationId: number

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle, i) => {
        particle.x += particle.vx
        particle.y += particle.vy

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(76, 118, 59, ${particle.opacity})`
        ctx.fill()

        particles.forEach((particle2, j) => {
          if (i === j) return
          const dx = particle.x - particle2.x
          const dy = particle.y - particle2.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 150) {
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(particle2.x, particle2.y)
            ctx.strokeStyle = `rgba(76, 118, 59, ${0.1 * (1 - distance / 150)})`
            ctx.stroke()
          }
        })
      })

      animationId = requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />

      {/* Decorative circuit lines */}
      <div className="absolute top-20 right-10 w-32 h-32 opacity-20">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path
            d="M10 50 H40 V20 H70 V50 H90"
            stroke="#4C763B"
            strokeWidth="2"
            fill="none"
            className="animate-pulse-glow"
          />
          <circle cx="40" cy="50" r="4" fill="#FFFD8F" />
          <circle cx="70" cy="20" r="4" fill="#FFFD8F" />
        </svg>
      </div>

      <div className="absolute bottom-20 left-10 w-24 h-24 opacity-20">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path
            d="M20 80 V50 H50 V20 H80"
            stroke="#4C763B"
            strokeWidth="2"
            fill="none"
            className="animate-pulse-glow"
          />
          <circle cx="50" cy="50" r="4" fill="#FFFD8F" />
        </svg>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-secondary font-mono text-sm tracking-wider opacity-0 animate-fade-up">
                {"Hello, I am"}
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary leading-tight opacity-0 animate-fade-up delay-100">
                Building Systems.
                <br />
                <span className="text-secondary">Solving Problems.</span>
                <br />
                Delivering Impact.
              </h1>
              <p className="text-lg text-foreground/70 max-w-lg opacity-0 animate-fade-up delay-200">
                Full-Stack Developer • IT Specialist • System & Web Solutions Builder
              </p>
            </div>

            <div className="flex flex-wrap gap-4 opacity-0 animate-fade-up delay-300">
              <a href="/Xyrel Vaughn Delos Santos.pdf" download="Xyrel-Vaughn-Delos-Santos.pdf">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 group">
                <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                Download Résumé
              </Button>
              </a>

              <a href="mailto:delossantosxyrelvaughn@gmail.com">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-accent bg-accent text-accent-foreground hover:bg-accent/80 animate-glow"
              >
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
              </Button>
              </a>
            </div>
          </div>

          <div className="hidden lg:flex justify-center items-center">
            <div className="relative">
              <div className="w-72 h-72 rounded-full bg-gradient-to-br from-primary to-secondary opacity-20 animate-float" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 rounded-full border-4 border-dashed border-accent/50 animate-[spin_20s_linear_infinite]" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-56 h-56 rounded-full overflow-hidden border-4 border-secondary/50 shadow-2xl">
                  <Image
                    src="/Me4 - tinified.png"
                    alt="Xyrel Vaughn Delos Santos - IT Specialist"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-up delay-500">
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-foreground/50 hover:text-primary transition-colors"
          >
            <span className="text-xs font-mono">Scroll Down</span>
            <ArrowDown className="h-4 w-4 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  )
}
