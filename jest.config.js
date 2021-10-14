module.exports = {
  setupFilesAfterEnv: [
    'jest-plugin-context/setup',
    './jest.setup.js',
  ],
  transformIgnorePatterns: [
    '/node_modules/',
  ],
  testPathIgnorePatterns: [
    './node_modules/',
    './.next/',
  ],
  collectCoverageFrom: [
    './pages/**/*.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
  ],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
  },
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
};
