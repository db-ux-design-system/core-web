---
"@db-ux/agent-cli": minor
---

feat: add a dashboard page-type registry to the db-ux-designer generate-figma-screen skill

Adds the `dashboard/` registry catalog (`template.json`, `sections.json`, `blocks.json`,
`block-patterns.json`, `examples.json`) that the `generate-figma-screen` SKILL already
declared but was missing, so operational/KPI screens now compose from a dedicated catalog
alongside `contentpage/`:

- Dense, scannable spacing model (R = md) with full-width sections and the `small` section
  spacing variant.
- Stat-card KPI grid, chart panels, status/activity list (the table substitute — no Table
  component exists) and an alert banner, all guideline-compliant and resolving against the
  live component/token/icon registries.
- Aligns the SKILL asset manifest and POWER.md to the shared five-file per-page-type layout
  (`examples.json` naming for both page types).

Also hardens the render runtime and corrects the dashboard spacing derivation:

- Removes the concrete KPI composition example baked into the runtime's PLAN SCHEMA doc
  (`src/70-edit-engine.js`) and the composition fragment in the `applyEdits` usage doc
  (`src/60-compliance-audit.js`). The runtime now documents only the schema contract; concrete
  block/section structure and spacing live solely in the page-type registries, so a stale
  in-runtime example can no longer drift or mislead. Rebuild is byte-identical (comments are
  stripped by esbuild) — no bootstrap/runtime artifact change.
- Fixes the stat-card / chart-card / status-row inner spacing from `2xs` (R−3, tighter than
  the ladder allows) to `sm` (R−1): a KPI's Label + Value + Delta is a grouped unit
  (Topline/Meta bound to the Headline), which the layout guidelines place at R−1. The tight
  delta icon+value inline pair stays `xs` (R−2). Registry prose updated to match.
- Icon tinting: the runtime's `Icon` renderer now binds the glyph fill to the emphasis-70
  token (`color.icon`) before applying the `semantic` mode — an icon left at the DB Theme
  default (emphasis-100) stays near-black in every mode, so `semantic` alone did nothing.
  `fills` overrides the token explicitly; `semantic` without `fills` auto-drops to `color.icon`
  so a tint is always visible (screen-guidelines.md → Farbe: "70 nur für Icons"). The dashboard
  stat-card trend icon now carries `fills: "color.icon"`.
- Dashboard composition made data-first (design review): the standalone `alert-banner` section
  is removed — a Notification is now an INLINE `dashboard.alert` element placed inside the
  content it relates to (under the header, or as a panel lead), never its own bare zebra section.
  Charts are demoted to a SECONDARY, compact panel with guidance that big 16:9 chart images read
  like content-page media (the image system has no flat sparkline ratio); a `data-list` /
  `list-panel` breakdown (label + value + trend Badge) is the media-free alternative.
- Consolidated design principles per layout type: adds `context/general/layout-type-guidelines/`
  (with `dashboard.md` + a README) capturing the dashboard learnings in one human-readable
  source of truth (bento model, data-first, alerts inline, floating-label action rows, spacing
  R=md, color/emphasis-70, module-vs-screen). The skill loads the matching `<pageType>.md` in
  Phase 2 alongside the registry; POWER.md and the dashboard `template.json` cross-reference it.
- Action/filter rows use FLOATING-label fields: in a filter bar (fields beside a button) Select/Input
  now use `label: "floating"` — a label-above field stacks to ~64px and misaligns with the button,
  whereas a floating-label field is a single ~48/40px control whose height matches the button in the
  row. Fixed in the `dashboard.filter-bar` block and documented in screen-guidelines.md
  (Komponentengrößen). Filter-Bar module re-rendered (Select 40px = Button 40px).
- A single library component is NOT a block/module: `dashboard.alert` is the raw DB `Notification`
  used INLINE (an element), so it is no longer showcased as a standalone module frame — modules
  are COMPOSED units. Also fixes the Notification body mapping: the body text prop is `text`, not
  `description` (which silently left the placeholder "Text"); registry + example updated to
  `text: { headline, text }`.
- SKILL: module-vs-screen output rule (Phase 1). When the user asks for "modules" / "blocks" /
  "a module", render each as its OWN standalone frame with `module: true` (no Header/shell, width
  sized to the block) — one `renderPlan` per module, separate frames placed side by side. A
  "screen" / "page" / "example" / "dashboard" gets the full Header shell. This stops a "blocks"
  request from being rendered as just another assembled example.
- Dashboard reworked to a BENTO GRID model (design review): a dashboard is no longer a vertical
  stack of full-width titled zebra sections (that reads like a content page) but a header row + a
  KPI row + a GRID of SELF-TITLED panels on ONE canvas background — matching reference dashboards.
  New patterns: `dashboard.header-row` (fill-left title/desc + hug-right actions), `dashboard.panel`
  (self-titled elevation-1 card, the bento building block), `dashboard.list-panel` /
  `dashboard.chart-panel`, and `dashboard.bento-row` (a Grid split 50-50 / 66-33 / 33-66 /
  33-33-33 whose cells hold panels; the runtime auto-equalizes panel heights per row). Cards own
  their h4 title (no per-panel h2 section, no zebra). template.json/sections.json restructured to
  header + kpis + bento; example + second page rebuilt as bento dashboards.
- Adds two more dashboard modules that need no new component and no runtime change:
  `dashboard.toolbar` (a data-toolbar: search `Input` + scope `Select` with floating labels + a
  view-switch built from `interactive-toggle` `Tag`s — the DB-native segmented control standing in
  for the missing Tabs component — + an optional Brand action) and `dashboard.table-panel` (the
  DB-native table: a self-titled Card whose header-label Grid and data-row Grids share the same
  `gridLayout` so cells align into columns, with `Badge` status cells, `Link` row actions,
  right-aligned numeric columns and `Divider`s between rows — instead of faking a table from
  frames). Both wired through `block-patterns.json` and `sections.json`, and captured in
  `context/general/layout-type-guidelines/dashboard.md` (§6a tables, §6b toolbars/view-switch).
- Adds first-class **Tabs (Beta)** support and a **progress** KPI, with a runtime change:
    - New runtime `Tabs` plan node + `buildTabs` builder (`src/40-layout-builders.js`,
      `src/50-plan-renderer.js`): drives the real DB Tabs (Beta) composite — `props`
      (orientation / tabItemWidth / alignment) pick the variant, `tabs:[{label,active?}]` set the
      Tab List's Tab Item labels + the active tab (cloning/removing Tab Items to match the count),
      and `content` fills the active Tab Panel. No faking from Buttons/Tags. `Tabs` is registered in
      `components.json` with its subcomponent keys; the runtime was rebuilt (sha `c1eef7e44ea5`) and
      the reference file re-bootstrapped.
    - `ProgressBar` registered in `components.json` (DB LoadingIndicator BAR Progress, Concept):
      rendered through the generic path, its `Value` stop (25/50/75%) set via
      `applyProps {"Value":"50%"}`. The stops are Figma SAMPLES of an arbitrary progress value, not a
      hard limit — pick the nearest stop and match the Value text (correcting the earlier assumption).
    - New dashboard modules built on these: `dashboard.tab-panel` (a Card wrapping Tabs for switching
      2–4 views inside one panel) and `dashboard.goal-card` (Label + Value + ProgressBar + target
      caption). Both wired through `block-patterns.json` / `sections.json`, documented in
      `dashboard.md` (§6c Tabs, §6d progress/goal), and rendered as module frames on the Blocks page.
    - `components.json` `unresolved.tabs` note removed (Tabs is now resolved as a Beta component).
