// Colorado Parks & Wildlife ArcGIS API Service
// Direct access to Colorado's official fishing database

export interface ArcGISGeometry {
  x: number; // longitude
  y: number; // latitude
}

export interface ArcGISFishingPointAttributes {
  OBJECTID: number;
  WATERCODE: string;
  FA_NAME: string; // Water body name
  COUNTYNAME: string;
  ELEV_FT: number;
  STOCKED: string; // "Catchable trout", "Sub-catchable trout", "Warmwater"
  BOATING: string; // "Non-motorized", "Electric", "Motor"
  UNI_ID: number;
  ACCESS: string;
  FISHING_PRESSURE: string; // "Low", "Medium", "High"
  FISHING_OPPORTUNITIES: string; // "Family", "Year-round", "Ice fishing"
  HANDICAP_PIER: string; // "Yes", "No"
  ICE_FISHING: string; // "Yes", "No"
  [key: string]: any; // For additional fields
}

export interface ArcGISFishingPoint {
  objectId: number;
  geometry: ArcGISGeometry;
  attributes: ArcGISFishingPointAttributes;
}

export interface ArcGISGoldMedalAttributes {
  OBJECTID: number;
  WATER_NAME: string;
  STRETCH_NAME: string;
  COUNTY: string;
  DESCRIPTION: string;
  [key: string]: any;
}

export interface ArcGISGoldMedalWater {
  objectId: number;
  geometry: any; // Could be point, line, or polygon
  attributes: ArcGISGoldMedalAttributes;
}

export interface ArcGISQueryResponse {
  features: Array<{
    attributes: any;
    geometry: any;
  }>;
  exceededTransferLimit?: boolean;
  fieldAliases?: Record<string, string>;
}

export interface TroutStockingRecord {
  id: string;
  location: string;
  waterBody: string;
  county: string;
  species: string;
  size?: string;
  quantity: number;
  stockingDate: Date;
  nextStockingDate?: Date;
  latitude?: number;
  longitude?: number;
  waterBodyType?: string;
  accessInfo?: string;
  regulations?: string;
  source: string;
  createdAt?: Date;
  updatedAt?: Date;
  
  // Enhanced fields from ArcGIS
  elevation?: number;
  fishingPressure?: string;
  fishingOpportunities?: string;
  handicapAccessible?: boolean;
  boatingRules?: string;
  iceFishing?: boolean;
}

export class ArcGISDataService {
  private readonly baseUrl = 'https://ndismaps.nrel.colostate.edu/arcgis/rest/services/FishingAtlas/FishingAtlas_Data/MapServer';
  
  // Layer IDs from the Colorado Fishing Atlas
  private readonly layers = {
    fishingPoints: 0,        // Fishing Information Point
    specialOpportunities: 1, // Special fishing opportunities  
    fishSpecies: 2,          // Fish species
    boatRamps: 3,           // Boat Ramp
    streamGages: 4,         // Stream Gage
    streamRegulations: 5,    // Special Fishing Regulations (stream)
    streamLocations: 6,      // Stream locations
    goldMedalWater: 7,      // Gold Medal Water (parent)
    goldMedalStreams: 8,    // Gold Medal Streams
    goldMedalLakes: 9,      // Gold Medal Lakes
    allStreams: 10,         // All Streams
    allLakes: 11,           // All Lakes
    lakeRegulations: 12,    // Special Fishing Regulations (lake)
    propertyRegulations: 13, // Special Fishing Regulations (property)
    contactInfo: 14,        // Contact Info
    watercodeStreams: 15,   // Watercode Streams
    watercodeWaterbodies: 16 // Watercode Waterbodies
  };

  /**
   * Get all trout stocking locations from Colorado's official database
   */
  async getTroutStockingData(): Promise<ArcGISFishingPoint[]> {
    console.log('🎯 Fetching trout stocking data from Colorado ArcGIS API...');
    
    const query = new URLSearchParams({
      where: "STOCKED LIKE '%trout%'",
      outFields: '*',
      f: 'json',
      returnGeometry: 'true',
      resultRecordCount: '1000' // Get up to 1000 records
    });
    
    try {
      const data = await this.queryLayer(this.layers.fishingPoints, query);
      const points = this.parseFeatures<ArcGISFishingPoint>(data);
      
      console.log(`✅ Retrieved ${points.length} trout stocking locations from ArcGIS`);
      return points;
      
    } catch (error) {
      console.error('❌ ArcGIS trout stocking query failed:', error);
      throw new Error(`Failed to fetch trout stocking data: ${error.message}`);
    }
  }

  /**
   * Get all fishing locations (not just trout stocking)
   */
  async getAllFishingLocations(): Promise<ArcGISFishingPoint[]> {
    console.log('🎣 Fetching all fishing locations from Colorado ArcGIS API...');
    
    const query = new URLSearchParams({
      where: '1=1', // Get all records
      outFields: '*',
      f: 'json',
      returnGeometry: 'true',
      resultRecordCount: '2000'
    });
    
    try {
      const data = await this.queryLayer(this.layers.fishingPoints, query);
      const points = this.parseFeatures<ArcGISFishingPoint>(data);
      
      console.log(`✅ Retrieved ${points.length} total fishing locations from ArcGIS`);
      return points;
      
    } catch (error) {
      console.error('❌ ArcGIS fishing locations query failed:', error);
      throw new Error(`Failed to fetch fishing locations: ${error.message}`);
    }
  }

  /**
   * Get Gold Medal Waters (premium trout fishing streams and lakes)
   */
  async getGoldMedalWaters(): Promise<{streams: ArcGISGoldMedalWater[], lakes: ArcGISGoldMedalWater[]}> {
    console.log('🏆 Fetching Gold Medal Waters from Colorado ArcGIS API...');
    
    const query = new URLSearchParams({
      where: '1=1',
      outFields: '*',
      f: 'json',
      returnGeometry: 'true'
    });
    
    try {
      const [streamsData, lakesData] = await Promise.all([
        this.queryLayer(this.layers.goldMedalStreams, query),
        this.queryLayer(this.layers.goldMedalLakes, query)
      ]);
      
      const streams = this.parseFeatures<ArcGISGoldMedalWater>(streamsData);
      const lakes = this.parseFeatures<ArcGISGoldMedalWater>(lakesData);
      
      console.log(`✅ Retrieved ${streams.length} Gold Medal Streams and ${lakes.length} Gold Medal Lakes`);
      
      return { streams, lakes };
      
    } catch (error) {
      console.error('❌ ArcGIS Gold Medal Waters query failed:', error);
      throw new Error(`Failed to fetch Gold Medal Waters: ${error.message}`);
    }
  }

  /**
   * Get fishing regulations for a specific water body
   */
  async getFishingRegulations(waterBodyName?: string): Promise<any[]> {
    console.log(`📋 Fetching fishing regulations${waterBodyName ? ` for ${waterBodyName}` : ''}...`);
    
    const whereClause = waterBodyName 
      ? `WATER_NAME LIKE '%${waterBodyName}%'`
      : '1=1';
    
    const query = new URLSearchParams({
      where: whereClause,
      outFields: '*',
      f: 'json',
      returnGeometry: 'true'
    });
    
    try {
      const [streamRegs, lakeRegs, propertyRegs] = await Promise.all([
        this.queryLayer(this.layers.streamRegulations, query),
        this.queryLayer(this.layers.lakeRegulations, query),
        this.queryLayer(this.layers.propertyRegulations, query)
      ]);
      
      const allRegulations = [
        ...this.parseFeatures(streamRegs),
        ...this.parseFeatures(lakeRegs),
        ...this.parseFeatures(propertyRegs)
      ];
      
      console.log(`✅ Retrieved ${allRegulations.length} fishing regulation records`);
      return allRegulations;
      
    } catch (error) {
      console.error('❌ ArcGIS fishing regulations query failed:', error);
      throw new Error(`Failed to fetch fishing regulations: ${error.message}`);
    }
  }

  /**
   * Convert ArcGIS data to our TroutStockingRecord format
   */
  convertToTroutStockingRecord(arcgisPoint: ArcGISFishingPoint): TroutStockingRecord {
    const attrs = arcgisPoint.attributes;
    
    return {
      id: `arcgis-${attrs.OBJECTID}`,
      location: attrs.FA_NAME || 'Unknown Location',
      waterBody: attrs.FA_NAME || 'Unknown Water Body',
      county: attrs.COUNTYNAME || 'Unknown County',
      species: this.parseSpecies(attrs.STOCKED),
      size: this.parseSize(attrs.STOCKED),
      quantity: this.estimateQuantity(attrs.STOCKED),
      stockingDate: new Date(), // API doesn't provide exact stocking dates
      latitude: arcgisPoint.geometry?.y,
      longitude: arcgisPoint.geometry?.x,
      waterBodyType: this.determineWaterBodyType(attrs.FA_NAME),
      accessInfo: attrs.ACCESS || 'Access information not available',
      source: 'colorado-arcgis-api',
      createdAt: new Date(),
      updatedAt: new Date(),
      
      // Enhanced ArcGIS fields
      elevation: attrs.ELEV_FT,
      fishingPressure: attrs.FISHING_PRESSURE,
      fishingOpportunities: attrs.FISHING_OPPORTUNITIES,
      handicapAccessible: attrs.HANDICAP_PIER === 'Yes',
      boatingRules: attrs.BOATING,
      iceFishing: attrs.ICE_FISHING === 'Yes'
    };
  }

  /**
   * Private helper methods
   */
  private async queryLayer(layerId: number, query: URLSearchParams): Promise<ArcGISQueryResponse> {
    const url = `${this.baseUrl}/${layerId}/query?${query.toString()}`;
    
    console.log(`🔍 Querying ArcGIS layer ${layerId}...`);
    
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'User-Agent': 'Colorado-Outdoors-App/1.0'
      }
    });
    
    if (!response.ok) {
      throw new Error(`ArcGIS API HTTP ${response.status}: ${response.statusText}`);
    }
    
    const data = await response.json();
    
    if (data.error) {
      throw new Error(`ArcGIS API Error: ${data.error.message || 'Unknown error'}`);
    }
    
    return data;
  }

  private parseFeatures<T>(data: ArcGISQueryResponse): T[] {
    return data.features?.map(feature => ({
      objectId: feature.attributes.OBJECTID,
      geometry: feature.geometry,
      attributes: feature.attributes
    })) as T[] || [];
  }

  private parseSpecies(stockedField: string): string {
    if (!stockedField) return 'Unknown Species';
    
    const lower = stockedField.toLowerCase();
    if (lower.includes('catchable trout')) return 'Catchable Trout';
    if (lower.includes('sub-catchable')) return 'Sub-catchable Trout';
    if (lower.includes('trout')) return 'Trout';
    if (lower.includes('warmwater')) return 'Warmwater Species';
    
    return stockedField;
  }

  private parseSize(stockedField: string): string | undefined {
    if (!stockedField) return undefined;
    
    if (stockedField.toLowerCase().includes('catchable')) return 'Catchable (8-12 inches)';
    if (stockedField.toLowerCase().includes('sub-catchable')) return 'Sub-catchable (4-8 inches)';
    
    return undefined;
  }

  private estimateQuantity(stockedField: string): number {
    if (!stockedField) return 0;
    
    const lower = stockedField.toLowerCase();
    // These are estimates since the API doesn't provide exact quantities
    if (lower.includes('catchable')) return 500;
    if (lower.includes('sub-catchable')) return 1000;
    if (lower.includes('trout')) return 750;
    
    return 0;
  }

  private determineWaterBodyType(name: string): string {
    if (!name) return 'Unknown';
    
    const lower = name.toLowerCase();
    if (lower.includes('lake')) return 'Lake';
    if (lower.includes('reservoir')) return 'Reservoir';
    if (lower.includes('river')) return 'River';
    if (lower.includes('creek')) return 'Creek';
    if (lower.includes('pond')) return 'Pond';
    if (lower.includes('stream')) return 'Stream';
    
    return 'Lake'; // Default assumption for stocked waters
  }
}

export default ArcGISDataService;