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
  title) — the canonical DB dashboards are exactly `[Header, Section]`. Every row below lives
  INSIDE that one Section; a second Section turns the bento into a content-page stack, which the
  audit rejects as `dashboard-multi-section` (set `plan.pageType = "dashboard"` so it runs). Its
  children — stacked in one `ContainerVertical` at gap `md` — are:
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
  `50-50` (equal peers), `(Def) 33-33-33` (three equal peers). Grid gap `md`.
- The runtime auto-equalizes panel heights within a row, so the bento aligns.
- Don't force everything full-width; heterogeneous panels sit side by side.

## 6. Data-first; charts are secondary

- A dashboard is carried by **KPIs + dense row lists** (the table substitute — there is no Table
  component). Lead with those.
- **Charts are optional and secondary.** A chart Image lives in a self-titled panel and belongs in
  the NARROW column (e.g. the `33` side) so it stays compact. A big 16:9 image filling a wide card
  reads like content-page media.
- **A graph ALWAYS spans the full width available to it.** A `ChartBar` bar row fills the panel and
  each bar column fills its share, so the bars distribute across the whole card — only the bar
  HEIGHT encodes the value. Fixed bar widths leave the panel half empty and read as a broken
  visual; the audit reports `chart-fixed-width`.
- **A graph sits on ONE baseline at the FLOOR of its panel.** Bars are compared by their bottom
  edge, so the row is `align: "bottom-left"`, each column `align: "bottom-center"`, and both carry
  `fillHeight: true` — the block then grows into the height the card actually got (a bento card is
  stretched to the tallest panel of its row) instead of floating under the title with dead space
  below. Never fake the baseline with per-column `paddingTop`. The audit reports `chart-baseline`
  for staggered bar bottoms and `chart-not-bottom-anchored` for empty space under the graph; the
  runtime re-seats every graph after each render and edit, so a compliant chart needs no manual
  nudging.
- **`fillHeight` cannot CREATE height.** It only ever distributes height that a parent already has.
  Inside a panel that hugs its content there is nothing to grow into, so the runtime keeps the block
  hugging — a graph reaches the card floor there anyway, because the card is exactly as tall as its
  content. Do NOT try to force extra height by stretching more levels: a main-axis fill inside a
  hugging parent collapses the box to ~0px and the bars are then painted over the panel title (the
  audit reports `collapsed-fill-height`). If a panel needs to be taller, that comes from its ROW
  (the equal-heights pass of a bento grid), never from the block inside it.
- **Image-ratio caveat:** the image system only offers `1:1 / 3:4 / 16:9` (no flat sparkline), so a
  chart Image is inherently tall. When a compact view matters, use a **data-list** panel (rows of
  label + value + trend Badge) instead of a chart.

## 6a. Tables: a column-aligned Grid, not a Table component

> **Core Lab has a `List` component** (Concept, plus the sub-components List ITEM / TITLE /
> DIVIDER / TEASERITEM / VERTICAL ITEM). It is registered as the plan node `List`, but note it is a
> plain COMPONENT without variants and its rows are separate sub-component sets, so a row list built
> from it is a COMPOSITE — the container patterns below remain the supported way to build a data
> row today. Prefer `List` once a composite block for it exists; do not treat "no Table component"
> as "no list component either".

There is **no Table component** in the Stable/Beta set (only a Concept). Express a genuinely
multi-column table (3–6 columns, several rows) as a **`table-panel`**: a self-titled Card whose
content is a header-label Grid + `Divider`, then data rows that are each a `Grid` using the **same
`gridLayout`** (e.g. `25-25-25-25`) so every cell lands on the same column edge. Cells are the
smallest fitting element — `Body` for text, a `Badge` (tinted via `semantic`) for a status cell, a
`Link` for a row action; numeric/value columns are right-aligned (`align: "right"`). Rows are
separated by `Divider`s. Do NOT fake a table from free-form frames, and prefer `list-panel` for
≤2-value records — reserve the table for real multi-column data.

**Every cell of every row is one equal FILL column — the header row and the leading `Checkbox` cell
included.** A table reads as a table only while a value sits under its own header, and a single
hugging cell shifts everything behind it by its own label length: a `Checkbox` labelled "Auswahl"
in the header and "ICE 101 Hamburg–Berlin" in the row puts the two column grids ~110px apart. So the
header row carries exactly as many cells as the data rows, and each cell fills. The runtime enforces
it for any row with two or more text cells; the audit reports `table-columns-misaligned` when the
left edges drift. The **pagination** below the panel is centered (`align: "center"`) — it hugs its
item strip and is centered on its column's cross axis, as in the reference block.

Leaving a Grid column EMPTY is legitimate — it is how a row keeps its content at two thirds of the
width, and how the short last row of a wrapped grid stays aligned with the rows above. The runtime
hides those leftover cells, because an empty component slot is not invisible on canvas: Figma paints
it as a magenta placeholder box that would ship in the render.

## 6b. Toolbars & the view-switch

A **`toolbar`** (data-toolbar) controls the region below it: a leading search `Input` (fills), an
optional scope `Select`, a **view-switch**, and an optional trailing primary action. Same rules as
the filter bar — form fields use the **floating-label** variant so their height matches the button
and tags. Place a toolbar as the lead of the panel it controls (usually a `table-panel`), never on
its own.

The view-switch is the real **`SegmentedButton`** (Core Lab, Concept — needs the
`concept_components` opt-in), axes `Size` and `Variant: (Def) White | Grey`, its items in the
`Children` slot. This guideline previously described a segmented control assembled from a hug pair
of `Tag`s with `behavior: "interactive-toggle"` — that was a workaround written while
`conceptComponents` was hand-curated and the component looked unavailable. It is not: use the
component. A Tag pair remains correct only for a filter-style toggle that is NOT a view switch. Use
full **Tabs** (§6c) when the views deserve named tabs.

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
panel it relates to. Never render a lone Notification as its own bare section. Its title and body
go into the plan's FIELD MAP, `text: { headline: …, description: … }` — never as top-level
`headline`/`text` fields, and never as a `text` string. See `SKILL.md` → _Text fields must be named
after the component's own TEXT property_ for the canonical form; that is the single normative place
for field shape. And note: a single library component on its own is NOT a "block/module" — modules
are composed units.

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

## 10. Spacing (R = sm)

Dashboards are denser than content pages (which use R = lg). The ladder is MEASURED from the
canonical catalog cards (`1670:9253`, `1670:9239`, `1710:3211`): a `Card` with spacing `small`
has **12px padding and a 12px content gap**, and cards sit **16px** apart. So R = `sm`:

| Step | Token | Used for                                                                              |
| ---- | ----- | ------------------------------------------------------------------------------------- |
| R    | `sm`  | elements in a card; matches the `small` card's 12px padding                           |
| R−1  | `xs`  | grouped elements that belong together (label+badge, panel title+meta, row title+meta) |
| R−2  | `2xs` | tight inline pairs / same-kind micro-groups (delta icon+value, value+trend badge)     |
| R+1  | `md`  | panels & rows to each other (grid gaps, the stacked rows inside the Section)          |

**The content gap must never exceed the card's own padding.** A 16px (`md`) gap inside a 12px
(`small`) card pushes the rows further apart than they sit from the card edge, so the card reads
as broken apart — the audit reports `gap-exceeds-card-padding`. Pair them: `small` (12px) with
gap `sm`, `medium` (16px) with gap `md`. A full-bleed panel (`spacing: "none"`) is the one
exception: it delegates padding to its rows so dividers reach both edges.

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
