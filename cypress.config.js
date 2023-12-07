const { defineConfig } = require('cypress')

module.exports = defineConfig({
  video: false,
  projectId: 'm7yygs',
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    configFile: 'reporter-config.json',
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'https://www.mediawiki.org/w',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
  },
})
