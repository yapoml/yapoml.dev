---
title: Introduction
description: Define your page objects with ease and start to automate immediately
sidebar_position: 0
---

Yapoml framework is a powerful and innovative tool that allows you to create page definitions for various testing tools in real time. With Yapoml, you can use a simple and intuitive syntax to define the UI components. The framework will then generate the corresponding boilerplate code on the fly, while you are defining your pages and components, which can be easily extended as needed. Yapoml makes test automation faster, easier, and more reliable.

## Example

Let's see how we can define the `Login` page. There is a `username` field on the page, which can be located by the `.user` CSS selector.

```yaml title="Login.page.yaml"
username: .user
```

Now you can interact with the UI components on the page immediately.

```csharp title="Program.cs"
driver.Ya().LoginPage.Username.Type("John");
```

This basic example demonstrates how to use Yapoml to create an [interactable](concepts/interactions) simple page with minimal [declaration](concepts/syntax). Keep reading.