---
layout: page
title: 6. Switch to the Ultrafast Test Cloud
permalink: /switch-to-the-ultrafast-test-cloud/
nav_order: 7
---

# Switch to the Ultrafast Test Cloud

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

## Overview

In the last two sections we set up Applitools to use the classic runner, which takes screenshots of how your app looks within your local browser. We configured it to run using Chrome, but it can be configured to use other browsers like Firefox, Internet Explorer, and Edge.

But, what if you want to run your visual test suite against multiple browsers? Using the classic runner, you have to set up a separate Protractor configuration for each browser, and add separate NPM scripts to launch the tests for each browser. If you want to run on four different browsers, you'd have to run the tests four different times, once for each browser. That takes a lot of time to set up an execute.

Fortunately, Applitools provides a way to run the tests only one time, and then render how each screenshot would look on each browser. How is this possible, you ask? Well, let me introduce you to Applitools' Ultrafast Test Cloud. As you will see below, it takes a lot less configuration to set up, and you can test on multiple browsers in the same time it would normally take to test on a single browser.

The Ultrafast Test Cloud (sometimes referred to as the "Ultrafast Grid"), captures your page's DOM and CSS elements and then renders those on different browsers within its cloud. The results then show up in the Applitools web UI. For more information see [this overview](https://applitools.com/product-ultrafast-test-cloud/). 

## Configuration Changes

Make the following changes to the `e2e/visual-tests/steps/visual-tests.steps.ts` file. We are going to use a VisualGridRunner instead of the ClassicRunner. This is the runner for the Ultrafast Test Cloud. 

Update the imports to include the VisualGridRunner and BrowserType. Remove the import of the ClassicRunner.

```
import { BatchInfo, BrowserType, Configuration, Eyes, RectangleSize, Target, VisualGridRunner } from '@applitools/eyes-protractor'
```

Change the `runner` variable.

```
let runner: VisualGridRunner;
```

We'll use the new runner in the `BeforeAll` function:

```
BeforeAll(() => {
  // Use the VisualGridRunner
  runner = new VisualGridRunner();
  eyes = new Eyes(runner);

  const configuration = new Configuration();
  configuration.setApiKey(process.env.APPLITOOLS_API_KEY);

  // Change the batch name, to keep the Ultrafast Test Cloud's results separate
  // from the Classic Runner's results.
  configuration.setBatch(new BatchInfo('Applitools Ultrafast Test Cloud Demo'));

  // Configure each browser that you want results for
  configuration.addBrowser(1024, 768, BrowserType.FIREFOX); 
  configuration.addBrowser(1024, 768, BrowserType.CHROME);

  eyes.setConfiguration(configuration);
 });
```

This will run our visual test suite and then generate results for Firefox and Chrome. Technically, our tests are executed on our local installation of Chrome (as configured in `protractor-visual-tests.conf.js`) where Applitools captures the DOM and CSS elements and send them to their cloud. Their cloud environment renders the DOM and CSS on each browser that we specified above.

## Give it a Try

```
npm run e2e-visual-tests
```

You should see that the tests pass, and that a screenshot for each browser shows up in the Applitools web UI under a new batch named "Applitools Ultrafast Test Cloud Demo".

For additional guidance, see [this tutorial](https://applitools.com/tutorials/protractor.html#_1-introduction-to-the-ultrafast-grid).
