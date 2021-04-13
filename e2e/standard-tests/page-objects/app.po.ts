// This is a "page objects" file. It is where you can define functions using
// Protractor to navigate the application under test and retrieve elements 
// and properties of those elements during testing.
// https://www.protractortest.org

import { browser, by, element } from 'protractor';

export class AppPage {
  async navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl);
  }

  async getTitleText(): Promise<string> {
    return element(by.className('rocket-title')).getText();
  }
}
