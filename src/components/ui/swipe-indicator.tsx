"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface SwipeIndicatorProps {
  className?: string
}

export function SwipeIndicator({ className }: SwipeIndicatorProps) {
  return (
    <div className={cn("flex items-center justify-center gap-2 text-muted-foreground text-sm py-2", className)}>
      <ChevronLeft className="h-4 w-4 animate-pulse" />
      <span>Swipe to see more</span>
      <ChevronRight className="h-4 w-4 animate-pulse" />
    </div>
  )
}
