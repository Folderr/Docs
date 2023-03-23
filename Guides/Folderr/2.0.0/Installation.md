# Getting Started

Overview:

1. [Requirements](#requirements)
2. [Installation](#installation)
3. [Configuration](#configuration)
4. [Setup](#setup)

## Requirements

- [Git](https://git-scm.com/downloads)
- [NodeJS](https://nodejs.org) version 16 or higher
- [TypeScript](https://www.typescriptlang.org/index.html#download-links)
- [Node-gyp](https://github.com/nodejs/node-gyp) used to build dependencies
- [MongoDB Community Server](https://docs.mongodb.com/manual/administration/install-community/) or [Atlas](https://www.mongodb.com/cloud/atlas)

## Installation

```sh
git clone <link not available>
cd folderr
npm install
npm run build
```

## Configuration

Once Folderr has finished installing continue on to the configuration guide [here](./config.md)

## Setup

This initially sets folderr up for your owner account and configures encryption keys.

```sh
cd folderr
npm run setup
```

## Starting

```sh
cd folderr
npm start
```