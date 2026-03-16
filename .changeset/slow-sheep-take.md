---
"@db-ux/core-components": patch
---

fix: the drawer ignored custom `max-width` and `max-height` properties due to internal `min-width` overrides. Additionally, resolved a bug where nested fixed-position elements (like DBCustomSelect dropdowns) were incorrectly positioned while the drawer was open.
