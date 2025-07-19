"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { SwipeIndicator } from "./swipe-indicator"

interface MobileCardContainerProps {
  children: React.ReactNode
  className?: string
}

export function MobileCardContainer({ children, className }: MobileCardContainerProps) {
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const scrollContainerRef = React.useRef<HTMLDivElement>(null)

  const childrenArray = React.Children.toArray(children)
  const totalCards = childrenArray.length

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current
      const cardWidth = clientWidth * 0.85 + 16 // 85vw + gap
      const newIndex = Math.round(scrollLeft / cardWidth)
      setCurrentIndex(newIndex)
    }
  }

  React.useEffect(() => {
    const container = scrollContainerRef.current
    if (container) {
      container.addEventListener("scroll", handleScroll)
      // Initial check
      handleScroll()

      return () => container.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div className={cn("md:grid md:gap-6 md:grid-cols-2", className)}>
      {/* Mobile: Horizontal scroll with indicators */}
      <div className="md:hidden">
        <div className="relative">
          {/* Scrollable container - removed gradient shadows */}
          <div
            ref={scrollContainerRef}
            className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
          >
            {React.Children.map(children, (child, index) => (
              <div key={index} className="flex-none w-[85vw] snap-center">
                {child}
              </div>
            ))}
          </div>
        </div>

        {/* Swipe indicator - only show if more than 1 card */}
        {totalCards > 1 && <SwipeIndicator className="mt-2" />}

        {/* Dot indicators */}
        {totalCards > 1 && (
          <div className="flex justify-center gap-2 mt-2">
            {Array.from({ length: totalCards }).map((_, index) => (
              <button
                key={index}
                className={cn(
                  "w-2 h-2 rounded-full transition-colors",
                  index === currentIndex ? "bg-primary" : "bg-muted-foreground/30",
                )}
                onClick={() => {
                  if (scrollContainerRef.current) {
                    const cardWidth = scrollContainerRef.current.clientWidth * 0.85 + 16
                    scrollContainerRef.current.scrollTo({
                      left: index * cardWidth,
                      behavior: "smooth",
                    })
                  }
                }}
                aria-label={`Go to card ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Desktop: Grid layout */}
      <div className="hidden md:contents">{children}</div>
    </div>
  )
}
