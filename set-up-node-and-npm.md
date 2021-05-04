---
layout: page
title: 1. Set up Node and NPM
permalink: /set-up-node-and-npm/
nav_order: 2
---

# Set up Node and NPM

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

## Install Node and NPM

There are two primary ways to install Node: Either using a Node version manager ("NVM" for short), or by simply using a Node installer.

### Node Version Manager (NVM)

I have found that developers who are experienced with Node often appreciate the benefits of using a Node version manager. It makes it easy to install, upgrade, and switch between Node versions. This is really handy when you are working on two different web apps that are using different Node versions. Also, the NPM documentation recommends using a Node version manager instead of a Node installer, so they are worth a look.

For Windows, I have used [nvm-windows](https://github.com/coreybutler/nvm-windows). There are [additional options](https://docs.npmjs.com/cli/v6/configuring-npm/install#using-a-node-version-manager-to-install-node-js-and-npm) for Windows, macOS, and Linux.

### Node Installer

Alternatively, If you just want to try out Node and don't want to fuss with a Node version manager, then you can install Node directly. This has worked fine for me on Windows. It isn't as easy to switch or upgrade Node versions, compared to using a Node version manager, but it can get you up and running with a recent version of Node.

If you have Windows or macOS, you can [download a Node installer here](https://nodejs.org/en/). Note: NPM will be installed by the Node installer.

For Ubuntu, there are [several ways](https://docs.npmjs.com/cli/v6/configuring-npm/install#using-a-node-version-manager-to-install-node-js-and-npm) to install Node and NPM. The NPM documentation recommends using the [NodeSource Installer](https://github.com/nodesource/distributions).


### Ubuntu Packages

Alternatively for Ubuntu, you can use the Ubuntu package repository to install Node and NPM:

```
sudo apt update
sudo apt install nodejs
sudo apt install npm
```

I recently used this method, but ran into a permissions error when trying to install global packages. It was because I didn't have access to the location on my machine where NPM was trying to install the global packages: `/usr/local/lib/node_modules`.

If this happens to you, you could use `sudo` when you install global packages, but that might cause further permissions issues down the road. A better approach is to configure your global `node_modules` directory to be in a location that you have access to:

First create a folder under your home directory and configure NPM to use it.

```
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
```

Next, add `~/.npm-global/bin` to your path. One way to do this is to add this line to your `~/.profile`:

```
export PATH=~/.npm-global/bin:$PATH
```

Then, source your profile so that your terminal has the new path value.

```
source ~/.profile
```

Now, when you install global packages using NPM, they will reside under your home directory at `~/.npm-global`. For more info on this, see [the answer to this question on Stack Overflow](https://stackoverflow.com/questions/33725639/npm-install-g-less-does-not-work-eacces-permission-denied)

## Next...

[Set up Angular Project]({{ site.baseurl }}{% link set-up-angular-project.md %})
