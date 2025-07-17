'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  Heart, 
  MapPin, 
  Fish, 
  Calendar,
  Search,
  Trash2,
  Eye,
  Plus,
  Navigation,
  Loader2
} from 'lucide-react'
import { useUser } from '@clerk/nextjs'

interface FavoriteLocation {
  id: string
  userId: string
  type: 'trout_stocking' | 'park' | 'custom'
  name: string
  location: string
  county?: string
  latitude?: number
  longitude?: number
  notes?: string
  createdAt: string
  lastVisited?: string
  // Additional data based on type
  recentStocking?: {
    species: string
    quantity: number
    date: string
  }
  conditions?: {
    fishingConditions: string
    waterLevel: string
  }
}

// Sample data
const sampleFavorites: FavoriteLocation[] = [
  {
    id: '1',
    userId: 'user1',
    type: 'trout_stocking',
    name: 'Blue Mesa Reservoir',
    location: 'Gunnison County',
    county: 'Gunnison',
    latitude: 38.4270,
    longitude: -107.3420,
    notes: 'Great for kokanee salmon in spring',
    createdAt: '2024-01-10T10:00:00Z',
    lastVisited: '2024-01-15T14:30:00Z',
    recentStocking: {
      species: 'Rainbow Trout',
      quantity: 5000,
      date: '2024-01-15'
    },
    conditions: {
      fishingConditions: 'Excellent',
      waterLevel: 'High'
    }
  },
  {
    id: '2',
    userId: 'user1',
    type: 'trout_stocking',
    name: 'Chatfield Reservoir',
    location: 'Jefferson County',
    county: 'Jefferson',
    latitude: 39.5347,
    longitude: -105.0653,
    notes: 'Close to Denver, good for evening fishing',
    createdAt: '2024-01-08T15:20:00Z',
    recentStocking: {
      species: 'Rainbow Trout',
      quantity: 3000,
      date: '2024-01-10'
    },
    conditions: {
      fishingConditions: 'Good',
      waterLevel: 'Normal'
    }
  },
  {
    id: '3',
    userId: 'user1',
    type: 'custom',
    name: 'Secret Mountain Lake',
    location: 'Boulder County',
    county: 'Boulder',
    latitude: 40.0150,
    longitude: -105.2705,
    notes: 'Hidden gem for brook trout, hike required',
    createdAt: '2024-01-05T09:15:00Z',
    lastVisited: '2024-01-12T16:45:00Z'
  }
]

export default function FavoritesPage() {
  const { user } = useUser()
  const [favorites, setFavorites] = useState<FavoriteLocation[]>([])
  const [filteredFavorites, setFilteredFavorites] = useState<FavoriteLocation[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedTab, setSelectedTab] = useState('all')

  useEffect(() => {
    // In real app, fetch from API
    setFavorites(sampleFavorites)
    setFilteredFavorites(sampleFavorites)
    setIsLoading(false)
  }, [])

  useEffect(() => {
    let filtered = favorites

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(fav =>
        fav.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        fav.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        fav.notes?.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    // Filter by tab
    if (selectedTab !== 'all') {
      filtered = filtered.filter(fav => fav.type === selectedTab)
    }

    setFilteredFavorites(filtered)
  }, [searchTerm, selectedTab, favorites])

  const handleRemoveFavorite = async (favoriteId: string) => {
    if (!user) return
    
    try {
      // In real app, make API call to remove favorite
      setFavorites(prev => prev.filter(fav => fav.id !== favoriteId))
    } catch (error) {
      console.error('Error removing favorite:', error)
    }
  }

  const handleGetDirections = (favorite: FavoriteLocation) => {
    if (!favorite.latitude || !favorite.longitude) return
    const url = `https://www.google.com/maps/dir/?api=1&destination=${favorite.latitude},${favorite.longitude}`
    window.open(url, '_blank')
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    })
  }

  const getConditionColor = (condition: string) => {
    switch (condition) {
      case 'Excellent': return 'bg-green-100 text-green-800'
      case 'Good': return 'bg-blue-100 text-blue-800'
      case 'Fair': return 'bg-yellow-100 text-yellow-800'
      case 'Poor': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const favoriteCounts = {
    all: favorites.length,
    trout_stocking: favorites.filter(f => f.type === 'trout_stocking').length,
    park: favorites.filter(f => f.type === 'park').length,
    custom: favorites.filter(f => f.type === 'custom').length
  }

  if (!user) {
    return (
      <div className="p-6">
        <div className="text-center py-12">
          <Heart className="h-16 w-16 text-muted-foreground mx-auto mb-4 opacity-50" />
          <h3 className="text-lg font-semibold text-foreground mb-2">Sign in required</h3>
          <p className="text-muted-foreground">Please sign in to view your favorite locations</p>
        </div>
      </div>
    )
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
        <div>
          <p className="text-muted-foreground">
            Your saved fishing locations and outdoor spots
          </p>
        </div>
        
        <Button className="flex items-center gap-2">
          <Plus className="h-4 w-4" />
          Add Custom Location
        </Button>
      </div>

      {/* Search */}
      <Card>
        <CardContent className="pt-6">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search your favorites..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </CardContent>
      </Card>

      {/* Tabs */}
      <Tabs value={selectedTab} onValueChange={setSelectedTab}>
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="all" className="flex items-center gap-2">
            All ({favoriteCounts.all})
          </TabsTrigger>
          <TabsTrigger value="trout_stocking" className="flex items-center gap-2">
            <Fish className="h-4 w-4" />
            Fishing ({favoriteCounts.trout_stocking})
          </TabsTrigger>
          <TabsTrigger value="park" className="flex items-center gap-2">
            Parks ({favoriteCounts.park})
          </TabsTrigger>
          <TabsTrigger value="custom" className="flex items-center gap-2">
            Custom ({favoriteCounts.custom})
          </TabsTrigger>
        </TabsList>

        <TabsContent value={selectedTab} className="space-y-4">
          {isLoading ? (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="h-8 w-8 animate-spin" />
              <span className="ml-2 text-muted-foreground">Loading favorites...</span>
            </div>
          ) : filteredFavorites.length === 0 ? (
            <div className="text-center py-12">
              <Heart className="h-16 w-16 text-muted-foreground mx-auto mb-4 opacity-50" />
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {searchTerm ? 'No matching favorites' : 'No favorites yet'}
              </h3>
              <p className="text-muted-foreground mb-4">
                {searchTerm 
                  ? 'Try adjusting your search terms'
                  : 'Start exploring and save your favorite fishing spots!'
                }
              </p>
              {!searchTerm && (
                <Button asChild>
                  <Link href="/map">
                    <MapPin className="h-4 w-4 mr-2" />
                    Explore Locations
                  </Link>
                </Button>
              )}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredFavorites.map((favorite) => (
                <Card key={favorite.id} className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-lg flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          {favorite.name}
                        </CardTitle>
                        <CardDescription>{favorite.location}</CardDescription>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleRemoveFavorite(favorite.id)}
                        className="text-red-600 hover:text-red-700 hover:bg-red-50"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-3">
                    {/* Recent Stocking Info */}
                    {favorite.recentStocking && (
                      <div className="flex items-center justify-between p-2 bg-blue-50 rounded-lg">
                        <div className="flex items-center gap-2">
                          <Fish className="h-4 w-4 text-blue-600" />
                          <span className="text-sm font-medium">{favorite.recentStocking.species}</span>
                        </div>
                        <Badge variant="secondary" className="text-xs">
                          {favorite.recentStocking.quantity.toLocaleString()} fish
                        </Badge>
                      </div>
                    )}

                    {/* Conditions */}
                    {favorite.conditions && (
                      <div className="flex gap-2">
                        <Badge className={getConditionColor(favorite.conditions.fishingConditions)}>
                          {favorite.conditions.fishingConditions}
                        </Badge>
                        <Badge variant="outline">{favorite.conditions.waterLevel}</Badge>
                      </div>
                    )}

                    {/* Notes */}
                    {favorite.notes && (
                      <p className="text-sm text-muted-foreground italic">
                        "{favorite.notes}"
                      </p>
                    )}

                    {/* Metadata */}
                    <div className="text-xs text-muted-foreground space-y-1">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        Added {formatDate(favorite.createdAt)}
                      </div>
                      {favorite.lastVisited && (
                        <div className="flex items-center gap-1">
                          <Eye className="h-3 w-3" />
                          Last visited {formatDate(favorite.lastVisited)}
                        </div>
                      )}
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2 pt-2">
                      <Button size="sm" variant="outline" asChild className="flex-1">
                        <Link href={`/location/${favorite.id}`}>
                          <Eye className="h-3 w-3 mr-1" />
                          View
                        </Link>
                      </Button>
                      {favorite.latitude && favorite.longitude && (
                        <Button 
                          size="sm" 
                          variant="outline"
                          onClick={() => handleGetDirections(favorite)}
                        >
                          <Navigation className="h-3 w-3" />
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}