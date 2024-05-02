# Folderr Admininistration w/FoldCLI <Badge type="warning" text="beta" />

**This assumes you have already followed the [getting started for Folderr CLI](./getting-started.md)**

This page is for setting up, installing, and updating Folderr through the CLI.


## Table of Contents
[[toc]]

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

## Initalize Folderr & Databases

Initalizing Folderr can be done with the `foldcli init folderr` command found at [commands/setup](./commands.md#setup)

Examples:
::: code-group
```sh [Linux, Admin]
foldcli init folderr /etc/folderr <repository>
```
```sh [Linux, User]
foldcli init folderr /home/folderr/folderr <repository>
```
:::

Database initializing is similar, with `foldcli init db` (found at [commands/setup](./commands.md#setup))

Ex:
```sh
foldcli init db mongodb://localhost/folderrV2 folderrV2
```

## Install Folderr

Installing Folderr with the cli is as easy as
```sh
foldcli install folderr
```

## Setup Folderr's Onwer Account & It's Database

### Setup the owner account
To setup the owner account you can use the `foldcli setup owner` command found at [commands/setup applications and services](./commands.md#setup-applications-and-services)

Example: `foldcli setup owner --email folderr@example.com --username folderr --password IFailThePasswordCheck`

### Setup the database
Setting up the owner is very similar, just use `foldcli setup db` (found at [commands/setup applications and services](./commands.md#setup-applications-and-services))

Just run
```sh
foldcli setup db
```

...and it's done, your keys will be automatically installed to Folderr if
- You installed Folderr
- The install location is the same as what you set up with `foldcli init folderr`

## Building Folderr

To build Folderr do
::: code-group
```sh [Linux, Admin]
cd /etc/folderr
npm run build:production
```
```sh [Linux, User]
cd /home/folderr/folderr
npm run build:production
```
:::

## Deployment

Starting & Deploying Folderr can be done by following [the deployment guide for Folderr](../../guides/folderr/deployment.md)