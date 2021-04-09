// @ts-check
// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter, StacktraceOption } = require('jasmine-spec-reporter');

/**
 * @type { import("protractor").Config }
 */
exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    './features/**/*.feature'
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
    require: ['./steps/**/*.steps.ts'],
    strict: true,
    tags: ''
  },
  onPrepare() {
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.json')
    });
  }
};