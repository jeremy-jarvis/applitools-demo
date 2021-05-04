---
layout: page
title: 3. Switch to Cucumber and Chai
permalink: /switch-to-cucumber-and-chai/
nav_order: 4
---

# Switch to Cucumber and Chai

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

## Overview

You can follow the steps below to switch from the default Jasmine testing framework to Cucumber and Chai. See [this diff in the example repository](https://github.com/jeremy-jarvis/applitools-demo/compare/0fb884f...e3fb471) for the resulting changes. You may also find [this documentation](https://www.npmjs.com/package/protractor-cucumber-framework) and [this article](https://www.amadousall.com/angular-e2e-with-cucumber/) to be helpful references.

## Install Cucumber and Chai
Run these commands from the project folder to install Cucumber, Chai, and the protractor-cucumber-framework.

```
npm install --save-dev @cucumber/cucumber
npm install --save-dev chai
npm install --save-dev protractor-cucumber-framework
```

## Configure Cucumber
Protractor must be configured to use Cucumber instead of Jasmine. That is done within `e2e/protractor.conf.js`.

Update the specs to point to the location where we will keep our feature files.

```
specs: [
  './features/**/*.feature'
],
```

Use the `protractor-cucumber-framework` instead of `jasmine`.

```
framework: 'custom',
frameworkPath: require.resolve('protractor-cucumber-framework'),
```

Add a `cucumberOpts` section to specify where the steps will be located, and other Cucumber-specific options.

```
cucumberOpts: {
  require: ['./steps/**/*.steps.ts'],
  tags: ''
},
```

### Remove Configuration that is Specific to Jasmine

These three blocks should all be removed.

```
const { SpecReporter, StacktraceOption } = require('jasmine-spec-reporter');
```

```
framework: 'jasmine',
jasmineNodeOpts: {
  showColors: true,
  defaultTimeoutInterval: 30000,
  print: function() {}
}
```

```
jasmine.getEnv().addReporter(new SpecReporter({
  spec: {
    displayStacktrace: StacktraceOption.PRETTY
  }
}));
```

## Remove Jasmine from Types

`jasmine` can be removed from the types definitions in `e2e/tsconfig.json` and `tsconfig.spec.json`. In fact, the entire types element can probably be removed if you have no other types to specify.

```
"types": [
  "jasmine"
]
```
## Create / Convert the Tests

Now that we've replaced Jasmine with Cucumber, it's time to write the tests. Let's demonstrate how to convert the current Jasmine tests to Cucumber tests.

Jasmine keeps its spec files and page objects files under `e2e/src/`. I prefer to do away with the `e2e/src` folder and keep all of the important Cucumber folders directly under the `e2e` folder and organized by type like:

```
e2e/
  features/
  steps/
  page-objects/
``` 

First create this folder structure, and then we'll go over each of these folders. 

Note: During a later section, we will move these folders under a new `e2e/standard-tests/` folder. But for now, you can use the organizational structure described above.

### Features

Cucumber's feature files are where you will define your scenarios (test cases). Add a `e2e/features/welcome-page.feature` file with the following content:

```
Feature: Welcome Page

  Scenario: Should display the welcome message
    Given I am on the welcome page
    When I do nothing
    Then The welcome message should be shown
```

### Steps

Each step in the scenario above must be defined in a steps file. Add `e2e/steps/welcome-page.steps.ts` file with the following content:

```
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
```
### Page Objects

We already have a page-object file at `e2e/src/app.po.ts`. Move it to `e2e/page-objects/app.po.ts`.

## Delete the `e2e/src/` Folder

The `app.e2e-spec.ts` file should be the only thing left in the `e2e/src/` folder. Go ahead and delete the `e2e/src/` folder including the spec file. It was replaced by `e2e/steps/welcome-page.steps.ts`.

## Optional Improvement

If we run the tests now, the `getTitleText()` page-object function will find multiple elements that match the element finder. It may be better to tag the span with a unique class or id, and update the element finder to look for it.

Add the class and use it on the span for the title in `src/app/app.component.html`:

```
.rocket-title {
  font-weight: bold;
}
```

```
  <span class="rocket-title">{{ title }} app is running!</span>
```

Update the element finder in `e2e/page-objects/app.po.ts` to search for it:

```
async getTitleText(): Promise<string> {
  return element(by.className('rocket-title')).getText();
}
```

## Run the Tests
You can now run the Cucumber test to see it action.

`npm run e2e`

You should see a line of dots with no "F" characters (which indicate failures), and a message that 1 scenario (3 steps) passed.

[![Cucumber Test Results]({{ site.baseurl }}{% link assets/cucumber-test-results.png %})]({{ site.baseurl }}{% link assets/cucumber-test-results.png %})

## Additional Resources

If you run into issues, see [the diff for these steps](https://github.com/vertigon451/applitools-demo/compare/0fb884f...e3fb471) or the [final state](https://github.com/vertigon451/applitools-demo) of the example repository. You may also find [this documentation](https://www.npmjs.com/package/protractor-cucumber-framework) and [this article](https://www.amadousall.com/angular-e2e-with-cucumber/) to be helpful references.

## Next...

[Set up Applitools]({{ site.baseurl }}{% link set-up-applitools.md %})
