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
Project
├── Login.page.yaml
└── Project.csproj
```

Login page now can be accessed.

```csharp title="Program.cs"
var loginPage = driver.Ya().LoginPage;
```

It is recommended to group pages by folders.

```
Project
├── Pages
|   ├── Administration
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
// navigates to /users/123?param2=some%20value
```


## Component

A component is a part of a web page that has its own functionality, layout, and style. It can be reused on different pages or in different parts of the same page. For example, a component can be a navigation menu, a search box, a footer, a carousel, or a custom element that you create yourself. A component can also contain other components inside it, creating a hierarchical structure of the web page.

In this example `Login` page has `Username` and `Password` input fields.

```yaml title="Login.page.yaml"
username: .user
password: .pass
```


### Locator

Each component is identified by its locator, which tells how to locate a component on the page.

Supported locator methods (case insensitive):
- `css`
- `xpath`
- `id`
- `testid`

:::tip implicit locator method
If locator method is not declared explicitly, Yapoml tries to recognize it automatically. By default it treats it as `xpath` if it's valid, otherwise as `css`.
:::

The following example shows different variants how to declare `username` component with its css `.user` selector.

```yaml title="Login.page.yaml"
username:
  by:
    css: .user

# or shorter
username:
  by: css .user

# or shorter
username: css .user

# or shorter
username: .user
```

It's possible to define a scope where the locator should be found from.

```yaml title="Login.page.yaml"
username:
  by:
    css: .user
    from: page # parent by default
```


### List of components

Yapoml framework is smart enough to understand whether you define one single component located by locator, or many components located by this locator. Plural components are identified in the same way as your natural language.

If you want to find all buttons on the page by specific locator, just declare it:

```yaml title="Home.page.yaml"
buttons: //button
```

`buttons` here is a plural word, which is treated by Yapoml as it should find many elements.

Then you can use it:

```csharp title="Program.cs"
foreach (var button in homePage.Buttons)
{
  Console.WriteLine(button.Text);
}
```

### Nested

A nested component is a component that is contained inside another component, forming a parent-child relationship.

In this example `menu` component is located in scope of `header` component, and `menu` component contains many menu `items` inside.

```yaml title="Home.page.yaml"
logo: //img

header:
  by: .header

  menu:
    by: .//ul

    items: ./li
```


### Parametrized locator

Usually all components locators can be declared deterministically. But sometimes it is beneficial to determine component's locator at runtime. Locator can be parametrized, where each parameter is provided in runtime.

```yaml title="Home.page.yaml"
section: .//section[text()='{name}']
```

`{name}` is treated as a parameter, and then you use it:

```csharp
// locates single section with "Upcoming" text
homePage.Section(name: "Upcoming");
```

It also works with a list of components:

```yaml title="Home.page.yaml"
sections: .//section[starts-with(text(), '{name}')]
```

```csharp
// locates many sections which start with "A" text
homePage.Sections(text: "A");
```


### Reusable components

It's possible to declare a component once in `*.component.yaml` file and reuse it across pages or components.

```yaml title="Select.component.yaml"
options: ./option
```

```yaml title="Home.page.yaml"
sort:
  by: id sort
  ref: select
```

And now use it:

```csharp
homePage.Sort.Options.First(o => o.Text.Equals(["Relevance"])).Click();

// or shorter
homePage.Sort.Options["Relevance"].Click();

```

:::note
Aliases for `ref` keyword:
- `base`
:::
