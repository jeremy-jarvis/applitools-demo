---
layout: page
title: 5. Additional Improvements
permalink: /additional-improvements/
nav_order: 6
---

# Additional Improvements

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

## Overview

After following the previous sections, you should now have a project set up with functioning visual tests using Applitools' classic runner. You could stop here, but there are a few improvements that you can make to the project, which we will cover in this section.

See [this diff in the example repository](https://github.com/jeremy-jarvis/applitools-demo/compare/7fad99f62ed065c31d8d3fdf0607e1d47a8aec80..21d198a07d0e5c7579475c9cc20e6f85f9794ca3) for the resulting changes from making these improvements.

Note: The diff also includes some added comments, additions to `README.md`, and changes to dependencies in `package.json`. These improve the usability of the example repository but won't be covered in this documentation.

## Improve Organization of Test Suite Files

We have two test suites: The standard E2E test suite directly under `e2e/`, and the visual E2E test suite under `e2e/visual-tests/`. I think it would be cleaner if the standard test suite files were also under a subfolder like `e2e/standard-tests`. Move the `e2e/features/`, `e2e/page-objects/`, and `e2e/steps/` folders to be under a new `e2e/standard-tests/` folder.

```
e2e/standard-tests/
  features/
  page-objects/
  steps/
```

Update `e2e/protractor.conf.js` to point to these new locations.

```
specs: [
  './standard-tests/features/**/*.feature'
],
```

```
cucumberOpts: {
  require: ['./standard-tests/steps/**/*.steps.ts'],
  tags: ''
},
```

Update `e2e/protractor-visual-tests.conf.js` to point to the new location of the steps for the standard E2E tests.

```
cucumberOpts: {
  // Notice how the visual tests use the steps from the standard E2E test suite in addition
  // to specific steps for the visual E2E test suite.
  require: ['./visual-tests/steps/**/*.steps.ts', './standard-tests/steps/**/*.steps.ts'],
  tags: ''
},
```

## Improve E2E NPM Scripts

Currently, we can run `npm run e2e` to execute the standard tests, and `npm run e2e-visual-tests` to run the visual tests using Applitools. It might be helpful to have a descriptive name for the standard test script. Also, it might be helpful to have a single script that executes both test suites. Consider setting up the scripts in the `package.json` file like so:

```
"e2e": "npm run e2e-standard-tests && npm run e2e-visual-tests",
"e2e-standard-tests": "ng e2e",
"e2e-visual-tests": "ng e2e --protractorConfig=e2e/protractor-visual-tests.conf.js"
```

Your own NPM scripts might not look like this, which is okay. This is just one way to organize them. Such scripts are very dependent upon the needs of the project and development team. Do what makes sense for you. For example, you might prefer to have short names for the scripts like `e2e` and `e2e-viz`.

## Continue

Next Step: [Switch to the Ultrafast Test Cloud]({% link switch-to-the-ultrafast-test-cloud.md %})