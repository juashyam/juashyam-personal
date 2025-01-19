---
title: "2-Factor Authentication"
description: "Magento 2 Backend 2FA implementation."
date: "Mar 07, 2019"
demoURL: ""
repoURL: "https://github.com/juashyam/2-Factor-Authentication"
---

![2-Factor Authentication](/2fauthentication.png)

Magento 2 Two-Factor Authentication will protect our Magento store from insecure Internet connections.

Every time we login there is a chance that someone is sniffing or logging the password, which can later be used to login to your store.

You can protect our store from these type of attacks by using our advanced Magento Two-Factor Authentication, which uses Google authenticator and your smart phone in order to authenticate your admin session.

## 🚀 Installation

```bash
composer require juashyam/authenticator
php bin/magento module:enable Neyamtux_Authenticator
php bin/magento setup:upgrade
```

Please install & enable [Elgentos Frontend2FA](https://github.com/elgentos/frontend2fa) for frontend 2FA.

```bash
composer require elgentos/frontend2fa
php bin/magento module:enable Elgentos_Frontend2FA
php bin/magento setup:upgrade
```

## 🏛️ License

MIT
