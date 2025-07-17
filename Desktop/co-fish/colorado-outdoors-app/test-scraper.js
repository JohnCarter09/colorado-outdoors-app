// Test script to verify our scraper works
const { ColoradoOutdoorsScraper } = require('./src/lib/scrapers/ColoradoOutdoorsScraper.ts');

async function testScraper() {
  console.log('🧪 Testing Colorado Outdoors Scraper...');
  
  try {
    const scraper = new ColoradoOutdoorsScraper();
    
    // Test trout stocking scrape
    console.log('🎣 Testing trout stocking scraper...');
    await scraper.init();
    
    const troutData = await scraper.scrapeTroutStocking();
    console.log(`✅ Found ${troutData.length} trout stocking records`);
    
    if (troutData.length > 0) {
      console.log('📄 Sample record:');
      console.log(JSON.stringify(troutData[0], null, 2));
    }
    
    await scraper.close();
    
  } catch (error) {
    console.error('❌ Test failed:', error);
  }
}

testScraper();