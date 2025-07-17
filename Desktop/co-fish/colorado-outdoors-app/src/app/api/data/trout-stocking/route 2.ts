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
    const days = parseInt(searchParams.get('days') || '30');
    
    // Filter data based on parameters
    let filteredData = mockTroutStockingData;
    
    if (location) {
      filteredData = filteredData.filter(record => 
        record.location.toLowerCase().includes(location.toLowerCase())
      );
    }
    
    if (species) {
      filteredData = filteredData.filter(record => 
        record.species.toLowerCase().includes(species.toLowerCase())
      );
    }
    
    // Filter by date range
    const cutoffDate = new Date();
    cutoffDate.setDate(cutoffDate.getDate() - days);
    
    filteredData = filteredData.filter(record => 
      record.stockingDate >= cutoffDate
    );
    
    // TODO: Replace with actual database query when Prisma is ready
    // const data = await prisma.troutStocking.findMany({
    //   where: {
    //     location: location ? { contains: location, mode: 'insensitive' } : undefined,
    //     species: species ? { contains: species, mode: 'insensitive' } : undefined,
    //     stockingDate: {
    //       gte: cutoffDate
    //     }
    //   },
    //   orderBy: {
    //     stockingDate: 'desc'
    //   }
    // });
    
    return NextResponse.json({
      success: true,
      data: filteredData,
      count: filteredData.length,
      filters: {
        location: location || 'all',
        species: species || 'all',
        days: days
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
    // This would trigger a scrape and update the database
    // For now, just return the mock data
    
    return NextResponse.json({
      success: true,
      message: 'Data refresh triggered',
      data: mockTroutStockingData,
      count: mockTroutStockingData.length,
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