---
"@db-ux/agent-cli": patch
---

fix: table column grid, centered pagination, weak filter tags and the search icon

Four defects found by comparing a generated dashboard against the canonical catalog blocks
(`1670:9227` Table, `1799:3643` Filter Tags, `1670:9244` Filterbar). Each is fixed where it can be
prevented, and each has a measured or structural counterpart so it cannot silently return.

**1. A table header row that did not sit over its columns.** In the canonical block every cell of
every row — the leading `Checkbox` cell included — is one equal FILL column (5 × 200px). Our
`Checkbox` hugged instead, so it kept its LABEL width, and since the header label ("Auswahl") is much
shorter than a row label ("ICE 101 Hamburg–Berlin"), the header grid and the row grid drifted apart
by the difference and every column behind it by a different amount. New `rowCellFillIndices` fills
every cell of a DATA ROW (a left-packed `ContainerHorizontal` with two or more text cells), so the
header and the rows share one column grid regardless of what the plan set; `hugWidth: true` opts a
single cell out. `dashboard.table-header-row` / `dashboard.table-row` state the intent too
(`fillWidth: true` on the checkbox). New audit rule `table-columns-misaligned` MEASURES the cell left
edges of the rows inside one card and reports the worst-drifting column, so the defect is caught
whatever produced it.

**2. Pagination rendered flush left despite `align: "center"`.** The runtime drove placement through
the `🎨 Position` VARIANT, but that only moves the items INSIDE an already full-width strip — and the
pagination HUGS its item strip, exactly as the reference block ships it. So the variant had nothing
to act on. Placement is now a CROSS-AXIS alignment of that one child in its column (`layoutAlign`,
falling back to the column's `counterAxisAlignItems` because some instance children silently ignore
`layoutAlign` — the write neither throws nor sticks), which is how the reference block centers it.

**3. Filter tags were `strong`.** They report the current filter state and must not compete with the
page actions; a strong tag row reads like a set of buttons. `dashboard.filter-tags` now uses
`emphasis: "weak"`, matching the updated catalog block, and the rule is stated in
`template.json` and the pattern's `whenToUse`.

**4. The search field had no magnifier.** Two causes, both fixed:

- `applyProps` passed VARIANT values through `String(val)`, so `{ "Show Icon Leading": true }` became
  `"true"` while the component's label is `"True"`. `setProperties` rejected the whole batch and the
  silent catch dropped every other prop with it. VARIANT values now resolve through
  `resolveVariantLabel` (booleans → `True`/`False`, loose casing → the component's own option), which
  also fixes any other variant written via `applyProps`.
- Even switched on, the slot would have shipped the unresolved `<Icon>` placeholder. `setButtonIcon`
  is now `setComponentIcon` and works for ANY component with an icon slot — it handles the toggle as
  a BOOLEAN (Button) or a VARIANT (form fields) — and `iconLeading`/`iconTrailing` became first-class
  fields on every registered component, not just Button. `dashboard.filterbar` uses
  `iconLeading: "magnifying_glass"` instead of the `applyProps` toggle.

Centered pagination is now the runtime DEFAULT rather than something the plan has to remember;
`align: "start"` / `"end"` are explicit opt-outs.

**New CI guard: the committed runtime must match `src/`.** The unit tests load the BUILT bundle and
Figma is bootstrapped from the generated `bootstrap/` snippets, so an edit to `assets/src/` that was
never rebuilt passed every test while the fix never reached a rendered screen. `build-runtime.cjs
--check` (`pnpm --filter @db-ux/agent-cli run runtime:check`, wired into `01-validate.yml` next to
the registry contract check) runs the identical pipeline, writes nothing, and fails listing every
stale or leftover generated file. All 14 generated files go through one `emit()` layer, and the
bootstrap snippets are compared against the FRESHLY built bundle rather than whatever is on disk —
otherwise a stale pair would look internally consistent.

**Deterministic enforcement**, so none of this depends on the plan getting it right:

- `content-overflow` — the CATCH-ALL for this whole bug class. Every sizing defect so far ended the
  same way: a layout box too small for its content, which is then painted over its neighbours. So
  instead of only naming causes, the symptom is MEASURED — does a visible in-flow child stick out of
  its auto-layout parent? Scoped to the layout nodes the runtime owns (Slots, Container/Grid/Card/
  Section instances, screen frames), because a library component's internals legitimately overflow.
  Verified against the repaired screen: 241 nodes checked, zero false positives.
- `table-columns-misaligned` — measures the cell left edges of the rows inside one card.
- `filter-tag-emphasis` — a removable Tag on strong emphasis.
- `empty-grid-cell` — a VISIBLE empty grid cell (the magenta placeholder).

Rules mirrored in `SKILL.md` (mandatory rules list), `dashboard.md` (§6a column grid + centered
pagination), the dashboard `template.json` rule list, `blocks.json` `_meta.columnModel` and the PLAN
SCHEMA. Covered by unit tests against the built runtime (`test/db-ux-designer-powers/figma-runtime-charts.spec.ts`, 41
cases), including a regression test that a filter-tag row is NOT treated as a data row, a measured
column-drift case, and `applyProps` variant resolution with a mock that reproduces Figma's
batch-rejection behaviour.

Runtime rebuilt (sha `b239902a5900`, 9 chunks, last chunk 6 736 chars — bootstrap counts in
`SKILL.md`/`POWER.md` updated). The target Figma file re-bootstraps lazily on the next real render,
per the skill's cost rule.
