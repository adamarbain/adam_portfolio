import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact | Adam Arbain — Software Engineer",
  description:
    "Get in touch with Adam Arbain. Software Engineer at Exact Asia providing services and advice for software projects. Based in Kuala Lumpur, Malaysia.",
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
