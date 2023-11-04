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
📁 Project
├── 📁 Pages
|   ├── 📁 Administration
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


## Showcase

Now, when we have learnt how to declare pages and components, let's create real test which verifies that on https://www.nuget.org/packages?q=yapoml page we see at least 1 package, and all packages have a description and tags.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="page" label="Packages.page.yaml" default>

```yaml
url:
  path: https://www.nuget.org/packages
  query:
    - q

packages: 
  by: .package

  description: .package-details
  tags: .package-tags a
```

</TabItem>
<TabItem value="program" label="Program.cs">

```csharp
driver.Ya().PackagesPage.Open(q: "yapoml")
    .Packages.Expect(it => it.IsNotEmpty().Each(package =>
        {
            package.Description.IsNotEmpty();
            package.Tags.IsNotEmpty();
        })
    );



```

</TabItem> 
</Tabs>

import CodeBlock from '@theme/CodeBlock';

<details>
  <summary>Console output</summary>
  <div>
<CodeBlock>

16:26:55.296 TRC • Opening Packages page by https://www.nuget.org/packages?q=yapoml
16:26:59.416 TRC • 4.1s
16:26:59.419 TRC • Expect packages satisfy conditions
16:26:59.423 TRC ╎ • Expect the count of packages is greater than 0
16:26:59.425 TRC ╎ ╎ Finding packages by css selector .package
16:26:59.445 TRC ╎ ╎ Found 6 packages
16:26:59.446 TRC ╎ • Expect each package satisfy conditions
16:26:59.448 TRC ╎ ╎ • Expect text of the description is not empty
16:26:59.449 TRC ╎ ╎ ╎ Finding description by css selector .package-details
16:26:59.477 TRC ╎ ╎ • Expect the count of tags is greater than 0
16:26:59.477 TRC ╎ ╎ ╎ Finding tags by css selector .package-tags a
16:26:59.488 TRC ╎ ╎ ╎ Found 5 tags
16:26:59.488 TRC ╎ ╎ • Expect text of the description is not empty
16:26:59.488 TRC ╎ ╎ ╎ Finding description by css selector .package-details
16:26:59.500 TRC ╎ ╎ • Expect the count of tags is greater than 0
16:26:59.500 TRC ╎ ╎ ╎ Finding tags by css selector .package-tags a
16:26:59.506 TRC ╎ ╎ ╎ Found 2 tags
16:26:59.506 TRC ╎ ╎ • Expect text of the description is not empty
16:26:59.506 TRC ╎ ╎ ╎ Finding description by css selector .package-details
16:26:59.518 TRC ╎ ╎ • Expect the count of tags is greater than 0
16:26:59.518 TRC ╎ ╎ ╎ Finding tags by css selector .package-tags a
16:26:59.523 TRC ╎ ╎ ╎ Found 2 tags
16:26:59.523 TRC ╎ ╎ • Expect text of the description is not empty
16:26:59.523 TRC ╎ ╎ ╎ Finding description by css selector .package-details
16:26:59.534 TRC ╎ ╎ • Expect the count of tags is greater than 0
16:26:59.534 TRC ╎ ╎ ╎ Finding tags by css selector .package-tags a
16:26:59.541 TRC ╎ ╎ ╎ Found 4 tags
16:26:59.541 TRC ╎ ╎ • Expect text of the description is not empty
16:26:59.541 TRC ╎ ╎ ╎ Finding description by css selector .package-details
16:26:59.553 TRC ╎ ╎ • Expect the count of tags is greater than 0
16:26:59.553 TRC ╎ ╎ ╎ Finding tags by css selector .package-tags a
16:26:59.560 TRC ╎ ╎ ╎ Found 2 tags
16:26:59.560 TRC ╎ ╎ • Expect text of the description is not empty
16:26:59.560 TRC ╎ ╎ ╎ Finding description by css selector .package-details
16:26:59.571 TRC ╎ ╎ • Expect the count of tags is greater than 0
16:26:59.571 TRC ╎ ╎ ╎ Finding tags by css selector .package-tags a
16:26:59.578 TRC ╎ ╎ ╎ Found 4 tags
</CodeBlock>
  </div>
</details>
