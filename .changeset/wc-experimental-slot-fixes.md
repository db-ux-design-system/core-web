---
"@db-ux/wc-core-components": patch
---

fix(stencil): enable `experimentalSlotFixes` to stabilize slot relocation

- fixes `NotFoundError` and misplaced slotted children when a framework prepends, removes or reorders children of light-DOM components (e.g. `db-stack`, `db-accordion`, `db-select`)
