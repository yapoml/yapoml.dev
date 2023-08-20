---
title: Logging
description: Use any log framework for your tests
---
 
Yapoml produces log messages when interacts with components. It's possible to redirect all messages to your favorite log framework.

# Serilog
Install [Yapoml.Extensions.Logging.Serilog](https://www.nuget.org/packages/Yapoml.Extensions.Logging.Serilog) to transfer all log messages to [Serilog](https://serilog.net).

```csharp
driver.Ya(opts => opts.WithSerilog());
```

# Report Portal
Install [Yapoml.Extensions.Logging.ReportPortal](https://www.nuget.org/packages/Yapoml.Extensions.Logging.ReportPortal) to transfer all log messages to [ReportPortal](https://reportportal.io).

```csharp
driver.Ya(opts => opts.WithReportPortal());
```

# etc
:::info
Any log framework can be easily implemented, just ask.
:::
