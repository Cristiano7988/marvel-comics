const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'aumcjd',
  chromeWebSecurity: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
