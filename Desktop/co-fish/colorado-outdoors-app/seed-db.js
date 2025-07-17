const { execSync } = require('child_process');

console.log('🌱 Seeding database with sample data...');

try {
  // Use tsx to run the TypeScript seeding script
  execSync('npx tsx src/scripts/seed-database.ts', { stdio: 'inherit' });
  console.log('✅ Database seeding completed successfully!');
} catch (error) {
  console.error('❌ Database seeding failed:', error.message);
  process.exit(1);
}