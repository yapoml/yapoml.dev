---
title: Introduction
description: Define your page objects with ease and start to automate immediately
sidebar_position: 0
---

Yapoml framework provides an ability to generate page object models for most popular testing tools on fly. It generates all necessary classes ready to use while you type in your IDE. 

Define UI components in `*.page.yaml` files:
```yaml title="Login.page.yaml"
username: .user
```

That's it! Now you can interact with UI components immediately.

```csharp
driver.Ya().LoginPage.Username.Type("user01");
```

:::info Explanation
Our application has login page, which is defined in `Login.page.yaml` file. Login page has `username` input field which is located by `.user` css locator. Once it is defined, we can interact with it, like typing some text.

- `driver.Ya()` - main entry point for all consumers, your journey always starts here,
- `.LoginPage` - accessing to login page object,
- `.Username` - accessing to username input field
- `.Type("user01")` - send keyboard events into username input field
:::

Or define more complex relative components.
```yaml title="Login.page.yaml"
form:
  by: .//form

  username: .username
  password: .password
  
  sign in: .//button
```

```csharp title="Program.cs"
driver.Ya().LoginPage.Form
  .Username.Type("user01")
  .Password.Type("pass01")
  .SignIn.Click();
```
