---
layout: page
title: 2. Getting Started with Angular
permalink: /getting-started-with-angular/
nav_order: 3
---

# Getting started with Angular

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

## Overview

You can follow the steps below to create a new Angular project, and you can [browse this commit](https://github.com/vertigon451/applitools-demo/tree/0fb884fdded91e22698b10889232fa0bfb3fce9d) to see an example of the resulting files.


## Install Angular

If you don’t already have Angular installed as a global package, you’ll need to install it:

```
npm install -g @angular/cli
```

## Create an Angular Project

Now you can create a new Angular project. Run this command from wherever you want the project to be generated. Angular will create a new folder with the name of the project:

```
ng new my-project
```

Angular might ask you for preferences related to strict type checking or Angular routing. You can simply accept the default answers by pressing `Enter` for each. If you wish, you can pick specific options if those are relevant to you.

To run project locally, use one of the following commands:

```
npm start
```

or

```
ng serve
```

I typically use `npm start` because I prefer using Node's `package.json` file as the central repository for my project-specific scripts.

You can go to [http://localhost:4200](http://localhost:4200) using a web browser to see the app. You now have a functioning Angular app. Woo!

## Overview of E2E Test Files (Jasmine and Protractor)
Angular projects come with an E2E (end-to-end) test suite using Jasmine and Protractor. Kudos to the Angular team for including E2E as a default component of their projects. It sets a good example, and gives you what you need to hit the ground running with integration testing.

That being said, we are going to switch to using Cucumber in a later guide. For now, you can take a look at the files under the `e2e` folder to see how Jasmine organizes things.

### e2e/src/app.e2e-spec.ts
This file contains the test cases. Each `it` is a test case, which verifies some aspect of the application under test. For example, the "should display a welcome message" test case navigates to the page, retrieves the title text, and expects that the text is a specific string.

### app.po.ts
This file contains helper functions that navigate the application and retrieve elements from the page using Protractor. Functions in this file are called by the spec files (e.g. `app.e2e-spec.ts`)

### protractor.conf.js
This file configures how Protractor behaves. Of particular note is the `specs` property, which tells Protractor where all the spec files are kept. Also, the framework is set to "jasmine", with other specific jasmine configuration such as `jasmineNodeOpts`.  In a later guide, we’ll switch from Jasmine to Cucumber, and references to jasmine will be removed from this file.

## Run the E2E Tests
To run the default E2E tests:

```
npm run e2e
```

That command will build the app, host it locally, and run the E2E tests all in one command. You should see a message that one spec was executed successfully.

### If Needed: Remote Debugging Port Configuration
If you are running on Ubuntu/Linux you might encounter an error like:

```
Error: WebDriverError: unknown error: DevToolsActivePort file doesn't exist
```

Try specifying what port Protractor should use for Chrome/Chromium’s remote debugging port. I ran into this issue on Ubuntu/Linux. Add this to the `protractor.conf.js` file as part of the capabilities object:

```
chromeOptions: {
      args: [
        'remote-debugging-port=9222'
      ]
}
```

### Chrome vs Chromium
By default Protractor uses “Chrome” to execute the E2E tests, but Chromium worked fine for me without any further configuration. I only have Chromium installed.
