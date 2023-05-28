---
title: Expected Conditions
sidebar_position: 1
---

```csharp
webDriver.Ya()
    .LoginPage.UsernameInput
        .Expect(that => that.IsDisplayed())
        .Type("user01");
```

```csharp
webDriver.Ya(opts => opts.WithTimeout(TimeSpan.FromSeconds(10)))
    .LoginPage.UsernameInput
        .Expect(that => that.IsDisplayed())
        .Type("user01");
```

```csharp
webDriver.Ya().
    LoginPage.UsernameInput
        .Expect(that => that.IsDisplayed(timeout: TimeSpan.FromSeconds(10)))
        .Type("user01");
```

```csharp
webDriver.Ya().
    LoginPage.UsernameInput
        .Type("user01", when => when.IsDisplayed());
```