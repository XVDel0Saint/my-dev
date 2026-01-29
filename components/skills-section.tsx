"use client"
import { useInView } from "@/hooks/use-in-view"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Server, Cpu, Wifi } from "lucide-react"
import { cn } from "@/lib/utils"

const skills = [
  {
    icon: Code,
    title: "Software & Web Engineering",
    items: [
      "Design and development of full-stack web applications",
      "API design, third-party integrations, and workflow automation",
      "Custom WordPress themes, plugins, and platform-level extensions",
    ],
  },
  {
    icon: Server,
    title: "Systems & IT Support",
    items: [
      "Troubleshooting, OS config, server maintenance",
      "Documentation & process optimization",
      "Technical support & cross-department collaboration",
    ],
  },
  {
    icon: Cpu,
    title: "Hardware & IoT Integration",
    items: ["Arduino, Raspberry Pi", "Sensor-based systems, automation prototypes", "Hardware-software communication"],
  },
  {
    icon: Wifi,
    title: "Network & Infrastructure Fundamentals",
    items: [
      "Local network configuration and endpoint connectivity",
      "Basic switch and router setup, including VLAN awareness",
      "Network troubleshooting and performance optimization in office environments",
    ],
  },
]

export function SkillsSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  return (
    <section id="skills" className="py-24 bg-background" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p
            className={cn(
              "text-secondary font-mono text-sm tracking-wider transition-all duration-700",
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
            )}
          >
            {"What I Do"}
          </p>
          <h2
            className={cn(
              "text-3xl sm:text-4xl font-bold text-primary mt-2 transition-all duration-700 delay-100",
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
            )}
          >
            Skills & Expertise
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <Card
              key={skill.title}
              className={cn(
                "bg-card border-border hover:border-accent/50 hover:shadow-lg transition-all duration-500 group",
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
              )}
              style={{ transitionDelay: `${(index + 2) * 100}ms` }}
            >
              <CardHeader className="pb-2">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-secondary text-secondary-foreground group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                    <skill.icon className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-lg text-primary">{skill.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {skill.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-foreground/70">
                      <span className="text-accent mt-1.5 text-xs">●</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <p
          className={cn(
            "text-center mt-12 text-foreground/60 font-medium italic transition-all duration-100",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
          )}
        >
          "End-to-end solutions—built with clarity, efficiency, and reliability."
        </p>
      </div>
    </section>
  )
}
