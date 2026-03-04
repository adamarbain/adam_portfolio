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
  const touchStartRef = React.useRef<{ x: number; time: number } | null>(null)
  const isDraggingRef = React.useRef(false)

  const childrenArray = React.Children.toArray(children)
  const totalCards = childrenArray.length

  const getCardWidth = () => {
    if (!scrollContainerRef.current) return 0
    return scrollContainerRef.current.clientWidth * 0.85 + 16 // 85vw + gap
  }

  const snapToIndex = (index: number) => {
    if (!scrollContainerRef.current) return
    const clamped = Math.max(0, Math.min(index, totalCards - 1))
    const cardWidth = getCardWidth()
    scrollContainerRef.current.scrollTo({
      left: clamped * cardWidth,
      behavior: "smooth",
    })
    setCurrentIndex(clamped)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartRef.current = {
      x: e.touches[0].clientX,
      time: Date.now(),
    }
    isDraggingRef.current = true
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStartRef.current || !isDraggingRef.current) return
    isDraggingRef.current = false

    const touchEnd = e.changedTouches[0].clientX
    const deltaX = touchStartRef.current.x - touchEnd
    const elapsed = Date.now() - touchStartRef.current.time
    const velocity = Math.abs(deltaX) / elapsed // px/ms

    // Only advance one card at a time, even on fast swipes
    const threshold = 50 // minimum px drag to register
    if (Math.abs(deltaX) > threshold || velocity > 0.3) {
      if (deltaX > 0) {
        snapToIndex(currentIndex + 1)
      } else {
        snapToIndex(currentIndex - 1)
      }
    } else {
      // Snap back to current
      snapToIndex(currentIndex)
    }

    touchStartRef.current = null
  }

  const handleScroll = React.useCallback(() => {
    if (scrollContainerRef.current && !isDraggingRef.current) {
      const { scrollLeft } = scrollContainerRef.current
      const cardWidth = getCardWidth()
      const newIndex = Math.round(scrollLeft / cardWidth)
      setCurrentIndex(newIndex)
    }
  }, [])

  React.useEffect(() => {
    const container = scrollContainerRef.current
    if (container) {
      container.addEventListener("scroll", handleScroll)
      handleScroll()
      return () => container.removeEventListener("scroll", handleScroll)
    }
  }, [handleScroll])

  return (
    <div className={cn("md:grid md:gap-6 md:grid-cols-2", className)}>
      {/* Mobile: Horizontal scroll with indicators */}
      <div className="md:hidden">
        <div className="relative">
          <div
            ref={scrollContainerRef}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide mobile-carousel"
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
                onClick={() => snapToIndex(index)}
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
