import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  // Simple auth check
  const authHeader = request.headers.get('authorization')
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    // Call your existing scraping endpoints
    const baseUrl = process.env.VERCEL_URL || 'http://localhost:3000'
    
    console.log('🚀 Starting automated scraping job...')
    
    // Trigger trout stocking scrape
    const troutResponse = await fetch(`${baseUrl}/api/scrape/trout-stocking`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    })
    
    const troutResult = troutResponse.ok ? await troutResponse.json() : null
    
    // Trigger water conditions scrape  
    const waterResponse = await fetch(`${baseUrl}/api/scrape/all-data`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    })
    
    const waterResult = waterResponse.ok ? await waterResponse.json() : null
    
    const result = {
      success: true,
      timestamp: new Date().toISOString(),
      results: {
        troutStocking: {
          success: troutResponse.ok,
          status: troutResponse.status,
          data: troutResult
        },
        waterConditions: {
          success: waterResponse.ok,
          status: waterResponse.status,
          data: waterResult
        }
      }
    }
    
    console.log('✅ Automated scraping completed:', result)
    
    return NextResponse.json(result)
  } catch (error) {
    console.error('❌ Cron scraping failed:', error)
    return NextResponse.json({ 
      error: 'Scraping failed',
      message: error instanceof Error ? error.message : 'Unknown error',
      timestamp: new Date().toISOString()
    }, { status: 500 })
  }
}