# Deploy Folderr <Badge type="warning" text="beta" />

## Table of contents

<!---- [[toc]] ---->

- [Assumptions](#assumptions)
	- [Install directories](#install-directories)
- [Ways to Deploy Folderr](#ways-to-deploy-folderr)
- [Extended Deployment](#extended-deployment)
	- [Systemd Configuration](#systemd-configuration)
	- [Running Folderr](#running-folderr)
- [Get Status of Folderr](#get-status-of-folderr)
- [Logs](#logs)
- [Log rotation](#rotate-logs)
	- [Example](#example-requires-modification)

## Assumptions

Supported operating systems for deployment: `Linux`
We assume you are knowledgeable enough to convert commands from `Rocky Linux/RHEL` linux distros to your distro of choice
We also assume you have already configured Folderr and set it up.
### Install directories
- `/etc/folderr/` - This is used for scripts for users that are sudoers/root or otherwise a superuser/admin
- `/home/folderr/folderr` - Used for non admins

## Ways to Deploy Folderr

There are several ways to deploy Folderr
- [PM2](npmjs.com/package/pm2) - Our favorite. However it is memory intensive.
- Systemd - Not very memory intensive, not very feature-full, limited to `Linux` operating systems

If you have any others you would like us to include, hit the ***Edit this page*** link at the bottom of the page.

- Testing? Check directly below.

::: details Testing? Click me!
Permissions required: `read`, `write`, and `execute` for all directories and `read`, and `write` for all files

```sh
# assumption: your directory is the directory that Folderr is installed in
npm run start
```
:::

## Extended Deployment

::: details Systemd Configuration
This file should be called `folderr.service` and be placed in your `systemd` directory.

Google will be your best friend for finding out where that is.
::: code-group
```sh [Systemd, RHEL Admin]
[Unit]
Description=Folderr FOSS File Host
Documentation=https://docs.folderr.net
# Author=Folderr
After=network.target mongod.service # Remove mongod.service if you do not have mongodb install locally

[Service]
Type=simple
User=folderr
WorkingDirectory=/etc/folderr # This should ALWAYs be set to the directory you have installed Folderr at.
#Environment=DEBUG='true' # In the event you run into an issue, uncomment this line.
ExecStart=/usr/bin/node /etc/folderr/dist/src/backend/index.js
RestartSec=10
Restart=always

[Install]
WantedBy=default.target
```

```sh [Systemd, User]
[Unit]
Description=Folderr FOSS File Host
Documentation=https://docs.folderr.net
# Author=Folderr
After=network.target mongod.service # Remove mongod.service if you do not have mongodb install locally

[Service]
Type=simple
WorkingDirectory=/home/folderr/folderr # This should ALWAYs be set to the directory you have installed Folderr at.
#Environment=DEBUG='true' # In the event you run into an issue, uncomment this line.
ExecStart=/usr/bin/node /home/folderr/folderr/dist/src/backend/index.js # You may have to change /usr/bin/node to the directory stated by `which node`
RestartSec=10
Restart=always

[Install]
WantedBy=default.target
```
:::

### Running Folderr

::: code-group
```sh [PM2]
# assumption: you are in your folderr install directory
pm2 start dist/src/backend/index.js
```
```sh [Systemd, Admin]
sudo systemctl start folderr
```
```sh [Systemd, User]
systemctl --user start folderr
# Make Folderr stay online when you logout
loginctl enable-linger $USER
```
:::

## Get status of Folderr

::: code-group
```sh [PM2]
pm2 monit # This shows logs and all that jazz, as well as node version.
# or
pm2 ls
```

```sh [Systemd, Admin]
sudo systemctl status folderr
```
```sh [Systemd, User]
systemctl --user status folderr
```
:::

## Logs

Your logs are going to be in `/etc/Folderr/logs` the files you're looking for are
- `all.log` - As the filename suggests, all logs go here.
- `error.log` - Every error goes here. They're easiest to find here.
- `debug.log` - This is only active when DEBUG mode is enabled.
- `warn.log` - This is where warnings from Folderr are kept. Check it once and a while.

## Rotate logs

Folderr recommends using the builtin `logrotate` daemon on Linux.
::: warning Warning Non-Admin Users!
Non-Administrative Users need to setup logrotate for themselves or have a system admin do it.
:::

### Example (requires modification)

Put this in `/etc/logrotate.d/folderr`

::: code-group
```sh [Rocky Linux/RHEL Admin]
/etc/folderr/logs/*.log {
       su folderr folderr
       daily
       rotate 7
       delaycompress
       compress
       notifempty
       missingok
       copytruncate
}
```
```sh [Rocky Linux/RHEL User]
/home/folderr/folderr/logs/*.log {
       daily
       rotate 7
       delaycompress
       compress
       notifempty
       missingok
       copytruncate
}
```