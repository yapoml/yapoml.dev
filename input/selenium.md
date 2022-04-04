Title: Selenium
---

Generates page object classes for [Selenium WebDriver](https://selenium.dev) with ease.

# Installation
Install [Yapoml.Selenium](https://www.nuget.org/packages/Yapoml.Selenium) nuget package and create your `*.po.yaml` files.

# Usage
Given that you have the following `LoginPage.po.yaml` file

```yaml
UsernameInput: id username
```

Then you are able to immediately interact with web elements

```csharp
using Yapoml.Selenium;

webDriver.Ya().LoginPage.UsernameInput.SendKeys("user01");
```

> Note: you might add `using` statement manually, Visual Studio cannot resolve it automatically.

# Extensions

There are built-in extensions which are shipped via [Yapoml.Selenium.Extensions](https://www.nuget.org/packages/Yapoml.Selenium.Extensions) nuget package.

## Lighter

Highlight the element on the page each time when you find it.

```csharp
using Yapoml.Selenium;

webDriver.Ya(opts => opts.UseLighter())
```