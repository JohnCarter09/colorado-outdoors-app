import { auth } from '@clerk/nextjs/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function getCurrentUser() {
  const { userId } = await auth()
  
  if (!userId) {
    return null
  }

  const user = await prisma.user.findUnique({
    where: { clerkId: userId },
    include: {
      preferences: true,
      favoriteLocations: true,
      tripPlans: {
        include: {
          items: true
        }
      }
    }
  })

  return user
}

export async function requireAuth() {
  const { userId } = await auth()
  
  if (!userId) {
    throw new Error('Authentication required')
  }

  return userId
}

export async function getOrCreateUser() {
  const { userId, user: clerkUser } = await auth()
  
  if (!userId || !clerkUser) {
    return null
  }

  // Try to find existing user
  let user = await prisma.user.findUnique({
    where: { clerkId: userId },
    include: {
      preferences: true,
      favoriteLocations: true
    }
  })

  // If user doesn't exist, create them
  if (!user) {
    user = await prisma.user.create({
      data: {
        clerkId: userId,
        email: clerkUser.emailAddresses[0]?.emailAddress || '',
        firstName: clerkUser.firstName,
        lastName: clerkUser.lastName,
        name: clerkUser.fullName,
        imageUrl: clerkUser.imageUrl,
        avatar: clerkUser.imageUrl,
      },
      include: {
        preferences: true,
        favoriteLocations: true
      }
    })
  }

  return user
}