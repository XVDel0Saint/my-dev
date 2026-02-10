"use client"

import { useInView } from "@/hooks/use-in-view"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"
import { cn } from "@/lib/utils"

const projects = [
  {
    title: "StarLegends Travel & Business Platform",
    description: "Built pages, improved looked, tailored membership courses, and created custom plugins and features curated for the system's needs and workflows.",
    tags: ["WordPress", "PHP", "MySQL", "Custom Plugins"],
    image: "/my-dev/STBP.png",
    link: "https://starlegends.com.ph",
  },
  {
    title: "BCH Crypto Vendo Machine | Featuring Paytaca App",
    description: "Secure, seamless BCH transactions. From a BCH Vending machine selling such products and payment methods support via Paytaca App.",
    tags: ["Python", "Vue", "BitCash API", "Raspberry Pi", "PostgreSQL"],
    image: "/my-dev/bch-vendo-menu-select.png",
    link: "https://drive.google.com/drive/folders/1aEuotHHvgS4TGJ2nrJKjV8MZF6DWOpdO?usp=sharing",
  },
  {
    title: "AquaCon | Real-Time IoT Dashboard",
    description: "Raspberry Pi–powered system for smart operations.",
    tags: ["Arduino", "Python", "IoT", "Firebase"],
    image: "/my-dev/App-Monitor.jpg",
    link: "https://drive.google.com/drive/folders/1l1Da4Uj70Npgc-Rt5GQK0y677vkpeWmg?usp=sharing",
  },
  {
    title: "Static Web UI & Landing Pages",
    description: "Single Page multi selection menu and landing pages dedicated for small scale businesses selling and showcasing variety of products",
    tags: ["HTML", "CSS"],
    image: "/my-dev/Sizzling Steak.png",
    link: "https://drive.google.com/drive/folders/1KuNy_bbazyzq0CqwWtbeobxta0Z-XIrp?usp=drive_link",
  },
  {
    title: "Full stack Web Apps",
    description: "Recreating, and featured web design of software web systems such music SaaS Dashboard Analytics and media interfaces inspired from current trends and more.",
    tags: ["Laravel", "Vue", "MySQL"],
    image: "/my-dev/VideoLib.png",
    link: "https://drive.google.com/drive/folders/1vH7BlArn3-is5XeO4jpOPRBQQry5Hsp-?usp=sharing",
  },
  {
    title: "Desktop Apps and Cuztomized Projects",
    description: "Customized, curated projects tailored to meet each client’s specific needs and requirements.",
    tags: ["Java", "VB.NET", "Microsoft SQL 2017"],
    image: "/my-dev/inventra-watermark.png",
    link: "https://drive.google.com/drive/folders/1eybDDcPlTUgByuvQtXQ0Jcg-kARlRLiX?usp=sharing",
  },
]

export function ProjectsSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  return (
    <section id="projects" className="py-24 bg-background" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p
            className={cn(
              "text-secondary font-mono text-sm tracking-wider transition-all duration-700",
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
            )}
          >
            {"My Work"}
          </p>
          <h2
            className={cn(
              "text-3xl sm:text-4xl font-bold text-primary mt-2 transition-all duration-700 delay-100",
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
            )}
          >
            Featured Projects
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
  {projects.map((project, index) => {
    const Wrapper = project.link ? "a" : "div"

    return (
      <Wrapper
        key={project.title}
        href={project.link || undefined}
        target={project.link ? "_blank" : undefined}
        rel={project.link ? "noopener noreferrer" : undefined}
        className="block"
      >
        <Card
          className={cn(
            "group overflow-hidden bg-card border-border hover:border-accent/50 hover:shadow-xl transition-all duration-500 cursor-pointer flex flex-col h-full",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
            !project.link && "cursor-default hover:shadow-none hover:border-border"
          )}
            style={{ transitionDelay: `${(index + 2) * 100}ms` }}
        >
          <div className="relative overflow-hidden">
            <img
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Only show hover overlay if project has a link */}
            {project.link && (
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                <span className="flex items-center gap-2 text-primary-foreground font-medium">
                  See Samples <ExternalLink className="h-4 w-4" />
                </span>
              </div>
            )}
          </div>

          <CardContent className="p-4 flex flex-col flex-1">
            <h3 className="font-bold text-primary group-hover:text-secondary transition-colors">
              {project.title}
            </h3>
            <p className="text-sm text-foreground/60 mt-1">{project.description}</p>

            <div className="flex flex-wrap gap-2 mt-3">
              {project.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="text-xs bg-muted/50 text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </Wrapper>
    )
  })}
</div>

      </div>
    </section>
  )
}
