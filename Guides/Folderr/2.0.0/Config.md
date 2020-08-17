# Configuration (Guide)

This guide will go over how to configure Folderr and explain the configuration. 

## Table of Contents

* [Basic Configuration](#basic-configuration)
* [Emailer Configuration](#email-configuration)
* [Advanced Configuration](#advanced-configuration)
* [Full Configuration Example](#full-example)

## Basic configuration

The basic configuration for the service is: `port`, `url`, `trustProxies`, `signups`, and `auth`

Variable     | Description                                         | Type                     | Example?                  | Optional
------------ | --------------------------------------------------- | ------------------------ | ------------------------- | ---
port         | Port number to listen on                            | Number                   | `8888`                    | Yes
url          | URL Folderr responds with                           | String                   | `"https://example.com"`   | Yes
trustProxies | Whether or not to trust proxies                     | Boolean                  | `true`                    | Yes
signups      | State of signups                                    | Number                   | `true`                    | Yes
auth         | The authentication object to encrypt/decrypt tokens | [Object](#auth) / String | `"sendBetterEncryption"`  | No
email        | Email options                                       | Object          | [Example](#email-example) | No

### Auth

Authentication object to encrypt/decrypt all tokens.
Changing this after tokens/logins have been created will invalidate all tokens/logins.

Variable     | Description                              | Type   | Example?                                       | Optional
------------ | ---------------------------------------- | ------ | ---------------------------------------------- | ---
privKeyPath  | The path to the private key (encryption) | String | `"/home/example/.secrets/folderr/private.key"` | No
pubKeyPath   | The path to the public key (decryption)  | String | `"/home/example/.secrets/folderr/public.key"`  | No
algorithm    | Algorithm used for key generation        | String | `"RS2048"`                                     | Yes

### Basic Example

```json
{
    "port": 8888,
    "url": "https://example.com",
    "trustProxies": true,
    "signups": 0,
    "auth": {
        "privKeyPath": "/home/example/.secrets/folderr/private.key",
        "pubKeyPath": "/home/example/.secrets/folderr/public.key",
        "algorithm": "RS2048"
    }
}
```

## Email Configuration

Configuration for emails

Variable                         | Description                | Type   | Example?                 | Optional
-------------------------------- | -------------------------- | ------ | ------------------------ | ---
contactEmail                     | Service contact email      | String | `"contact@example.com"`  | No
sendingEmail                     | Email the emailer displays | String | `"no-reply@example.com"` | Yes
[mailerOptions](#mailer-options) | Options for emailer        | Object |                          | Yes

### Mailer Options

Configuration for an email server (gmail, personal, GSuite, etc...)

Variable   | Description                                                              | Type    | Example?        | Optional
---------- | ------------------------------------------------------------------------ | ------- | --------------- | ---
port                         | Email servers SMTP port                                                  | Number  | `587`           | Yes
secure                       | Whether or not to use TLS when connecting to the server                  | Boolean | `false`         | Yes
host                         | The url of the email server/host                                         | String  | `"example.com"` | No
requireTLS                   | [See Nodemailer documentation](https://nodemailer.com/smtp/#tls-options) | Boolean | `false`         | Yes
ignoreTLS                    | No TLS is used (As long as secure is `false`)                            | Boolean | `false`         | Yes
[auth](#mailer-auth-options) | Email server authentication object                                       | Object  |               | No

#### Mailer Auth Options

Authentication options to connect to the server host.

Variable                 | Description                         | Type   | Example?      | Optional
------------------------ | ----------------------------------- | ------ | ------------- | ---
user                     | The username of the user to log in  | String | `"no-reply"`  | No
pass                     | The password of the user logging in | String |               | No

### Email Example

```json
"email": {
    "contactEmail": "contact@example.com",
    "mailerOptions": {
        "auth": {
            "user": "no-reply",
            "pass": "SomePassword",
        },
        "port": 587,
        "host": "example.com"
    },
    "sendingEmail": "\"No-Reply\" <no-reply@example.com>",
}
```

## Advanced Configuration

***DISCLAIMER: THESE ARE ADVANCED OPTIONS, YOU ARE RESPONSIBLE FOR ANY DAMAGE DONE OR DATA LOST.***

Advanced configuration, most of this is optional.

Variable                                  | Description                                | Type    | Example? | Optional
----------------------------------------- | ------------------------------------------ | ------- | -------- | ---
apiOnly                                   | Whether or not to run with no frontend     | Boolean | `false`  | Yes
enableDiscordLogging                      | Enable logging to Discord via webhook      | Boolean | `false`  | Yes
discordURL                                | Discord webhook URL to log to              | String  |          | Yes
[discordHook](#discordhook-configuration) | Webhook customization options              | Object  |          | Yes
[certOptions](#certificate-configuration) | Certificate options (for HTTPS support)    | Object  |          | Yes
[sharder](#sharder-configuration)         | Configuration for using multiple CPU cores | Object  |          | Yes

### DiscordHook Configuration

Variable   | Description              | Type    | Example?                           | Optional
---------- | ------------------------ | ------- | ---------------------------------- | ---
name       | The webhook name         | String  | `"Folderr"`                        | Yes
avatar_url | URL Icon for the webhook | String  | `"https://example.com/myIcon.png"` | Yes

### Certificate Configuration

Certificates for HTTPS. This is only needed if you are not running behind a reverse proxy and want HTTPS.

Variable    | Description                                                                        | Type    | Example?                                              | Optional
----------- | ---------------------------------------------------------------------------------- | ------- | ----------------------------------------------------- | ---
key         | Path to private key                                                                | String        | `"/home/example/.secrets/folderr/certs/private.key/"` | No
cert        | Path to certificate                                                                | String        | `"/home/example/.secrets/folderr/certs/cert.pem/"`    | No
requestCert | Server will request a certificate from clients & attempt to verify the certificate | Boolean       | `false`                                            | Yes
ca          | Array of paths to a CA cert                                                        | Array<String> | `["/path/to/cert.pem"]`                                | Yes

### Sharder Configuration

The sharder creates multiple instances of the service under the same port. Only the service may cluster itself. No outside clustering allowed.
The sharder will not be enabled if you have two cores or less.
The maximum cores Folderr can use is `CPU cores - 2`

Variable  | Description                               | Type    | Example? | Optional
--------- | ----------------------------------------- | ------- | -------- | ---
enabled   | Whether or not to enable clustering       | Boolean | `true`   | No
maxCores  | The max cores the service will use.       | Number  | `24`     | No

## Full Example

This is a example of a full configuration, using all of the above configuration guides to show off how a full configuration can look like.
We do not use a certificate here, we are using the reverse proxy for encryption.
We do not use discord logging here, it is an extra.
The sharder is based on a small servers resources.
We keep the emailer so that already existing users can change the email associated with their account.

```json
{
    "port": 8888,
    "url": "https://example.com",
    "trustProxies": true,
    "signups": 0,
    "auth": {
        "privKeyPath": "/home/example/.secrets/folderr/private.key",
        "pubKeyPath": "/home/example/.secrets/folderr/public.key",
        "algorithm": "RS2048"
    },
    "email": {
        "contactEmail": "contact@example.com",
        "mailerOptions": {
            "auth": {
                "user": "no-reply",
                "pass": "SomePassword",
            },
            "port": 587,
            "host": "example.com"
        },
        "sendingEmail": "\"No-Reply\" <no-reply@example.com>",
    },
    "sharder": {
        "maxCores": "4",
        "maxMemory": "4G",
        "enabled": true
    },
    "apiOnly": false,
    "enableDiscordLogging": false
}
```
