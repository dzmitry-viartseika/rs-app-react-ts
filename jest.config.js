module.exports = {
    // The root directory that Jest should scan for tests and modules
    rootDir: './',

    // The test environment that Jest should use
    testEnvironment: 'jest-environment-jsdom',

    // The test runner that Jest should use
    testRunner: 'jest-circus/runner',

    // The file extensions that Jest should look for when running tests
    moduleFileExtensions: ['js', 'jsx'],

    // Any global variables that you want to define for your tests
    globals: {
        NODE_ENV: 'test'
    },

    // Any test paths that you want Jest to ignore
    testPathIgnorePatterns: ['<rootDir>/node_modules/'],

    // Any setup files that you want Jest to run before running tests
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js']
};