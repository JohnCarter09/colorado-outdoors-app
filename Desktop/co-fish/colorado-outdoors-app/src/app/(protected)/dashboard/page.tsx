import { auth, currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import { PrismaClient } from '@prisma/client'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Heart, MapPin, Calendar, Fish, User, Settings } from 'lucide-react'

const prisma = new PrismaClient()

export default async function DashboardPage() {
  const { userId } = await auth()

  if (!userId) {
    redirect('/sign-in')
  }

  // Try to find or create user
  let user = await prisma.user.findUnique({
    where: { clerkId: userId },
    include: {
      preferences: true,
      favoriteLocations: true,
      tripPlans: {
        include: { items: true }
      }
    }
  })

  // If user doesn't exist in our database yet, create them
  if (!user) {
    try {
      const clerkUser = await currentUser()
      if (clerkUser) {
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
            favoriteLocations: true,
            tripPlans: {
              include: { items: true }
            }
          }
        })
      }
    } catch (error) {
      console.error('Error creating user:', error)
      redirect('/sign-in')
    }
  }

  if (!user) {
    redirect('/sign-in')
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">
            Welcome back, {user.firstName || 'Explorer'}!
          </h1>
          <p className="text-muted-foreground">
            Here&apos;s your Colorado Outdoors dashboard
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="text-green-600">
            <User className="h-3 w-3 mr-1" />
            Active Member
          </Badge>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Favorite Locations
                </p>
                <p className="text-2xl font-bold text-blue-600">
                  {user.favoriteLocations?.length || 0}
                </p>
              </div>
              <Heart className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Trip Plans
                </p>
                <p className="text-2xl font-bold text-green-600">
                  {user.tripPlans?.length || 0}
                </p>
              </div>
              <Calendar className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Member Since
                </p>
                <p className="text-lg font-bold text-purple-600">
                  {new Date(user.createdAt).toLocaleDateString()}
                </p>
              </div>
              <Fish className="h-8 w-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Profile Setup
                </p>
                <p className="text-lg font-bold text-orange-600">
                  {user.preferences ? '100%' : '60%'}
                </p>
              </div>
              <Settings className="h-8 w-8 text-orange-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Favorites Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Heart className="h-5 w-5" />
              Your Favorite Locations
            </CardTitle>
          </CardHeader>
          <CardContent>
            {!user.favoriteLocations || user.favoriteLocations.length === 0 ? (
              <div className="text-center py-8">
                <Fish className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                <p className="text-muted-foreground mb-4">
                  No favorites yet. Start exploring and save your favorite fishing spots!
                </p>
                <a 
                  href="/mapbox-demo" 
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <MapPin className="h-4 w-4 mr-2" />
                  Explore Locations
                </a>
              </div>
            ) : (
              <div className="space-y-3">
                {user.favoriteLocations.slice(0, 3).map((favorite) => (
                  <div 
                    key={favorite.id}
                    className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <MapPin className="h-4 w-4 text-blue-500" />
                      <div>
                        <h4 className="font-medium text-sm">{favorite.customLocation}</h4>
                        {favorite.notes && (
                          <p className="text-xs text-muted-foreground">{favorite.notes}</p>
                        )}
                      </div>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {new Date(favorite.createdAt).toLocaleDateString()}
                    </Badge>
                  </div>
                ))}
                {user.favoriteLocations.length > 3 && (
                  <div className="text-center pt-2">
                    <a 
                      href="/favorites" 
                      className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                    >
                      View all {user.favoriteLocations.length} favorites →
                    </a>
                  </div>
                )}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Recent Activity / Setup */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="h-5 w-5" />
              Profile Setup
            </CardTitle>
          </CardHeader>
          <CardContent>
            {!user.preferences ? (
              <div className="text-center py-8">
                <Settings className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                <p className="text-muted-foreground mb-4">
                  Complete your profile to get personalized recommendations!
                </p>
                <a 
                  href="/onboarding" 
                  className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                  Complete Setup
                </a>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Profile Complete</span>
                  <Badge variant="default" className="bg-green-100 text-green-800">
                    ✓ Done
                  </Badge>
                </div>
                {user.preferences.homeLocation && (
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Home Location</span>
                    <span className="text-sm font-medium">{user.preferences.homeLocation}</span>
                  </div>
                )}
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Email Notifications</span>
                  <Badge variant={user.preferences.notificationsEmail ? "default" : "secondary"}>
                    {user.preferences.notificationsEmail ? 'On' : 'Off'}
                  </Badge>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Quick Links */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <a 
              href="/mapbox-demo"
              className="flex items-center gap-3 p-4 border rounded-lg hover:bg-blue-50 hover:border-blue-200 transition-colors group"
            >
              <MapPin className="h-6 w-6 text-blue-600 group-hover:text-blue-700" />
              <div>
                <h3 className="font-medium">Explore Map</h3>
                <p className="text-sm text-muted-foreground">Find fishing spots near you</p>
              </div>
            </a>
            
            <a 
              href="/data"
              className="flex items-center gap-3 p-4 border rounded-lg hover:bg-green-50 hover:border-green-200 transition-colors group"
            >
              <Fish className="h-6 w-6 text-green-600 group-hover:text-green-700" />
              <div>
                <h3 className="font-medium">Trout Stocking</h3>
                <p className="text-sm text-muted-foreground">Latest stocking reports</p>
              </div>
            </a>
            
            <a 
              href="/profile"
              className="flex items-center gap-3 p-4 border rounded-lg hover:bg-purple-50 hover:border-purple-200 transition-colors group"
            >
              <User className="h-6 w-6 text-purple-600 group-hover:text-purple-700" />
              <div>
                <h3 className="font-medium">Profile Settings</h3>
                <p className="text-sm text-muted-foreground">Manage your preferences</p>
              </div>
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}