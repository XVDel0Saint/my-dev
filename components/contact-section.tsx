"use client"

import { useInView } from "@/hooks/use-in-view"
import { Button } from "@/components/ui/button"
import { Mail, Phone, Facebook, Github, Linkedin } from "lucide-react"
import { cn } from "@/lib/utils"

export function ContactSection() {
  const { ref, isInView } = useInView({ threshold: 0.2 })

  return (
    <section id="contact" className="py-24 bg-primary text-primary-foreground relative overflow-hidden" ref={ref}>
      {/* Floating elements - left side */}
      <div className="absolute left-4 sm:left-8 top-1/4 w-2 h-2 bg-accent/60 rounded-full animate-float" />
      <div className="absolute left-12 sm:left-24 top-1/3 w-3 h-3 border border-accent/40 rounded-full animate-float-delayed" />
      <div className="absolute left-6 sm:left-16 bottom-1/4 w-1.5 h-1.5 bg-secondary/50 rounded-full animate-float" />
      <div className="absolute left-20 sm:left-32 bottom-1/3 w-2 h-2 border border-secondary/30 rounded-full animate-float-delayed" />

      {/* Floating elements - right side */}
      <div className="absolute right-4 sm:right-8 top-1/3 w-2 h-2 bg-accent/60 rounded-full animate-float-delayed" />
      <div className="absolute right-12 sm:right-24 top-1/4 w-3 h-3 border border-accent/40 rounded-full animate-float" />
      <div className="absolute right-6 sm:right-16 bottom-1/3 w-1.5 h-1.5 bg-secondary/50 rounded-full animate-float-delayed" />
      <div className="absolute right-20 sm:right-32 bottom-1/4 w-2 h-2 border border-secondary/30 rounded-full animate-float" />

      {/* Corner circuit accents */}
      <div className="absolute top-8 left-8 opacity-20 hidden sm:block">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
          <path d="M0 30 H20 V10 H30" stroke="#B0CE88" strokeWidth="1" />
          <circle cx="30" cy="10" r="2" fill="#B0CE88" />
        </svg>
      </div>
      <div className="absolute top-8 right-8 opacity-20 hidden sm:block">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
          <path d="M60 30 H40 V10 H30" stroke="#B0CE88" strokeWidth="1" />
          <circle cx="30" cy="10" r="2" fill="#B0CE88" />
        </svg>
      </div>
      <div className="absolute bottom-8 left-8 opacity-20 hidden sm:block">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
          <path d="M0 30 H20 V50 H30" stroke="#FFFD8F" strokeWidth="1" />
          <circle cx="30" cy="50" r="2" fill="#FFFD8F" />
        </svg>
      </div>
      <div className="absolute bottom-8 right-8 opacity-20 hidden sm:block">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
          <path d="M60 30 H40 V50 H30" stroke="#FFFD8F" strokeWidth="1" />
          <circle cx="30" cy="50" r="2" fill="#FFFD8F" />
        </svg>
      </div>
      {/* End floating decorations */}

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <p
          className={cn(
            "font-mono text-sm tracking-wider text-accent transition-all duration-700",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
          )}
        >
          {"Get In Touch"}
        </p>
        <h2
          className={cn(
            "text-3xl sm:text-4xl font-bold mt-2 transition-all duration-700 delay-100",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
          )}
        >
          Let's Build Something Smart, Together.
        </h2>
        <p
          className={cn(
            "text-primary-foreground/80 mt-4 max-w-2xl mx-auto transition-all duration-700 delay-200",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
          )}
        >
          Have a project in mind or just want to connect? I'm always open to discussing new opportunities and ideas.
        </p>

        <div
          className={cn(
            "flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 transition-all duration-700 delay-300",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
          )}
        >
          <a href="mailto:delossantosxyrelvaughn@gmail.com">
          <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 animate-glow">
            <Mail className="mr-2 h-4 w-4" />
            delossantosxyrelvaughn@gmail.com
          </Button>
          </a>

          <a href="tel:+639774045326">
          <Button
            size="lg"
            variant="outline"
            className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
          >
            <Phone className="mr-2 h-4 w-4" />
            +63 977 404 5326
          </Button>
          </a>
        </div>

        <p className={cn(
          "text-sm text-primary-foreground/80 mt-4 max-w-2xl mx-auto leading-relaxed transition-all duration-700 delay-200",
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
        )}
        >
          I am generally available for calls around 7 PM - 9 PM Philippine Standard Time (UTC+08:00) and strive to respond to emails within the same day.
        </p>


        <div
          className={cn(
            "flex items-center justify-center gap-4 mt-8 transition-all duration-700 delay-400",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
          )}
        >
          <a
            href="https://www.facebook.com/XTriminator"
            className="p-3 rounded-full border border-primary-foreground/30 hover:bg-primary-foreground/10 hover:border-accent transition-all duration-300 group"
            aria-label="Facebook"
          >
            <Facebook className="h-5 w-5 group-hover:text-accent transition-colors" />
          </a>
          <a
            href="https://www.linkedin.com/in/xyrel-vaughn-delos-santos-603468399"
            className="p-3 rounded-full border border-primary-foreground/30 hover:bg-primary-foreground/10 hover:border-accent transition-all duration-300 group"
            aria-label="GitHub"
          >
            <Linkedin className="h-5 w-5 group-hover:text-accent transition-colors" />
          </a>
          <a
            href="https://github.com/XVDel0Saint"
            className="p-3 rounded-full border border-primary-foreground/30 hover:bg-primary-foreground/10 hover:border-accent transition-all duration-300 group"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5 group-hover:text-accent transition-colors" />
          </a>
        </div>

        {/* Decorative circuit accent */}
        <div
          className={cn(
            "mt-16 flex justify-center transition-all duration-700 delay-500",
            isInView ? "opacity-100" : "opacity-0",
          )}
        >
          <svg viewBox="0 0 200 20" className="w-48 h-5" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0 10 H60 V5 H80 V15 H100 V5 H120 V15 H140 V10 H200"
              stroke="#FFFD8F"
              strokeWidth="2"
              fill="none"
              className="animate-pulse-glow"
            />
            <circle cx="60" cy="10" r="3" fill="#FFFD8F" />
            <circle cx="100" cy="10" r="3" fill="#FFFD8F" />
            <circle cx="140" cy="10" r="3" fill="#FFFD8F" />
          </svg>
        </div>
      </div>
    </section>
  )
}
