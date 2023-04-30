---
title: Caching
description: Framework doesn't find components if it is already found
sidebar_position: 2
---

```csharp
var page = driver.Ya().LoginPage;
page.Username.Hover();
page.Username.Hover();
```

This code finds `Username` component only once, and hovers on it twice.