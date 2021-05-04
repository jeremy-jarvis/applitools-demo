---
layout: page
title: 7. Applitools Change Detection
permalink: /applitools-change-detection/
nav_order: 8
---

# Applitools Change Detection

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

## Overview

Let's try out the change detection feature in Applitools Eyes.

The first time that you run a new test, Applitools Eyes saves a screenshot as the first approved "baseline". From then on, whenever you run the test, Eyes will take a new screenshot and compare it to the approved baseline screenshot. If Eyes detects any differences, it will flag them and allow you to accept or reject them. If you accept the differences, a new baseline is saved for that screenshot. This workflow allows you to keep track of when the application changes, and only approve those changes that are acceptable.

## Try Making a Change

Let's give it a try. First, make a visible change to the Angular welcome app. We'll change the "Resources" h2 header to instead say "Links" in `src/app/app.component.html`

```
<h2>Links</h2>
```

Now run the tests again using `npm run e2e-visual-tests`. You'll notice that the tests fail, due to Applitools Eyes detecting a change in the app's UI.

## View Differences in the Applitools Eyes web dashboard

Take a look at the results in the Applitools Eyes web dashboard. You'll see that both tests in the batch have failed.

[![Applitools Test Results With Detected Change]({{ site.baseurl }}{% link assets/applitools-ultrafast-results-with-detected-change.png %})]({{ site.baseurl }}{% link assets/applitools-ultrafast-results-with-detected-change.png %})

Click one of the screenshots to see it closer. You'll notice that the area around the "Links" text is highlighted. Applitools is informing us that this area of the app's UI has changed. If you choose to accept the change, then the new screenshot will be saved as the baseline for this particular test.

[![Applitools Test Results With Detected Change]({{ site.baseurl }}{% link assets/applitools-ultrafast-results-with-detected-change-up-close.png %})]({{ site.baseurl }}{% link assets/applitools-ultrafast-results-with-detected-change-up-close.png %})

This just scratches the surface of the features in the Applitools Eyes web dashboard, but it should be enough to get you started.

## The End, or Just the Beginning?

I hope that you found this guide helpful! If you have an idea for improvement, please use the `Edit this page on GitHub` link at the bottom of each page, or submit a PR to [this gh-pages branch](https://github.com/jeremy-jarvis/applitools-demo/tree/gh-pages). 
