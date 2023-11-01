---
title: Getting Started
description: Generates page object classes for Selenium WebDriver with ease
sidebar_position: 0
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Generates page object classes for [Selenium WebDriver](https://selenium.dev) with ease.

# Installation
Install [Yapoml.Selenium](https://www.nuget.org/packages/Yapoml.Selenium) nuget package.

<Tabs>
<TabItem value="cli" label=".NET CLI" default>

```
dotnet add package Yapoml.Selenium
```

</TabItem>
<TabItem value="manager" label="Package Manager" default>

```
NuGet\Install-Package Yapoml.Selenium
```

</TabItem> 
</Tabs>

You can now start creating your `*.page.yaml` files.

# Usage
Given that you have the following `Login.page.yaml` file

```yaml
username input: id username
```

Then you are able to immediately interact with web elements

```csharp
webDriver.Ya().LoginPage.UsernameInput.Type("user01");
```
