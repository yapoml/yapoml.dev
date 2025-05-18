---
title: Introduction
description: Define your page objects with ease and start to automate immediately
sidebar_position: 0
---

Yapoml framework is a powerful and innovative tool that allows you to create page definitions for various testing tools in real time. With Yapoml, you can use a simple and intuitive syntax to define the UI components. The framework will then generate the corresponding boilerplate code on the fly, while you are defining your pages and components, which can be easily extended as needed. Yapoml makes test automation faster, easier, and more reliable.


## Quick Start

3 easy steps to get started right now. Let's create a real test which verifies that on the `https://www.nuget.org/packages?q=yapoml` page there is at least 1 package, and that all packages have a description and tags.

### ❶ Install NuGet package

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs groupId="framework" queryString>
<TabItem value="selenium" label="Selenium" default>

Install [Yapoml.Selenium](https://www.nuget.org/packages/Yapoml.Selenium) NuGet package.

</TabItem>
<TabItem value="playwright" label="Playwright">

Install [Yapoml.Playwright](https://www.nuget.org/packages/Yapoml.Playwright) NuGet package.

</TabItem>
</Tabs>


### ❷ Define page

Add new `Packages.page.yaml` file which defines the layout of the page. [Read more](concepts/syntax.md) about how to define pages and components.

```yaml title="Packages.page.yaml"
url:
  path: https://www.nuget.org/packages
  query:
    - q

packages: 
  by: .package

  description: .package-details
  tags: .package-tags a
```


### ❸ Interact with it

The page is automatically transformed to C# types available for interactions immediately. Explore what [interactions](concepts/interactions.md) and [expectations](concepts/expectations.md) you can use on the page.

```csharp title="Program.cs"
driver.Ya().PackagesPage.Open(q: "yapoml")
  .Packages.Expect(it => it.IsNotEmpty().Each(package =>
    {
      package.Description.IsNotEmpty();
      package.Tags.IsNotEmpty();
    })
  );
```

import Details from '@theme/MDXComponents/Details';

<Details>
<summary mdxType="summary">Console output</summary>

```
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
```
</Details>
