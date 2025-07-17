'use client';

import { useRef, useState } from 'react';
import Map, { 
  NavigationControl, 
  FullscreenControl, 
  ScaleControl,
  GeolocateControl 
} from 'react-map-gl/mapbox';
import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

// Colorado-specific map configuration
const COLORADO_BOUNDS = {
  longitude: -105.7821,
  latitude: 39.5501,
  zoom: 7
};

const COLORADO_MAX_BOUNDS = [
  [-109.1, 36.9], // Southwest corner
  [-102.0, 41.1]  // Northeast corner
];

interface BaseMapboxProps {
  children?: React.ReactNode;
  initialViewState?: {
    longitude: number;
    latitude: number;
    zoom: number;
  };
  mapStyle?: string;
  className?: string;
  showControls?: boolean;
  onMapLoad?: (event: unknown) => void;
  [key: string]: unknown;
}

export default function BaseMapbox({ 
  children,
  initialViewState = COLORADO_BOUNDS,
  mapStyle = "mapbox://styles/mapbox/outdoors-v12", // Perfect for outdoor activities
  className = "h-96 w-full",
  showControls = true,
  onMapLoad,
  ...props
}: BaseMapboxProps) {
  const mapRef = useRef<unknown>();
  const [isLoaded, setIsLoaded] = useState(false);
  const [mapError, setMapError] = useState<string | null>(null);

  const handleMapLoad = (event: unknown) => {
    setIsLoaded(true);
    onMapLoad?.(event);
  };

  const handleMapError = (error: { message?: string }) => {
    setMapError(error.message || 'Map failed to load');
    console.error('Mapbox error:', error);
  };

  if (mapError) {
    return (
      <Card className={className}>
        <CardContent className="h-full flex items-center justify-center">
          <div className="text-center text-destructive">
            <p>Map failed to load</p>
            <p className="text-sm text-muted-foreground">
              Check your Mapbox token
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className={`relative ${className}`}>
      <Map
        ref={mapRef}
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
        initialViewState={initialViewState}
        mapStyle={mapStyle}
        maxBounds={COLORADO_MAX_BOUNDS}
        onLoad={handleMapLoad}
        onError={handleMapError}
        style={{ width: '100%', height: '100%' }}
        className="rounded-lg overflow-hidden"
        {...props}
      >
        {showControls && (
          <>
            <NavigationControl position="top-right" />
            <FullscreenControl position="top-right" />
            <GeolocateControl
              position="top-right"
              trackUserLocation={true}
              showUserHeading={true}
            />
            <ScaleControl position="bottom-left" />
          </>
        )}
        
        {isLoaded && children}
      </Map>
      
      {!isLoaded && (
        <div className="absolute inset-0 bg-muted rounded-lg flex items-center justify-center z-10">
          <div className="text-center space-y-2">
            <Skeleton className="h-8 w-32 mx-auto" />
            <Skeleton className="h-4 w-24 mx-auto" />
          </div>
        </div>
      )}
    </div>
  );
}