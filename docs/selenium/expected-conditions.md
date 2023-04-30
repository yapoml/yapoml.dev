---
title: Expected Conditions
sidebar_position: 1
---

By default yapoml doesn't await until components appear on a page. If you would like to wait components, there are several ways to do it.

# Implicitly

```csharp
webDriver.Ya(opts => opts.UseAwaitableComponents())
    .LoginPage.UsernameInput
        .Type("user01");
```

```csharp
webDriver.Ya(opts => opts.UseAwaitableComponents().WithTimeout(TimeSpan.FromSeconds(10)))
    .LoginPage.UsernameInput
        .Type("user01");
```

# Explicitly

```csharp
webDriver.Ya()
    .LoginPage.UsernameInput
        .When(it => it.IsDisplayed())
        .Type("user01");
```

```csharp
webDriver.Ya(opts => opts.WithTimeout(TimeSpan.FromSeconds(10)))
    .LoginPage.UsernameInput
        .When(it => it.IsDisplayed())
        .Type("user01");
```

```csharp
webDriver.Ya().
    LoginPage.UsernameInput
        .When(it => it.IsDisplayed(timeout: TimeSpan.FromSeconds(10)))
        .Type("user01");
```

```csharp
webDriver.Ya().
    LoginPage.UsernameInput
        .Type("user01", when => when.IsDisplayed());
```