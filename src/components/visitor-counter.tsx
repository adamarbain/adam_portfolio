"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Eye } from "lucide-react"

export function VisitorCounter() {
  const [visitorCount, setVisitorCount] = useState<number>(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const incrementVisitor = async () => {
      try {
        // Check if this session has already been counted
        const hasCounted = sessionStorage.getItem("portfolio-visitor-counted")
        
        if (!hasCounted) {
          // Increment visitor count
          const response = await fetch("/api/visitors", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
          })

          if (!response.ok) {
            const errorData = await response.json().catch(() => ({}))
            if (errorData.error?.includes('MONGODB_URI')) {
              // MongoDB not configured, fallback to localStorage
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
          
          // Mark this session as counted
          sessionStorage.setItem("portfolio-visitor-counted", "true")
        } else {
          // Just fetch the current count without incrementing
          const response = await fetch("/api/visitors")
          
          if (!response.ok) {
            const errorData = await response.json().catch(() => ({}))
            if (errorData.error?.includes('MONGODB_URI')) {
              // MongoDB not configured, fallback to localStorage
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
    }

    incrementVisitor()
  }, [])

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
