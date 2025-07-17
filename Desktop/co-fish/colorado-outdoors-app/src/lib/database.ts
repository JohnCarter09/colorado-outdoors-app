// Database connection and operations
import { PrismaClient } from '@prisma/client';

// Global prisma instance to avoid multiple connections
const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}

// Trout Stocking Operations
export const troutStockingService = {
  // Create new trout stocking record
  async create(data: {
    location: string;
    waterBody: string;
    county?: string;
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
    source?: string;
  }) {
    return await prisma.troutStocking.create({
      data: {
        ...data,
        source: data.source || 'cpw-website'
      }
    });
  },

  // Get all trout stocking records with pagination
  async findMany(options: {
    skip?: number;
    take?: number;
    where?: {
      location?: string;
      species?: string;
      county?: string;
      stockingDate?: {
        gte?: Date;
        lte?: Date;
      };
    };
    orderBy?: {
      stockingDate?: 'asc' | 'desc';
      createdAt?: 'asc' | 'desc';
    };
  } = {}) {
    return await prisma.troutStocking.findMany({
      skip: options.skip,
      take: options.take,
      where: options.where,
      orderBy: options.orderBy || { stockingDate: 'desc' }
    });
  },

  // Get single trout stocking record
  async findById(id: string) {
    return await prisma.troutStocking.findUnique({
      where: { id }
    });
  },

  // Update trout stocking record
  async update(id: string, data: Partial<{
    location: string;
    waterBody: string;
    county: string;
    species: string;
    size: string;
    quantity: number;
    stockingDate: Date;
    nextStockingDate: Date;
    latitude: number;
    longitude: number;
    waterBodyType: string;
    accessInfo: string;
    regulations: string;
  }>) {
    return await prisma.troutStocking.update({
      where: { id },
      data
    });
  },

  // Delete trout stocking record
  async delete(id: string) {
    return await prisma.troutStocking.delete({
      where: { id }
    });
  },

  // Upsert (create or update) trout stocking record
  async upsert(uniqueKey: {
    location: string;
    stockingDate: Date;
  }, data: {
    location: string;
    waterBody: string;
    county?: string;
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
    source?: string;
  }) {
    return await prisma.troutStocking.upsert({
      where: {
        location_stockingDate: uniqueKey
      },
      create: {
        ...data,
        source: data.source || 'cpw-website'
      },
      update: {
        ...data,
        source: data.source || 'cpw-website'
      }
    });
  },

  // Get recent stocking records (last 30 days)
  async findRecent(days: number = 30) {
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - days);

    return await prisma.troutStocking.findMany({
      where: {
        stockingDate: {
          gte: thirtyDaysAgo
        }
      },
      orderBy: {
        stockingDate: 'desc'
      }
    });
  },

  // Search trout stocking records
  async search(query: string) {
    return await prisma.troutStocking.findMany({
      where: {
        OR: [
          { location: { contains: query } },
          { waterBody: { contains: query } },
          { county: { contains: query } },
          { species: { contains: query } }
        ]
      },
      orderBy: {
        stockingDate: 'desc'
      }
    });
  },

  // Get statistics
  async getStats() {
    const totalRecords = await prisma.troutStocking.count();
    const totalFish = await prisma.troutStocking.aggregate({
      _sum: { quantity: true }
    });
    const speciesCount = await prisma.troutStocking.groupBy({
      by: ['species'],
      _count: { species: true }
    });
    const recentCount = await prisma.troutStocking.count({
      where: {
        stockingDate: {
          gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) // 7 days ago
        }
      }
    });

    return {
      totalRecords,
      totalFish: totalFish._sum.quantity || 0,
      speciesBreakdown: speciesCount,
      recentStockings: recentCount
    };
  }
};

// Data Sync Logging
export const dataSyncService = {
  async log(data: {
    type: string;
    status: 'success' | 'error' | 'partial';
    recordsProcessed: number;
    recordsAdded: number;
    recordsUpdated: number;
    errorMessage?: string;
    executionTime?: number;
  }) {
    return await prisma.dataSyncLog.create({
      data
    });
  },

  async getRecentLogs(type?: string, limit: number = 10) {
    return await prisma.dataSyncLog.findMany({
      where: type ? { type } : undefined,
      take: limit,
      orderBy: { createdAt: 'desc' }
    });
  }
};

export default prisma;