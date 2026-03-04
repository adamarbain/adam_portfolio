"use client"

import { useEffect, useState, useCallback } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Eye } from "lucide-react"

export function VisitorCounter() {
  const [visitorCount, setVisitorCount] = useState<number>(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const incrementVisitor = useCallback(async () => {
    try {
      const hasCounted = sessionStorage.getItem("portfolio-visitor-counted")

      if (!hasCounted) {
        const response = await fetch("/api/visitors", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
        })

        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}))
          if (errorData.error?.includes("MONGODB_URI")) {
            const currentCount = localStorage.getItem("portfolio-visitor-count") || "0"
            const newCount = parseInt(currentCount) + 1
            localStorage.setItem("portfolio-visitor-count", newCount.toString())
            setVisitorCount(newCount)
            sessionStorage.setItem("portfolio-visitor-counted", "true")
            setIsLoaded(true)
            return
          }
          throw new Error("Failed to increment visitor count")
        }

        const data = await response.json()
        setVisitorCount(data.count)
        sessionStorage.setItem("portfolio-visitor-counted", "true")
      } else {
        const response = await fetch("/api/visitors")

        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}))
          if (errorData.error?.includes("MONGODB_URI")) {
            const currentCount = localStorage.getItem("portfolio-visitor-count") || "0"
            setVisitorCount(parseInt(currentCount))
            setIsLoaded(true)
            return
          }
          throw new Error("Failed to fetch visitor count")
        }

        const data = await response.json()
        setVisitorCount(data.count)
      }

      setIsLoaded(true)
    } catch (err) {
      console.error("Error with visitor counter:", err)
      setError("Failed to load visitor count")
      setIsLoaded(true)
    }
  }, [])

  useEffect(() => {
    // Defer API call so it doesn't block initial render
    if (typeof window !== "undefined" && "requestIdleCallback" in window) {
      window.requestIdleCallback(() => incrementVisitor())
    } else {
      setTimeout(() => incrementVisitor(), 100)
    }
  }, [incrementVisitor])

  if (!isLoaded) {
    return (
      <Card className="w-fit">
        <CardContent className="flex items-center gap-2 p-3">
          <Eye className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">Loading...</span>
        </CardContent>
      </Card>
    )
  }

  if (error) {
    return (
      <Card className="w-fit">
        <CardContent className="flex items-center gap-2 p-3">
          <Eye className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">Error loading count</span>
        </CardContent>
      </Card>
    )
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
