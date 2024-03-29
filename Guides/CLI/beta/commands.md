# CLI Commands <Badge text="Work in Progress" type="warning" />

Hi, were going to be covering the CLI commands that come with the current version of **foldcli** <Badge text="beta" type="warning" />

Please note this page is a work in progress

## Table of Contents

- [Initial Setup](#setup)
- [App & Services Setup](#setup-applications-and-services)
- [Miscellaneous](#miscellaneous)

## Setup

To setup Folderr CLI there is one command. It is called `init`

```sh
foldcli init

Initializes your foldcli and its config. Either interactivity or non-interactively.
To use the interacivity you will need to not provide the directory or repository options

Usage: foldcli init [directory] [repository] [flags]
Directory: Where to store Folderr if you install it
Repository: Where to acquire Folderr from. i.e https://github.com/Folderr/secretive-url

Flags:
  -a, --authorization    Authorization token for private repositories. Init will fail if the repository is private and this is not used.
  -h, --help             Help for foldcli init
      --mkdir            Make directories if they do not exist
  -o, --override         Forcefully overrides previous configurations of Folderr CLI. Good for testing or misconfiguration.

Global Flags:
      --dry              Runs the command, does not change anything. Good for testing and development.
```

## Setup Applications and Services

This set of commands is under one command but is split into multiple subcommands.

First we have `setup db` which sets up Folderrs database and encryption keys

```sh
foldcli setup db

Set up Folderr's database structures and security (encryption) keys
Returns the private key in a file AND as output
db_name is the name of the database you'll use for your Folderr install
path is where the keys get saved. Default: $HOME/.folderr/cli/
Requires the MONGO_URI environment variable to be set before use.

Usage: foldcli setup db [db_name] (path_for_private_key)

Flags:
  -h, --help         help for db
      --no-cleanup   Does not cleanup if running in test mode. Only useful for data peekers and developers.
  -v, --verbose      Shows information aside from key output.
```

Next we have the `setup owner` command which sets up the owner account on the Folderr instance.
Won't work if there is already an owner

```sh
foldcli setup owner

Sets up the owner account on your Folderr instance
Requires MONGO_URI environment variable to be set
db_name is required for uploading the account
Runs interactively if the all the flags are not set. Will use any flags set however.

Usage:
  foldcli setup owner [db_name] [flags]

Flags:
  -e, --email string      Set's the email of the owner account
  -h, --help              help for foldcli setup owner
  -p, --password string   Set's the password of the owner account
  -u, --username string   Set's the username of the owner account

Global Flags:
      --dry   Runs the command but does not change anything
```

Next we have the `install` command which installs Folderr. May be used later for more things.

```sh
foldcli install
Checks for Folderrs dependencies and installs Folderr

Usage:
  foldcli install [flags]

Flags:
  -a, --authorization    Authorization token for private repositories. Init will fail if the repository is private and this is not used.
  -h, --help   help for install

Global Flags:
      --dry   Runs the command but does not change anything
```

## Encryption Key Management

The `keygen` command is useful for generating public/private keypairs for Folderr

It also allows us to test `foldcli`s keys againt Folderr, which is made especially easy with [this repository](https://github.com/Folderr/jwt-keytests)

```sh
foldcli keygen

Generate a private/public keypair according to Folderrs standards

Usage:
  foldcli keygen <path_for_private_key> <path_for_public_key> [flags]

Examples:
foldcli keygen /home/fldrr/keys/private.pem /home/fldrr/keys/public.pem

Flags:
  -f, --force   Override the current keys, if they eixst
  -h, --help    help for keygen

Global Flags:
      --dry   Runs the command but does not change anything
```

## Miscellaneous

The only command we have here for now is the `version` command. Which prints the version
May have more versions than just foldcli's later.

```sh
foldcli version
Shows the version of the CLI

Usage: foldcli version
```

Current version as of writing: Alpha 0.0.6
