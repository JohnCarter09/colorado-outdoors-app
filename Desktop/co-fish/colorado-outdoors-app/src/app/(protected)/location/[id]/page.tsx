'use client'

import { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Separator } from '@/components/ui/separator'
import { 
  MapPin, 
  Fish, 
  Calendar, 
  Heart,
  Share,
  Navigation,
  Thermometer,
  Droplets,
  Eye,
  TrendingUp,
  Clock,
  ArrowLeft,
  Star
} from 'lucide-react'
import { useUser } from '@clerk/nextjs'

interface LocationDetail {
  id: string
  name: string
  county: string
  latitude: number
  longitude: number
  waterBodyType: string
  accessInfo?: string
  regulations?: string
  recentStockings: Array<{
    id: string
    species: string
    quantity: number
    stockingDate: string
    size?: string
  }>
  conditions?: {
    waterLevel: string
    waterTemperature?: number
    clarity: string
    flow: string
    fishingConditions: string
    lastUpdated: string
  }
  amenities: string[]
  description?: string
  photos?: string[]
}

// Sample data for demonstration
const sampleLocation: LocationDetail = {
  id: '1',
  name: 'Blue Mesa Reservoir',
  county: 'Gunnison',
  latitude: 38.4270,
  longitude: -107.3420,
  waterBodyType: 'Reservoir',
  accessInfo: 'Multiple boat ramps available. Shore fishing accessible from several points around the reservoir.',
  regulations: 'Standard Colorado fishing license required. 4 trout limit, no size restrictions.',
  description: 'Colorado\'s largest body of water, Blue Mesa Reservoir offers excellent trout fishing year-round. Known for large lake trout and kokanee salmon.',
  amenities: ['Boat Ramps', 'Restrooms', 'Parking', 'Picnic Areas', 'Camping', 'Fish Cleaning Station'],
  recentStockings: [
    {
      id: '1',
      species: 'Rainbow Trout',
      quantity: 5000,
      stockingDate: '2024-01-15',
      size: '10-12 inch'
    },
    {
      id: '2',
      species: 'Brown Trout',
      quantity: 2000,
      stockingDate: '2024-01-10',
      size: '8-10 inch'
    },
    {
      id: '3',
      species: 'Kokanee Salmon',
      quantity: 3000,
      stockingDate: '2024-01-05',
      size: '6-8 inch'
    }
  ],
  conditions: {
    waterLevel: 'High',
    waterTemperature: 38,
    clarity: 'Slightly Stained',
    flow: 'N/A',
    fishingConditions: 'Excellent',
    lastUpdated: '2024-01-15T09:30:00Z'
  }
}

export default function LocationDetailPage() {
  const params = useParams()
  const router = useRouter()
  const { user } = useUser()
  const [location, setLocation] = useState<LocationDetail | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isFavorited, setIsFavorited] = useState(false)

  useEffect(() => {
    // In a real app, this would fetch from API based on params.id
    setLocation(sampleLocation)
    setIsLoading(false)
    // Check if location is favorited
    setIsFavorited(false) // Replace with actual check
  }, [params.id])

  const handleFavoriteToggle = async () => {
    if (!user || !location) return
    
    try {
      // In real app, make API call to toggle favorite
      setIsFavorited(!isFavorited)
    } catch (error) {
      console.error('Error toggling favorite:', error)
    }
  }

  const handleGetDirections = () => {
    if (!location) return
    const url = `https://www.google.com/maps/dir/?api=1&destination=${location.latitude},${location.longitude}`
    window.open(url, '_blank')
  }

  const handleShare = async () => {
    if (!location) return
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: location.name,
          text: `Check out ${location.name} fishing location`,
          url: window.location.href
        })
      } catch (error) {
        console.log('Error sharing:', error)
      }
    } else {
      // Fallback to clipboard
      navigator.clipboard.writeText(window.location.href)
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    })
  }

  if (isLoading) {
    return (
      <div className="p-6 flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  if (!location) {
    return (
      <div className="p-6">
        <div className="text-center py-12">
          <MapPin className="h-16 w-16 text-muted-foreground mx-auto mb-4 opacity-50" />
          <h3 className="text-lg font-semibold text-foreground mb-2">Location not found</h3>
          <p className="text-muted-foreground mb-4">The requested location could not be found.</p>
          <Button onClick={() => router.back()}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Go Back
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" onClick={() => router.back()}>
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <div>
            <h1 className="text-2xl font-bold flex items-center gap-2">
              <MapPin className="h-6 w-6" />
              {location.name}
            </h1>
            <p className="text-muted-foreground">{location.county} County • {location.waterBodyType}</p>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={handleShare}>
            <Share className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="sm" onClick={handleGetDirections}>
            <Navigation className="h-4 w-4 mr-2" />
            Directions
          </Button>
          {user && (
            <Button 
              variant={isFavorited ? "default" : "outline"}
              size="sm"
              onClick={handleFavoriteToggle}
            >
              <Heart className={`h-4 w-4 mr-2 ${isFavorited ? 'fill-current' : ''}`} />
              {isFavorited ? 'Favorited' : 'Add to Favorites'}
            </Button>
          )}
        </div>
      </div>

      {/* Current Conditions */}
      {location.conditions && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Current Conditions
            </CardTitle>
            <CardDescription>
              Last updated: {formatDate(location.conditions.lastUpdated)}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4 border rounded-lg">
                <Droplets className="h-8 w-8 mx-auto mb-2 text-blue-500" />
                <p className="text-sm text-muted-foreground">Water Level</p>
                <p className="font-semibold">{location.conditions.waterLevel}</p>
              </div>
              <div className="text-center p-4 border rounded-lg">
                <Thermometer className="h-8 w-8 mx-auto mb-2 text-red-500" />
                <p className="text-sm text-muted-foreground">Temperature</p>
                <p className="font-semibold">{location.conditions.waterTemperature}°F</p>
              </div>
              <div className="text-center p-4 border rounded-lg">
                <Eye className="h-8 w-8 mx-auto mb-2 text-green-500" />
                <p className="text-sm text-muted-foreground">Clarity</p>
                <p className="font-semibold">{location.conditions.clarity}</p>
              </div>
              <div className="text-center p-4 border rounded-lg">
                <Star className="h-8 w-8 mx-auto mb-2 text-yellow-500" />
                <p className="text-sm text-muted-foreground">Fishing</p>
                <Badge className="mt-1">{location.conditions.fishingConditions}</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      <Tabs defaultValue="stocking" className="space-y-4">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="stocking">Recent Stocking</TabsTrigger>
          <TabsTrigger value="info">Location Info</TabsTrigger>
          <TabsTrigger value="amenities">Amenities</TabsTrigger>
        </TabsList>

        <TabsContent value="stocking" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Recent Stocking Activity</CardTitle>
              <CardDescription>
                Fish stocked in the last 30 days
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {location.recentStockings.map((stocking) => (
                  <div key={stocking.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <Fish className="h-5 w-5 text-blue-500" />
                      <div>
                        <p className="font-medium">{stocking.species}</p>
                        {stocking.size && (
                          <p className="text-sm text-muted-foreground">{stocking.size}</p>
                        )}
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">{stocking.quantity.toLocaleString()} fish</p>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        {formatDate(stocking.stockingDate)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="info" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Location Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {location.description && (
                <div>
                  <h4 className="font-medium mb-2">Description</h4>
                  <p className="text-muted-foreground">{location.description}</p>
                </div>
              )}
              
              <Separator />
              
              {location.accessInfo && (
                <div>
                  <h4 className="font-medium mb-2">Access Information</h4>
                  <p className="text-muted-foreground">{location.accessInfo}</p>
                </div>
              )}
              
              <Separator />
              
              {location.regulations && (
                <div>
                  <h4 className="font-medium mb-2">Fishing Regulations</h4>
                  <p className="text-muted-foreground">{location.regulations}</p>
                </div>
              )}
              
              <Separator />
              
              <div>
                <h4 className="font-medium mb-2">Coordinates</h4>
                <p className="text-muted-foreground">
                  {location.latitude.toFixed(4)}, {location.longitude.toFixed(4)}
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="amenities" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Available Amenities</CardTitle>
              <CardDescription>
                Facilities and services available at this location
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {location.amenities.map((amenity) => (
                  <div key={amenity} className="flex items-center gap-2 p-3 border rounded-lg">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm">{amenity}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}