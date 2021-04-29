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

Let's try out Applitools' change detection.

The first time that you run a new test, Applitools saves a screenshot as the first approved "baseline". From then on, whenever you run the test, Applitools will take a new screenshot and compare it to the approved baseline screenshot. If Applitools detects any differences, it will flag them and allow you to accept or reject them. If you accept the differences, a new baseline is saved for that screenshot. This workflow allows you to keep track of when the application changes, and only approve those changes that are acceptable.

## Try Making a Change

Let's give it a try. First, make a visible change to the Angular welcome app. We'll change the "Resources" h2 header to instead say "Links" in `src/app/app.component.html`

```
<h2>Links</h2>
```

Now run the tests again using `npm run e2e-visual-tests`. You'll notice that the tests fail, due to Applitools detecting a change in the app's UI.

## View Differences in the Applitools Web UI

Take a look at the results in the Applitools web UI. You'll see that the area around the "Links" text is highlighted. Applitools is informing us that this area of the app's UI has changed. If you choose to accept the change, then the new screenshot will be saved as the baseline for this particular test.

This just scratches the surface of the features in the Applitools web UI, but it should be enough to get you started.
