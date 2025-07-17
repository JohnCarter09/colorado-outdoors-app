#!/usr/bin/env node

const { execSync } = require('child_process')
const fs = require('fs')
const path = require('path')
const chokidar = require('chokidar')

class SecurityMonitor {
  constructor() {
    this.isRunning = false
    this.lastScanTime = Date.now()
    this.securityIssues = []
    this.watchedPaths = ['src/**/*.{ts,tsx}', 'package.json', '.env*']
  }

  async start() {
    console.log('🔒 Starting Security Monitor...')
    this.isRunning = true

    // Initial security scan
    await this.runFullSecurityScan()

    // Watch for file changes
    this.setupFileWatcher()

    // Periodic vulnerability scans
    this.setupPeriodicScans()

    console.log('✅ Security Monitor is running')
    console.log('📁 Watching:', this.watchedPaths.join(', '))
  }

  setupFileWatcher() {
    const watcher = chokidar.watch(this.watchedPaths, {
      ignored: /node_modules|\.git/,
      persistent: true
    })

    watcher.on('change', async (filePath) => {
      console.log(`🔍 File changed: ${filePath}`)
      
      if (filePath.endsWith('.ts') || filePath.endsWith('.tsx')) {
        await this.scanFileForSecurity(filePath)
      } else if (filePath === 'package.json') {
        await this.scanDependencies()
      } else if (filePath.startsWith('.env')) {
        await this.scanEnvironmentFiles()
      }
    })

    watcher.on('add', async (filePath) => {
      if (filePath.includes('src/app/api/')) {
        console.log(`🚨 New API route detected: ${filePath}`)
        await this.scanApiRoute(filePath)
      }
    })
  }

  setupPeriodicScans() {
    // Run full security scan every hour
    setInterval(async () => {
      console.log('⏰ Running periodic security scan...')
      await this.runFullSecurityScan()
    }, 60 * 60 * 1000)

    // Check for new vulnerabilities every 6 hours
    setInterval(async () => {
      console.log('🔍 Checking for new vulnerabilities...')
      await this.scanDependencies()
    }, 6 * 60 * 60 * 1000)
  }

  async runFullSecurityScan() {
    console.log('🚀 Running full security scan...')
    
    const scanResults = await Promise.allSettled([
      this.scanDependencies(),
      this.scanCodeForSecrets(),
      this.scanApiRoutes(),
      this.runSecurityTests()
    ])

    const failures = scanResults.filter(result => result.status === 'rejected')
    
    if (failures.length > 0) {
      console.log(`🚨 ${failures.length} security scan(s) failed:`)
      failures.forEach((failure, index) => {
        console.log(`${index + 1}. ${failure.reason}`)
      })
    } else {
      console.log('✅ All security scans passed')
    }

    this.generateSecurityReport()
  }

  async scanFileForSecurity(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8')
      
      // Check for potential security issues
      const issues = []

      // Check for hardcoded secrets
      const secretPatterns = [
        { pattern: /sk_test_[a-zA-Z0-9]+/g, type: 'Stripe Test Key' },
        { pattern: /sk_live_[a-zA-Z0-9]+/g, type: 'Stripe Live Key' },
        { pattern: /AIza[0-9A-Za-z\\-_]{35}/g, type: 'Google API Key' },
        { pattern: /password\s*=\s*['""][^'""]+['""]]/gi, type: 'Hardcoded Password' }
      ]

      secretPatterns.forEach(({ pattern, type }) => {
        const matches = content.match(pattern)
        if (matches) {
          issues.push({
            file: filePath,
            type: 'Secret Exposure',
            details: `${type} detected: ${matches[0].substring(0, 20)}...`,
            severity: 'high'
          })
        }
      })

      // Check for dangerous function calls
      const dangerousFunctions = ['eval(', 'Function(', 'innerHTML =', 'dangerouslySetInnerHTML']
      dangerousFunctions.forEach(func => {
        if (content.includes(func)) {
          issues.push({
            file: filePath,
            type: 'Dangerous Function',
            details: `Use of ${func} detected`,
            severity: 'medium'
          })
        }
      })

      if (issues.length > 0) {
        console.log(`🚨 Security issues found in ${filePath}:`)
        issues.forEach(issue => {
          console.log(`  - ${issue.type}: ${issue.details}`)
        })
        this.securityIssues.push(...issues)
      }

    } catch (error) {
      console.error(`Error scanning ${filePath}:`, error.message)
    }
  }

  async scanApiRoute(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8')
      const issues = []

      // Check for authentication
      if (!content.includes('auth()')) {
        issues.push({
          file: filePath,
          type: 'Missing Authentication',
          details: 'API route may be missing authentication check',
          severity: 'high'
        })
      }

      // Check for input validation
      if (!content.includes('request.json()') || !content.includes('if (')) {
        issues.push({
          file: filePath,
          type: 'Insufficient Input Validation',
          details: 'API route may be missing input validation',
          severity: 'medium'
        })
      }

      // Check for error handling
      if (!content.includes('try') || !content.includes('catch')) {
        issues.push({
          file: filePath,
          type: 'Missing Error Handling',
          details: 'API route may be missing proper error handling',
          severity: 'medium'
        })
      }

      if (issues.length > 0) {
        console.log(`🚨 API security issues found in ${filePath}:`)
        issues.forEach(issue => {
          console.log(`  - ${issue.type}: ${issue.details}`)
        })
        this.securityIssues.push(...issues)
      }

    } catch (error) {
      console.error(`Error scanning API route ${filePath}:`, error.message)
    }
  }

  async scanDependencies() {
    try {
      console.log('🔍 Scanning dependencies for vulnerabilities...')
      
      const auditOutput = execSync('npm audit --json', { encoding: 'utf8' })
      const audit = JSON.parse(auditOutput)
      
      const vulnerabilities = audit.vulnerabilities || {}
      const highCritical = Object.values(vulnerabilities).filter(vuln => 
        vuln.severity === 'high' || vuln.severity === 'critical'
      )

      if (highCritical.length > 0) {
        console.log(`🚨 Found ${highCritical.length} high/critical vulnerabilities`)
        highCritical.forEach(vuln => {
          this.securityIssues.push({
            type: 'Dependency Vulnerability',
            details: `${vuln.name}: ${vuln.severity}`,
            severity: vuln.severity
          })
        })
      } else {
        console.log('✅ No high/critical vulnerabilities found in dependencies')
      }

    } catch (error) {
      if (error.status === 0) {
        console.log('✅ npm audit completed with no vulnerabilities')
      } else {
        console.error('Error running dependency scan:', error.message)
      }
    }
  }

  async scanCodeForSecrets() {
    try {
      console.log('🔍 Scanning code for hardcoded secrets...')
      
      const secretsFound = execSync(
        `grep -r -i --include="*.ts" --include="*.tsx" -E "(sk_test_|sk_live_|pk_test_|pk_live_|AIza[0-9A-Za-z\\\\-_]{35})" src/ || true`,
        { encoding: 'utf8' }
      )

      if (secretsFound.trim()) {
        console.log('🚨 Potential secrets found in code:')
        console.log(secretsFound)
        this.securityIssues.push({
          type: 'Hardcoded Secrets',
          details: 'Potential secrets found in source code',
          severity: 'critical'
        })
      } else {
        console.log('✅ No hardcoded secrets detected')
      }

    } catch (error) {
      console.error('Error scanning for secrets:', error.message)
    }
  }

  async scanApiRoutes() {
    try {
      console.log('🔍 Scanning API routes for security patterns...')
      
      const apiRoutes = execSync(
        `find src/app/api -name "route.ts" -o -name "route.tsx"`,
        { encoding: 'utf8' }
      ).trim().split('\n').filter(Boolean)

      for (const route of apiRoutes) {
        await this.scanApiRoute(route)
      }

    } catch (error) {
      console.error('Error scanning API routes:', error.message)
    }
  }

  async scanEnvironmentFiles() {
    try {
      console.log('🔍 Scanning environment files...')
      
      const envFiles = ['.env.example', '.env.local', '.env']
      
      for (const envFile of envFiles) {
        if (fs.existsSync(envFile)) {
          const content = fs.readFileSync(envFile, 'utf8')
          
          if (envFile === '.env.example') {
            // .env.example should not contain real secrets
            const hasRealSecrets = /sk_live_|pk_live_|password=.+[^<>]/.test(content)
            if (hasRealSecrets) {
              this.securityIssues.push({
                file: envFile,
                type: 'Exposed Secrets',
                details: 'Real secrets found in .env.example',
                severity: 'high'
              })
            }
          }
        }
      }

    } catch (error) {
      console.error('Error scanning environment files:', error.message)
    }
  }

  async runSecurityTests() {
    try {
      console.log('🔍 Running security tests...')
      
      execSync('npm run test:security', { encoding: 'utf8' })
      console.log('✅ Security tests passed')

    } catch (error) {
      console.log('🚨 Security tests failed')
      this.securityIssues.push({
        type: 'Security Test Failure',
        details: 'One or more security tests failed',
        severity: 'medium'
      })
    }
  }

  generateSecurityReport() {
    const reportPath = 'security-report.json'
    const report = {
      timestamp: new Date().toISOString(),
      totalIssues: this.securityIssues.length,
      issues: this.securityIssues,
      summary: {
        critical: this.securityIssues.filter(i => i.severity === 'critical').length,
        high: this.securityIssues.filter(i => i.severity === 'high').length,
        medium: this.securityIssues.filter(i => i.severity === 'medium').length,
        low: this.securityIssues.filter(i => i.severity === 'low').length
      }
    }

    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2))
    console.log(`📊 Security report generated: ${reportPath}`)

    // Clear issues for next scan
    this.securityIssues = []
  }

  stop() {
    this.isRunning = false
    console.log('🛑 Security Monitor stopped')
  }
}

// Main execution
if (require.main === module) {
  const monitor = new SecurityMonitor()
  
  monitor.start().catch(error => {
    console.error('Failed to start Security Monitor:', error)
    process.exit(1)
  })

  // Graceful shutdown
  process.on('SIGINT', () => {
    monitor.stop()
    process.exit(0)
  })
}

module.exports = SecurityMonitor