---
layout: page
title: 1. Getting Started with Node and NPM
permalink: /getting-started-with-node-and-npm/
nav_order: 2
---

# Getting Started with Node and NPM

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

## Install Node and NPM
If you are using Windows or macOS, [see instructions here](https://nodejs.org/en/) for how to install Node and NPM.  Note: NPM will be installed as part of the Node installer.

For Ubuntu, there are [several ways](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-20-04) to install Node and NPM. One simple way is using the Ubuntu package repository:

```
sudo apt update
sudo apt install nodejs
sudo apt install npm
```

## Configure NPM (on Ubuntu/Linux)
When you try to install global packages, you might get an error that permission is denied. This might be because you don’t have access to the location on your machine where NPM is trying to install the global packages, such as `/usr/local/lib/node_modules`.

If this happens, you could use `sudo` when you install global packages, but that might cause further permissions issues later. A better approach is to configure your global `node_modules` directory to be in a location that you have permission to:

```
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
Add to path in ~/.profile:~/.npm-global/bin
EXAMPLE: export PATH=~/.npm-global/bin:$PATH
source ~/.profile
```

Now, when you install global packages using NPM, they will reside under your home directory at `~/.npm-global`. For more info on this, see [the answer to this question on Stack Overflow](https://stackoverflow.com/questions/33725639/npm-install-g-less-does-not-work-eacces-permission-denied)
