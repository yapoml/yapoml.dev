---
title: Getting Started
description: Generates page object classes for Microsoft Playwright with ease
sidebar_position: 0
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Generates page object classes for [Microsoft Playwright](https://playwright.dev) with ease.

# Installation
Install [Yapoml.Playwright](https://www.nuget.org/packages/Yapoml.Playwright) nuget package.

<Tabs>
<TabItem value="cli" label=".NET CLI" default>

```
dotnet add package Yapoml.Playwright
```

</TabItem>
<TabItem value="manager" label="Package Manager" default>

```
NuGet\Install-Package Yapoml.Playwright
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
driver.Ya().LoginPage.UsernameInput.Type("user01");
```
