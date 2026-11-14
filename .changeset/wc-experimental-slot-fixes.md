---
"@db-ux/wc-core-components": minor
---

feat(stencil): add opt-in `experimentalSlotFixes` build variant

- adds a second build produced from `stencil.config.slot-fixes.ts` with Stencil's `extras.experimentalSlotFixes` enabled, shipped under `dist-slot-fixes/` and `bundle-slot-fixes/`
- new entry points: `@db-ux/wc-core-components/slot-fixes` (loader, needs `@stencil/core`) and `@db-ux/wc-core-components/bundle-slot-fixes` (self-contained)
- the default entry points (`.`, `./bundle`) are unchanged and do NOT enable the slot fixes, so DOM-walking tooling such as axe-core keeps working
- use the opt-in variant when a framework reorders, removes or prepends slotted children at runtime and triggers `NotFoundError` or misplaced slotted content (e.g. `db-stack`, `db-accordion`, `db-select`) - see issue #8807
