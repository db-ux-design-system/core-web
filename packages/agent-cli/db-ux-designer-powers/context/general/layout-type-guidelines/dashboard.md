# Dashboard — Design Principles

Consolidated principles for composing an operational **dashboard**. These are the design intent;
the machine-readable enforcement (patterns, blocks, spacing tokens, component keys) lives in
`skills/generate-figma-screen/assets/registries/dashboard/*.json`. Keep both in sync. Always-on
rules still apply: `../layout-guidelines.md` (spacing/grouping) and
`../../design-system/screen-guidelines.md` (visual rules).

## 1. Model: bento grid, not stacked sections

A dashboard is a **bento grid**, NOT a vertical stack of full-width titled zebra sections (that
reads like a content page). It is: a header row + a KPI row + a GRID of self-titled panels on ONE
background — matching reference product dashboards (light canvas, white cards side by side).

## 2. Structure

- **Header shell** (DB `Header`) first — logo = home, no "Startseite" nav item.
- **One working `Section`** (canvas, `contentWidth: "(Def) Full"`, `spacing: "small"`, NO section
  title), whose children — stacked at gap `lg` — are:
    1. **Header row** — page title (`h1`) + optional one-line description on the left (fills),
       primary actions on the right (hug). Fill-left / hug-right, NOT a spread row (a Heading does
       not hug).
    2. **Inline alert** (optional) — an operational `Notification` directly under the header.
    3. **KPI row** — a full-width Grid of 3–6 equal stat cards (the scannable headline metrics).
    4. **Bento rows** — 1–4 Grid rows, each split into 2–3 columns.

## 3. Single background, no zebra

The whole work area sits on ONE `color.background.canvas`. Panels are elevation-1 Cards. Do NOT
alternate surface/canvas per block.

## 4. Panels own their title

Each panel is a self-titled elevation-1 Card: a header group (`h4` + optional meta) above its
content (a chart Image, a row list, …). Do NOT wrap panels in per-block `h2` Sections. Heading
hierarchy: page `h1` (header) → panel `h4` → inner `h5`.

## 5. Bento rows: column splits

- Pick the split by panel importance: `66-33` / `33-66` (wide primary + narrow secondary),
  `50-50` (equal peers), `(Def) 33-33-33` (three equal peers). Grid gap `lg`.
- The runtime auto-equalizes panel heights within a row, so the bento aligns.
- Don't force everything full-width; heterogeneous panels sit side by side.

## 6. Data-first; charts are secondary

- A dashboard is carried by **KPIs + dense row lists** (the table substitute — there is no Table
  component). Lead with those.
- **Charts are optional and secondary.** A chart Image lives in a self-titled panel and belongs in
  the NARROW column (e.g. the `33` side) so it stays compact. A big 16:9 image filling a wide card
  reads like content-page media.
- **Image-ratio caveat:** the image system only offers `1:1 / 3:4 / 16:9` (no flat sparkline), so a
  chart Image is inherently tall. When a compact view matters, use a **data-list** panel (rows of
  label + value + trend Badge) instead of a chart.

## 6a. Tables: a column-aligned Grid, not a Table component

There is **no Table component** in the Stable/Beta set (only a Concept). Express a genuinely
multi-column table (3–6 columns, several rows) as a **`table-panel`**: a self-titled Card whose
content is a header-label Grid + `Divider`, then data rows that are each a `Grid` using the **same
`gridLayout`** (e.g. `25-25-25-25`) so every cell lands on the same column edge. Cells are the
smallest fitting element — `Body` for text, a `Badge` (tinted via `semantic`) for a status cell, a
`Link` for a row action; numeric/value columns are right-aligned (`align: "right"`). Rows are
separated by `Divider`s. Do NOT fake a table from free-form frames, and prefer `list-panel` for
≤2-value records — reserve the table for real multi-column data.

## 6b. Toolbars & the view-switch

A **`toolbar`** (data-toolbar) controls the region below it: a leading search `Input` (fills), an
optional scope `Select`, a **view-switch**, and an optional trailing primary action. Same rules as
the filter bar — form fields use the **floating-label** variant so their height matches the button
and tags. The view-switch is a **segmented control** built from a hug pair of `Tag`s with
`behavior: "interactive-toggle"` — active view = `emphasis: "strong"` + `applyProps { "Checked":
"True" }`, inactive = `emphasis: "weak"` + `Checked` False. Use the Tag toolbar for a tight 2-way
switch; use full **Tabs** (§6c) when the views deserve named tabs. Place a toolbar as the lead of
the panel it controls (usually a `table-panel`), never on its own.

## 6c. Tabs: switch views inside one panel

For 2–4 equally-important VIEWS in one area (e.g. Übersicht / Verspätungen / Auslastung), use the
real DB **Tabs (Beta)** via a `tab-panel` (a Card wrapping the `Tabs` node). The tab strip is the
section switcher and owns its own header, so no extra `h4` is needed. The runtime `Tabs` node takes
`tabs: [{ label, active? }]` (labels + the active tab, which draws the red underline) and `content`
(the active Tab Panel body — a list / chart / breakdown). Never fake tabs from Buttons or Tags — it
is a real component. Choose Tabs over the Tag toolbar when the views are distinct enough to name.

## 6d. Progress / goal KPIs

For a metric best read against a **target / completion** (rollout %, capacity, SLA attainment), use
a `goal-card`: Label + big Value + a linear **ProgressBar** + a target caption. The bar is the DB
LoadingIndicator **BAR Progress** (Concept 🧪 — requires Concept opt-in). Its `Value` stops
(`25% / 50% / 75%`) are Figma **samples** of an arbitrary progress value — pick the stop nearest the
real percentage and phrase the Value + caption to match, so the bar and the number agree. CIRCLE
(gauge) progress variants exist too and can be driven the same way when a radial reading fits.

## 7. Alerts are inline elements, not sections

An operational `Notification` is INLINE — place it under the header row, or as the lead of the
panel it relates to. Never render a lone Notification as its own bare section. Its text props are
`headline` (title) and `text` (body) — NOT `description` (which does not map). And note: a single
library component on its own is NOT a "block/module" — modules are composed units.

## 8. Action / filter rows: floating-label fields

In a filter/action row (fields beside a button), Select/Input use the **floating-label** variant
(`label: "floating"`), not label-above. Label-above stacks label + control to ~64px and misaligns
with the button; a floating-label field is a single ~40–48px control whose height matches the
button (row vertically centered via `align: "left"`). Use a `ContainerHorizontal` (fields fill,
button hugs), never a Grid.

## 9. Action hierarchy

≤1 Brand action per page (the header's primary, top-right, optionally + an outlined secondary).
Panel/row actions are Links (or a ghost secondary), never a Brand button per card/row. No closing
marketing CTA (that is a content-page pattern).

## 10. Spacing (R = md)

Dashboards are denser than content pages (which use R = lg). Ladder derived from R = `md`:

| Step | Token | Used for                                                                                         |
| ---- | ----- | ------------------------------------------------------------------------------------------------ |
| R    | `md`  | elements in a block; card inner padding; header→content within a panel                           |
| R−1  | `sm`  | grouped elements that belong together (label+value+delta, panel title+meta, row title+meta)      |
| R−2  | `xs`  | tight inline pairs / same-kind micro-groups (delta icon+value, value+trend badge, status+action) |
| R+1  | `lg`  | panels & rows to each other (grid gaps, stacked rows)                                            |
| R+2  | `xl`  | a titled section header → its content (rarely needed in bento)                                   |

Never tighter than `xs` inside a card (a grouped metric is `sm`, never `2xs`).

## 11. Color / emphasis

- `color.text.strong` (emphasis-100) is the default for headings AND metric values.
- A stat label is `Body` Small + Bold + `color.text.muted`; meta/caption = `color.text.muted` (80).
- A delta/trend value is `Body` Small + `color.text.muted` tinted via `semantic`
  (Successful = green, Critical = red).
- A **trend Icon** must carry `fills: "color.icon"` (emphasis-70) so its `semantic` mode actually
  shows the hue — an icon left at emphasis-100 stays near-black in every mode.

## 12. Delivering blocks vs the assembled screen

- "**module** / **block**" → render each as its OWN header-less frame (`module: true`), sized to the
  block. One render per module → separate frames.
- "**screen** / **example** / **dashboard**" → one full frame WITH the Header shell (the assembled
  bento above).

See `skills/generate-figma-screen/SKILL.md` (Phase 1: module vs screen) for the render contract.
