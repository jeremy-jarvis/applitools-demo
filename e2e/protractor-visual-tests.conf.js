// @ts-check
// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

// This is the protractor configuration for the visual E2E test suite
// that uses Applitools.

/**
 * @type { import("protractor").Config }
 */
exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    // Point to the features for the visual E2E test suite.
    './visual-tests/features/**/*.feature'
  ],
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      args: [
        'remote-debugging-port=9222'
      ]
    },
  },
  directConnect: true,
  SELENIUM_PROMISE_MANAGER: false,
  baseUrl: 'http://localhost:4200/',
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  cucumberOpts: {
    // Notice how the visual tests use the steps from the standard E2E test suite in addition
    // to specific steps for the visual E2E test suite.
    require: ['./visual-tests/steps/**/*.steps.ts', './standard-tests/steps/**/*.steps.ts'],
    tags: ''
  },
  onPrepare() {
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.json')
    });
  }
};