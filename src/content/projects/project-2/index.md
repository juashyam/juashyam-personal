---
title: "Magento Log Viewer"
description: "A simple Magento 2 module to view system logs (var/log) and system reports (var/report) in the Admin."
date: "Apr 16 2019"
demoURL: ""
repoURL: "https://github.com/juashyam/logviewer"
---

![Magento Log Viewer](/logviewer.png)

A simple Magento 2 module to view system logs (**var/log**) and system reports (**var/report**) in the Admin.

## 🚀 Installation

```bash
composer require juashyam/logviewer
php bin/magento module:enable Juashyam_LogViewer
php bin/magento setup:upgrade
```

## 📋 Features

- ✅ Shows all log and report files recursively in a tree
- ✅ Allows log and report files to be downloaded
- ✅ Supports ACL to restrict access to the log and report files
- ✅ Zero configuration

## 📄 Configuration

> Admin → System → System Messages and Errors

## 🖥 Preview
![System Logs](/logviewer_preview1.png)

![System Reports](/logviewer_preview2.png)

## 🏛️ License

MIT
