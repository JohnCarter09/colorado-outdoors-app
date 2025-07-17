'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  Droplets, 
  Thermometer, 
  Eye, 
  TrendingUp, 
  RefreshCw,
  Search,
  Filter,
  MapPin,
  Calendar,
  Loader2
} from 'lucide-react'

interface WaterCondition {
  id: string
  waterBody: string
  location: string
  lastUpdated: string
  waterLevel: string
  waterTemperature?: number
  clarity: string
  flow: string
  fishingConditions: string
  notes?: string
  weatherImpact?: string
}

const sampleConditions: WaterCondition[] = [
  {
    id: '1',
    waterBody: 'South Platte River',
    location: 'Deckers',
    lastUpdated: '2024-01-15T10:00:00Z',
    waterLevel: 'Normal',
    waterTemperature: 42,
    clarity: 'Clear',
    flow: 'Normal',
    fishingConditions: 'Good',
    notes: 'Good insect activity, try smaller flies',
    weatherImpact: 'Stable conditions expected'
  },
  {
    id: '2',
    waterBody: 'Blue Mesa Reservoir',
    location: 'Gunnison',
    lastUpdated: '2024-01-15T09:30:00Z',
    waterLevel: 'High',
    waterTemperature: 38,
    clarity: 'Slightly Stained',
    flow: 'N/A',
    fishingConditions: 'Excellent',
    notes: 'Recent stocking showing good results',
    weatherImpact: 'Cold front may affect surface temps'
  },
  {
    id: '3',
    waterBody: 'Arkansas River',
    location: 'Salida',
    lastUpdated: '2024-01-15T08:45:00Z',
    waterLevel: 'Low',
    waterTemperature: 45,
    clarity: 'Clear',
    flow: 'Low',
    fishingConditions: 'Fair',
    notes: 'Low flows concentrating fish in deeper pools',
    weatherImpact: 'Sunny conditions, fish may be deeper'
  }
]

const conditionColors = {
  'Excellent': 'bg-green-100 text-green-800',
  'Good': 'bg-blue-100 text-blue-800',
  'Fair': 'bg-yellow-100 text-yellow-800',
  'Poor': 'bg-red-100 text-red-800'
}

const waterLevelColors = {
  'High': 'bg-blue-600',
  'Normal': 'bg-green-600',
  'Low': 'bg-orange-600',
  'Flood': 'bg-red-600'
}

const clarityColors = {
  'Clear': 'bg-blue-500',
  'Slightly Stained': 'bg-yellow-500',
  'Stained': 'bg-orange-500',
  'Muddy': 'bg-red-500'
}

export default function WaterConditionsPage() {
  const [conditions, setConditions] = useState<WaterCondition[]>(sampleConditions)
  const [filteredConditions, setFilteredConditions] = useState<WaterCondition[]>(sampleConditions)
  const [isLoading, setIsLoading] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCondition, setSelectedCondition] = useState<string>('all')
  const [selectedWaterLevel, setSelectedWaterLevel] = useState<string>('all')

  const loadConditions = async () => {
    setIsLoading(true)
    // Simulate API call - in real app this would fetch from /api/data/water-conditions
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsLoading(false)
  }

  const filterConditions = () => {
    let filtered = conditions

    if (searchTerm) {
      filtered = filtered.filter(condition =>
        condition.waterBody.toLowerCase().includes(searchTerm.toLowerCase()) ||
        condition.location.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    if (selectedCondition !== 'all') {
      filtered = filtered.filter(condition => condition.fishingConditions === selectedCondition)
    }

    if (selectedWaterLevel !== 'all') {
      filtered = filtered.filter(condition => condition.waterLevel === selectedWaterLevel)
    }

    setFilteredConditions(filtered)
  }

  useEffect(() => {
    filterConditions()
  }, [searchTerm, selectedCondition, selectedWaterLevel, conditions])

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit'
    })
  }

  const conditionStats = {
    excellent: conditions.filter(c => c.fishingConditions === 'Excellent').length,
    good: conditions.filter(c => c.fishingConditions === 'Good').length,
    fair: conditions.filter(c => c.fishingConditions === 'Fair').length,
    poor: conditions.filter(c => c.fishingConditions === 'Poor').length
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
        <div>
          <p className="text-muted-foreground">
            Current water conditions and fishing reports from across Colorado
          </p>
        </div>
        
        <Button 
          onClick={loadConditions} 
          disabled={isLoading}
          variant="outline"
          className="flex items-center gap-2"
        >
          <RefreshCw className={`h-4 w-4 ${isLoading ? 'animate-spin' : ''}`} />
          {isLoading ? 'Refreshing...' : 'Refresh Data'}
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Excellent</p>
                <p className="text-2xl font-bold text-green-600">{conditionStats.excellent}</p>
              </div>
              <TrendingUp className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Good</p>
                <p className="text-2xl font-bold text-blue-600">{conditionStats.good}</p>
              </div>
              <Droplets className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Fair</p>
                <p className="text-2xl font-bold text-yellow-600">{conditionStats.fair}</p>
              </div>
              <Eye className="h-8 w-8 text-yellow-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Poor</p>
                <p className="text-2xl font-bold text-red-600">{conditionStats.poor}</p>
              </div>
              <Thermometer className="h-8 w-8 text-red-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <Filter className="h-5 w-5" />
            Search & Filters
          </CardTitle>
          <CardDescription>
            Find specific water bodies or filter by conditions
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search water bodies or locations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={selectedCondition} onValueChange={setSelectedCondition}>
              <SelectTrigger>
                <SelectValue placeholder="All Conditions" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Conditions</SelectItem>
                <SelectItem value="Excellent">Excellent</SelectItem>
                <SelectItem value="Good">Good</SelectItem>
                <SelectItem value="Fair">Fair</SelectItem>
                <SelectItem value="Poor">Poor</SelectItem>
              </SelectContent>
            </Select>
            <Select value={selectedWaterLevel} onValueChange={setSelectedWaterLevel}>
              <SelectTrigger>
                <SelectValue placeholder="All Water Levels" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Water Levels</SelectItem>
                <SelectItem value="High">High</SelectItem>
                <SelectItem value="Normal">Normal</SelectItem>
                <SelectItem value="Low">Low</SelectItem>
                <SelectItem value="Flood">Flood</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Conditions List */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Current Water Conditions</CardTitle>
          <CardDescription>
            {isLoading ? 'Loading...' : `Showing ${filteredConditions.length} of ${conditions.length} locations`}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="h-8 w-8 animate-spin" />
              <span className="ml-2 text-muted-foreground">Loading conditions...</span>
            </div>
          ) : filteredConditions.length === 0 ? (
            <div className="text-center py-12">
              <Droplets className="h-16 w-16 text-muted-foreground mx-auto mb-4 opacity-50" />
              <h3 className="text-lg font-semibold text-foreground mb-2">No conditions found</h3>
              <p className="text-muted-foreground">Try adjusting your search criteria</p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredConditions.map((condition) => (
                <Card key={condition.id} className="hover:bg-muted/50 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row justify-between items-start gap-4">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          {condition.waterBody}
                        </h3>
                        <p className="text-muted-foreground mb-3">{condition.location}</p>
                        
                        {condition.notes && (
                          <p className="text-sm text-muted-foreground mb-3 italic">
                            "{condition.notes}"
                          </p>
                        )}
                        
                        <div className="flex flex-wrap gap-2 mb-3">
                          <Badge className={conditionColors[condition.fishingConditions as keyof typeof conditionColors]}>
                            {condition.fishingConditions} Fishing
                          </Badge>
                          <Badge variant="outline" className="flex items-center gap-1">
                            <div className={`w-2 h-2 rounded-full ${waterLevelColors[condition.waterLevel as keyof typeof waterLevelColors]}`}></div>
                            {condition.waterLevel} Level
                          </Badge>
                          <Badge variant="outline" className="flex items-center gap-1">
                            <div className={`w-2 h-2 rounded-full ${clarityColors[condition.clarity as keyof typeof clarityColors]}`}></div>
                            {condition.clarity}
                          </Badge>
                        </div>
                      </div>
                      
                      <div className="text-right space-y-2">
                        {condition.waterTemperature && (
                          <div className="flex items-center gap-2 text-sm">
                            <Thermometer className="h-4 w-4" />
                            <span>{condition.waterTemperature}°F</span>
                          </div>
                        )}
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Calendar className="h-3 w-3" />
                          {formatDate(condition.lastUpdated)}
                        </div>
                        {condition.flow !== 'N/A' && (
                          <div className="text-sm text-muted-foreground">
                            Flow: {condition.flow}
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}