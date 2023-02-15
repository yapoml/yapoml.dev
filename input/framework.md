Title: Framework
Description: Define your page objects with ease and start to automate immediatelly
---

# Introduction

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


# Syntax

Yapoml supports yaml format to define your pages and components.

## Page

Page objects are defined in `*.page.yaml` files.

```treeview
Project/
|-- Pages/
|   `-- Administration/
|       |-- Users.page.yaml
|       `-- Roles.page.yaml
|-- AnyRoot.page.yaml
`-- Project.csproj
```

```csharp
var usersPage = driver.Ya().Pages.Administration.UsersPage;
var rootPage =  driver.Ya().AnyRootPage;
```

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

```yaml
# My.component.yaml
by: ./div

MyButton: ./button
```

```yaml
# My.page.yaml

MyOtherComponent:
  ref: My # or 'base: My'
```


## Navigation

If a page has definited `url` property then this page has generated `Open()` method.

```yaml
# Home.page.yaml

url: some/relative/path
```

```csharp
driver.Ya().HomePage.Open();
```

`url` might have segments and query parameters
```yaml
url:
  path: /users/{userId}
  query:  # or params
    - p1
    - p2
```
```csharp
driver.Ya().HomePage.Open("123", p2: "any value") // navigates to /users/123?p2=any%20value
```

Segments are required. If you need skip some particular segment from the url path, you can put `null`. Query parameters are always optional.

# Extensions

## Logging
### Serilog
Install [Yapoml.Extensions.Logging.Serilog](https://www.nuget.org/packages/Yapoml.Extensions.Logging.Playwright) to transfer all log messages produced by Yapoml to serilog logger.

```csharp
driver.Ya(opts => opts.UseSerilog());
```

### etc
Any log framework can be easily implemented, just ask.
