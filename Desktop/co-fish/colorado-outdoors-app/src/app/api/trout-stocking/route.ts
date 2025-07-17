import { NextRequest, NextResponse } from 'next/server';
import { troutStockingService } from '@/lib/database';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const skip = parseInt(searchParams.get('skip') || '0');
    const take = parseInt(searchParams.get('take') || '50');
    const species = searchParams.get('species');
    const location = searchParams.get('location');
    const county = searchParams.get('county');
    const recent = searchParams.get('recent'); // boolean

    // Build where clause
    const where: any = {};
    if (species) where.species = species;
    if (location) where.location = { contains: location };
    if (county) where.county = county;
    if (recent === 'true') {
      const sevenDaysAgo = new Date();
      sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
      where.stockingDate = { gte: sevenDaysAgo };
    }

    const troutStockings = await troutStockingService.findMany({
      skip,
      take,
      where,
      orderBy: { stockingDate: 'desc' }
    });

    const stats = await troutStockingService.getStats();

    return NextResponse.json({
      success: true,
      data: troutStockings,
      stats,
      pagination: {
        skip,
        take,
        total: stats.totalRecords
      }
    });
  } catch (error) {
    console.error('Error fetching trout stocking data:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to fetch trout stocking data',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const {
      location,
      waterBody,
      county,
      species,
      size,
      quantity,
      stockingDate,
      nextStockingDate,
      latitude,
      longitude,
      waterBodyType,
      accessInfo,
      regulations,
      source
    } = body;

    // Validate required fields
    if (!location || !waterBody || !species || !quantity || !stockingDate) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Missing required fields: location, waterBody, species, quantity, stockingDate' 
        },
        { status: 400 }
      );
    }

    const troutStocking = await troutStockingService.create({
      location,
      waterBody,
      county,
      species,
      size,
      quantity: parseInt(quantity),
      stockingDate: new Date(stockingDate),
      nextStockingDate: nextStockingDate ? new Date(nextStockingDate) : undefined,
      latitude: latitude ? parseFloat(latitude) : undefined,
      longitude: longitude ? parseFloat(longitude) : undefined,
      waterBodyType,
      accessInfo,
      regulations,
      source
    });

    return NextResponse.json({
      success: true,
      data: troutStocking
    });
  } catch (error) {
    console.error('Error creating trout stocking record:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to create trout stocking record',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const { id, ...updateData } = body;

    if (!id) {
      return NextResponse.json(
        { success: false, error: 'ID is required for update' },
        { status: 400 }
      );
    }

    // Convert date strings to Date objects
    if (updateData.stockingDate) {
      updateData.stockingDate = new Date(updateData.stockingDate);
    }
    if (updateData.nextStockingDate) {
      updateData.nextStockingDate = new Date(updateData.nextStockingDate);
    }
    if (updateData.quantity) {
      updateData.quantity = parseInt(updateData.quantity);
    }
    if (updateData.latitude) {
      updateData.latitude = parseFloat(updateData.latitude);
    }
    if (updateData.longitude) {
      updateData.longitude = parseFloat(updateData.longitude);
    }

    const troutStocking = await troutStockingService.update(id, updateData);

    return NextResponse.json({
      success: true,
      data: troutStocking
    });
  } catch (error) {
    console.error('Error updating trout stocking record:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to update trout stocking record',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json(
        { success: false, error: 'ID is required for deletion' },
        { status: 400 }
      );
    }

    await troutStockingService.delete(id);

    return NextResponse.json({
      success: true,
      message: 'Trout stocking record deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting trout stocking record:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to delete trout stocking record',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}