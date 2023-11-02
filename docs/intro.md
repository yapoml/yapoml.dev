---
title: Introduction
description: Define your page objects with ease and start to automate immediately
sidebar_position: 0
---

Yapoml framework is a powerful and innovative tool that allows you to create page definitions for various testing tools in real time. With Yapoml, you can use a simple and intuitive syntax to define the UI components. Framework will then generate the corresponding boilerplate code on fly, while you are defining your pages and components, which can be easily extended as needed. Yapoml makes test automation faster, easier, and more reliable.

## Basic example

Let's see how we can define `Login` page. There is `username` field on the page, which can be located by `.user` CSS selector.

```yaml title="Login.page.yaml"
username: .user
```

Now you can interact with UI components on the page immediately.

```csharp title="Program.cs"
driver.Ya().LoginPage.Username.Type("John");
```

This basic example demonstrates how to use Yapoml to create [interactable](concept/interactions) simple page with minimal [declaration](concept/syntax). Keep reading.