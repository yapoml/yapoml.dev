Title: Selenium
Description: Generates page object classes for Selenium WebDriver with ease
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
webDriver.Ya().LoginPage.UsernameInput.SendKeys("user01");
```

# Awaiting components

By default yapoml doesn't await until components appear on a page. If you would like to wait components, there are several ways to do it.

## Implicitly

```csharp
webDriver.Ya(opts => opts.UseAwaitableComponents())
    .LoginPage.UsernameInput
        .SendKeys("user01");
```

```csharp
webDriver.Ya(opts => opts.UseAwaitableComponents().WithTimeout(TimeSpan.FromSeconds(10)))
    .LoginPage.UsernameInput
        .SendKeys("user01");
```

## Explicitly

```csharp
webDriver.Ya()
    .LoginPage.UsernameInput
        .When(it => it.IsDisplayed())
        .SendKeys("user01");
```

```csharp
webDriver.Ya(opts => opts.WithTimeout(TimeSpan.FromSeconds(10)))
    .LoginPage.UsernameInput
        .When(it => it.IsDisplayed())
        .SendKeys("user01");
```

```csharp
webDriver.Ya().
    LoginPage.UsernameInput
        .When(it => it.IsDisplayed(timeout: TimeSpan.FromSeconds(10)))
        .SendKeys("user01");
```
