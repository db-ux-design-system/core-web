---
"@db-ux/core-stylelint": patch
---

fix(stylelint): refine `use-border-color` to allow colorless border shorthands

- `use-border-color` no longer flags border shorthands that omit a color (e.g. `border-block-start: $w solid`), which intentionally reset the color to `currentColor`
