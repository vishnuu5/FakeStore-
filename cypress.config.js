const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // Base URL for the application you're testing
    baseUrl: 'http://localhost:3000',
    
    // Specify the path to test files
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',

    // Support file (can be used for global configurations)
    supportFile: 'cypress/support/index.js',

    // Test retries in case of failures
    retries: {
      runMode: 2,
      openMode: 0,
    },

    // Screenshots and video recording on failure
    screenshotOnRunFailure: true,
    video: true,
    supportFile: false,
    setupNodeEvents(on, config) {
      // Implement node event listeners here

      // For example, we can capture test failures and log them
      on('task', {
        failed: (error) => {
          console.error('Test failed:', error.message);
          return null;
        },
      });

      // Modify config settings if necessary
      return config;
    },
  },

  // Additional environment variables (can be accessed via Cypress.env())
  env: {
    apiUrl: 'https://fakestoreapi.com',
  },
});
