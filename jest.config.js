/** @type {import('jest').Config} */

const config = {
    verbose: true,
    testEnvironment: 'jsdom',
    testEnvironmentOptions: {
        url: 'https://localhost',
        userAgent: 'Agent/007',
    },
};

module.exports = config;