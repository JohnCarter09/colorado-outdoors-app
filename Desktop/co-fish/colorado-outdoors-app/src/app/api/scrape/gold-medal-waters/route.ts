import { NextRequest, NextResponse } from 'next/server'
import { ColoradoOutdoorsScraper } from '@/lib/scrapers/ColoradoOutdoorsScraper'
import prisma, { dataSyncService } from '@/lib/database'

export async function POST(request: NextRequest) {
  const startTime = Date.now()
  
  try {
    console.log('🏆 Starting Gold Medal Waters scrape...')
    
    const scraper = new ColoradoOutdoorsScraper()
    // Note: Gold Medal Waters uses ArcGIS API, so no browser initialization needed
    
    const goldMedalWaters = await scraper.scrapeGoldMedalWaters()
    const executionTime = Date.now() - startTime
    
    console.log(`Scraped ${goldMedalWaters.length} Gold Medal Water records`)
    
    // For now, we'll return the data without database storage
    // TODO: Create GoldMedalWater database model and save data
    let savedCount = 0
    let updatedCount = 0
    let errors = 0
    
    // Future: Save to database when model is created
    // for (const water of goldMedalWaters) {
    //   try {
    //     // Save or update Gold Medal Water records
    //   } catch (error) {
    //     errors++
    //   }
    // }
    
    // Log the operation
    await dataSyncService.log({
      type: 'gold_medal_waters',
      status: 'success',
      recordsProcessed: goldMedalWaters.length,
      recordsAdded: savedCount,
      recordsUpdated: updatedCount,
      executionTime
    })
    
    const result = {
      success: true,
      message: `Scraped ${goldMedalWaters.length} Gold Medal Waters (${goldMedalWaters.filter(w => w.type === 'stream').length} streams, ${goldMedalWaters.filter(w => w.type === 'lake').length} lakes)`,
      scraping: {
        recordsScraped: goldMedalWaters.length,
        recordsSaved: savedCount,
        recordsUpdated: updatedCount,
        errors: errors,
        executionTime: `${executionTime}ms`
      },
      data: {
        goldMedalWaters: goldMedalWaters,
        streams: goldMedalWaters.filter(w => w.type === 'stream'),
        lakes: goldMedalWaters.filter(w => w.type === 'lake')
      },
      lastUpdated: new Date().toISOString()
    }
    
    console.log('✅ Gold Medal Waters scrape completed:', result.scraping)
    
    return NextResponse.json(result)
    
  } catch (error) {
    console.error('❌ Gold Medal Waters scrape failed:', error)
    
    // Log the failure
    try {
      await dataSyncService.log({
        type: 'gold_medal_waters',
        status: 'error',
        recordsProcessed: 0,
        recordsAdded: 0,
        recordsUpdated: 0,
        errorMessage: error instanceof Error ? error.message : 'Unknown error',
        executionTime: Date.now() - startTime
      })
    } catch (logError) {
      console.error('Failed to log error:', logError)
    }
    
    return NextResponse.json({
      success: false,
      error: 'Gold Medal Waters scrape failed',
      message: error instanceof Error ? error.message : 'Unknown error',
      timestamp: new Date().toISOString()
    }, { status: 500 })
  }
}

export async function GET() {
  try {
    // For now, return info about the endpoint
    // TODO: Query GoldMedalWater table when model is created
    
    return NextResponse.json({
      success: true,
      message: 'Gold Medal Waters endpoint - use POST to scrape data',
      info: {
        description: 'Colorado Gold Medal Waters are premium trout fishing locations',
        dataSource: 'Colorado ArcGIS Fishing Atlas API',
        includes: ['Gold Medal Streams', 'Gold Medal Lakes'],
        note: 'Database storage coming soon - currently returns scraped data directly'
      },
      timestamp: new Date().toISOString()
    })
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: 'Failed to get Gold Medal Waters info',
      message: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}