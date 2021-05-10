---
layout: page
title: 3. Cucumber vs Jasmine
permalink: /cucumber-vs-jasmine/
nav_order: 4
---

# Cucumber vs Jasmine

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

## Why switch from Jasmine to Cucumber?

It is perfectly okay to continue using Jasmine for E2E testing if that works for you. Applitools should work just fine with Jasmine, though we don't cover their integration in this guide.

So why switch? 

Cucumber allows us to reuse test steps (e.g. Given, When, and Then statements) in multiple tests or test suites without duplicating JavaScript code. This is will enable a two-test-suite approach while keeping the tests [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself).

To illustrate, let's take a look a two examples.

### Jasmine Example

Imagine that you have a standard Jasmine E2E test suite, with a test that navigates to a specific page and verifies some text on the page.

```
describe('User Profile', () => {
  let page: AppPage;

  beforeAll(() => {
    page = new AppPage();
  });

  beforeEach(() => {
    await page.navigateTo();
    page.openUserProfile();
  });

  it('should display user name', async () => {
    expect(await page.getUserName()).toEqual('John Smith');
  });
});
```

Imagine that you have a second test suite for your visual tests, and one of those tests takes a screenshot of the user profile page using Applitools. That test would need to duplicate many of the above 16 lines. You'd write the `it` to take a screenshot instead of verifying the username like so:

```
describe('User Profile Visual Test', () => {
  let page: AppPage;

  beforeAll(() => {
    page = new AppPage();
  });

  beforeEach(() => {
    await page.navigateTo();
    page.openUserProfile();
  });

  it('should have the expected design for the User Profile page', async () => {
    // Call Applitools functions here to take a screenshot.
  });
});
```

This doesn't feel very DRY. There's a lot duplicated setup code between the test suites.

### Cucumber Example

With Cucumber on the other hand, the JavaScript code is all hidden behind the [Gherkin](https://cucumber.io/docs/gherkin/reference/) syntax. Using a step is as easy as referencing it. Here is the Gherkin version of the test from the standard E2E test suite:

```
Feature: User Profile

  Scenario: Should display user name
    Given I navigate to the app
    When I open the user profile
    Then The user name should be "John Smith"
```

Imagine again, that you have a second test suite for your visual tests. You would simply copy the first five lines and add a `Then` that takes a screenshot instead of verifying the name. 

```
Feature: User Profile Visual Tests

  Scenario: Should have correct design for the user profile
    Given I navigate to the app
    When I open the user profile
    Then The user profile page should have the expected design
```

Instead of needing to copy 16 lines of JavaScript code with Jasmine, your only copying five lines of Gherkin code with Cucumber. These "lines" are merely references to Given, When, and Then steps. In practical terms, they are function references. This feels a lot cleaner and DRY to me than 16 lines of raw JavaScript code.

As you can see, switching to Cucumber will allow our two test suites to share code and keep things DRY. Once we have written the steps for one test suite, the other test suite can easily reuse them.
