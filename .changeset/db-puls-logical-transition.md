---
"@db-ux/core-components": patch
---

Fix the DB Puls animation to transition the logical `inline-size`/`block-size` properties instead of the physical `width`/`height`, matching the properties the puls actually sets. This keeps the animation consistent in logical-property/writing-mode contexts without changing the visual result.
