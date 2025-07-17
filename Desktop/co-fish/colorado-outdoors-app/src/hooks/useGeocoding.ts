// React hook for real-time geocoding
import { useState, useCallback } from 'react';

interface GeocodeResult {
  location: string;
  coordinates: {
    longitude: number;
    latitude: number;
  };
  isInColorado: boolean;
}

interface UseGeocodingResult {
  geocodeLocation: (location: string) => Promise<GeocodeResult | null>;
  batchGeocodeLocations: (locations: string[]) => Promise<GeocodeResult[]>;
  isLoading: boolean;
  error: string | null;
}

export function useGeocoding(): UseGeocodingResult {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const geocodeLocation = useCallback(async (location: string): Promise<GeocodeResult | null> => {
    if (!location.trim()) {
      setError('Location is required');
      return null;
    }

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`/api/geocode?location=${encodeURIComponent(location)}`);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Geocoding failed');
      }

      if (!data.success) {
        throw new Error(data.error || 'Geocoding was not successful');
      }

      return data as GeocodeResult;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to geocode location';
      setError(errorMessage);
      console.error('Geocoding error:', err);
      return null;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const batchGeocodeLocations = useCallback(async (locations: string[]): Promise<GeocodeResult[]> => {
    if (!locations.length) {
      setError('At least one location is required');
      return [];
    }

    if (locations.length > 10) {
      setError('Maximum 10 locations per batch');
      return [];
    }

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/geocode', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ locations }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Batch geocoding failed');
      }

      if (!data.success) {
        throw new Error(data.error || 'Batch geocoding was not successful');
      }

      return data.results as GeocodeResult[];
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to batch geocode locations';
      setError(errorMessage);
      console.error('Batch geocoding error:', err);
      return [];
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    geocodeLocation,
    batchGeocodeLocations,
    isLoading,
    error,
  };
}