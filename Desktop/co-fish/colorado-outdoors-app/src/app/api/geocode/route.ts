// API Route: /api/geocode
// Real-time geocoding service for Colorado locations

import { NextRequest, NextResponse } from 'next/server';
import { geocodeLocationRealtime, batchGeocodeLocations, isInColorado } from '@/lib/colorado-mapbox-utils';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const location = searchParams.get('location');
    
    if (!location) {
      return NextResponse.json(
        { success: false, error: 'Location parameter is required' },
        { status: 400 }
      );
    }
    
    const [longitude, latitude] = await geocodeLocationRealtime(location);
    
    return NextResponse.json({
      success: true,
      location,
      coordinates: {
        longitude,
        latitude
      },
      isInColorado: isInColorado(longitude, latitude)
    });
    
  } catch (error) {
    console.error('Geocoding error:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to geocode location',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { locations } = body;
    
    if (!locations || !Array.isArray(locations)) {
      return NextResponse.json(
        { success: false, error: 'Locations array is required' },
        { status: 400 }
      );
    }
    
    if (locations.length > 10) {
      return NextResponse.json(
        { success: false, error: 'Maximum 10 locations per batch request' },
        { status: 400 }
      );
    }
    
    const results = await batchGeocodeLocations(locations);
    
    return NextResponse.json({
      success: true,
      results: results.map(result => ({
        location: result.location,
        coordinates: {
          longitude: result.coordinates[0],
          latitude: result.coordinates[1]
        },
        isInColorado: isInColorado(result.coordinates[0], result.coordinates[1])
      })),
      count: results.length
    });
    
  } catch (error) {
    console.error('Batch geocoding error:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to batch geocode locations',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}