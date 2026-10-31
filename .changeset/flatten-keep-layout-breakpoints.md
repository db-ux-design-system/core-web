---
"@db-ux/core-postcss-plugin": minor
---

fix(flatten): keep the customizable layout breakpoints live

- `--db-tablet-breakpoint` and `--db-desktop-breakpoint` are now default dynamic prefixes, so the plugin never resolves them and consumers can still move the `DBShell`/`DBControlPanel` switch point after flattening
- `@property` rules for dynamic variables are now preserved, so the `--db-*-breakpoint-min`/`-max` helpers survive even though only a container style query reads them - without the registration the switch silently breaks
