// API Route: /api/scrape/trout-stocking
// Scrapes trout stocking data from Colorado Parks & Wildlife and saves to database

import { NextRequest, NextResponse } from 'next/server';
import { ColoradoOutdoorsScraper } from '@/lib/scrapers/ColoradoOutdoorsScraper';
import { troutStockingService, dataSyncService } from '@/lib/database';
import { geocodeColoradoLocation, geocodeLocationRealtime } from '@/lib/colorado-mapbox-utils';

export async function POST(request: NextRequest) {
  const startTime = Date.now();
  
  try {
    console.log('🎣 Starting trout stocking scrape...');
    
    const scraper = new ColoradoOutdoorsScraper();
    await scraper.init();
    
    const troutStockingData = await scraper.scrapeTroutStocking();
    
    await scraper.close();
    
    console.log(`📊 Scraped ${troutStockingData.length} records, now saving to database...`);
    
    // Save to database
    let recordsAdded = 0;
    let recordsUpdated = 0;
    const errors: string[] = [];
    
    for (const record of troutStockingData) {
      try {
        // Get coordinates for the location - try real-time geocoding first
        let longitude: number, latitude: number;
        try {
          [longitude, latitude] = await geocodeLocationRealtime(record.location);
        } catch (error) {
          console.warn(`Real-time geocoding failed for ${record.location}, using static fallback`);
          [longitude, latitude] = geocodeColoradoLocation(record.location);
        }
        
        // Parse the stocking date
        const stockingDate = new Date(record.stockingDate);
        
        // Create/update the record
        const result = await troutStockingService.upsert(
          {
            location: record.location,
            stockingDate: stockingDate
          },
          {
            location: record.location,
            waterBody: record.waterBody || record.location,
            county: record.county,
            species: record.species,
            size: record.size,
            quantity: parseInt(record.quantity) || 0,
            stockingDate: stockingDate,
            nextStockingDate: record.nextStockingDate ? new Date(record.nextStockingDate) : undefined,
            latitude: latitude,
            longitude: longitude,
            waterBodyType: record.waterBodyType,
            accessInfo: record.accessInfo,
            regulations: record.regulations,
            source: record.source || 'cpw-scraper'
          }
        );
        
        recordsAdded++;
        console.log(`✅ Saved: ${record.location} - ${record.species}`);
        
      } catch (error) {
        const errorMsg = `Failed to save ${record.location}: ${error instanceof Error ? error.message : 'Unknown error'}`;
        errors.push(errorMsg);
        console.error(`❌ ${errorMsg}`);
      }
    }
    
    const executionTime = Date.now() - startTime;
    const status = errors.length === 0 ? 'success' : (recordsAdded > 0 ? 'partial' : 'error');
    
    // Log the sync operation
    await dataSyncService.log({
      type: 'trout_stocking',
      status,
      recordsProcessed: troutStockingData.length,
      recordsAdded,
      recordsUpdated,
      errorMessage: errors.length > 0 ? errors.join('; ') : undefined,
      executionTime
    });
    
    // Get updated stats
    const stats = await troutStockingService.getStats();
    
    return NextResponse.json({
      success: status !== 'error',
      message: `Scraped ${troutStockingData.length} records, saved ${recordsAdded} to database`,
      scraping: {
        recordsScraped: troutStockingData.length,
        recordsSaved: recordsAdded,
        recordsUpdated,
        errors: errors.length,
        executionTime: `${executionTime}ms`
      },
      database: {
        totalRecords: stats.totalRecords,
        totalFish: stats.totalFish,
        recentStockings: stats.recentStockings
      },
      errors: errors.length > 0 ? errors : undefined,
      lastUpdated: new Date().toISOString()
    });
    
  } catch (error) {
    console.error('❌ Trout stocking scraping failed:', error);
    
    // Log the failure
    await dataSyncService.log({
      type: 'trout_stocking',
      status: 'error',
      recordsProcessed: 0,
      recordsAdded: 0,
      recordsUpdated: 0,
      errorMessage: error instanceof Error ? error.message : 'Unknown error occurred',
      executionTime: Date.now() - startTime
    });
    
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error occurred',
      timestamp: new Date().toISOString()
    }, { status: 500 });
  }
}

// GET method to check scraper status
export async function GET() {
  return NextResponse.json({
    scraper: 'Trout Stocking Scraper',
    status: 'Ready',
    endpoint: '/api/scrape/trout-stocking',
    method: 'POST',
    description: 'Scrapes trout stocking data from Colorado Parks & Wildlife'
  });
}