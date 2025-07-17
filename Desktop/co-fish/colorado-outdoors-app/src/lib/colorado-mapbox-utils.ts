// Colorado geographic utilities for Mapbox
export const COLORADO_CONFIG = {
  center: [-105.7821, 39.5501] as [number, number],
  bounds: [
    [-109.1, 36.9], // Southwest
    [-102.0, 41.1]  // Northeast
  ] as [[number, number], [number, number]],
  defaultZoom: 7,
  maxZoom: 16,
  minZoom: 5
};

// Major Colorado fishing locations with precise coordinates
export const FISHING_LOCATIONS: { [key: string]: [number, number] } = {
  'blue mesa reservoir': [-107.3420, 38.4270],
  'eleven mile reservoir': [-106.3167, 38.9167],
  'chatfield reservoir': [-105.0653, 39.5347],
  'cherry creek reservoir': [-104.8586, 39.6500],
  'spinney mountain reservoir': [-106.1833, 38.9833],
  'antero reservoir': [-106.2000, 38.9500],
  'dillon reservoir': [-106.0581, 39.6294],
  'grand lake': [-105.8231, 40.2525],
  'lake granby': [-105.8964, 40.1547],
  'shadow mountain lake': [-105.8467, 40.2019],
  'south platte river': [-105.0178, 39.7392],
  'arkansas river': [-105.9978, 38.4583],
  'colorado river': [-106.3781, 39.5447],
  
  // Additional popular fishing locations
  'aurora reservoir': [-104.8264, 39.6158],
  'bear creek lake park': [-105.0897, 39.6406],
  'boyd lake': [-105.1647, 40.3472],
  'clear creek': [-105.2364, 39.7581],
  'confluence park': [-105.0147, 39.7561],
  'horsetooth reservoir': [-105.1750, 40.5850],
  'jackson lake': [-105.8472, 40.4244],
  'john martin reservoir': [-102.9500, 38.0833],
  'lake pueblo': [-104.7281, 38.2472],
  'quincy reservoir': [-104.8694, 39.6889],
  'standley lake': [-105.0944, 39.8494],
  'trinidad lake': [-104.5100, 37.1344],
  'turquoise lake': [-106.3781, 39.2431],
  'union reservoir': [-105.2194, 40.2578],
  'williams fork reservoir': [-106.1167, 40.0167],
  
  // Rivers and streams
  'big thompson river': [-105.3444, 40.4089],
  'cache la poudre river': [-105.0844, 40.5850],
  'frying pan river': [-106.7350, 39.3650],
  'gunnison river': [-108.5450, 38.5450],
  'north platte river': [-106.8150, 40.8150],
  'rio grande': [-106.5450, 37.5450],
  'roaring fork river': [-107.0150, 39.5150],
  'st. vrain creek': [-105.1150, 40.1750],
  'taylor river': [-106.6150, 38.8150],
  'yampa river': [-107.2450, 40.4850]
};

// State parks with enhanced data
export const STATE_PARKS: { [key: string]: { coordinates: [number, number]; amenities: string[]; type: string } } = {
  'cherry creek state park': {
    coordinates: [-104.8586, 39.6500],
    amenities: ['Fishing', 'Boating', 'Swimming', 'Camping'],
    type: 'Reservoir Park'
  },
  'chatfield state park': {
    coordinates: [-105.0653, 39.5347],
    amenities: ['Fishing', 'Boating', 'Hiking', 'Camping'],
    type: 'Reservoir Park'
  },
  'golden gate canyon state park': {
    coordinates: [-105.4147, 39.8330],
    amenities: ['Hiking', 'Camping', 'Wildlife Viewing'],
    type: 'Mountain Park'
  }
};

// Hunting units with game management data
export const HUNTING_UNITS: { [key: string]: { coordinates: [number, number]; primarySpecies: string[]; difficulty: string } } = {
  'unit 1': {
    coordinates: [-106.8317, 40.4619],
    primarySpecies: ['Elk', 'Deer'],
    difficulty: 'Moderate'
  },
  'unit 2': {
    coordinates: [-107.2090, 40.0274],
    primarySpecies: ['Elk', 'Bear'],
    difficulty: 'Difficult'
  },
  'unit 61': {
    coordinates: [-106.8650, 37.2753],
    primarySpecies: ['Elk', 'Antelope'],
    difficulty: 'Easy'
  }
};

/**
 * Enhanced geocoding for Colorado locations
 * @param locationName - Name of the location
 * @returns [longitude, latitude] or Colorado center
 */
export function geocodeColoradoLocation(locationName: string): [number, number] {
  if (!locationName) return COLORADO_CONFIG.center;
  
  const normalized = locationName.toLowerCase().trim();
  
  // Check fishing locations
  for (const [name, coords] of Object.entries(FISHING_LOCATIONS)) {
    if (normalized.includes(name) || name.includes(normalized)) {
      return coords;
    }
  }
  
  // Check state parks
  for (const [name, data] of Object.entries(STATE_PARKS)) {
    if (normalized.includes(name) || name.includes(normalized)) {
      return data.coordinates;
    }
  }
  
  // Check hunting units
  for (const [name, data] of Object.entries(HUNTING_UNITS)) {
    if (normalized.includes(name) || name.includes(normalized)) {
      return data.coordinates;
    }
  }
  
  // Fallback patterns for water bodies
  if (normalized.includes('lake') || normalized.includes('reservoir')) {
    return [-105.5, 39.8]; // Generic lake area
  }
  
  if (normalized.includes('river') || normalized.includes('creek')) {
    return [-105.3, 39.6]; // Generic river area
  }
  
  return COLORADO_CONFIG.center;
}

/**
 * Real-time geocoding using Mapbox Geocoding API
 * @param locationName - Name of the location to geocode
 * @returns Promise<[longitude, latitude]> or throws error
 */
export async function geocodeLocationRealtime(locationName: string): Promise<[number, number]> {
  // First try static lookup for known locations
  const staticResult = geocodeColoradoLocation(locationName);
  if (staticResult !== COLORADO_CONFIG.center) {
    return staticResult;
  }
  
  // If not found in static data, use Mapbox API
  const accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;
  if (!accessToken) {
    console.warn('Mapbox access token not found, using static geocoding fallback');
    return staticResult;
  }
  
  try {
    const query = encodeURIComponent(`${locationName}, Colorado, USA`);
    const response = await fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${query}.json?access_token=${accessToken}&country=US&proximity=${COLORADO_CONFIG.center[0]},${COLORADO_CONFIG.center[1]}&bbox=${COLORADO_CONFIG.bounds[0][0]},${COLORADO_CONFIG.bounds[0][1]},${COLORADO_CONFIG.bounds[1][0]},${COLORADO_CONFIG.bounds[1][1]}`
    );
    
    if (!response.ok) {
      throw new Error(`Geocoding API error: ${response.status}`);
    }
    
    const data = await response.json();
    
    if (data.features && data.features.length > 0) {
      const [lng, lat] = data.features[0].center;
      
      // Validate coordinates are within Colorado
      if (isInColorado(lng, lat)) {
        console.log(`✅ Geocoded "${locationName}" to [${lng}, ${lat}]`);
        return [lng, lat];
      } else {
        console.warn(`⚠️ Geocoded location "${locationName}" is outside Colorado bounds`);
      }
    }
    
    console.warn(`⚠️ No geocoding results found for "${locationName}"`);
    return staticResult;
    
  } catch (error) {
    console.error(`❌ Geocoding failed for "${locationName}":`, error);
    return staticResult;
  }
}

/**
 * Batch geocode multiple locations efficiently
 * @param locations - Array of location names
 * @returns Promise<Array<{ location: string, coordinates: [number, number] }>>
 */
export async function batchGeocodeLocations(locations: string[]): Promise<Array<{ location: string; coordinates: [number, number] }>> {
  const results = [];
  const delay = 100; // Rate limiting: 10 requests per second
  
  for (const location of locations) {
    try {
      const coordinates = await geocodeLocationRealtime(location);
      results.push({ location, coordinates });
      
      // Rate limiting delay
      if (locations.length > 1) {
        await new Promise(resolve => setTimeout(resolve, delay));
      }
    } catch (error) {
      console.error(`Failed to geocode "${location}":`, error);
      results.push({ 
        location, 
        coordinates: COLORADO_CONFIG.center 
      });
    }
  }
  
  return results;
}

/**
 * Validate coordinates are within Colorado
 * @param lng - Longitude
 * @param lat - Latitude
 * @returns boolean
 */
export function isInColorado(lng: number, lat: number): boolean {
  const [west, south] = COLORADO_CONFIG.bounds[0];
  const [east, north] = COLORADO_CONFIG.bounds[1];
  
  return lng >= west && lng <= east && lat >= south && lat <= north;
}

/**
 * Get optimal zoom level based on data density
 * @param dataPoints - Array of data points with coordinates
 * @returns Optimal zoom level
 */
export function getOptimalZoom(dataPoints: Array<{ longitude?: number; latitude?: number }>): number {
  if (!dataPoints.length) return COLORADO_CONFIG.defaultZoom;
  
  // Calculate bounding box of data points
  const lngs = dataPoints.map(p => p.longitude).filter(Boolean) as number[];
  const lats = dataPoints.map(p => p.latitude).filter(Boolean) as number[];
  
  if (!lngs.length) return COLORADO_CONFIG.defaultZoom;
  
  const lngSpan = Math.max(...lngs) - Math.min(...lngs);
  const latSpan = Math.max(...lats) - Math.min(...lats);
  const maxSpan = Math.max(lngSpan, latSpan);
  
  // Determine zoom based on span
  if (maxSpan > 5) return 6;
  if (maxSpan > 2) return 7;
  if (maxSpan > 1) return 8;
  if (maxSpan > 0.5) return 9;
  return 10;
}

/**
 * Create GeoJSON from data points
 * @param dataPoints - Array of data with lat/lng
 * @param type - Type of data for properties
 * @returns GeoJSON FeatureCollection
 */
export function createGeoJSON(dataPoints: Array<unknown>, type: string = 'point'): unknown {
  return {
    type: 'FeatureCollection',
    features: dataPoints
      .filter(point => point.latitude && point.longitude)
      .map(point => ({
        type: 'Feature',
        properties: {
          ...point,
          type
        },
        geometry: {
          type: 'Point',
          coordinates: [point.longitude, point.latitude]
        }
      }))
  };
}