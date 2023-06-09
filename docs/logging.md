---
title: Logging
description: Use any log framework for your tests
sidebar_position: 3
---

Use your own logger to handle all internal log messages.

```csharp
driver.Ya(opts => opts.WithLogger(new CustomLogger()));
```

Or use most famous log frameworks.

# Serilog
Install [Yapoml.Extensions.Logging.Serilog](https://www.nuget.org/packages/Yapoml.Extensions.Logging.Serilog) to transfer all log messages produced by Yapoml to serilog logger.

```csharp
driver.Ya(opts => opts.UseSerilog());
```

# etc
Any log framework can be easily implemented, just ask.
