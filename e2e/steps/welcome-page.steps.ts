import { AfterAll, Before, Given, Then, When } from '@cucumber/cucumber';
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
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    logs.forEach(log => {
        expect(log.level).to.not.equal(logging.Level.SEVERE);
    });
})
