---
"@db-ux/agent-cli": patch
---

fix: resolve `Heading` from Core Components, one set per level

`Heading` left Core Lab. The registry pointed at the retired Core Lab set
`🧪 Heading (Concept)` (key `016cad8991…`), and `importComponentSetByKeyAsync` reports it as
"not found" — so every screen render died on its first heading. The stale key was invisible
until then: existing instances in the catalog file still reference it and still render, so
nothing looked wrong on canvas, and a probe of all 22 Core Lab keys shows this is the ONLY
entry affected (the other 21, `Text`/`Container`/`Grid`/`Pagination`/`ProgressBar` included,
resolve unchanged).

Core Components publishes the Heading as ONE COMPONENT SET PER LEVEL (`Heading H1 (Beta)` …
`Heading H6 (Beta)`), so the plan's `as` now selects the SET via `resolveKey` instead of a
variant axis, and the entry moved from `conceptComponents` to `components`. Each level's
DEFAULT variant already carries that level's size (h1→xl, h2→lg, h3→md, h4→sm, h5→xs, h6→2xs),
which reproduces the former "default mapping" — so `Size` stays untouched. The axes were
renamed too: `Font Weight` kept its name, `Text Align` became `Alignment` with
`(Def) Start | Center | End`, so a plan's `align: left|center|right` is mapped through
`HEADING_ALIGN_LABELS`; without that the axis lookup silently missed and headings stayed
start-aligned. Because Heading is a Core component again, it no longer needs the
`concept_components` opt-in — only `Body`, `Grid` and `Container` remain Core Lab baseline.

Caveat: `components.json` is regenerated in full from the Knowledge Database and `setKey` /
`figmaSets` are not on its preserved allowlist, so this fix is an interim measure. The new
Heading structure has to land in the Knowledge Database, otherwise the next `build-from-kb`
run drops it and the render breaks again in exactly the same way.
