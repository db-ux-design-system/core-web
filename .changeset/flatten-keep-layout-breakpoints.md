---
"@db-ux/core-postcss-plugin": minor
---

fix(flatten): keep the customizable layout breakpoint live

- `--db-breakpoint` is now a default dynamic prefix, so the plugin never resolves it and consumers can still move the `DBShell`/`DBControlPanel` switch point after flattening
- `@property` rules for dynamic variables are now preserved, so the `--db-breakpoint` registration survives even though only a container style query reads it - without the registration the switch silently breaks
