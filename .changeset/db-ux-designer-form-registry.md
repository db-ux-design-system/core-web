---
"@db-ux/agent-cli": minor
---

feat: add a form page-type registry to the db-ux-designer generate-figma-screen skill

Adds the `form/` registry catalog (`template.json`, `sections.json`, `blocks.json`,
`block-patterns.json`, `examples.json`) so data-entry screens compose from a dedicated catalog
alongside `contentpage/` and `dashboard/`. No new components and no runtime change are needed —
the full form kit (Input, Select, Textarea, Checkbox, Radio, Switch, Infotext, Notification,
Button, Link) already resolves against the live registries.

- New page type: a form is ONE narrow centered column (`contentWidth: "Small (768)"`) — a form
  title (h1) + a stack of titled fieldset groups (h2) + a closing action row — not zebra content
  sections and not a bento dashboard.
- Spacing: a form has NO fixed R — it INHERITS R from the product it lives in (content/website
  product → R = lg, application/dashboard product → R = md, dense data app → R = sm). The ladder is
  R-relative (fields = R; grouped bits = R−1; fieldset title-block → fields = R+1; fieldset ↔
  fieldset and section header → content = R+2) with a per-product resolution table; block fragments
  are written at the md reference and substituted per product. No new spacing tokens or runtime
  rebuild are needed — container gaps down to `2xs` already render via the container `Gap` variant.
- Label-ABOVE fields filling the column; two short peers may share a 50-50 field-row; required
  fields via `applyProps { "Show Required Asterisk": true }` with the convention stated once via an
  `Infotext`. Blocks encode the real component variant constraints (Textarea ships only
  `Label Above – Filled`; Switch only `trailing+small` / `leading+medium`).
- Action hierarchy: the submit is the single Brand action, cancel is `ghost`; errors/context are
  inline `Notification`s, never their own section.
- Consolidated design principles in `context/general/layout-type-guidelines/form.md`; the skill
  loads it in Phase 2 alongside the registry. Wires `form/` into the SKILL asset manifest,
  Phase 2 page-type detection, the layout-type-guidelines README and POWER.md.

Also hardens the render runtime (two generic fixes surfaced while building the form catalog; they
apply to every page type, and the runtime was rebuilt — sha `3a3d3a2eb0c7`):

- `applyProps` now matches a component property by its NAME PART (before the `#id` suffix),
  preferring an exact normalized match over a substring (`src/30-text-and-props.js`). Previously
  `"Label"` greedily matched `"Show Label"` (both contain "label"), so a DB form field's visible
  `✏️ Label` text was never set and the `👁️ Show Label` boolean was flipped off instead — the
  label was blank AND hidden. Form field blocks now also set `Show Label: true` explicitly.
- `Grid` now normalizes the `gridGap` token to the Grid's Gap VARIANT label (`md` → `(Def) md`)
  before selecting the variant (`src/50-plan-renderer.js`). Previously `gridGap:"md"` failed the
  `{Layout, Gap}` variant match and fell back to `children[0]` = the default 3-column
  `(Def) 33-33-33`, leaving an empty trailing slot rendered as a pink image placeholder. Any
  `50-50`/`66-33` grid with the default `md` gap was affected.
- Radio/Checkbox/Switch options in the form blocks set `fillWidth: true`: the `width: "full"`
  variant only sets the component's internal layout, so the instance still hugged (~84–115px) and
  wrapped its label character-by-character; `fillWidth` stretches the instance to the column.
