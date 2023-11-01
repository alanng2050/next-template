import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const config = {
  // Add more setup options before each test is run
  setupFilesAfterEnv: ['<rootDir>/jest.setup.mjs'],

  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
const getConfig = createJestConfig(config)

const customConfig = async () => {
  const myconfig = await getConfig()

  const esModules = [
    // 'query-string',
    // 'decode-uri-component',
    // 'split-on-first',
    // 'filter-obj',
  ]

  myconfig.transformIgnorePatterns[0] = `node_modules/(?!(${esModules.join(
    '|'
  )})/)`

  return myconfig
}

export default customConfig
