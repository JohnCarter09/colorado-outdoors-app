// Colorado Outdoors Scraper - Production Ready
// Scrapes Colorado Parks & Wildlife data for our Next.js app

import puppeteer, { Browser, Page } from 'puppeteer';
import axios from 'axios';
import * as cheerio from 'cheerio';

// Types for our scraped data
export interface TroutStockingRecord {
  id: string;
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
  source: string;
  lastUpdated: Date;
}

export interface WaterCondition {
  id: string;
  waterBody: string;
  location: string;
  lastUpdated: Date;
  waterLevel: string;
  waterTemperature?: number;
  clarity: string;
  flow: string;
  fishingConditions: string;
  notes?: string;
  weatherImpact?: string;
  source: string;
}

export interface OutdoorEvent {
  id: string;
  title: string;
  description?: string;
  eventType: string;
  location: string;
  latitude?: number;
  longitude?: number;
  startDate: Date;
  endDate?: Date;
  cost?: number;
  registrationRequired: boolean;
  registrationUrl?: string;
  contactInfo?: string;
  ageRestrictions?: string;
  capacity?: number;
  difficulty?: string;
  source: string;
  lastUpdated: Date;
}

export interface HuntingInfo {
  id: string;
  species: string;
  seasonStartDate: Date;
  seasonEndDate: Date;
  seasonDescription?: string;
  units: string[];
  licenseRequired: string[];
  dailyBagLimit?: number;
  possessionLimit?: number;
  seasonLimit?: number;
  weaponRestrictions: string[];
  specialRules: string[];
  applicationDeadline?: Date;
  drawResults?: Date;
  tags: string[];
  source: string;
  lastUpdated: Date;
}

export class ColoradoOutdoorsScraper {
  private baseUrl = 'https://cpw.state.co.us';
  private browser: Browser | null = null;
  private page: Page | null = null;
  private config = {
    userAgent: process.env.SCRAPING_USER_AGENT || 'ColoradoOutdoors/1.0',
    delay: parseInt(process.env.SCRAPING_DELAY_MS || '2000'),
    timeout: parseInt(process.env.SCRAPING_TIMEOUT_MS || '30000'),
    headless: process.env.NODE_ENV === 'production'
  };

  async init(): Promise<void> {
    try {
      this.browser = await puppeteer.launch({
        headless: this.config.headless,
        args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage']
      });
      
      this.page = await this.browser.newPage();
      await this.page.setUserAgent(this.config.userAgent);
      await this.page.setViewport({ width: 1920, height: 1080 });
      
      console.log('🤖 Scraper initialized successfully');
    } catch (error) {
      console.error('❌ Failed to initialize scraper:', error);
      throw error;
    }
  }

  async close(): Promise<void> {
    if (this.browser) {
      await this.browser.close();
      this.browser = null;
      this.page = null;
      console.log('🔒 Scraper closed successfully');
    }
  }

  // ==========================================
  // TROUT STOCKING SCRAPER
  // ==========================================
  
  async scrapeTroutStocking(): Promise<TroutStockingRecord[]> {
    if (!this.page) {
      throw new Error('Scraper not initialized. Call init() first.');
    }

    console.log('🎣 Starting trout stocking scrape...');
    const stockingData: TroutStockingRecord[] = [];
    
    const stockingUrls = [
      '/fishing/trout-stocking-report',
      '/fishing/where-to-fish',
      '/fishing/stocking-schedules',
      '/fishing/reports'
    ];

    for (const url of stockingUrls) {
      try {
        console.log(`📄 Scraping ${url}...`);
        
        await this.page.goto(`${this.baseUrl}${url}`, { 
          waitUntil: 'networkidle2',
          timeout: this.config.timeout 
        });

        // Wait for page to load
        await new Promise(resolve => setTimeout(resolve, this.config.delay));

        const pageData = await this.extractStockingFromPage();
        stockingData.push(...pageData);
        
        console.log(`✅ Found ${pageData.length} records on ${url}`);
        
      } catch (error) {
        console.warn(`⚠️ Could not access ${url}:`, error);
      }
    }

    const processed = this.processStockingData(stockingData);
    console.log(`🎯 Total processed stocking records: ${processed.length}`);
    
    return processed;
  }

  private async extractStockingFromPage(): Promise<any[]> {
    if (!this.page) return [];

    return await this.page.evaluate(() => {
      const records: any[] = [];
      
      // Strategy 1: Look for tables with stocking data
      const tables = document.querySelectorAll('table');
      
      tables.forEach(table => {
        const rows = table.querySelectorAll('tr');
        
        rows.forEach((row, index) => {
          if (index === 0) return; // Skip header row
          
          const cells = row.querySelectorAll('td, th');
          if (cells.length >= 3) {
            const location = cells[0]?.textContent?.trim() || '';
            const species = cells[1]?.textContent?.trim() || '';
            const dateText = cells[2]?.textContent?.trim() || '';
            const quantityText = cells[3]?.textContent?.trim() || '0';
            
            if (location && species && (location.toLowerCase().includes('lake') || 
                                      location.toLowerCase().includes('river') || 
                                      location.toLowerCase().includes('creek') || 
                                      location.toLowerCase().includes('pond'))) {
              records.push({
                location,
                species,
                date: dateText,
                quantity: parseInt(quantityText.replace(/[^0-9]/g, '')) || 0,
                sourceTable: 'table-extraction'
              });
            }
          }
        });
      });

      // Strategy 2: Look for stocking-specific elements
      const stockingElements = document.querySelectorAll('[class*="stock"], [class*="fish"], [id*="stock"]');
      
      stockingElements.forEach(element => {
        const text = element.textContent || '';
        
        // Pattern matching for stocking information
        const stockingPattern = /([A-Za-z\s]+(?:lake|river|creek|pond|reservoir))[^.]*?(\d+)\s*(?:trout|fish)/gi;
        const matches = [...text.matchAll(stockingPattern)];
        
        matches.forEach(match => {
          if (match[1] && match[2]) {
            records.push({
              location: match[1].trim(),
              species: 'Trout',
              quantity: parseInt(match[2]),
              date: 'Recent',
              sourceTable: 'pattern-matching'
            });
          }
        });
      });

      // Strategy 3: Look for structured data in paragraphs
      const paragraphs = document.querySelectorAll('p, div, li');
      
      paragraphs.forEach(p => {
        const text = p.textContent || '';
        
        if (text.toLowerCase().includes('stock') && text.toLowerCase().includes('trout')) {
          // Extract location and numbers
          const locationMatch = text.match(/([A-Za-z\s]+(?:Lake|River|Creek|Pond|Reservoir))/i);
          const quantityMatch = text.match(/(\d+)\s*(?:trout|fish)/i);
          const speciesMatch = text.match(/(Rainbow|Brown|Brook|Cutthroat|Kokanee)/i);
          
          if (locationMatch && quantityMatch) {
            records.push({
              location: locationMatch[1].trim(),
              species: speciesMatch ? speciesMatch[1] + ' Trout' : 'Trout',
              quantity: parseInt(quantityMatch[1]),
              date: 'Recent',
              sourceTable: 'text-extraction'
            });
          }
        }
      });

      return records;
    });
  }

  private processStockingData(rawData: any[]): TroutStockingRecord[] {
    // Remove duplicates and enhance data
    const processed = rawData
      .filter(record => record.location && record.species)
      .map(record => ({
        id: `${record.location.replace(/\s+/g, '-').toLowerCase()}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        location: this.cleanLocationName(record.location),
        waterBody: this.cleanLocationName(record.location),
        county: this.extractCountyFromLocation(record.location),
        species: this.standardizeSpeciesName(record.species),
        size: 'Adult', // Default size
        quantity: record.quantity || 0,
        stockingDate: this.parseStockingDate(record.date),
        waterBodyType: this.determineWaterBodyType(record.location),
        source: 'cpw-website',
        lastUpdated: new Date()
      }))
      .filter((record, index, self) => 
        index === self.findIndex(r => r.location === record.location && r.species === record.species)
      );

    return processed;
  }

  // ==========================================
  // WATER CONDITIONS SCRAPER
  // ==========================================
  
  async scrapeWaterConditions(): Promise<WaterCondition[]> {
    if (!this.page) {
      throw new Error('Scraper not initialized. Call init() first.');
    }

    console.log('🌊 Starting water conditions scrape...');
    const conditionsData: WaterCondition[] = [];
    
    const conditionsUrls = [
      '/fishing/fishing-reports',
      '/fishing/stream-conditions',
      '/fishing/conditions',
      '/fishing/reports'
    ];

    for (const url of conditionsUrls) {
      try {
        console.log(`📄 Scraping conditions from ${url}...`);
        
        await this.page.goto(`${this.baseUrl}${url}`, { 
          waitUntil: 'networkidle2',
          timeout: this.config.timeout 
        });

        await new Promise(resolve => setTimeout(resolve, this.config.delay));

        const pageData = await this.extractConditionsFromPage();
        conditionsData.push(...pageData);
        
        console.log(`✅ Found ${pageData.length} conditions on ${url}`);
        
      } catch (error) {
        console.warn(`⚠️ Could not access ${url}:`, error);
      }
    }

    const processed = this.processWaterConditions(conditionsData);
    console.log(`🎯 Total processed water conditions: ${processed.length}`);
    
    return processed;
  }

  private async extractConditionsFromPage(): Promise<any[]> {
    if (!this.page) return [];

    return await this.page.evaluate(() => {
      const conditions: any[] = [];
      
      // Look for fishing report sections
      const reportSections = document.querySelectorAll(
        '.fishing-report, .water-report, .conditions-report, [class*="report"], [class*="condition"]'
      );
      
      reportSections.forEach(section => {
        const location = section.querySelector('.location, .water-name, h3, h4')?.textContent?.trim();
        const conditionsText = section.querySelector('.conditions, .status')?.textContent?.trim();
        const lastUpdated = section.querySelector('.date, .updated')?.textContent?.trim();
        const fullText = section.textContent?.trim() || '';
        
        if (location && fullText.length > 20) {
          conditions.push({
            location,
            conditionsText: conditionsText || 'Unknown',
            lastUpdated: lastUpdated || 'Recent',
            fullReport: fullText,
            source: 'report-section'
          });
        }
      });

      // Look for table-format conditions
      const tables = document.querySelectorAll('table');
      tables.forEach(table => {
        const rows = table.querySelectorAll('tr');
        const headers = Array.from(table.querySelectorAll('th')).map(th => th.textContent?.toLowerCase().trim());
        
        if (headers.some(h => h?.includes('water') || h?.includes('condition') || h?.includes('location'))) {
          rows.forEach((row, index) => {
            if (index === 0) return; // Skip header
            
            const cells = row.querySelectorAll('td');
            if (cells.length >= 2) {
              const location = cells[0]?.textContent?.trim();
              const condition = cells[1]?.textContent?.trim();
              
              if (location && condition) {
                conditions.push({
                  location,
                  conditionsText: condition,
                  lastUpdated: 'Recent',
                  fullReport: row.textContent?.trim() || '',
                  source: 'conditions-table'
                });
              }
            }
          });
        }
      });

      return conditions;
    });
  }

  private processWaterConditions(rawData: any[]): WaterCondition[] {
    return rawData
      .filter(record => record.location && record.conditionsText)
      .map(record => ({
        id: `${record.location.replace(/\s+/g, '-').toLowerCase()}-conditions-${Date.now()}`,
        waterBody: this.cleanLocationName(record.location),
        location: record.location,
        lastUpdated: this.parseConditionsDate(record.lastUpdated),
        waterLevel: this.parseWaterLevel(record.fullReport),
        waterTemperature: this.parseTemperature(record.fullReport),
        clarity: this.parseWaterClarity(record.fullReport),
        flow: this.parseFlow(record.fullReport),
        fishingConditions: this.parseFishingRating(record.conditionsText),
        notes: record.fullReport,
        weatherImpact: this.parseWeatherImpact(record.fullReport),
        source: 'cpw-website'
      }));
  }

  // ==========================================
  // UTILITY METHODS
  // ==========================================
  
  private cleanLocationName(location: string): string {
    return location
      .replace(/^\s+|\s+$/g, '')
      .replace(/\s+/g, ' ')
      .replace(/[^\w\s-]/g, '');
  }

  private standardizeSpeciesName(species: string): string {
    const speciesMap: { [key: string]: string } = {
      'rainbow': 'Rainbow Trout',
      'brown': 'Brown Trout',
      'brook': 'Brook Trout',
      'cutthroat': 'Cutthroat Trout',
      'kokanee': 'Kokanee Salmon'
    };
    
    const lower = species.toLowerCase();
    for (const [key, value] of Object.entries(speciesMap)) {
      if (lower.includes(key)) {
        return value;
      }
    }
    
    return species;
  }

  private parseStockingDate(dateStr: string): Date {
    if (!dateStr || dateStr === 'Recent') {
      return new Date();
    }
    
    const date = new Date(dateStr);
    return isNaN(date.getTime()) ? new Date() : date;
  }

  private parseConditionsDate(dateStr: string): Date {
    if (!dateStr || dateStr === 'Recent') {
      return new Date();
    }
    
    const date = new Date(dateStr);
    return isNaN(date.getTime()) ? new Date() : date;
  }

  private extractCountyFromLocation(location: string): string {
    // This would need to be enhanced with a county lookup table
    return 'Unknown';
  }

  private determineWaterBodyType(location: string): string {
    const lower = location.toLowerCase();
    if (lower.includes('lake')) return 'Lake';
    if (lower.includes('river')) return 'River';
    if (lower.includes('creek')) return 'Creek';
    if (lower.includes('pond')) return 'Pond';
    if (lower.includes('reservoir')) return 'Reservoir';
    return 'Unknown';
  }

  private parseWaterLevel(text: string): string {
    const lower = text.toLowerCase();
    if (lower.includes('flood') || lower.includes('very high')) return 'Flood';
    if (lower.includes('high')) return 'High';
    if (lower.includes('low')) return 'Low';
    return 'Normal';
  }

  private parseWaterClarity(text: string): string {
    const lower = text.toLowerCase();
    if (lower.includes('muddy')) return 'Muddy';
    if (lower.includes('stained')) return 'Stained';
    if (lower.includes('clear')) return 'Clear';
    return 'Unknown';
  }

  private parseFlow(text: string): string {
    const lower = text.toLowerCase();
    if (lower.includes('high flow')) return 'High';
    if (lower.includes('low flow')) return 'Low';
    return 'Normal';
  }

  private parseFishingRating(text: string): string {
    const lower = text.toLowerCase();
    if (lower.includes('excellent')) return 'Excellent';
    if (lower.includes('good')) return 'Good';
    if (lower.includes('fair')) return 'Fair';
    if (lower.includes('poor')) return 'Poor';
    return 'Unknown';
  }

  private parseTemperature(text: string): number | undefined {
    const tempMatch = text.match(/(\d+)\s*°?F/i);
    return tempMatch ? parseInt(tempMatch[1]) : undefined;
  }

  private parseWeatherImpact(text: string): string | undefined {
    const lower = text.toLowerCase();
    if (lower.includes('rain') || lower.includes('snow') || lower.includes('weather')) {
      return text.substring(0, 200); // First 200 chars if weather mentioned
    }
    return undefined;
  }

  // ==========================================
  // MAIN ORCHESTRATION METHOD
  // ==========================================
  
  async scrapeAllData() {
    await this.init();
    
    try {
      console.log('🚀 Starting complete data scrape...');
      
      const troutStocking = await this.scrapeTroutStocking();
      const waterConditions = await this.scrapeWaterConditions();
      
      // We'll add events and hunting scrapers later
      const events: OutdoorEvent[] = [];
      const hunting: HuntingInfo[] = [];
      
      const result = {
        troutStocking,
        waterConditions,
        events,
        hunting,
        lastUpdated: new Date(),
        stats: {
          troutRecords: troutStocking.length,
          waterBodies: waterConditions.length,
          upcomingEvents: events.length,
          huntingSeasons: hunting.length
        }
      };
      
      console.log('✅ Scraping completed successfully!');
      console.log('📊 Stats:', result.stats);
      
      return result;
      
    } finally {
      await this.close();
    }
  }
}

// Export default for use in API routes
export default ColoradoOutdoorsScraper;