# Quick Start

## Installation

Most likely you want to install maid as a global command, this can be done with Composer using the following command:

```shell
composer global require maid/maid
```

To upgrade maid, simply use the following command:

```shell
composer global update maid/maid
```

## Logging In

After installing the maid-cli, you need to authorize using your user account credentials.

```shell
maid login
```

> Note: To prevent the command from launching a web browser, use **maid login --console-only**. To authorize without a web browser and non-interactively, create a `credentials.json` file within the maid-cli config directory.

## Create a Manifest

First we need to create a `maid.yml` within the root directory of your project, this is done interactively by the following command:

```shell
maid init
```

> During the initialization process it tries to recognize frequently used Laravel ecosystem components from your project and also define them in your manifest file.

## Deploy your Application

After initializing your project you can start to deploy your first version:

```shell
maid deploy
```

![](https://cdn.maid.sh/ghostzero/maid-cli-usage-v1.gif)
