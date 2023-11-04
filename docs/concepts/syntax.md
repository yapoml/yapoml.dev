---
title: Syntax
description: Define your page objects with ease and start to automate immediately
sidebar_position: 1
---

# Syntax

Pages and components are declared in `*.page.yaml` and `*.component.yaml` files respectively. This format is user-friendly and allows us to describe the structure of pages and components clearly. Just add new files in your project and start defining pages.

## Page

To define `Login` page create new `Login.page.yaml` file.

```
📁 Project
├── Login.page.yaml
└── Project.csproj
```

Login page now can be accessed.

```csharp title="Program.cs"
var loginPage = driver.Ya().LoginPage;
```

It is recommended to group pages by folders.

```
🖿 Project
├── 🖿 Pages
|   ├── 🖿 Administration
|   |   ├── Users.page.yaml
|   |   └── Roles.page.yaml
|   └── Login.page.yaml
└── Project.csproj
```

Yapoml follows your folders structure and separates pages by spaces.

```csharp title="Program.cs"
var loginPage = driver.Ya().Pages.LoginPage;
var usersPage = driver.Ya().Pages.Administration.UsersPage;
```


### Url

For better identification of the page we can declare its `url`.

```yaml title="Login.page.yaml"
url: https://example.com/login
```

Or relative `url`.

```yaml title="Login.page.yaml"
url: /login
```

It makes [navigation](./interactions.md#open) to this page easier, or verification whether this page is [opened](./expectations.md#isopened).

```csharp title="Program.cs"
loginPage.Open();

loginPage.Expect().IsOpened();
```

`url` might have segments and query parameters.
```yaml title="User.page.yaml"
url:
  path: /users/{userId}
  query:
    - param1
    - param2
```

It is even easier to navigate to `UserPage`.

```csharp title="Program.cs"
userPage.Open(userId: "123", param2: "some value");
// navigates to /users/123?param2=any%20value
```

### Components

Page object consists of components:
```yaml
MyComponent: .//div
```

## Component

Component is identified by search method (following are different representation of the same component)
```yaml
MyComponent:
  by:
    xpath: .//div

# or shorter
MyComponent:
  by: xpath .//div

# or shorter
MyComponent: xpath .//div

# or shorter
MyComponent: .//div
```

Supported search methods:
- id
- css
- xpath

If search method is undefined, Yapoml tries to recognize it. Treat it as `xpath` if it's valid, otherwise as `css`. 

### Nested
Component may have relative components
```yaml
MyComponent:
  by: xpath .//div

  MyOtherComponent: .//button
```

### Parametrized
Locator may have parameters.
```yaml
MyButton: ./button[text()='{text}']
```

`{text}` is treated as a parameter, and then you use it
```csharp
myPage.MyButton(text: "Sign in") // finds ./button[text()='Sign in']
```

Or even find multiple components
```yaml
GetMyButtons: ./button[text()='{text}']
```
```csharp
myPage.GetMyButtons(text: "Sign in") // finds many ./button[text()='Sign in']
```

### Reusable
It's possible to define a component once in `*.component.yaml` file and reuse it.

```yaml title="My.component.yaml"
by: ./div

MyButton: ./button
```

```yaml title="My.page.yaml"
MyOtherComponent:
  ref: My # or 'base: My'
```
