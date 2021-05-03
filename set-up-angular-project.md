---
layout: page
title: 2. Set up Angular Project
permalink: /set-up-angular-project/
nav_order: 3
---

# Set up Angular Project

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
ng new applitools-demo
```

Angular might ask you for preferences related to strict type checking or Angular routing. You can simply accept the default answers by pressing `Enter` for each. If you wish, you can pick specific options if those are relevant to you.

Change to the folder that was just created:

```
cd applitools-demo
```

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

[![Default Angular App]({{ site.baseurl }}{% link assets/default-angular-app.png %}){: width="75%" }]({{ site.baseurl }}{% link assets/default-angular-app.png %})

## Overview of E2E Test Files (Jasmine and Protractor)
New Angular projects come with an E2E (end-to-end) test suite that uses Jasmine and Protractor. Kudos to the Angular team for including E2E as a default component of their projects. It sets a good example and gives you what you need to hit the ground running with integration testing.

That being said, we are going to switch to using Cucumber in a later guide. For now, you can take a look at the files under the `e2e` folder to see how Jasmine organizes things.

### e2e/src/app.e2e-spec.ts
This file contains the test case(s). Each `it` is a test case that verifies some aspect of the default Angular app. The "should display welcome message" test case navigates to the page, retrieves the title text, and verifies that the text is a specific string.

### e2e/src/app.po.ts
This file contains helper functions that navigate the application and retrieve elements from the page using Protractor. Functions in this file are called by the spec files (e.g. `app.e2e-spec.ts`)

### e2e/protractor.conf.js
This file configures how Protractor behaves. Of particular note is the `specs` property, which tells Protractor where all the spec files are kept. Also, the framework is set to "jasmine", with other specific jasmine configuration such as `jasmineNodeOpts`.  In a later guide we’ll switch from Jasmine to Cucumber, and remove Jasmine references from this file.

## Run the E2E Tests
To run the default E2E tests:

```
npm run e2e
```

That command will build the app, host it locally, and run the E2E tests all in one command. You should see a message that one spec was executed successfully.

[![Jasmine Test Results]({{ site.baseurl }}{% link assets/jasmine-test-results.png %})]({{ site.baseurl }}{% link assets/jasmine-test-results.png %})

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

## Continue

Next Step: [Switch to Cucumber and Chai]({{ site.baseurl }}{% link switch-to-cucumber-and-chai.md %})
