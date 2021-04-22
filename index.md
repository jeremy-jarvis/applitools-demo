---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
nav_order: 1
---

# Introduction

[Applitools](https://applitools.com/) is a powerful tool for verifying the visual appearance of applications. 

The following documentation presents a step-by-step example of how Applitools can be used alongside [Cucumber](https://cucumber.io/), [Protractor](https://www.protractortest.org), and [Chai](https://www.chaijs.com/), to verify a web app's functional behavior and visual appearance. 

We'll start by setting up NodeJS and creating an Angular project, and then add Cucumber and Applitools as testing tools. If you already have an app that you want to test you might want to skip ahead, but if you want the full picture of how to get from A to Z, start at the beginning.

## One Test Suite, or Two
You can choose to have one test suite that combines both functional and visual testing, or have a separate test suite for each. We'll demonstrate having two test suites, to separate concerns between functional and visual E2E (end-to-end) testing. This will allow us to execute each test suite independently. Since both will be written using Cucumber, Protractor, and Chai, the two test suites will be able to share their test step definitions and page object helper functions. This can greatly reduce the overhead of adding visual tests to an already existing E2E test suite.

## An Alternative to Manual Testing
Manual visual testing can be a tedious, time-intensive, and error-prone process. Using Applitools, visual testing can be executed frequently. This can help catch regressions or other visual design issues early, leading to higher code quality.

## Angular and NodeJS

Our example app will use Angular and NodeJS, and be tested using Protractor and Cucumber, but Applitools has APIs for [other web, mobile, and desktop platforms](https://applitools.com/tutorials/) as well.

## Ubuntu / Linux Notes Included

The bulk of this guide is applicable to all development environments (Windows, macOS, and Linux), but I added a few notes specific to Ubuntu/Linux since that is my development environment.
