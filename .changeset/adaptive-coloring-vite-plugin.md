---
"@db-ux/core-vite-plugin": minor
---

feat(vite-plugin): share the detector with theme-tools and import the legacy color layer

- the usage detector is now consumed from `@db-ux/core-theme-tools/detector` (new `@db-ux/core-theme-tools` dependency) instead of a plugin-local copy
- the generated per-component imports now also pull in each component's `<name>.legacy-coloring.css` (when present), so selectively imported components keep their variant colors after the legacy color layer was extracted out of the base CSS
