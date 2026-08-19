---
"@db-ux/agent-cli": patch
---

fix: seat every rendered bar graph on one baseline at the floor of its panel

A generated dashboard shipped a bar chart whose bars were top-aligned with staggered bottom edges,
and once bottom-aligned the whole block still floated under the panel title with dead space beneath
it. Both are fixed at the layer that can prevent them, not in the rendered frame.

**Cause.** `buildContainer` calls `hugVertical`, so a chart row and its columns always hug their
content — while a bento card is STRETCHED to the tallest panel of its row by the equal-heights
pass. The graph therefore keeps its content height inside a taller card. On top of that, the
`fillHeight` branches of `ContainerHorizontal`/`ContainerVertical` overwrote the slot alignment with
`CENTER`, so the catalog's `align: "bottom-left"` / `"bottom-center"` was discarded exactly when the
block was told to fill the height. No plan could express a correct chart, which is why earlier
attempts resorted to per-column `paddingTop` offsets.

**Fixes.**

- `fillHeight` now respects an explicit `align`: a bottom-aligned row/column stays bottom-aligned
  (`parseAlign`), and only an align-less container falls back to `CENTER`.
- New `anchorChartsToCardBottom` pass runs after every `renderPlan` and `applyEdits`: it
  bottom-aligns each chart column and the row, then grows the block outside-in into the height its
  card actually got (a child can only FILL once its parent has a height). It is skipped where it
  would be wrong — content following the graph inside the card, or a card that hugs — and every
  write is guarded, so a chart that cannot grow simply keeps its natural height.
- `dashboard.chart-bar-row` / `dashboard.chart-bar-column` carry `fillHeight: true`, so the plan
  states the intent too instead of relying on the repair pass.

Deterministic enforcement in `auditTree`, so neither defect can silently ship again:
`chart-baseline` (bar bottoms more than 1px apart within a row) and `chart-not-bottom-anchored`
(more than 4px of dead space between the graph and the card floor, checked only when the graph is
the last content of that card). Rules mirrored in `dashboard.md`, the registry `_meta.chartModel`
and `SKILL.md`. Covered by unit tests against the built runtime
(`test/db-ux-designer-powers/figma-runtime-charts.spec.ts`).

Runtime rebuilt (sha `860c838c91b1`, now 9 chunks, last chunk 1 248 chars — bootstrap counts in
`SKILL.md`/`POWER.md` updated). The target Figma file re-bootstraps lazily on the next real render,
per the skill's cost rule.
