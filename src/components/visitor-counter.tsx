"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Eye } from "lucide-react"

export function VisitorCounter() {
  const [visitorCount, setVisitorCount] = useState<number>(0)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Get current visitor count from localStorage
    const currentCount = localStorage.getItem("portfolio-visitor-count")
    const count = currentCount ? Number.parseInt(currentCount, 10) : 0

    // Increment visitor count
    const newCount = count + 1
    localStorage.setItem("portfolio-visitor-count", newCount.toString())

    setVisitorCount(newCount)
    setIsLoaded(true)
  }, [])

  if (!isLoaded) {
    return null // Don't render until client-side hydration is complete
  }

  return (
    <Card className="w-fit">
      <CardContent className="flex items-center gap-2 p-3">
        <Eye className="h-4 w-4 text-muted-foreground" />
        <span className="text-sm text-muted-foreground">{visitorCount.toLocaleString()} visitors</span>
      </CardContent>
    </Card>
  )
}
