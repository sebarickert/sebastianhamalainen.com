---
title: "Debug PHP with VS Code and Docker"
date: 2020-02-26
type: "blog"
---

Debugging PHP with Xdebug using VS Code as your IDE. These are the step-by-step instructions on how I got Xdebug working with VS Code and Docker.

This [stackoverflow comment](https://stackoverflow.com/a/52805763/5562316) was really helpful getting this to work.

## Install Xdebug

You need to have Xdebug installed on your machine. Official installation guide can be found on [Xdebug's official website](https://xdebug.org/docs/install).
You can install Xdebug through PECL on Linux & macOS. You can install Xdebug with PECL with:

```bash
  pecl install xdebug
```

## Configure your php.ini file

When you have installed Xdebug, you need to configure your `php.ini` to use Xdebug.
These are the exact settings for Xdebug in my `php.ini` file:

```php
  [xdebug]
  zend_extension=/usr/local/Cellar/php/7.3.7/pecl/20180731/xdebug.so
  xdebug.default_enable=1
  xdebug.remote_enable=1
  xdebug.remote_port=9000
  xdebug.remote_handler=dbgp
  xdebug.remote_connect_back=0
  xdebug.remote_host=host.docker.internal
  xdebug.idekey=VSCODE
  xdebug.remote_autostart=1
  xdebug.remote_log=/usr/local/etc/php/xdebug.log
```

Most importantly you need to add the location of your `xdebug.so` file. Without it this will not work at all.

## PHP Debug extension for VS Code

You need to install [PHP Debug](https://marketplace.visualstudio.com/items?itemName=felixfbecker.php-debug) for VSCode. This extension is a debug adapter between VS Code and [XDebug](https://xdebug.org/) and will make debugging PHP with Xdebug possible.

## VS Code debugger launch.json configurations for PHP

These are the exact settings for debuggin PHP with docker and VS Code in my `launch.json` file:

```json
    {
      "name": "Listen for XDebug",
      "type": "php",
      "request": "launch",
      "port": 9000,
      "log": true,
      "externalConsole": false,
      "pathMappings": {
          "/app": "${workspaceFolder}",
      },
      "ignore": [
          "**/vendor/**/*.php"
      ]
    },
```

Most importantly you need to map your docker path in `pathMappings`.

**Example**: My app resides in the `/app` directory in the docker container. `${workspaceFolder}` is the path of the folder opened in VS Code, meaning the project root path.

## Configuring docker

I needed to add `XDEBUG_ENABLE` and `DOCKERHOST` lines under `x-environment` in my `docker-compose.yml` file. Like this:

```yaml
x-environment:
  &default-environment
    XDEBUG_ENABLE: "true"
    DOCKERHOST: host.docker.internal
```

**Happy coding!**