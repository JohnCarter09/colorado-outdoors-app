import { beforeAll, afterAll, beforeEach } from '@jest/globals'

// Test environment setup
beforeAll(async () => {
  // Set test environment variables
  process.env.NODE_ENV = 'test'
  process.env.NEXTAUTH_URL = 'http://localhost:3000'
  
  // Mock Clerk authentication for security tests
  jest.mock('@clerk/nextjs', () => ({
    auth: jest.fn(() => ({ userId: 'test-user-id' })),
    currentUser: jest.fn(() => ({ id: 'test-user-id' })),
    getAuth: jest.fn(() => ({ userId: 'test-user-id' })),
  }))
})

beforeEach(() => {
  // Clear all mocks before each test
  jest.clearAllMocks()
})

afterAll(async () => {
  // Cleanup after all tests
  jest.clearAllMocks()
})