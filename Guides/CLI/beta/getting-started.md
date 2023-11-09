# Folderr CLI <Badge type="warning" text="beta" />

Folderr CLI (command-line: foldcli) is a new way to manage Folderr
Currently under-development however it has the following abilities:
- The ability to install Folderr
- Set up Folderr's database and security keys
- Set up the owner account for Folderr

## Table of Contents

* [Install](#install)
* [Future Plans](#future-plans)

## Install

Currently the only way to "install" Folderr CLI is to build it yourself using Go. We recommend go 1.20 or higher.

build it yourself steps:
1. install go (https://go.dev)
2. clone repository from https://github.com/Folderr/foldcli
3. navigate to cli directory
4. run `go build .`
5. move executable to PATH [variable]
6. (linux): run `chmod +x foldcli`

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
foldcli init
```
```powershell [Windows]
foldcli.exe init
```
:::
## Future Plans

Plans for Folderr CLI

- Have the ability to download an executable from github. (Flatpak, native maybe, etc)
- Better key management
- Owner transfership (maybe)
- Account management
- Ability to verify/deny a user through the CLI
- Moderation abilities: Takedown, remove account, ban user, warn user, and reverse content lookup (find user by their content)
- Upload an image (good for linux users)
- Shorten a link