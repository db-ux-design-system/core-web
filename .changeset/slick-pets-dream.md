---
"@db-ux/core-foundations": patch
---

refactor: we're not assigning our CSS Custom Properties to the `:host` selector anymore, but only `:root`, which even also covers `:host`, as the ShadowRoot boundary doesn't block the CSS cascade.
