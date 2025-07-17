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
      include: { preferences: true }
    })

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 })
    }

    return NextResponse.json({ 
      success: true,
      preferences: user.preferences
    })
  } catch (error) {
    console.error('Error fetching preferences:', error)
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
      interests,
      preferredSpecies, 
      homeLocation, 
      notificationsEmail,
      notificationsPush
    } = body

    const user = await prisma.user.findUnique({
      where: { clerkId: userId }
    })

    if (!user) {
      return NextResponse.json({ 
        success: false,
        error: 'User not found' 
      }, { status: 404 })
    }

    // Upsert user preferences
    const preferences = await prisma.userPreferences.upsert({
      where: { userId: user.id },
      update: {
        interests: JSON.stringify(interests || []),
        preferredSpecies: JSON.stringify(preferredSpecies || []),
        homeLocation: homeLocation || null,
        notificationsEmail: notificationsEmail !== undefined ? notificationsEmail : true,
        notificationsPush: notificationsPush !== undefined ? notificationsPush : false,
      },
      create: {
        userId: user.id,
        interests: JSON.stringify(interests || []),
        preferredSpecies: JSON.stringify(preferredSpecies || []),
        homeLocation: homeLocation || null,
        notificationsEmail: notificationsEmail !== undefined ? notificationsEmail : true,
        notificationsPush: notificationsPush !== undefined ? notificationsPush : false,
      }
    })

    return NextResponse.json({ 
      success: true,
      preferences 
    })
  } catch (error) {
    console.error('Error saving preferences:', error)
    return NextResponse.json({ 
      success: false,
      error: 'Internal error' 
    }, { status: 500 })
  }
}

export async function PUT(request: Request) {
  try {
    const { userId } = await auth()
    
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await request.json()
    const updates = body

    const user = await prisma.user.findUnique({
      where: { clerkId: userId },
      include: { preferences: true }
    })

    if (!user || !user.preferences) {
      return NextResponse.json({ 
        success: false,
        error: 'User preferences not found' 
      }, { status: 404 })
    }

    // Prepare update data
    const updateData: any = {}
    
    if (updates.interests !== undefined) {
      updateData.interests = JSON.stringify(updates.interests)
    }
    if (updates.preferredSpecies !== undefined) {
      updateData.preferredSpecies = JSON.stringify(updates.preferredSpecies)
    }
    if (updates.homeLocation !== undefined) {
      updateData.homeLocation = updates.homeLocation
    }
    if (updates.notificationsEmail !== undefined) {
      updateData.notificationsEmail = updates.notificationsEmail
    }
    if (updates.notificationsPush !== undefined) {
      updateData.notificationsPush = updates.notificationsPush
    }

    const preferences = await prisma.userPreferences.update({
      where: { userId: user.id },
      data: updateData
    })

    return NextResponse.json({ 
      success: true,
      preferences 
    })
  } catch (error) {
    console.error('Error updating preferences:', error)
    return NextResponse.json({ 
      success: false,
      error: 'Internal error' 
    }, { status: 500 })
  }
}