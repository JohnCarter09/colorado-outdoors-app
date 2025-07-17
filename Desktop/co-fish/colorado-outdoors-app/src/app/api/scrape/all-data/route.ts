// API Route: /api/scrape/all-data
// Triggers full data scrape from Colorado Parks & Wildlife

import { NextRequest, NextResponse } from 'next/server';
import { ColoradoOutdoorsScraper } from '@/lib/scrapers/ColoradoOutdoorsScraper';

export async function POST(request: NextRequest) {
  try {
    console.log('🚀 Starting full data scrape...');
    
    const scraper = new ColoradoOutdoorsScraper();
    const data = await scraper.scrapeAllData();
    
    // TODO: Save data to database when Prisma is working
    // await saveToDatabase(data);
    
    return NextResponse.json({
      success: true,
      message: 'All data scraped successfully',
      stats: data.stats,
      lastUpdated: data.lastUpdated,
      data: {
        troutStocking: data.troutStocking.slice(0, 10), // First 10 records for preview
        waterConditions: data.waterConditions.slice(0, 10),
        events: data.events.slice(0, 10),
        hunting: data.hunting.slice(0, 10)
      }
    });
    
  } catch (error) {
    console.error('❌ Scraping failed:', error);
    
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error occurred',
      timestamp: new Date().toISOString()
    }, { status: 500 });
  }
}

// Only allow POST requests
export async function GET() {
  return NextResponse.json({
    error: 'Method not allowed. Use POST to trigger scraping.',
    allowedMethods: ['POST']
  }, { status: 405 });
}