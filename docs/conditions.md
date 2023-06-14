---
title: Conditions
description: Awaitable conditions enabling further flow execution
sidebar_position: 2
---

There are two ways how to expect some conditions on the page before making any further actions.

```csharp
ya.LoginPage.UsernameInput
    .Expect(it => it.IsEnabled())
    .Type("john");
```

Or slightly reversed expression allowing you think about action first, and then about condition when an action should be performed.

```csharp
ya.LoginPage.UsernameInput
    .Type("john", when => when.IsEnabled());
```

Above examples wait until `UsernameInput` component is enabled, and then type `john` text.

## Chain multiple conditions
Conditions are chainable, even with near components.

```csharp
form.Expect(it => it.IsDisplayed().IsEnabled().UsernameInput.IsEnabled()).Submit();
```

It waits until the form is displayed and enabled, and username input is enabled.

## Awaitable assertions
Conditions are also can be considered as awaitable assertions.

```csharp
homePage.SearchInput
  .Type("It was great!")
  .Expect(its => its.Attributes.Value.Is("That is great!"));
```

If a condition wasn't meet, exception is raised.

```
System.TimeoutException : Attribute 'value = It was great!' of the search input component is not 'That is great!' yet.
  ┐That i┌s great!
  └It wa─┘        
  ----> System.TimeoutException : Condition was not satisfied within 30 seconds when polled every 0.5 seconds.
```

:::note Timeout
Any condition accepts optional `timeout` parameter. Default is `30` seconds.

```csharp
page.Expect(it => it.IsLoaded(timeout: TimeSpan.FromSeconds(50)));
```

Or configure it globally.

```csharp
driver.Ya(options => options.WithTimeout(TimeSpan.FromSeconds(50)))
```
:::


## Page conditions

### IsLoaded
Evaluates document's state to be `complete` which means the page is fully loaded. It doesn't guarantee that some components on the page are present, they might be rendered dynamically. 

**Usage**
```csharp
page.Expect(it => it.IsLoaded());
```

### Url
Various conditions for current page `Url`. It can be `page.Expect(its => its.Url.Is("something"))`, or `.EndsWith("something")`, [etc](#list-of-textual-conditions).

**Usage**
```csharp
page.Expect(its => its.Url.Contains("/user?name=john"));
```

### Title
Various conditions for current title of the page. There are a lot of verifications due to textual nature of the title, e.g. `.Is("something")` or `Contains("something")`, [etc](#list-of-textual-conditions).

**Usage**
```csharp
page.Expect(its => its.Title.StartsWith("Administration"));
```


## Component conditions

### IsDisplayed
Waits until a certain component is present and displayed. This method avoids the problem of having to parse an element's style attribute. You can use it for verifying the presence of a component. The opposite version is **IsNotDisplayed**.

**Usage**
```csharp
signInButton.Click(when => when.IsDisplayed());
```

### Exists
This method protects your program from ridiculous exceptions when a component is not attached to the DOM yet. Usually it happens with dynamic components. When a component is attached to the DOM, it means that it is present in the HTML code of the page. It doesn't mean the component is visible. If you get an error message something like _Element is no longer attached to the DOM_ while running your program, it means that the component you are trying to interact with has been removed from the DOM. The opposite version is **DoesNotExist**.

**Usage**
```csharp
modal.Expect(it => it.Exists());
```

### IsEnabled
Waits until a component is enabled and ready for interaction. Useful for checking a component's readiness before clicking on it, or typing a text into input fields. The opposite version is **IsNotEnabled**.

**Usage**
```csharp
signInButton.Click(when => when.IsEnabled());
```

### Text
Conditions for checking text content of the component.

**Usage**
```csharp
signInButton.Expect(its => its.Text.Is("Sign In"));

// ignoring case
signInButton.Expect(its => its.Text.Is("sign in", StringComparison.OrdinalIgnoreCase));
```

#### List of textual conditions

- **Is** - strict comparison of string value. Has optional `StringComparison` parameter.
- **IsNot**
- **IsEmpty**
- **IsNotEmpty**
- **Matches**
- **DoesNotMatch**
- **StartsWith**
- **DoesNotStartWith**
- **EndsWith**
- **DoesNotEndWith**
- **Contains**
- **DoesNotContain**

### Attributes
Certain conditions for a component's attributes what define characteristics and properties of a component. In web this is html attribute for the specified tag. Due to textual nature of the attributes, you can use [many ways](#list-of-textual-conditions) to create conditions for attributes.

**Usage**
```csharp
usernameInput.Expect(its => its.Attributes["value"].IsEmpty());
```

Or use well-known attributes
```csharp
usernameInput.Expect(its => its.Attributes.Value.IsEmpty());
```

### Styles
Provides a different conditions to wait some computed style of a component, such as color, font, size, and more.

**Usage**
```csharp
signInButton.Expect(its => its.Styles["color"].Contains("255"));
```

Or use well-known styles
```csharp
signInButton.Expect(its => its.Styles.Color.Contains("255"));
```


## Components collection conditions

### Count
Condition for collection of components to verify its count of components.

**Usage**
```csharp
ya.SearchResultsPage.Results.Expect(its => its.Count.Is(20));
```

#### List of numeric conditions

- **Is** - strict comparison of numeric value.
- **IsNot**
- **IsGreaterThan**
- **IsLessThan**

### Each
Condition to be satisfied by each component in the list.

**Usage**
```csharp
ya.SearchResultsPage.Results.Expect(that => that.Each(r => r.Attributes.Href.IsNotEmpty()));
```

### Contain
Expect at least one component in the list satisfies expected condition.

**Usage**
```csharp
ya.SearchResultsPage.Results.Expect(that => that.Contain(r => r.Attributes.Href.IsNotEmpty()));
```

### DoNotContain
Expect all components in the list don't satisfy condition.

**Usage**
```csharp
ya.SearchResultsPage.Results.Expect(that => that.DoNotContain(r => r.IsNotEmpty()));
```