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
#### IsEnabled
#### IsFocused
#### Text
#### Attributes…
#### Styles…
#### IsInView

### Methods

#### Click
#### DoubleClick
#### ContextClick
#### Type
#### Clear
#### Hover
#### Focus
#### Blur
#### DragAndDrop
#### ScrollIntoView