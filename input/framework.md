Title: Framework
---

# Introduction

Main goal of yapoml framework is to provide ability to generate page object models for most popular testing tools. The idea to accomplish that is specifing friendly language to describe elements on the page and all necessary classes are auto-generated and are ready for usage.

## Problem
Typical page object class for Selenium WebDriver is
```csharp
class LoginPage
{
    IWebDriver _driver;

    public MyPage(IWebDriver driver)
    {
        _driver = driver;
    }

    public IWebElement UsernameInput => return _driver.FindElement(By.Id("some_id"));
}
```

As we see we write a lot of code to define that `LoginPage` has `UsernameInput` which can be found by `some_id` id.


## Solution
This problem is resolved by yapoml. Instead of creation your class just add `LoginPage.po.yaml` file:
```yaml
UsernameInput: id some_id
```

And `yapoml` does the rest. Now you can access to web elements
```csharp
driver.Ya().LoginPage.UsernameInput.SendKeys("user01");
```

Or even define more complex relative elements
```yaml
LoginForm:
  by: id login

  UsernameInput: id some_id
```

```csharp
driver.Ya().LoginPage.LoginForm.UsernameInput.SendKeys("user01");
```


# Syntax

Yapoml supports yaml format to define your pages and components (TBD).

## Page

Page objects are defined in `*.po.yaml` files.

```treeview
Project/
|-- Pages/
|   `-- Administration/
|       |-- UsersPage.po.yaml
|       `-- RolesPage.po.yaml
|-- AnyRootPage.po.yaml
`-- Project.csproj
```

```csharp
var usersPage = driver.Ya().Pages.Administration.UsersPage;
var rootPage =  driver.Ya().AnyRootPage;
```

Page object consists of components:
```yaml
MyComponent: xpath .//div
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
```

Component may have nested components
```yaml
MyComponent:
  by: xpath .//div

  MyOtherComponent: xpath .//button
```

## Navigation

If a page has definited `url` property then this page has generated `Open()` method.

```yaml
# HomePage.po.yaml

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
driver.Ya().HomePage.Open("123", p2 = "any value") // navigates to /users/123?p2=any%20value
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