import { NextResponse } from 'next/server'
import dbConnect from '@/lib/mongodb'
import Visitor from '@/lib/models/Visitor'

export async function GET() {
  try {
    await dbConnect()
    
    // Get the visitor count document (create if doesn't exist)
    let visitorDoc = await Visitor.findOne()
    
    if (!visitorDoc) {
      visitorDoc = await Visitor.create({ count: 0 })
    }
    
    return NextResponse.json({ count: visitorDoc.count })
  } catch (error) {
    console.error('Error fetching visitor count:', error)
    const errorMessage = error instanceof Error ? error.message : 'Failed to fetch visitor count'
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    )
  }
}

export async function POST() {
  try {
    await dbConnect()
    
    // Get or create the visitor count document
    let visitorDoc = await Visitor.findOne()
    
    if (!visitorDoc) {
      visitorDoc = await Visitor.create({ count: 1 })
    } else {
      // Increment the count
      visitorDoc.count += 1
      visitorDoc.lastUpdated = new Date()
      await visitorDoc.save()
    }
    
    return NextResponse.json({ count: visitorDoc.count })
  } catch (error) {
    console.error('Error incrementing visitor count:', error)
    const errorMessage = error instanceof Error ? error.message : 'Failed to increment visitor count'
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    )
  }
} 