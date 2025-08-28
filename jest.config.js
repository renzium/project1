module.exports = {
  // The test environment that will be used for testing
  testEnvironment: 'jsdom',
  
  // The glob patterns Jest uses to detect test files
  testMatch: [
    '**/__tests__/**/*.js',
    '**/?(*.)+(spec|test).js'
  ],
  
  // An array of regexp pattern strings that are matched against all test paths, matched tests are skipped
  testPathIgnorePatterns: [
    '/node_modules/',
    '/build/',
    '/dist/'
  ],
  
  // The directory where Jest should output its coverage files
  coverageDirectory: 'coverage',
  
  // An array of glob patterns indicating a set of files for which coverage information should be collected
  collectCoverageFrom: [
    'src/**/*.{js,jsx}',
    '!src/index.js',
    '!src/reportWebVitals.js',
    '!src/setupTests.js',
    '!src/test-utils.js'
  ],
  
  // A list of reporter names that Jest uses when writing coverage reports
  coverageReporters: [
    'text',
    'lcov',
    'html'
  ],
  
  // An array of file extensions your modules use
  moduleFileExtensions: [
    'js',
    'jsx',
    'json'
  ],
  
  // A map from regular expressions to module names that allow to stub out resources
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/fileMock.js'
  },
  
  // A list of paths to modules that run some code to configure or set up the testing framework
  setupFilesAfterEnv: [
    '<rootDir>/src/setupTests.js'
  ],
  
  // The test environment options that will be passed to the testEnvironment
  testEnvironmentOptions: {
    customExportConditions: ['node', 'node-addons']
  },
  
  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: false,
  
  // The maximum amount of workers used to run your tests
  maxWorkers: '50%',
  
  // An array of glob patterns indicating a set of files for which coverage information should be collected
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 70,
      lines: 70,
      statements: 70
    }
  }
};
