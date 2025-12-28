"use client"

import { useInView } from "@/hooks/use-in-view"
import { Card, CardContent } from "@/components/ui/card"
import { Briefcase, Code2, Cpu } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"

const stats = [
  {
    icon: Briefcase,
    value: "3+",
    label: "Years Experience",
    description: "Development & Technical IT",
  },
  {
    icon: Code2,
    value: "Multi-Stack",
    label: "Expertise",
    description: "Python, Vue, Laravel, WordPress",
  },
  {
    icon: Cpu,
    value: "Hardware",
    label: "Real-Time IoT Integrations",
    description: "Arduino, Raspberry Pi",
  },
]

export function AboutSection() {
  const { ref, isInView } = useInView({ threshold: 0.2 })

  return (
    <section id="about" className="py-24 bg-card" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div
              className={cn(
                "relative w-48 h-48 mx-auto lg:hidden rounded-2xl overflow-hidden border-4 border-secondary/30 shadow-xl transition-all duration-700",
                isInView ? "opacity-100 scale-100" : "opacity-0 scale-95",
              )}
            >
              <Image src="/Me4 - tinified.png" alt="Xyrel Vaughn Delos Santos" fill className="object-cover" />
            </div>

            <div className="space-y-4">
              <p
                className={cn(
                  "text-secondary font-mono text-sm tracking-wider transition-all duration-700",
                  isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
                )}
              >
                {"About Me"}
              </p>

                <div
              className={cn(
                "hidden lg:block relative mx-auto transition-all duration-700",
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
              )}
            >
              <div className="relative w-64 h-64 mx-auto">
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl blur-xl" />
                <div className="relative w-full h-full rounded-2xl overflow-hidden border-4 border-secondary/30 shadow-2xl">
                  <Image
                    src="/my-dev/Me4 - tinified.png"
                    alt="Xyrel Vaughn Delos Santos"
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Decorative corner accents */}
                <div className="absolute -top-2 -left-2 w-8 h-8 border-t-4 border-l-4 border-accent rounded-tl-lg" />
                <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-4 border-r-4 border-accent rounded-br-lg" />
              </div>
            </div>

              <h2
                className={cn(
                  "text-3xl sm:text-4xl font-bold text-primary transition-all duration-700 delay-100",
                  isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
                )}
              >
                Crafting Smart Solutions with Precision and Purpose.
              </h2>
            </div>

            <div
              className={cn(
                "space-y-4 text-foreground/70 leading-relaxed transition-all duration-700 delay-200",
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
              )}
            >
              <p>
                I'm <strong className="text-primary">Xyrel Vaughn Delos Santos</strong>, a results-driven developer and
                IT specialist with a unique blend of software engineering experience and hands-on systems administration
                expertise.
              </p>
              <p>
                From building custom web applications and WordPress solutions to deploying small-scale networks and
                troubleshooting critical technical issues, I deliver reliable, efficient, and user-centered solutions.
              </p>
              <p>
                What truly sets me apart is my <strong className="text-secondary">versatility</strong> combining
                creative problem-solving, clean coding practices, and a strong operational mindset to support teams and
                build impactful digital systems.
              </p>
            </div>
          </div>

          <div className="space-y-6">

            <div className="grid gap-4">
              {stats.map((stat, index) => (
                <Card
                  key={stat.label}
                  className={cn(
                    "bg-secondary/10 border-secondary/30 hover:border-accent/50 transition-all duration-500 group",
                    isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8",
                  )}
                  style={{ transitionDelay: `${(index + 3) * 100}ms` }}
                >
                  <CardContent className="p-6 flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-secondary text-secondary-foreground group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                      <stat.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-bold text-primary">{stat.value}</span>
                        <span className="text-sm font-medium text-foreground/70">{stat.label}</span>
                      </div>
                      <p className="text-sm text-foreground/50">{stat.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
