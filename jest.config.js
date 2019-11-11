module.exports = {
  collectCoverageFrom: [
    '**/*.{js}',
    '**/*.{jsx}',
    '!**/index.js',
    '!**/node_modules/**',
    '!App.js',
  ],
  coverageReporters: [
    'json',
    'text',
    'html',
  ],
  testPathIgnorePatterns: [
    '/node_modules/',
  ],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.jsx$': 'babel-jest',
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2|svg)$': 'jest-transform-stub',
  },
  moduleNameMapper: {
    '\\.(css|less|scss|sss|styl)$': '<rootDir>/node_modules/jest-css-modules',
  },
  silent: false,
  setupFiles: ['<rootDir>/jest.setup.js'],

};
