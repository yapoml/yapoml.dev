---
title: Getting Started
description: Generates page object classes for Selenium WebDriver with ease
sidebar_position: 0
---

Generates page object classes for [Selenium WebDriver](https://selenium.dev) with ease.

# Installation
Install [Yapoml.Selenium](https://www.nuget.org/packages/Yapoml.Selenium) nuget package and create your `*.page.yaml` files.

# Usage
Given that you have the following `Login.page.yaml` file

```yaml
UsernameInput: id username
```

Then you are able to immediately interact with web elements

```csharp
webDriver.Ya().LoginPage.UsernameInput.Type("user01");
```
