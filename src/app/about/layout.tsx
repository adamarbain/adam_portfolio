import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About | Adam Arbain — Software Engineer",
  description:
    "Software Engineering graduate from Universiti Malaya (CGPA 3.57) and Software Engineer at Exact Asia. Offering software services and technical advice.",
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children
}
