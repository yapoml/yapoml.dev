---
title: Expectations
description: Awaitable expectations enabling further flow execution
sidebar_position: 3
---

There are many ways how to expect some conditions on the page before making any further actions.

```csharp
ya.LoginPage.UsernameInput
    .Expect().IsEnabled()
    .Type("John");
```

Or slightly reversed expression allowing you think about action first, and then about condition(s) when an action should be performed.

```csharp
ya.LoginPage.UsernameInput
    .Type("John", when => when.IsEnabled());
```

Above examples wait until `UsernameInput` component is enabled, and then type `John` text.


## Chain multiple conditions
Conditions are chainable, even with near components.

```csharp
form
  .Expect(it => it.IsDisplayed().IsEnabled().UsernameInput.IsEnabled())
  .Submit();
```

Or if you prefer thinking about action first
```csharp
form.Submit(when => when.IsDisplayed().IsEnabled().UsernameInput.IsEnabled());
```

It waits until the form is displayed and enabled, and username input is enabled, and only then submit a form.

## Awaitable expectations
Expectations are also can be considered as awaitable assertions.

```csharp
homePage.SearchInput
  .Type("It was great!")
  .Expect().Attributes.Value.Is("That is great!");
```

If a condition wasn't meet, exception is raised.

```
Yapoml.ExpectException : Attribute value of the search input is not 'That is great!',
  it was ┐That i┌s great!
         └It wa ┘        

  ----> System.TimeoutException : Condition was not satisfied within 30 seconds when polled every 0.5 seconds.
```

:::tip Timeout
Any condition accepts optional `timeout` parameter. Default is `30` seconds.

```csharp
page.Expect().IsOpened(timeout: TimeSpan.FromSeconds(50));
```

Or configure it globally.
```csharp
driver.Ya(options => options.WithTimeout(TimeSpan.FromSeconds(50)))
```

For instant assertions you can use `TimeSpan.Zero` (looking for better alternative)
```csharp
// it doesn't wait until page title equals to 'Yapoml',
// throws immediately if not
page.Expect().Title.Is("Yapoml", TimeSpan.Zero);
```
:::


## Page conditions

### IsOpened
Evaluates document's state to be `complete` which means the page is fully loaded. It doesn't guarantee that some components on the page are present, they might be rendered dynamically.

:::info url
If `url` is defined for the page, then it also evaluates current url.

TBD: Supported only if `url` has no segments and query parameters.
:::

_Usage_
```csharp
page.Expect().IsOpened();
```

### Url…
Various conditions for current page `Url`. It can be `page.Expect().Url.Is("something")`, or `.EndsWith("something")`, [etc](#textual-conditions).

_Usage_
```csharp
page.Expect().Url.Contains("/user?name=John");
```

### Title…
Various conditions for current title of the page. There are a lot of verifications due to textual nature of the title, e.g. `.Is("something")` or `Contains("something")`, [etc](#textual-conditions).

_Usage_
```csharp
page.Expect().Title.StartsWith("Administration");
```


## Component conditions

### IsDisplayed
Waits until a certain component is present and displayed. This method avoids the problem of having to parse an element's style attribute. You can use it for verifying the presence of a component. The opposite version is **IsNotDisplayed**.

_Usage_
```csharp
signInButton.Click(when => when.IsDisplayed());
```

### Exists
This method protects your program from ridiculous exceptions when a component is not attached to the DOM yet. Usually it happens with dynamic components. When a component is attached to the DOM, it means that it is present in the HTML code of the page. It doesn't mean the component is visible. If you get an error message something like _Element is no longer attached to the DOM_ while running your program, it means that the component you are trying to interact with has been removed from the DOM. The opposite version is **DoesNotExist**.

_Usage_
```csharp
modal.Expect().Exists();
```

### IsEnabled
Waits until a component is enabled and ready for interaction. Useful for checking a component's readiness before clicking on it, or typing a text into input fields. The opposite version is **IsDisabled** or **IsNotEnabled**.

_Usage_
```csharp
signInButton.Click(when => when.IsEnabled());
```

### IsChecked
Waits until a component is checked. Useful for checkboxes and radiobuttons. The opposite version is **IsNotChecked** or **IsUnchecked**.

_Usage_
```csharp
checkbox.Expect().IsChecked();
```

### Text…
Conditions for checking text content of the component.

_Usage_
```csharp
signInButton.Expect().Text.Is("Sign In");

// ignoring case
signInButton.Expect().Text.Is("sign in", StringComparison.OrdinalIgnoreCase);
```

:::tip
`Text` subject is a special component's condition, you can use shorter variant
```csharp
signInButton.Expect().Is("Sign In");
``` 
:::

### Attributes…
Certain conditions for a component's attributes what define characteristics and properties of a component. In web this is html attribute for the specified tag. Due to textual nature of the attributes, you can use [many ways](#textual-conditions) to create conditions for attributes.

_Usage_
```csharp
usernameInput.Expect().Attributes["value"].IsEmpty();
```

Or use well-known attributes
```csharp
usernameInput.Expect().Attributes.Value.IsEmpty();
```

### Styles…
Provides a different conditions to wait some computed style of a component, such as color, font, size, and more.

_Usage_
```csharp
signInButton.Expect().Styles["color"].Contains("255");
```

Or use well-known styles
```csharp
signInButton.Expect().Styles.Color.Contains("255");
```

### IsInView
Conditions for checking the component currently is partially visible within viewport. The opposite version is **IsNotInView**.

_Usage_
```csharp
signInButton.Expect().IsInView();
```

## Components collection conditions

### Count…
[Condition](#numeric-conditions) for collection of components to verify its count of components.

_Usage_
```csharp
ya.SearchResultsPage.Results.Expect().Count.Is(20);
```

### Each
Condition to be satisfied by each component in the list.

_Usage_
```csharp
ya.SearchResultsPage.Results.Expect().Each(r => r.Attributes.Href.StartsWith("https://"));
```

### Contains
Expect at least one component in the list satisfies expected condition. The opposite version is **DoesNotContain**.

_Usage_
```csharp
ya.SearchResultsPage.Results.Expect(it => it.Contains(r => r.Attributes.Href.StartsWith("ftp://")));
```

### IsEmpty
Expect the count of components is `0`. The opposite version is **IsNotEmpty**.

_Usage_
```csharp
ya.SearchResultsPage.Results.Expect().IsEmpty();
```


## Generic conditions

These generic conditions are implicitly applicable for all known subject's types.

### Textual conditions

- **Is** - Checks if the actual text is equal to the expected text using the default string comparison.
- **IsNot** - Checks if the actual text is not equal to the expected text using the default string comparison.
- **IsEmpty** - Checks if the actual text is empty.
- **IsNotEmpty** - Checks if the actual text is not empty.
- **Matches** - Checks if the actual text matches the expected regular expression.
- **DoesNotMatch** - Checks if the actual text does not match the expected regular expression.
- **StartsWith** - Checks if the actual text starts with the expected text using the default string comparison.
- **DoesNotStartWith** - Checks if the actual text does not start with the expected text using the default string comparison.
- **EndsWith** - Checks if the actual text ends with the expected text using the default string comparison.
- **DoesNotEndWith** - Checks if the actual text does not end with the expected text using the default string comparison.
- **Contains** - Checks if the actual text contains the expected text using the default string comparison.
- **DoesNotContain** - Checks if the actual text does not contain the expected text using the default string comparison.
- **Length…** - Various continuation [numeric conditions](#numeric-conditions) for its length. E.g. `signInButton.Expect(its => its.Text.Length.IsGreaterThan(5));`

### Numeric conditions

- **Is** - Checks if the actual value is equal to the expected value.
- **IsNot** - Checks if the actual value is not equal to the expected value.
- **IsGreaterThan** - Checks if the actual value is greater than the expected value.
- **AtLeast** - Checks if the actual value is equal to or greater than the expected value.
- **IsLessThan** - Checks if the actual value is less than the expected value.
- **AtMost** - Checks if the actual value is equal to or less than the expected value.