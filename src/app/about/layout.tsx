import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About | Adam Arbain — Software Engineer",
  description:
    "Software Engineering graduate from Universiti Malaya (CGPA 3.57). Research Assistant specializing in Full-Stack Development and AI-driven solutions. Seeking full-time roles from June 2026.",
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children
}
