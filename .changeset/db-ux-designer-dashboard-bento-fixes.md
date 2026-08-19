---
"@db-ux/agent-cli": patch
---

fix: dashboard bento composition, icon-only buttons, chart width and card gaps

Four defects found in a generated dashboard, each fixed at the layer that can actually prevent it
rather than in the rendered frame. All values are MEASURED from the canonical catalog
(`1670:9253`, `1670:9239`, `1710:3211`) and the reference dashboard (page `1204:425`), not chosen.

**1. A dashboard is ONE Section (bento), not a stack of sections.** The reference dashboards are
exactly `[Header, Section]`, and `layout-type-guidelines/dashboard.md` already said so — but
`dashboard/template.json` defined four section slots and every `level: "section"` pattern carried
its own `{ type: "Section" }` wrapper, so the registry forced the wrong composition. The dashboard
patterns are now ROWS (`page-header`, `kpi-row`, `goal-row`, `controls`, `table`, `list-panel`,
`charts`, `bento-row`) that stack inside a single Section at gap `md`; `template.json` gained
`pageTypeSpecific.frame` with the skeleton. `dashboard.table` lost its `h2` section title and is a
self-titled panel (new `dashboard.panel-title-row` for the full-bleed card).

**2. Icon-only buttons rendered an empty ✕ box.** An Icon Button has no `Show Icon Leading`
boolean and a single `🔄 Icon <size>` swap slot, but `setButtonIcon` only looked for a slot whose
property reference matched `icon <side>`. It found nothing, skipped the swap, and shipped the
library's unresolved `<Icon>` placeholder. It now falls back to the side-less icon slot (excluding
leading/trailing so a text button can never match the wrong side).

**3. Graphs did not use the full width.** `dashboard.chart-bar-column` pinned bars to 48px and
hugged. Bars are now `fillWidth` inside fill-width columns via a new `dashboard.chart-bar-row`, so
only the bar HEIGHT encodes the value.

**4. Card content gap exceeded the card padding.** The registry paired `Card spacing: "small"`
(12px padding) with a `md` (16px) content gap, so rows sat further apart than from the card edge.
The canonical cards use 12px padding WITH a 12px gap and 16px between cards, so the dashboard
spacing ladder is corrected to R = `sm` (was documented as R = `md`): R−1 `xs`, R−2 `2xs`, R+1
`md`. All dashboard blocks updated.

Deterministic enforcement in `auditTree`, so none of the four can silently ship again:
`dashboard-multi-section` (needs the new `plan.pageType`, now passed by `renderPlan` and
documented in the PLAN SCHEMA), `unresolved-icon` (any visible `<Icon>` placeholder),
`chart-fixed-width` (a ChartBar left at a FIXED width) and `gap-exceeds-card-padding` (content gap

> the enclosing card's padding, with full-bleed `spacing: "none"` cards exempt since they delegate
> padding to their rows). Rules mirrored in `dashboard.md`, `screen-guidelines.md` (icon-only button
> must carry a verified icon) and `SKILL.md`.

Runtime rebuilt (sha `ef95a7da3150`, last chunk 4 997 chars). The target Figma file
re-bootstraps lazily on the next real render, per the skill's cost rule.
