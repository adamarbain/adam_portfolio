import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Projects | Adam Arbain — Software Engineer",
  description:
    "Portfolio of projects including Drone4Dengue (AI dengue prediction, >80% accuracy), Imaginur (image compression), SuDUAI ERP, and more. Built with Next.js, React Native, Python, TensorFlow.",
}

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return children
}
