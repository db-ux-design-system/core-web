---
"@db-ux/core-foundations": patch
---

fix: allow overriding font-weight on `text-body-*` / `text-head-*` Tailwind utilities

The typography utilities applied the `font` shorthand, which reset `font-weight` to its initial value and made utilities like `font-bold` ineffective. The utilities now re-apply `font-weight` via Tailwind's `--tw-font-weight` variable, keeping the token's natural weight as the default while allowing independent overrides.
