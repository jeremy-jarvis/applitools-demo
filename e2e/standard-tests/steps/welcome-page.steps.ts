// This is a steps file. It is where the code-behind for each Gherkin step 
// is defined, such as Given, When, and Then. The steps are referenced in
// the feature file(s).

import { AfterAll, Before, Given, setDefaultTimeout, Then, When } from '@cucumber/cucumber';
import { browser, logging } from 'protractor';
import { expect } from 'chai';

import { AppPage } from '../page-objects/app.po'

let page: AppPage;

Before(() => {
  page = new AppPage();
});

Given('I am on the welcome page', async () => {
  await page.navigateTo();
});

When('I do nothing', async () => {});

Then('The welcome message should be shown', async () => {
  expect(await page.getTitleText()).to.equal('applitools-demo app is running!');
});

AfterAll(async () => {
  // Assert that there are no errors emitted from the browser.
  // I manually converted this from the default test provided by Protractor.
  const logs = await browser.manage().logs().get(logging.Type.BROWSER);
  logs.forEach(log => {
    expect(log.level).to.not.equal(logging.Level.SEVERE);
  });
})
