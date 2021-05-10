---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
nav_order: 1
---

# Introduction

## Applitools

[Applitools](https://applitools.com/) provides a powerful set of testing tools for verifying an app's visual appearance.

Automated tests can use the Applitools SDK to take screenshots of an application, which are then sent to [Applitools Eyes](https://applitools.com/products-eyes/) to be analyzed. The results are displayed in the Applitools Eyes web dashboard, which highlights any detected differences from the approved baseline screenshots.

Additionally, their [Ultrafast Grid](https://applitools.com/product-ultrafast-test-cloud/) is a powerful tool for visualizing how an application looks on multiple browsers. You can run your tests once on a local browser, and the Ultrafast Grid will render the resulting site on multiple browsers within its cloud. The results, including detected differences, are then displayed on the Applitools Eyes web dashboard. For more information on how Applitools Eyes and the Ultrafast Grid work together, take a look at this [overview of the Ultrafast Test Cloud](https://applitools.com/platform-overview/).

## This Guide

This guide presents a step-by-step walkthrough of how Applitools can be used alongside [Cucumber](https://cucumber.io/), [Protractor](https://www.protractortest.org), and [Chai](https://www.chaijs.com/) to verify a web app's visual appearance and functional behavior.

We'll start by installing Node/NPM and creating an Angular project, and then we'll add Cucumber and Applitools as testing tools. If you already have an app that you want to test, you might want to skip ahead. If you want the full picture of how to get from A to Z, [start at the beginning](/set-up-node-and-npm).

See the section links on the left-hand side.

## One Test Suite, or Two
Depending on your project, it might make sense to have a single test suite that combines functional and visual testing, or have two test suites for different purposes.

We'll demonstrate having two test suites to separate concerns between functional and visual E2E (end-to-end) testing. This will allow us to execute each test suite independently. This is helpful if only part of your team needs to run the visual tests, or if you want to break up your E2E tests into two manageable chunks.

Part of the reason why we will switch from Jasmine to Cucumber in a later step is that it will better enable this two test suite approach. The test suites will share their Cucumber/Gherkin step definitions, which will reduce code duplication. We'll cover this later in more depth.

## Testing an Angular App

Our example app will be built using Angular and be tested using Protractor and Cucumber, but Applitools has APIs for [other web, mobile, and desktop platforms](https://applitools.com/tutorials/).

## Ubuntu / Linux Notes Included

The bulk of this guide is applicable to all development environments (Windows, macOS, and Linux), but I added a few notes specific to Ubuntu/Linux since that is my development environment.

## Next...

[Set up Node and NPM]({{ site.baseurl }}{% link set-up-node-and-npm.md %})
