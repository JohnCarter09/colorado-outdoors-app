'use client';

import { useState, useEffect } from 'react';
import TroutStockingMapbox from '@/components/TroutStockingMapbox';
import OutdoorsMapbox from '@/components/OutdoorsMapbox';
import BaseMapbox from '@/components/BaseMapbox';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
// import { Skeleton } from '@/components/ui/skeleton';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { 
  Fish, 
  Map,
  TrendingUp, 
  Calendar, 
  RefreshCw,
  MapPin,
  Layers,
  AlertCircle
} from 'lucide-react';

// Sample data for testing
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
  },
  {
    id: '4',
    location: 'Eleven Mile Reservoir',
    species: 'Cutthroat Trout',
    quantity: 1500,
    stockingDate: '2024-01-08',
    longitude: -106.3167,
    latitude: 38.9167,
    county: 'Park',
    waterBodyType: 'Reservoir'
  },
  {
    id: '5',
    location: 'Dillon Reservoir',
    species: 'Kokanee Salmon',
    quantity: 4000,
    stockingDate: '2024-01-14',
    longitude: -106.0581,
    latitude: 39.6294,
    county: 'Summit',
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
  },
  {
    id: '2',
    name: 'Unit 2 - Bear',
    species: 'Bear',
    season: 'August - September',
    longitude: -107.2090,
    latitude: 40.0274
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
  },
  {
    id: '2',
    name: 'Chatfield State Park',
    description: 'Popular reservoir park',
    amenities: ['Fishing', 'Boating', 'Hiking', 'Camping'],
    longitude: -105.0653,
    latitude: 39.5347
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

export default function MapboxDemoPage() {
  const [data, setData] = useState({
    trout: sampleTroutData,
    hunting: sampleHuntingData,
    parks: sampleParksData,
    camping: sampleCampingData
  });
  // const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [selectedTab, setSelectedTab] = useState('base');
  const [apiError, setApiError] = useState<string | null>(null);

  // Test API integration
  const fetchRealData = async () => {
    setRefreshing(true);
    setApiError(null);
    
    try {
      // Test the existing API endpoint
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
      setApiError('Using sample data - API endpoint not available');
    } finally {
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchRealData();
  }, []);

  // Calculate stats
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

  return (
    <div className="container mx-auto p-4 space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <Map className="h-8 w-8 text-blue-600" />
            Colorado Outdoors - Mapbox Demo
          </h1>
          <p className="text-muted-foreground mt-2">
            Interactive maps powered by Mapbox GL JS
          </p>
        </div>
        
        <Button 
          onClick={handleRefresh} 
          disabled={refreshing}
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
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Total Locations
                </p>
                <p className="text-2xl font-bold text-blue-600">
                  {stats.totalLocations}
                </p>
              </div>
              <MapPin className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Stockings This Week
                </p>
                <p className="text-2xl font-bold text-green-600">
                  {stats.troutThisWeek}
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
                  Total Fish Stocked
                </p>
                <p className="text-2xl font-bold text-purple-600">
                  {stats.totalFish.toLocaleString()}
                </p>
              </div>
              <TrendingUp className="h-8 w-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Map Tabs */}
      <Tabs value={selectedTab} onValueChange={setSelectedTab}>
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="base" className="flex items-center gap-2">
            <Map className="h-4 w-4" />
            Base Map
          </TabsTrigger>
          <TabsTrigger value="trout" className="flex items-center gap-2">
            <Fish className="h-4 w-4" />
            Trout Stocking
          </TabsTrigger>
          <TabsTrigger value="all" className="flex items-center gap-2">
            <Layers className="h-4 w-4" />
            All Activities
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="base">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Map className="h-5 w-5" />
                Base Mapbox Component Test
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Testing the base Mapbox component with Colorado bounds and controls.
                </p>
                <BaseMapbox 
                  className="h-[500px] w-full rounded-lg border"
                  showControls={true}
                  onMapLoad={(e) => console.log('Base map loaded:', e)}
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="trout">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Fish className="h-5 w-5" />
                Trout Stocking Locations
                <Badge variant="secondary">{data.trout.length}</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Interactive trout stocking map with species filtering, heatmap, and detailed popups.
                </p>
                <TroutStockingMapbox 
                  stockingData={data.trout}
                  className="h-[600px] w-full rounded-lg border"
                  onLocationSelect={(stocking) => console.log('Selected stocking:', stocking)}
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="all">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Layers className="h-5 w-5" />
                All Outdoor Activities
                <Badge variant="secondary">{stats.totalLocations}</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Multi-activity map showing trout stocking, hunting areas, state parks, and campgrounds.
                </p>
                <OutdoorsMapbox
                  troutData={data.trout}
                  huntingData={data.hunting}
                  parksData={data.parks}
                  campingData={data.camping}
                  className="h-[600px] w-full rounded-lg border"
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Testing Information */}
      <Card>
        <CardHeader>
          <CardTitle>Testing Information</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 text-sm">
            <p><strong>Base Map:</strong> Tests core Mapbox functionality with Colorado bounds</p>
            <p><strong>Trout Stocking:</strong> Tests markers, popups, filtering, and heatmap features</p>
            <p><strong>All Activities:</strong> Tests multi-layer functionality with different activity types</p>
            <p><strong>API Integration:</strong> Attempts to fetch real data from /api/data/trout-stocking</p>
            <p><strong>Sample Data:</strong> {data.trout.length} trout locations, {data.hunting.length} hunting areas, {data.parks.length} parks, {data.camping.length} camping sites</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}