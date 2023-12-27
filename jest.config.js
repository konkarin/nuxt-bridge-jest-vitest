module.exports = {
  globals: {
    NODE_ENV: 'test',
  },
  transform: {
    '^.+\\.ts$': 'ts-jest',
    '.*\\.(vue)$': '@vue/vue2-jest',
  },
  testEnvironment: 'jest-environment-jsdom',
  testRegex: '.*\\.spec\\.ts',
  testPathIgnorePatterns: ['/vitest/'],
  preset: 'ts-jest/presets/js-with-ts-esm',
  setupFiles: ['./jest.setup.js'],
};
