---
title: Introduction
description: Define your page objects with ease and start to automate immediatelly
sidebar_position: 0
---

Main goal of yapoml framework is to provide ability to generate page object models for most popular testing tools. The idea to accomplish that is specifing friendly language to describe elements on the page and all necessary classes are auto-generated and are ready to use.

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
login form:
  by: .//form

  username: .username
```

```csharp
driver.Ya().LoginPage.LoginForm.Username.Type("user01");
```