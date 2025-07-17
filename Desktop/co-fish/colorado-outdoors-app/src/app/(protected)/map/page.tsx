'use client';

import { useState, useEffect } from 'react';
import TroutStockingMapbox from '@/components/TroutStockingMapbox';
import OutdoorsMapbox from '@/components/OutdoorsMapbox';
import BaseMapbox from '@/components/BaseMapbox';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { 
  Fish, 
  Map,
  TrendingUp, 
  Calendar, 
  RefreshCw,
  MapPin,
  Layers,
  AlertCircle,
  Heart
} from 'lucide-react';
import { useUser } from '@clerk/nextjs';

// Sample data for fallback
const sampleTroutData = [
  {
    id: '1',
    location: 'Blue Mesa Reservoir',
    species: 'Rainbow Trout',
    quantity: 5000,
    stockingDate: '2024-01-15',
    longitude: -107.3420,
    latitude: 38.4270,
    county: 'Gunnison',
    waterBodyType: 'Reservoir'
  },
  {
    id: '2',
    location: 'Chatfield Reservoir',
    species: 'Rainbow Trout',
    quantity: 3000,
    stockingDate: '2024-01-10',
    longitude: -105.0653,
    latitude: 39.5347,
    county: 'Jefferson',
    waterBodyType: 'Reservoir'
  },
  {
    id: '3',
    location: 'Cherry Creek Reservoir',
    species: 'Brown Trout',
    quantity: 2000,
    stockingDate: '2024-01-12',
    longitude: -104.8586,
    latitude: 39.6500,
    county: 'Arapahoe',
    waterBodyType: 'Reservoir'
  }
];

const sampleHuntingData = [
  {
    id: '1',
    name: 'Unit 1 - Elk',
    species: 'Elk',
    season: 'September - October',
    longitude: -106.8317,
    latitude: 40.4619
  }
];

const sampleParksData = [
  {
    id: '1',
    name: 'Cherry Creek State Park',
    description: 'Great for fishing and boating',
    amenities: ['Fishing', 'Boating', 'Swimming', 'Camping'],
    longitude: -104.8586,
    latitude: 39.6500
  }
];

const sampleCampingData = [
  {
    id: '1',
    name: 'Rocky Mountain National Park',
    description: 'Mountain camping experience',
    amenities: ['Hiking', 'Wildlife Viewing', 'Photography'],
    longitude: -105.6836,
    latitude: 40.3428
  }
];

export default function MapPage() {
  const { user } = useUser();
  const [data, setData] = useState({
    trout: sampleTroutData,
    hunting: sampleHuntingData,
    parks: sampleParksData,
    camping: sampleCampingData
  });
  const [refreshing, setRefreshing] = useState(false);
  const [selectedTab, setSelectedTab] = useState('trout');
  const [apiError, setApiError] = useState<string | null>(null);

  const fetchRealData = async () => {
    setRefreshing(true);
    setApiError(null);
    
    try {
      const response = await fetch('/api/data/trout-stocking');
      if (response.ok) {
        const result = await response.json();
        setData(prev => ({
          ...prev,
          trout: result.data || sampleTroutData
        }));
      } else {
        throw new Error('API endpoint not available');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setApiError('Using sample data - live data temporarily unavailable');
    } finally {
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchRealData();
  }, []);

  const stats = {
    totalLocations: Object.values(data).reduce((sum, arr) => sum + arr.length, 0),
    troutThisWeek: data.trout.filter(s => 
      new Date(s.stockingDate) > new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
    ).length,
    totalFish: data.trout.reduce((sum, s) => sum + (s.quantity || 0), 0)
  };

  const handleRefresh = async () => {
    await fetchRealData();
  };

  const handleLocationSelect = async (location: any) => {
    if (!user) return;
    
    // Handle adding to favorites
    console.log('Selected location:', location);
  };

  return (
    <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
          <div>
            <p className="text-muted-foreground">
              Explore Colorado's fishing locations, parks, and outdoor activities
            </p>
          </div>
          
          <Button 
            onClick={handleRefresh} 
            disabled={refreshing}
            variant="outline"
            className="flex items-center gap-2"
          >
            <RefreshCw className={`h-4 w-4 ${refreshing ? 'animate-spin' : ''}`} />
            {refreshing ? 'Refreshing...' : 'Refresh Data'}
          </Button>
        </div>

        {/* API Status Alert */}
        {apiError && (
          <Alert>
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{apiError}</AlertDescription>
          </Alert>
        )}

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    Total Locations
                  </p>
                  <p className="text-2xl font-bold text-foreground">
                    {stats.totalLocations}
                  </p>
                </div>
                <MapPin className="h-8 w-8 text-muted-foreground" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    Recent Stockings
                  </p>
                  <p className="text-2xl font-bold text-foreground">
                    {stats.troutThisWeek}
                  </p>
                </div>
                <Calendar className="h-8 w-8 text-muted-foreground" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    Total Fish Stocked
                  </p>
                  <p className="text-2xl font-bold text-foreground">
                    {stats.totalFish.toLocaleString()}
                  </p>
                </div>
                <Fish className="h-8 w-8 text-muted-foreground" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Map Interface */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-2xl">Colorado Outdoors Map</CardTitle>
              {user && (
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Heart className="h-4 w-4" />
                  Click locations to add to favorites
                </div>
              )}
            </div>
          </CardHeader>
          <CardContent className="p-6">
            <Tabs value={selectedTab} onValueChange={setSelectedTab}>
              <TabsList className="grid w-full grid-cols-3 mb-6">
                <TabsTrigger value="trout" className="flex items-center gap-2">
                  <Fish className="h-4 w-4" />
                  Trout Stocking
                </TabsTrigger>
                <TabsTrigger value="all" className="flex items-center gap-2">
                  <Layers className="h-4 w-4" />
                  All Activities
                </TabsTrigger>
                <TabsTrigger value="base" className="flex items-center gap-2">
                  <Map className="h-4 w-4" />
                  Base Map
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="trout" className="mt-0">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-muted-foreground">
                      Trout stocking locations with species filtering and detailed information
                    </p>
                    <Badge variant="secondary">{data.trout.length} locations</Badge>
                  </div>
                  <TroutStockingMapbox 
                    stockingData={data.trout}
                    className="h-[600px] w-full rounded-lg border"
                    onLocationSelect={handleLocationSelect}
                  />
                </div>
              </TabsContent>
              
              <TabsContent value="all" className="mt-0">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-muted-foreground">
                      Complete view of fishing, hunting, parks, and camping locations
                    </p>
                    <Badge variant="secondary">{stats.totalLocations} total locations</Badge>
                  </div>
                  <OutdoorsMapbox
                    troutData={data.trout}
                    huntingData={data.hunting}
                    parksData={data.parks}
                    campingData={data.camping}
                    className="h-[600px] w-full rounded-lg border"
                  />
                </div>
              </TabsContent>
              
              <TabsContent value="base" className="mt-0">
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Base Colorado map with standard controls and navigation
                  </p>
                  <BaseMapbox 
                    className="h-[600px] w-full rounded-lg border"
                    showControls={true}
                    onMapLoad={(e) => console.log('Base map loaded:', e)}
                  />
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Map Legend */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Map Legend</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span>Trout Stocking</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span>State Parks</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                <span>Hunting Areas</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                <span>Camping</span>
              </div>
            </div>
          </CardContent>
        </Card>
    </div>
  );
}