import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _inter = Inter({ subsets: ["latin"] })
const _jetbrainsMono = JetBrains_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Xyrel Vaughn Delos Santos | IT Specialist & Full-Stack Developer",
  description:
    "Full-Stack Developer • IT Specialist • System & Web Solutions Builder. Building systems, solving problems, and delivering impact.",
  icons: {
    icon: [
      {
        url: "/my-dev//XVD.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/my-dev//XVD.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/my-dev//icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/my-dev/XVD.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}