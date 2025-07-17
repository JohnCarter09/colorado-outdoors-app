import { NextRequest, NextResponse } from 'next/server'
import { ColoradoOutdoorsScraper } from '@/lib/scrapers/ColoradoOutdoorsScraper'
import prisma, { dataSyncService } from '@/lib/database'

export async function POST(request: NextRequest) {
  const startTime = Date.now()
  
  try {
    console.log('🌊 Starting water conditions scrape...')
    
    const scraper = new ColoradoOutdoorsScraper()
    await scraper.init()
    
    // Use existing scraper method
    const waterConditions = await scraper.scrapeWaterConditions()
    await scraper.close()
    
    console.log(`Scraped ${waterConditions.length} water condition records`)
    const executionTime = Date.now() - startTime
    
    // Save to database
    let savedCount = 0
    let updatedCount = 0
    let errors = 0
    
    for (const condition of waterConditions) {
      try {
        // Check if record exists based on waterBody and location
        const existing = await prisma.waterCondition.findFirst({
          where: {
            waterBody: condition.waterBody,
            location: condition.location
          }
        })
        
        if (existing) {
          // Update existing record
          await prisma.waterCondition.update({
            where: { id: existing.id },
            data: {
              lastUpdated: condition.lastUpdated,
              waterLevel: condition.waterLevel,
              waterTemperature: condition.waterTemperature,
              clarity: condition.clarity,
              flow: condition.flow,
              fishingConditions: condition.fishingConditions,
              notes: condition.notes,
              weatherImpact: condition.weatherImpact,
              source: condition.source
            }
          })
          updatedCount++
        } else {
          // Create new record
          await prisma.waterCondition.create({
            data: {
              waterBody: condition.waterBody,
              location: condition.location,
              lastUpdated: condition.lastUpdated,
              waterLevel: condition.waterLevel,
              waterTemperature: condition.waterTemperature,
              clarity: condition.clarity,
              flow: condition.flow,
              fishingConditions: condition.fishingConditions,
              notes: condition.notes,
              weatherImpact: condition.weatherImpact,
              source: condition.source
            }
          })
          savedCount++
        }
      } catch (error) {
        console.error('Error saving water condition:', error)
        errors++
      }
    }
    
    // Get total records in database
    const totalRecords = await prisma.waterCondition.count()
    
    // Log the operation
    await dataSyncService.log({
      type: 'water_conditions',
      status: 'success',
      recordsProcessed: waterConditions.length,
      recordsAdded: savedCount,
      recordsUpdated: updatedCount,
      executionTime
    })
    
    const result = {
      success: true,
      message: `Scraped ${waterConditions.length} records, saved ${savedCount} new, updated ${updatedCount}`,
      scraping: {
        recordsScraped: waterConditions.length,
        recordsSaved: savedCount,
        recordsUpdated: updatedCount,
        errors: errors,
        executionTime: `${executionTime}ms`
      },
      database: {
        totalRecords: totalRecords,
        recentConditions: savedCount + updatedCount
      },
      lastUpdated: new Date().toISOString()
    }
    
    console.log('✅ Water conditions scrape completed:', result)
    
    return NextResponse.json(result)
    
  } catch (error) {
    console.error('❌ Water conditions scrape failed:', error)
    
    // Log the failure
    try {
      await dataSyncService.log({
        type: 'water_conditions',
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
      error: 'Water conditions scrape failed',
      message: error instanceof Error ? error.message : 'Unknown error',
      timestamp: new Date().toISOString()
    }, { status: 500 })
  }
}

export async function GET() {
  try {
    const conditions = await prisma.waterCondition.findMany({
      orderBy: { lastUpdated: 'desc' },
      take: 50
    })
    
    const totalCount = await prisma.waterCondition.count()
    
    return NextResponse.json({
      success: true,
      conditions,
      count: conditions.length,
      total: totalCount,
      timestamp: new Date().toISOString()
    })
  } catch (error) {
    console.error('Failed to fetch water conditions:', error)
    return NextResponse.json({
      success: false,
      error: 'Failed to fetch water conditions',
      message: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}