# Getting Started - FoldCLI <Badge type="warning" text="beta" />

Folderr CLI (command-line: foldcli) is a new way to manage Folderr
Currently under-development however it has the following abilities:
- The ability to install Folderr
- Set up Folderr's database and security keys
- Set up the owner account for Folderr

## Table of Contents

* [Install From Release](#install-from-release)
* [Install From Source](#install-from-source)
* [Future Plans](#future-plans)

## Install From Release

You can install the pre-production version of foldcli found on [the github releases page](https://github.com/Folderr/foldcli/releases)

Steps:
1. Download the executable for your system
2. Move executable to PATH

You can see your PATH by doing
```powershell
$env:PATH
```

example (linux, amd64, path includes $HOME/.local/bin):

```
FOLDCLI_VERSION=0.0.11
wget -O foldcli-$FOLDCLI_VERSION.tar.gz https://github.com/Folderr/foldcli/releases/download/$FOLDCLI_VERSION/foldcli-$FOLDCLI_VERSION-linux-amd64.tar.gz
# make a place to put the files zipped up
mkdir foldcli-$FOLDCLI_VERSION
# untar & install to $HOME/.local/bin/foldcli
tar -xvzf foldcli-$FOLDCLI_VERSION -C foldcli-$FOLDCLI_VERSION
chmod +x foldcli-$FOLDCLI_VERSION/foldcli
cp foldcli-$FOLDCLI_VERSION/foldcli $HOME/.local/bin/foldcli
```
## Install From Source

Currently the only way to "install" Folderr CLI is to build it yourself using Go. We recommend go 1.20 or higher.

build it yourself steps:
1. install go (https://go.dev)
2. clone repository from https://github.com/Folderr/foldcli
3. navigate to cli directory
4. run `go build .`
5. (linux): run `chmod +x foldcli`
6. move executable to PATH [variable] 

Example:

All of these assume you have git and go installed

::: details Windows Installation Note
We recommend copying Folderr CLI to a path that is in your user folder and your PATH.

You can see your PATH by doing
```powershell
$env:PATH
```

So something like `C:\Users\folderr\Tools\foldcli.exe` would be ideal as
- it allows you to use the executable without privilege elevation (admin) and
- modify it (when a new version is out) without needing admin rights.
You can also append something like `C:\Users\folderr\Tools` to your path
Note: `folderr` is just a example
:::
::: code-group
```sh [Linux, Admin]
# assumption: you are admin
git clone https://github.com/Folderr/foldcli
cd foldcli
go build .
chmod +x foldcli
sudo cp foldcli /bin
```
```sh [Linux, Non-Admin]
# assumption: you are not admin
git clone https://github.com/Folderr/foldcli
cd foldcli
go build .
chmod +x foldcli
cp foldcli $HOME/bin
```
```powershell [Windows, PowerShell Core]
git clone https://github.com/Folderr/foldcli
cd foldcli
go build .
# See tip for how to copy it to a directory
```
:::

Now you can restart your terminal and use it like
::: code-group
```sh [Linux]
foldcli init folderr
```
```powershell [Windows]
foldcli.exe init folderr
```
:::
## Future Plans

Plans for Folderr CLI

- Better key management
- Owner transfership (maybe)
- Account management
- Ability to verify/deny a user through the CLI
- Moderation abilities: Takedown, remove account, ban user, warn user, and reverse content lookup (find user by their content)
- Upload an image (good for linux users)
- Shorten a link