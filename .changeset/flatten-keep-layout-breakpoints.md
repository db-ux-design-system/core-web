---
"@db-ux/core-postcss-plugin": minor
---

fix(flatten): keep the customizable layout breakpoints live

- `--db-tablet-breakpoint` and `--db-desktop-breakpoint` are now default dynamic prefixes, so the plugin never resolves them to a static value and consumers can still override the `DBShell`/`DBControlPanel` switch point after flattening
- `@property` rules for dynamic variables are now preserved (previously removed unless referenced by a `var()` in a declaration), so the registered `--db-*-breakpoint-min` / `--db-*-breakpoint-max` helpers survive even though they are only read by a container style query - without the registration the browser cannot compute `min(var(--db-desktop-breakpoint), 100vi)` and the breakpoint switch silently breaks
