---
"@db-ux/agent-cli": minor
---

feat: add a process/wizard page-type registry to the db-ux-designer generate-figma-screen skill

Adds the `process/` registry catalog (`template.json`, `sections.json`, `blocks.json`,
`block-patterns.json`, `examples.json`) plus `context/general/layout-type-guidelines/process.md`,
so multi-step flows (booking, registration, checkout, onboarding) compose from a dedicated catalog
alongside `contentpage/`, `dashboard/` and `form/`. No runtime change is needed.

- A process is delivered as a SEQUENCE of static step frames — one frame per step + a final
  confirmation frame — never wired as a prototype (per SKILL.md → NO PROTOTYPING). Each step frame
  is a focused single column (contentWidth `Small (768)`): a progress indicator on top, a step
  header + content group, and a spread step-nav row (`Zurück` ghost / `Weiter` Brand).
- Step content REUSES the form blocks (fieldsets/fields, label-above, `Show Label`, `fillWidth`).
- Blocks: a composed `stepper` (Badge markers + labels; DONE = green check-icon badge (Successful),
  ACTIVE = an adaptive outlined number badge (default semantic, not blue) + strong bold label,
  UPCOMING = the same adaptive number badge with the whole marker disabled at `opacity: 0.4`; number
  badges use `Size: "Medium"` to match the check-icon badge's Small size, since icon-Small ≈
  text-Medium) and a `progress` alternative (Concept `ProgressBar` + "Schritt X von Y" caption), a
  `step-header`, a `step-nav`, a `summary-row` for review steps, and a centered `confirmation`
  block. There is no Stepper component in the Stable/Beta set, so the stepper is a guideline-authored
  composition of resolved components (Badge + Body), marked TEMPORARY — replace once a real Stepper
  ships. All parts resolve against the live component/token registries.
- Spacing: a process inherits R from its product (content/website → `lg`, application/dashboard →
  `md`, dense data app → `sm`) — the same product-R model as forms — with a per-product resolution
  table; fragments are written at the `md` reference.
- Wires `process/` into the SKILL asset manifest, Phase 2 page-type detection, the
  layout-type-guidelines README and POWER.md.

Adds a node-level `opacity` (0..1) plan field on containers (`src/40-layout-builders.js`) so a
"disabled" look (e.g. an upcoming stepper step at `opacity: 0.4`) is expressible; applied after the
internal wash-out reset, it dims the container and its children.

Also hardens the runtime + skill for COST DISCIPLINE (fewer / cheaper `use_figma` calls; runtime
rebuilt — sha `57fe4f6a225a`):

- **Safe, idempotent `replace`** (`src/50-plan-renderer.js`): `renderPlan({ replace: true })` now
  removes ONLY the frame whose name matches `screen` (a re-render replaces its own twin in place);
  if none matches it places a NEW frame to the right — it NEVER wipes other frames. This removes a
  destructive footgun (previously a non-matching name deleted ALL frames on the page, so batch
  renders kept only the last frame). A new `replaceAll: true` covers the rare deliberate page wipe.
  You can now pass `replace: true` on every call of a multi-frame batch, first render or re-render.
- **SKILL cost discipline**: small visual tweaks (recolor, icon swap, variant/label change,
  visibility, gap) MUST use `applyEdits` in place, never a `renderPlan` re-render (which re-sends
  the whole plan and regenerates node ids). Added micro-edit recipes — including icon/prop swap via
  a `custom` op + `api.applyProps` (there is no direct `applyProps` edit op) — and a one-call
  component-introspection recipe (`importComponentSetByKeyAsync` + `componentPropertyDefinitions`;
  `importComponentByKeyAsync` throws for figmaSets keys). Multi-frame batch guidance simplified to
  "pass `replace: true` on every call".
