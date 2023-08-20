---
title: Logging
description: Use any log framework for your tests
---
 
Yapoml produces log messages when interacts with components. All messages can be routed to your preferred log framework.

## [Serilog](https://serilog.net)

Install [Yapoml.Extensions.Logging.Serilog](https://www.nuget.org/packages/Yapoml.Extensions.Logging.Serilog) nuget package.

```csharp
driver.Ya(opts => opts.WithSerilog());
```

## [Report Portal](https://reportportal.io)
Install [Yapoml.Extensions.Logging.ReportPortal](https://www.nuget.org/packages/Yapoml.Extensions.Logging.ReportPortal) nuget package.

```csharp
driver.Ya(opts => opts.WithReportPortal());
```

## etc
:::info
Any log framework can be easily implemented, just ask.
:::
