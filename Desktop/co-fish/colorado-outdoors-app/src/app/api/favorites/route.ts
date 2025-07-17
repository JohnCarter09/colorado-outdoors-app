import { NextResponse } from 'next/server'
import { auth } from '@clerk/nextjs/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET() {
  try {
    const { userId } = await auth()
    
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const user = await prisma.user.findUnique({
      where: { clerkId: userId },
      include: { 
        favoriteLocations: {
          orderBy: { createdAt: 'desc' }
        }
      }
    })

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 })
    }

    return NextResponse.json({ 
      success: true,
      favorites: user.favoriteLocations
    })
  } catch (error) {
    console.error('Error fetching favorites:', error)
    return NextResponse.json({ 
      success: false, 
      error: 'Internal error' 
    }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const { userId } = await auth()
    
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await request.json()
    const { 
      locationName, 
      locationType, 
      latitude, 
      longitude, 
      notes,
      troutStockingId,
      parkInfoId,
      eventId
    } = body

    // Validate required fields
    if (!locationName || !locationType) {
      return NextResponse.json({ 
        success: false,
        error: 'Location name and type are required' 
      }, { status: 400 })
    }

    const user = await prisma.user.findUnique({
      where: { clerkId: userId }
    })

    if (!user) {
      return NextResponse.json({ 
        success: false,
        error: 'User not found' 
      }, { status: 404 })
    }

    // Check if favorite already exists
    const existingFavorite = await prisma.userFavorite.findFirst({
      where: {
        userId: user.id,
        customLocation: locationName,
        OR: [
          { troutStockingId },
          { parkInfoId },
          { eventId }
        ]
      }
    })

    if (existingFavorite) {
      return NextResponse.json({
        success: false,
        error: 'Location already in favorites'
      }, { status: 409 })
    }

    const favorite = await prisma.userFavorite.create({
      data: {
        userId: user.id,
        customLocation: locationName,
        latitude,
        longitude,
        notes,
        troutStockingId,
        parkInfoId,
        eventId
      }
    })

    return NextResponse.json({ 
      success: true,
      favorite 
    })
  } catch (error) {
    console.error('Error creating favorite:', error)
    return NextResponse.json({ 
      success: false,
      error: 'Internal error' 
    }, { status: 500 })
  }
}

export async function DELETE(request: Request) {
  try {
    const { userId } = await auth()
    
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { searchParams } = new URL(request.url)
    const favoriteId = searchParams.get('id')

    if (!favoriteId) {
      return NextResponse.json({
        success: false,
        error: 'Favorite ID is required'
      }, { status: 400 })
    }

    const user = await prisma.user.findUnique({
      where: { clerkId: userId }
    })

    if (!user) {
      return NextResponse.json({ 
        success: false,
        error: 'User not found' 
      }, { status: 404 })
    }

    // Delete the favorite, ensuring it belongs to the user
    await prisma.userFavorite.deleteMany({
      where: {
        id: favoriteId,
        userId: user.id
      }
    })

    return NextResponse.json({ 
      success: true,
      message: 'Favorite removed successfully' 
    })
  } catch (error) {
    console.error('Error deleting favorite:', error)
    return NextResponse.json({ 
      success: false,
      error: 'Internal error' 
    }, { status: 500 })
  }
}