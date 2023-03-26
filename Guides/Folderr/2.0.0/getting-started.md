# Getting Started <Badge type="warning" text="beta" />

Overview:

- [Requirements](#requirements)
- [Installation](#installation)
- [Pre-Install Setup (Linux)](#pre-install-setup-linux-only)
- [Configuration](#configuration)
- [Setup](#setup)
- [Starting](#starting-deploying)

## Requirements

- [Git](https://git-scm.com/downloads)
- [NodeJS](https://nodejs.org) version 16 or higher with crypto support
- [TypeScript](https://www.typescriptlang.org/index.html#download-links)
- [Node-gyp](https://github.com/nodejs/node-gyp) used to build dependencies
- [MongoDB Server Community or Enterprise](https://docs.mongodb.com/manual/administration/install-community/) or [Atlas](https://www.mongodb.com/cloud/atlas)

::: info Linux Info
Node-Gyp is included in most linux node installers. But node is typically old.
:::

## Pre-install setup (Linux Only)

::: tip
This guide was done with `Rocky Linux/RHEL`. If you are using a different OS we recommend knowing how to convert the commands to your OS
:::

::: details Linux Administrator Specific Setup

### Prepare a user and add yourself to it

```sh
# create a system account named "folderr"
sudo useradd -r folderr
# add yourself to the user group
sudo usermod -aG folderr $USER
# You can drop yourself from the group once you're done setting up Folderr
```
::: warning NOTICE
LOGOUT AND LOGIN AGAIN
:::

We use `/etc/folderr` throughout the documentation to reference its installation directory
You can install Folderr anywhere. For normal user installation we use `/home/folderr/folderr` as an example


## Installation

:::warning
Folderr holds sensitive data. Other users should not be able to access Folderr.

That's why we `chmod 770` the `folderr` directory
:::
::: code-group
```sh [Rocky Linux/RHEL Admin]
cd /etc
sudo git clone <link not available> folderr
sudo chown folderr:folderr folderr
sudo chmod 770 folderr
cd folderr
npm install
```
```sh [Rocky Linux/RHEL User]
git clone <link not available> folderr
chmod 770 folderr
cd folderr
npm install
```
:::

## Configuration

Once Folderr has finished installing continue on to the configuration guide [here](./config.md)

## Setup

This initially sets folderr up for your owner account and configures encryption keys.

```sh
cd folderr
npm run build
npm run setup
```

## Starting/Deploying

This has been moved to [Deployment](./deployment.md)