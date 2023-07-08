---
title: Interactions
description: How you can interact with pages and components
toc_max_heading_level: 4
sidebar_position: 2
---

Explore here available methods how you can interact with your pages and components. All methods are fluent in mind, allowing you to continue interaction with the subject under focus.

```csharp
ya.SearchPage.Open().SearchInput.Clear().Type("yapoml");
```

## Page

### Methods
#### Open

Navigates to the page. Available only if the page has defined `url` property.

```yaml title="Home.page.yaml"
url: some/relative/path
```

```csharp
driver.Ya().HomePage.Open();
```

It requires base url to be specified if url path is relative.
```csharp
driver.Ya(opts => opts.WithBaseUrl("https://example.com")).HomePage.Open();
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

## Component

### Properties

#### IsDisplayed

Indicates whether a component is visible on the page or not. Returns a boolean value: `true` if the element is displayed, and `false` if the element is hidden or not present.

Useful for verifying the visibility of components that may change dynamically based on user actions or page conditions. For example, you can use it to check if a dropdown menu is expanded or collapsed, or if a modal dialog is open or closed. It does not check if the component is within the viewport or not. It only checks if the element is rendered on the page, regardless of its position or size. Look at [IsInView](#isinview) property if you need to check whether the component is within the viewport.

**Usage**
```csharp
bool visible = driver.Ya().HomePage.SearchButton.IsDisplayed;
```

#### IsEnabled

Used to indicate whether a component can respond to user interactions or not. It returns a boolean value: `true` if the element is enabled, and `false` if the element is disabled.

For example, you can use it to check if a checkbox is checked or unchecked, or if a text field is editable or read-only.

**Usage**
```csharp
bool enabled = driver.Ya().HomePage.SearchButton.IsEnabled;
```

#### Text

Gets the visible text of a component. It returns a string value that represents the inner text of the element. For example, you can use it to check if a label displays the correct message, or if a paragraph contains the expected text.

**Usage**
```csharp
string text = driver.Ya().HomePage.SearchButton.Text;
```

:::note
This property may not work as expected for some components that do not have any visible text content. For example, input elements (`<input>`) do not have any inner text, so they will return an empty string for this property. To get the value of an input element, you may need to use the [Attributes.Value](#attributes) property.
:::

#### Attributes…

Gets the value of an attribute of a component as a string. It can also retrieve component properties, such as an anchor tag’s `href` attribute.

For example, you can use it to check if an input element has a value attribute that matches the expected input, or if an image element has an alt attribute that describes the image.

**Usage**
```csharp
string value = driver.Ya().HomePage.SearchInput.Attributes["value"];
```

:::tip
Well-known attributes are accessible shortly.

```csharp
var value = driver.Ya().HomePage.SearchInput.Attributes.Value;
// or
var href = driver.Ya().HomePage.Logo.Attributes.Href;
```
:::

#### Styles…

Gets the value of a CSS property of a component as a string. It can be used to retrieve the computed style of a component, such as its `color`, `font-size`, or `display`.

For example, you can use it to check if an element has a certain background color, or if an element is visible or hidden by its display property.

**Usage**
```csharp
string color = driver.Ya().HomePage.SearchButton.Styles["color"];
```

:::tip
Well-known styles are accessible shortly.
```csharp
var color = driver.Ya().HomePage.SearchButton.Styles.Color;
// or
var opacity = driver.Ya().HomePage.SearchButton.Styles.Opacity;
```
:::

#### IsFocused

Indicates whether a component currently has logical focus or not. It returns a boolean value: `true` if the component has focus, and `false` if the component does not have focus.

**Usage**
```csharp
bool hasFocus = driver.Ya().HomePage.SearchInput.IsFocused;
```

#### IsInView

Indicates whether a component currently is partially visible within viewport or not. It returns a boolean value: `true` if the component is in viewport, and `false` if the component is not.

**Usage**
```csharp
bool isInViewport = driver.Ya().HomePage.SearchInput.IsInView;
```

### Methods

#### Click

Simulates a mouse click on a component. It can be used to interact with buttons, links, checkboxes, radio buttons, and other clickable components on a page.

**Usage**
```csharp
driver.Ya().HomePage.SearchButton.Click();
```

Or with specified `offset`.
```csharp
driver.Ya().HomePage.SearchButton.Click(x: 20, y: 30);
```

The `Click` method performs a left-click by default. To perform other click actions see [ContextClick](#contextclick), [DoubleClick](#doubleclick), [DragAndDrop](#draganddrop), etc.

#### DoubleClick
#### ContextClick
#### Type
#### Clear
#### Hover
#### Focus
#### Blur
#### DragAndDrop
#### ScrollIntoView