import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from "@/components/mode-toggle"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Adam Bin Arbain - Portfolio",
  description: "Software Engineering student at Universiti Malaya",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={cn(inter.className, "min-h-screen font-sans antialiased")}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="relative flex min-h-screen flex-col">
            <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
              <div className="container flex h-14 items-center justify-between">
                <nav className="flex items-center space-x-4 lg:space-x-6 text-sm font-medium">
                  <a href="#home" className="transition-colors hover:text-foreground/80">
                    Home
                  </a>
                  <a href="#education" className="transition-colors hover:text-foreground/80">
                    Education
                  </a>
                  <a href="#skills" className="transition-colors hover:text-foreground/80">
                    Skills
                  </a>
                  <a href="#experience" className="transition-colors hover:text-foreground/80">
                    Experience
                  </a>
                  <a href="#projects" className="transition-colors hover:text-foreground/80">
                    Projects
                  </a>
                  <a href="#extracurriculars" className="transition-colors hover:text-foreground/80">
                    Extracurriculars
                  </a>
                  <a href="#achievements" className="transition-colors hover:text-foreground/80">
                    Achievements
                  </a>
                  <a href="#reference" className="transition-colors hover:text-foreground/80">
                    Reference
                  </a>
                </nav>
                <ModeToggle />
              </div>
            </header>
            <main className="flex-1 bg-transparent">{children}</main>
            <footer className="border-t py-6 md:py-0 bg-background/80">
              <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
                <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                  © 2024 Adam Bin Arbain. All rights reserved.
                </p>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

