---
title: Introduction
description: Define your page objects with ease and start to automate immediatelly
sidebar_position: 0
---

Yapoml framework provides an ability to generate page object models for most popular testing tools on fly. It generates all necessary classes ready to use while you are typing in your IDE. 

Define your web elements in `*.page.yaml` files:
```yaml title="Login.page.yaml"
username: .username
```

And **yapoml** does the rest. Now you can use web elements immediately.
```csharp 
driver.Ya().LoginPage.Username.Type("user01");
```

Or even define more complex relative elements
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
  .And.Password.Type("pass01")
  .And.SignIn.Click();
```
