import { defineConfig } from 'cypress'
import { rename } from 'fs';

export default defineConfig({
  
  e2e: {
    'baseUrl': 'http://localhost:4200',
    supportFile: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      const path = require('path');

      // Require the Mocha JUnit Reporter plugin
      require('cypress-multi-reporters');
      require('mocha-junit-reporter');

      on('before:browser:launch', (browser = {}, launchOptions) => {
        // customize browser launch options if needed
        return launchOptions;
      });

      // Save screenshots and videos only for failed tests
      on('after:screenshot', (details) => {
        if (details.testFailure) {
          const newPath = path.join('cypress/screenshots', details.name);
          return new Promise((resolve, reject) => {
            rename(details.path, newPath, (err: any) => {
              if (err) return reject(err);
              resolve({ path: newPath });
            });
          });
        }
      });

      return config;
    }
  },
  
  video: false,
  component: {
    devServer: {
      framework: 'angular',
      bundler: 'webpack',
    },
    specPattern: '**/*.cy.ts'
  },

  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    reporterEnabled: 'mocha-junit-reporter'
  }
  
})