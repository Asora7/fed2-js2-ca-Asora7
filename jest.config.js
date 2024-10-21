// jest.config.js
export default {
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],
  transform: {
      '^.+\\.jsx?$': 'babel-jest',
  },
  setupFiles: ['./jest.setup.js'], // Make sure the path is correct
};
