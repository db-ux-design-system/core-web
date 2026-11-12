---
"@db-ux/wc-core-components": patch
---

fix(stencil): enable `experimentalSlotFixes` to stabilize slot relocation

- turns on Stencil's `extras.experimentalSlotFixes` in both `stencil.config.ts` and `stencil.config.dev.ts`
- fixes `NotFoundError` and misplaced slotted children when a framework prepends, removes or reorders children of light-DOM components (e.g. `db-stack`, `db-accordion`, `db-select`)
