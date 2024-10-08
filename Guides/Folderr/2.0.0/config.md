# Configuration

This guide will go over how to configure Folderr and explain the configuration.

Folderr requires 2-3 separate YAML files for configuration. These files should be stored in the root directory of your Folderr install

## Table of Contents

* [Server Configuration](#server-configuration) - required
* [Database Configuration](#database-configuration) - required
* [Emailer Configuration](#email-configuration) - optional


## Server Configuration

The basic configuration for the service is: `port`, `url`, `trustProxies`, `signups`, and `auth`. Kept in `configs/server.yaml`

Variable     | Description                                            | Type              | Example?              | Optional
------------ | ------------------------------------------------------ | ----------------- | --------------------- | ---
port             | Port number to listen on. `0-65535` are allowed    | Number            | `8888`                | Yes
url              | URL Folderr responds with                          | URL/String        | `https://example.com` | No
trustProxies     | Whether or not to trust proxies                    | Boolean           | `false` (default)     | Yes
signups          | State of signups                                   | Number            | `0` (default)         | No
sentry           | Sentry Error Logging                               | [Object](#sentry) |                       | Yes
apiOnly          | Whether or not to run with no frontend             | Boolean           | `false`, default      | Yes
httpsCertOptions | The certificate options for Folderrs HTTPs         | [Object](#certificate-configuration) |    | For insances behind a proxy.

#### Signup states

- `0` - Disabled
- `1` - Admin acceptance only
- `2` - Use emails
- `3` - Whitelist (Not planned for V2, but planned for later)

#### Sentry

Third-Party error logging and problem metrics service. Really only useful for developers or installs where you expect many people to use them.

Variable     | Description                                | Type       | Example? | Optional
------------ | ------------------------------------------ | ---------- | -------- | ---
dsn          | This is a URL                              | URL        |          | No
tracing      | Whether or not requests should be tracked  | Boolean    | `false`  | Yes
rate         | % of transactions to record                | Number 0-1 | `0.2`    | Yes

#### Certificate Configuration

Certificates for HTTPS. This is only needed if you are not running behind a reverse proxy and want HTTPS.

Variable    | Description                                                                        | Type            | Example?                    | Optional
----------- | ---------------------------------------------------------------------------------- | --------------- | --------------------------- | ---
key         | Path to private key                                                                | String          | `/home/example/private.key` | No
cert        | Path to certificate                                                                | String          | `/home/example/cert.pem`    | No
requestCert | Server will request a certificate from clients & attempt to verify the certificate | Boolean         | `false`                     | Yes
ca          | Array of paths to a CA cert                                                        | `String Array`  | `/path/to/cert.pem`         | Yes

### Server Example

```yaml
port: 8888,
url: https://example.com,
trustProxies: true,
signups: 0,
sentry:
  dsn: key@hostname.io
  tracing: true
  rate: 0.5
```

## Database Configuration

This goes in `configs/database.yaml`, and is 100% required.
Folderr will not function without it, under any circumstance.

Variable     | Description       | Type | Example or Default?           | Optional
------------ | ----------------- | ---- | ----------------------------- | ---
url          | The database URL  | URL  | `mongodb://localhost/Folderr` | No


### Database Example

```yaml
url: mongodb://localhost/folderr
```

## Email Configuration

Configuration for emails. Goes in `configs/email.yaml`. 100% optional.

Variable                         | Description                                                                  | Type    | Example or Default?    | Optional
-------------------------------- | ---------------------------------------------------------------------------- | ------- | ---------------------- | ---
sendingEmail                     | Email the emailer displays                                                   | String  | `no-reply@example.com` | Yes
[mailerOptions](#mailer-options) | Options for emailer                                                          | Object  |                        | Yes
selfTest                         | Whether or not to test the emailer by sending an email to the `sendingEmail` | Boolean | `true`, default        | Yes

### Mailer Options

Configuration for an email server (gmail, personal, GSuite, etc...)

Variable   | Description                                                                                | Type    | Example or Default? | Optional
---------- | ------------------------------------------------------------------------------------------ | ------- | ------------------- | ----
port                         | Email servers SMTP port                                                  | Number  | `587`               | Yes
secure                       | Whether or not to use TLS when connecting to the server                  | Boolean | `false`             | Yes
host                         | The url of the email server/host                                         | String  | `example.com`       | No
requireTLS                   | [See Nodemailer documentation](https://nodemailer.com/smtp/#tls-options) | Boolean | `false`             | Yes
ignoreTLS                    | No TLS is used (As long as secure is `false`)                            | Boolean | `false`             | Yes
[auth](#mailer-auth-options) | Email server authentication object                                       | Object  |                     | No
[tls](#mailer-tls-options)   | Options for TLS                                                          | Object  |                     | Yes

#### Mailer Auth Options

Authentication options to connect to the server host.

Variable | Description                         | Type   | Example?      | Optional
-------- | ----------------------------------- | ------ | ------------- | ---
user     | The username of the user to log in  | String | `"no-reply"`  | No
pass     | The password of the user logging in | String |               | No

#### Mailer TLS Options

Variable           | Description                                   | Type    | Example or Default? | Optional
-------------------| --------------------------------------------- | ------- | ------------------- | ---
rejectUnauthorized | Whether or not to reject invalid certificates | Boolean | `false`, default    | No

### Email Example

```yaml
mailerOptions:
    auth:
        user: no-reply
        pass: SomePassword
    port: 587 # One of the standard SMTP ports, along with 443.
    host: example.com
    tls:
      rejectUnauthorized: false # In case you have a bad certificate.
sendingEmail: "No-Reply <no-reply@example.com>"
```
