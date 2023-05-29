---
title: Expected Conditions
sidebar_position: 1
---

```csharp
driver.Ya()
    .LoginPage.UsernameInput
        .Expect(it => it.IsDisplayed())
        .Type("user01");
```

```csharp
driver.Ya(opts => opts.WithTimeout(TimeSpan.FromSeconds(10)))
    .LoginPage.UsernameInput
        .Expect(it => it.IsDisplayed())
        .Type("user01");
```

```csharp
driver.Ya().
    LoginPage.UsernameInput
        .Expect(it => it.IsDisplayed(timeout: TimeSpan.FromSeconds(10)))
        .Type("user01");
```

```csharp
driver.Ya().
    LoginPage.UsernameInput
        .Type("user01", when => when.IsDisplayed());
```