module.exports = {
  verbose: true,
  testRegex: '/src/specs/.*?(Spec)\\.js$',
  modulePathIgnorePatterns: ['node_modules', 'dist'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png)$': '<rootDir>/src/utils/fileMock.js',
  },
};
