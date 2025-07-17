module.exports = {
  // TypeScript and JavaScript files
  '*.{ts,tsx,js,jsx}': [
    // Run security linting
    'eslint --config .eslintrc.security.js --fix',
    // Run type checking (for TypeScript files)
    () => 'tsc --noEmit',
    // Run security tests for changed files
    'npm run test:security -- --passWithNoTests'
  ],
  
  // API route files get extra security scrutiny
  'src/app/api/**/*.{ts,tsx}': [
    // Run comprehensive security checks on API routes
    'eslint --config .eslintrc.security.js --fix',
    // Run specific API security tests
    'jest src/__tests__/security/api.test.ts --passWithNoTests',
    // Check for hardcoded secrets
    () => 'npm run security:scan'
  ],
  
  // Package.json changes trigger dependency audit
  'package.json': [
    'npm audit --audit-level=high',
    'npm run test:security -- --testNamePattern="Dependency Security" --passWithNoTests'
  ],
  
  // Environment files should be validated
  '.env*': [
    // Check that no real secrets are committed
    () => 'npm run test:security -- --testNamePattern="Configuration Security" --passWithNoTests'
  ],
  
  // All files - final security scan
  '*': [
    // Run vulnerability scanner
    'jest src/__tests__/security/vulnerability-scanner.test.ts --passWithNoTests'
  ]
}