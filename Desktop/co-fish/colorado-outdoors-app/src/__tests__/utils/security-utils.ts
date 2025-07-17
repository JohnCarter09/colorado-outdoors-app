import { NextRequest } from 'next/server'

export interface SecurityTestResult {
  test: string
  passed: boolean
  details: string
  severity: 'low' | 'medium' | 'high' | 'critical'
}

export class SecurityTester {
  private results: SecurityTestResult[] = []

  async testEndpointSecurity(endpoint: string, options: {
    method?: string
    headers?: Record<string, string>
    body?: any
    expectedStatus?: number[]
  } = {}) {
    const {
      method = 'GET',
      headers = {},
      body,
      expectedStatus = [200, 401, 403]
    } = options

    try {
      const response = await fetch(`http://localhost:3000${endpoint}`, {
        method,
        headers: {
          'Content-Type': 'application/json',
          ...headers
        },
        body: body ? JSON.stringify(body) : undefined
      })

      const passed = expectedStatus.includes(response.status)
      
      this.addResult({
        test: `Endpoint Security: ${method} ${endpoint}`,
        passed,
        details: `Status: ${response.status}, Expected: ${expectedStatus.join(' or ')}`,
        severity: passed ? 'low' : 'medium'
      })

      return response
    } catch (error) {
      this.addResult({
        test: `Endpoint Security: ${method} ${endpoint}`,
        passed: false,
        details: `Network error: ${error}`,
        severity: 'medium'
      })
      throw error
    }
  }

  testInputValidation(input: any, validator: (input: any) => boolean, testName: string) {
    const passed = validator(input)
    
    this.addResult({
      test: `Input Validation: ${testName}`,
      passed,
      details: `Input: ${JSON.stringify(input)}, Valid: ${passed}`,
      severity: passed ? 'low' : 'high'
    })

    return passed
  }

  testXSSPayload(payload: string, context: string = 'general') {
    const xssPatterns = [
      /<script[\s\S]*?>[\s\S]*?<\/script>/gi,
      /javascript:/gi,
      /on\w+\s*=/gi,
      /<iframe[\s\S]*?>/gi,
      /<object[\s\S]*?>/gi,
      /<embed[\s\S]*?>/gi
    ]

    const isXSS = xssPatterns.some(pattern => pattern.test(payload))
    
    this.addResult({
      test: `XSS Detection: ${context}`,
      passed: !isXSS,
      details: `Payload: ${payload.substring(0, 50)}..., Contains XSS: ${isXSS}`,
      severity: isXSS ? 'high' : 'low'
    })

    return isXSS
  }

  testSQLInjection(payload: string, context: string = 'general') {
    const sqlPatterns = [
      /(\s|^)(drop|delete|insert|update|select|union|exec|execute)\s/gi,
      /(\s|^)(or|and)\s+\w+\s*=\s*\w+/gi,
      /--/g,
      /\/\*/g,
      /'\s*(or|and)\s*'?\w*'?\s*=\s*'?\w*'?/gi
    ]

    const isSQLInjection = sqlPatterns.some(pattern => pattern.test(payload))
    
    this.addResult({
      test: `SQL Injection Detection: ${context}`,
      passed: !isSQLInjection,
      details: `Payload: ${payload.substring(0, 50)}..., Contains SQL injection: ${isSQLInjection}`,
      severity: isSQLInjection ? 'critical' : 'low'
    })

    return isSQLInjection
  }

  testPathTraversal(path: string, context: string = 'general') {
    const pathTraversalPatterns = [
      /\.\.[\/\\]/g,
      /^[\/\\]/g,
      /(etc\/passwd|windows\/system32)/gi,
      /\.(env|config|key|pem|crt)$/gi
    ]

    const isPathTraversal = pathTraversalPatterns.some(pattern => pattern.test(path))
    
    this.addResult({
      test: `Path Traversal Detection: ${context}`,
      passed: !isPathTraversal,
      details: `Path: ${path}, Contains path traversal: ${isPathTraversal}`,
      severity: isPathTraversal ? 'high' : 'low'
    })

    return isPathTraversal
  }

  testRateLimiting(endpoint: string, requestCount: number = 10, timeWindow: number = 1000) {
    return new Promise<boolean>((resolve) => {
      const requests = []
      const startTime = Date.now()

      for (let i = 0; i < requestCount; i++) {
        requests.push(
          fetch(`http://localhost:3000${endpoint}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
          }).catch(() => ({ status: 0 }))
        )
      }

      Promise.all(requests).then(responses => {
        const endTime = Date.now()
        const duration = endTime - startTime
        const successCount = responses.filter(r => r.status && r.status < 400).length
        const rateLimited = responses.some(r => r.status === 429)

        const passed = rateLimited || successCount < requestCount

        this.addResult({
          test: `Rate Limiting: ${endpoint}`,
          passed,
          details: `${requestCount} requests in ${duration}ms, ${successCount} successful, Rate limited: ${rateLimited}`,
          severity: passed ? 'low' : 'medium'
        })

        resolve(passed)
      })
    })
  }

  private addResult(result: SecurityTestResult) {
    this.results.push(result)
  }

  getResults(): SecurityTestResult[] {
    return [...this.results]
  }

  getSummary() {
    const total = this.results.length
    const passed = this.results.filter(r => r.passed).length
    const failed = total - passed
    const severityCounts = this.results.reduce((acc, result) => {
      if (!result.passed) {
        acc[result.severity] = (acc[result.severity] || 0) + 1
      }
      return acc
    }, {} as Record<string, number>)

    return {
      total,
      passed,
      failed,
      passRate: total > 0 ? (passed / total) * 100 : 0,
      severityCounts
    }
  }

  reset() {
    this.results = []
  }
}