---
title: Introduction
sidebar_position: 0
description: Define your page objects with ease and start to automate immediatelly
---

Main goal of yapoml framework is to provide ability to generate page object models for most popular testing tools. The idea to accomplish that is specifing friendly language to describe elements on the page and all necessary classes are auto-generated and are ready to use.

Just add `Login.page.yaml` file:
```yaml
UsernameInput: .username
```

And `yapoml` does the rest. Now you can access to web elements
```csharp
driver.Ya().LoginPage.UsernameInput.SendKeys("user01");
```

Or even define more complex relative elements
```yaml
LoginForm:
  by: .//form

  UsernameInput: .username
```

```csharp
driver.Ya().LoginPage.LoginForm.UsernameInput.SendKeys("user01");
```