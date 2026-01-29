"use client"

import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"
import { 
  DiJava, 
  DiPython, 
  DiPhp,
  DiJavascript1,
  DiReact,
  DiDjango,
  DiLaravel,
  DiMysql,
} from "react-icons/di";

import { 
  SiTypescript,
  SiCplusplus,
  SiVuedotjs,
  SiArduino,
  SiRaspberrypi, 
  SiVscodium,
  SiGit,
  SiWordpress,
  SiLinux,
  SiWinamp
} from "react-icons/si";


const techStack = {
  "Programming Languages": [
    { name: "Java", icon: DiJava },
    { name: "Python", icon: DiPython },
    { name: "PHP", icon: DiPhp },
    { name: "C++", icon: SiCplusplus }, 
    { name: "TypeScript", icon: SiTypescript },
    { name: "JavaScript", icon: DiJavascript1 },
  ],
  "Frameworks & Libraries": [
    { name: "Laravel", icon: DiLaravel },
    { name: "Vue.js", icon: SiVuedotjs },
    { name: "Django", icon: DiDjango },
    { name: "React", icon: DiReact },
  ],
  "Tools & Hardware": [
    { name: "Raspberry Pi", icon: SiRaspberrypi },
    { name: "Arduino", icon: SiArduino },
    { name: "Git", icon: SiGit },
    { name: "VS Code", icon: SiVscodium },
  ],
  Platforms: [
    { name: "WordPress", icon: SiWordpress },
    { name: "Linux", icon: SiLinux },
    { name: "Windows Server Express", icon: SiWinamp },
    { name: "MySQL", icon: DiMysql },
  ],
}

export function TechStackSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  return (
    <section className="py-24 bg-card" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p
            className={cn(
              "text-secondary font-mono text-sm tracking-wider transition-all duration-700",
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
            )}
          >
            {"Technologies"}
          </p>
          <h2
            className={cn(
              "text-3xl sm:text-4xl font-bold text-primary mt-2 transition-all duration-700 delay-100",
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
            )}
          >
            Tech Stack
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(techStack).map(([category, items], catIndex) => (
            <div
              key={category}
              className={cn(
                "transition-all duration-700",
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
              )}
              style={{ transitionDelay: `${(catIndex + 2) * 100}ms` }}
            >
              <h3 className="font-semibold text-primary mb-4 text-center">{category}</h3>
              <div className="grid grid-cols-2 gap-3">
                {items.map((tech, index) => (
                  <div
                    key={tech.name}
                    className={cn(
                      "p-3 rounded-lg bg-muted/30 border border-border hover:border-accent hover:bg-accent/10 transition-all duration-300 text-center group cursor-default",
                      isInView ? "opacity-100 scale-100" : "opacity-0 scale-95",
                    )}
                    style={{
                      transitionDelay: `${(catIndex * 4 + index + 4) * 50}ms`,
                    }}
                  >
                    <span className="text-2xl group-hover:scale-125 transition-transform inline-block">
                      <tech.icon size={28} className="mx-auto" />
                    </span>
                    
                    <p className="text-xs text-foreground/70 mt-1 font-medium">{tech.name}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
