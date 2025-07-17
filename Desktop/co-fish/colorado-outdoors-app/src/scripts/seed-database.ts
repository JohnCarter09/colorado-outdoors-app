// Database seeding script
import { troutStockingService } from '../lib/database';

const sampleTroutData = [
  {
    location: 'Blue Mesa Reservoir',
    waterBody: 'Blue Mesa Reservoir',
    species: 'Rainbow Trout',
    quantity: 5000,
    stockingDate: new Date('2024-01-15'),
    latitude: 38.4270,
    longitude: -107.3420,
    county: 'Gunnison',
    waterBodyType: 'Reservoir'
  },
  {
    location: 'Chatfield Reservoir',
    waterBody: 'Chatfield Reservoir',
    species: 'Rainbow Trout',
    quantity: 3000,
    stockingDate: new Date('2024-01-10'),
    latitude: 39.5347,
    longitude: -105.0653,
    county: 'Jefferson',
    waterBodyType: 'Reservoir'
  },
  {
    location: 'Cherry Creek Reservoir',
    waterBody: 'Cherry Creek Reservoir',
    species: 'Brown Trout',
    quantity: 2000,
    stockingDate: new Date('2024-01-12'),
    latitude: 39.6500,
    longitude: -104.8586,
    county: 'Arapahoe',
    waterBodyType: 'Reservoir'
  },
  {
    location: 'Eleven Mile Reservoir',
    waterBody: 'Eleven Mile Reservoir',
    species: 'Cutthroat Trout',
    quantity: 1500,
    stockingDate: new Date('2024-01-08'),
    latitude: 38.9167,
    longitude: -106.3167,
    county: 'Park',
    waterBodyType: 'Reservoir'
  },
  {
    location: 'Dillon Reservoir',
    waterBody: 'Dillon Reservoir',
    species: 'Kokanee Salmon',
    quantity: 4000,
    stockingDate: new Date('2024-01-14'),
    latitude: 39.6294,
    longitude: -106.0581,
    county: 'Summit',
    waterBodyType: 'Reservoir'
  },
  {
    location: 'Spinney Mountain Reservoir',
    waterBody: 'Spinney Mountain Reservoir',
    species: 'Rainbow Trout',
    quantity: 2500,
    stockingDate: new Date('2024-01-16'),
    latitude: 38.9833,
    longitude: -106.1833,
    county: 'Park',
    waterBodyType: 'Reservoir'
  },
  {
    location: 'Antero Reservoir',
    waterBody: 'Antero Reservoir',
    species: 'Brown Trout',
    quantity: 1800,
    stockingDate: new Date('2024-01-11'),
    latitude: 38.9500,
    longitude: -106.2000,
    county: 'Park',
    waterBodyType: 'Reservoir'
  },
  {
    location: 'Grand Lake',
    waterBody: 'Grand Lake',
    species: 'Rainbow Trout',
    quantity: 3500,
    stockingDate: new Date('2024-01-13'),
    latitude: 40.2525,
    longitude: -105.8231,
    county: 'Grand',
    waterBodyType: 'Natural Lake'
  },
  {
    location: 'Lake Granby',
    waterBody: 'Lake Granby',
    species: 'Kokanee Salmon',
    quantity: 5500,
    stockingDate: new Date('2024-01-17'),
    latitude: 40.1547,
    longitude: -105.8964,
    county: 'Grand',
    waterBodyType: 'Reservoir'
  },
  {
    location: 'Shadow Mountain Lake',
    waterBody: 'Shadow Mountain Lake',
    species: 'Rainbow Trout',
    quantity: 2200,
    stockingDate: new Date('2024-01-09'),
    latitude: 40.2019,
    longitude: -105.8467,
    county: 'Grand',
    waterBodyType: 'Reservoir'
  }
];

async function seedDatabase() {
  console.log('🌱 Starting database seeding...');
  
  try {
    let created = 0;
    let updated = 0;
    
    for (const record of sampleTroutData) {
      try {
        const result = await troutStockingService.upsert(
          {
            location: record.location,
            stockingDate: record.stockingDate
          },
          record
        );
        
        if (result) {
          created++;
          console.log(`✅ Created/Updated: ${record.location} - ${record.species}`);
        }
      } catch (error) {
        console.error(`❌ Error with ${record.location}:`, error);
      }
    }
    
    console.log(`\n🎉 Seeding completed!`);
    console.log(`📊 Records created/updated: ${created}`);
    
    // Get stats
    const stats = await troutStockingService.getStats();
    console.log(`📈 Total records in database: ${stats.totalRecords}`);
    console.log(`🐟 Total fish stocked: ${stats.totalFish.toLocaleString()}`);
    console.log(`🎣 Species breakdown:`);
    stats.speciesBreakdown.forEach(species => {
      console.log(`   - ${species.species}: ${species._count.species} locations`);
    });
    
  } catch (error) {
    console.error('❌ Error seeding database:', error);
  }
}

// Run if called directly
if (require.main === module) {
  seedDatabase()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error('Fatal error:', error);
      process.exit(1);
    });
}

export default seedDatabase;