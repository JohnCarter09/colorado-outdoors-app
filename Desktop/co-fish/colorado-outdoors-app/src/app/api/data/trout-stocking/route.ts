// API Route: /api/data/trout-stocking
// Returns trout stocking data with filtering options

import { NextRequest, NextResponse } from 'next/server';
import { troutStockingService } from '@/lib/database';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    
    // Extract query parameters
    const location = searchParams.get('location');
    const species = searchParams.get('species');
    const county = searchParams.get('county');
    const days = parseInt(searchParams.get('days') || '30');
    const take = parseInt(searchParams.get('take') || '50');
    const skip = parseInt(searchParams.get('skip') || '0');
    
    // Build where clause for database query
    const where: any = {};
    
    if (location) {
      where.location = { contains: location, mode: 'insensitive' };
    }
    
    if (species) {
      where.species = { contains: species, mode: 'insensitive' };
    }
    
    if (county) {
      where.county = { contains: county, mode: 'insensitive' };
    }
    
    // Filter by date range
    const cutoffDate = new Date();
    cutoffDate.setDate(cutoffDate.getDate() - days);
    where.stockingDate = {
      gte: cutoffDate
    };
    
    // Query the database
    const data = await troutStockingService.findMany({
      where,
      orderBy: {
        stockingDate: 'desc'
      },
      take,
      skip
    });
    
    // Get stats for additional info
    const stats = await troutStockingService.getStats();
    
    return NextResponse.json({
      success: true,
      data,
      count: data.length,
      stats: {
        totalRecords: stats.totalRecords,
        totalFish: stats.totalFish,
        recentStockings: stats.recentStockings
      },
      filters: {
        location: location || 'all',
        species: species || 'all',
        county: county || 'all',
        days: days
      },
      pagination: {
        take,
        skip,
        total: stats.totalRecords
      },
      lastUpdated: new Date().toISOString()
    });
    
  } catch (error) {
    console.error('❌ Failed to fetch trout stocking data:', error);
    
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error occurred',
      timestamp: new Date().toISOString()
    }, { status: 500 });
  }
}

// POST method for manual data refresh
export async function POST(request: NextRequest) {
  try {
    // Trigger a scrape to refresh the database
    console.log('🔄 Triggering manual data refresh...');
    
    const scrapeResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'}/api/scrape/trout-stocking`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    if (!scrapeResponse.ok) {
      throw new Error(`Scrape failed: ${scrapeResponse.statusText}`);
    }
    
    const scrapeResult = await scrapeResponse.json();
    
    // Get fresh data from database
    const freshData = await troutStockingService.findMany({
      orderBy: {
        stockingDate: 'desc'
      },
      take: 50
    });
    
    const stats = await troutStockingService.getStats();
    
    return NextResponse.json({
      success: true,
      message: 'Data refresh completed successfully',
      scrapeResult,
      data: freshData,
      stats: {
        totalRecords: stats.totalRecords,
        totalFish: stats.totalFish,
        recentStockings: stats.recentStockings
      },
      lastUpdated: new Date().toISOString()
    });
    
  } catch (error) {
    console.error('❌ Failed to refresh trout stocking data:', error);
    
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error occurred',
      timestamp: new Date().toISOString()
    }, { status: 500 });
  }
}