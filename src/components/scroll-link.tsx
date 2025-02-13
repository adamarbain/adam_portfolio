"use client"

import { useCallback } from "react"
import Link from "next/link"
import type React from "react" // Added import for React

interface ScrollLinkProps {
  href: string
  children: React.ReactNode
  className?: string
  onClick?: () => void
}

export function ScrollLink({ href, children, className, onClick }: ScrollLinkProps) {
  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault()
      const targetId = href.replace(/.*#/, "")
      const elem = document.getElementById(targetId)
      elem?.scrollIntoView({ behavior: "smooth" })
      if (onClick) onClick()
    },
    [href, onClick],
  )

  return (
    <Link href={href} className={className} onClick={handleClick}>
      {children}
    </Link>
  )
}

