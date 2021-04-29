---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
nav_order: 1
---

# Introduction

## Overview

[Applitools](https://applitools.com/) is a powerful toolset for verifying the visual appearance of an application though automated testing. Such tests can take "screenshots" of an application (including the DOM and CSS) and compare them against approved baselines, highlighting any differences found.

This walkthrough presents a step-by-step example of how Applitools can be used alongside [Cucumber](https://cucumber.io/), [Protractor](https://www.protractortest.org), and [Chai](https://www.chaijs.com/), to verify a web app's visual appearance and functional behavior. 

We'll start by setting up NodeJS and creating an Angular project, and then we'll add Cucumber and Applitools as testing tools. If you already have an app that you want to test, you might want to skip ahead. If you want the full picture of how to get from A to Z, [start at the beginning](/set-up-node-and-npm).

See the section links on the left-hand side.

## One Test Suite, or Two
Depending on your project, it might make sense to have a single test suite that combines functional and visual testing, or have two test suites for different purposes.

We'll demonstrate having two test suites, to separate concerns between functional and visual E2E (end-to-end) testing. This will have a few benefits. For one, it will allow us to execute each test suite independently. Also, since both test suites will be written using Cucumber, Protractor, and Chai, they will able to share their test step definitions and page object helper functions, reducing duplication.

## Angular and NodeJS

Our example app will use Angular and NodeJS, and be tested using Protractor and Cucumber, but Applitools has APIs for [other web, mobile, and desktop platforms](https://applitools.com/tutorials/).

## Ubuntu / Linux Notes Included

The bulk of this guide is applicable to all development environments (Windows, macOS, and Linux), but I added a few notes specific to Ubuntu/Linux since that is my development environment.

## Continue

Next Step: [Set up Node and NPM]({% link set-up-node-and-npm.md %})
