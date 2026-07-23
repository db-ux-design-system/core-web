---
"@db-ux/agent-cli": patch
---

fix: align db-ux-designer-powers Figma generation with the reference examples

Refactors the `generate-figma-screen` power (render runtime + registries + docs) to the
canonical DB UX conventions derived from the Figma 'Examples' reference (node `362:1807`):

- Real `Icon` component for content icons (never an image rectangle) and `Image` nodes
  constrained to the design-system aspect ratios (`1:1` / `3:4` / `16:9`, no free pixel
  height).
- One uniform gap (default `lg`) per content block; Card `spacing` matches the block gap.
- Automatic equal-height card grids (the runtime measures cards and stretches the shorter
  ones to the tallest) — no more mismatched card heights.
- Named, correctly-counted Header navigation items for multi-page sites (`navItems`).
- Filter/action bars use a flexible `ContainerHorizontal` (not a Grid); Switch width fill.
- Registries (recipe/module/content-block/section), context docs, SKILL, steering and the
  enforcement hook updated accordingly; example plans modernized to Concept `Heading`/`Body`.
- Adds `assets/build-runtime.cjs` + committed `assets/db-figma-runtime.min.js` so the runtime
  fits the `use_figma` 50k-char limit reproducibly.
