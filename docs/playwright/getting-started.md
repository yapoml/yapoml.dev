---
title: Getting Started
description: Generates page object classes for Microsoft Playwright with ease
---

Generates page object classes for [Microsoft Playwright](https://playwright.dev) with ease.

:::caution Experimental
Selenium support is first, then everything will be migrated to Playwright.
:::

Given that you have the following `LoginPage.po.yaml` file

```yaml
UsernameInput: "#username"
```

Then you are able to immediately interact with web elements

```csharp
using Yapoml.Playwright;

page.Ya().LoginPage.UsernameInput.Type("user01");
```

# Installation
Install [Yapoml.Playwright](https://www.nuget.org/packages/Yapoml.Playwright) nuget package and create your `*.po.yaml` files.
