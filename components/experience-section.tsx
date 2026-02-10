"use client"

import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"

const experiences = [
  {
    period: "2024–2025",
    role: "Web Developer | IT Specialist",
    company: "Starlegends Adventures Inc.",
    tagline: "Solving problems, streamlining operations, and building smarter systems.",
    highlights: [
      "Managed WordPress + Laravel systems",
      "Built custom plugins tailored to internal workflows",
      "Designed modern responsive landing pages",
      "Implemented IT documentation and process improvements",
      "Provided application & network support",
      "Executed fast-paced technical tasks cross-departmentally",
    ],
  },
  {
    period: "2024",
    role: "Developer Intern",
    company: "SciBiz Informatics",
    tagline: "Where software meets hardware and creativity meets innovation.",
    highlights: [
      "Developed using Python and Vue",
      "Integrated BitCash API with Paytaca App",
      "Used Raspberry Pi for automation",
      "Strengthened software-hardware integration skills",
    ],
  },
  {
    period: "2020–2022",
    role: "Freelance Developer",
    company: "Self-Employed",
    tagline: "Turning ideas into efficient tools crafted for local clients.",
    highlights: [
      "Developed custom management systems",
      "Full-stack apps using Laravel + Vue",
      "Desktop applications in Java & VB.NET",
      "Delivered reliable systems despite resource limitations",
    ],
  },
]

export function ExperienceSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  return (
    <section id="experience" className="py-24 bg-card" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p
            className={cn(
              "text-secondary font-mono text-sm tracking-wider transition-all duration-700",
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
            )}
          >
            {"My Journey"}
          </p>
          <h2
            className={cn(
              "text-3xl sm:text-4xl font-bold text-primary mt-2 transition-all duration-700 delay-100",
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
            )}
          >
            Experience Timeline
          </h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-muted" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.company}
                className={cn(
                  "relative grid md:grid-cols-2 gap-8 md:gap-16 transition-all duration-700",
                  isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
                )}
                style={{ transitionDelay: `${(index + 2) * 150}ms` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-accent border-4 border-primary animate-glow" />

                {/* Content */}
                <div
                  className={cn(
                    "pl-12 md:pl-0",
                    index % 2 === 0 ? "md:text-right md:pr-16" : "md:col-start-2 md:pl-16",
                  )}
                >
                  <span className="inline-block px-3 py-1 rounded-full bg-secondary/20 text-secondary text-sm font-mono mb-2">
                    {exp.period}
                  </span>
                  <h3 className="text-xl font-bold text-primary">{exp.role}</h3>
                  <p className="text-secondary font-medium">{exp.company}</p>
                  <p className="text-sm text-foreground/60 italic mt-1">"{exp.tagline}"</p>
                  <ul className={cn("mt-4 space-y-2", index % 2 === 0 ? "md:text-right" : "")}>
                    {exp.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="text-sm text-foreground/70 flex items-start gap-2"
                        style={{
                          justifyContent: index % 2 === 0 ? "flex-end" : "flex-start",
                        }}
                      >
                        {index % 2 !== 0 && <span className="text-accent mt-0.5">→</span>}
                        {highlight}
                        {index % 2 === 0 && <span className="text-accent mt-0.5">←</span>}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
