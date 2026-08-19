---
"@db-ux/agent-cli": patch
---

fix: never stretch a node into a hugging parent, and hide empty grid cells

A generated dashboard shipped three broken chart panels — the bars were painted straight across the
panel title and description — plus a magenta placeholder box where a third grid column had been left
empty. Both are fixed in the render runtime, not in the rendered frame.

**Cause 1 — a fill that collapses instead of grows.** Figma does NOT reject
`layoutSizingVertical = "FILL"` on the MAIN axis of a HUGGING parent: it hands the child no height at
all while the parent keeps hugging its remaining children. The child shrinks to ~1px and its content
is painted OUTSIDE that box, over whatever sits above it. Because every fill/hug write in the runtime
is wrapped in `try/catch`, the damage was invisible at write time. `anchorChartsToCardBottom` walked
from the chart row up to the enclosing Card and stretched the whole chain unconditionally, so a chart
inside a HUGGING card (the normal case — two chart cards of equal height stretch nobody) collapsed
end to end.

**Cause 2 — every column stretched, so the row had no height left.** Vertical is a bar row's CROSS
axis, where Figma does allow a stretch under a hugging parent. But once EVERY column stretches, no
child contributes an intrinsic height any more, the row hugs to a meaningless leftover value, and the
tallest bars spill out of it.

**Fixes.**

- `fillHeight` is now guarded by a new `canFillVertical` predicate and returns whether the stretch
  happened: main-axis fills require a parent that already owns a height (`primaryAxisSizingMode`
  FIXED), cross-axis fills stay allowed. A `fillHeight` request is therefore a request, not a
  command — asked for where it cannot work, the node keeps hugging instead of collapsing. Both are
  exposed on `EDIT_API` so a fallback edit can check before it writes.
- `anchorChartsToCardBottom` skips the growth chain entirely for a card that HUGS (there is no spare
  height to grow into, and the chart reaches the card floor anyway), stops the outside-in chain at
  the first link that cannot stretch, and only stretches chart columns when the row itself owns a
  height. Baseline alignment (row `MAX` cross-axis, column `MAX` main-axis) still runs in every case.
- `fillGridRow` hides unused trailing cells. An empty component slot is not invisible — Figma paints
  it as a magenta placeholder — while the column geometry has to stay so deliberate "two thirds" rows
  and the short last row of a wrapped grid remain aligned with the rows above.

**Same class of defect on the horizontal axis: a label that filled instead of hugging.** The Concept
Heading/Text default to FILL width. In a column that is right; in a ROW the text eats the remaining
space and shoves every following sibling to the far right — an "Aktive Filter" label rendered 512px
wide with its Tags floating half a panel away instead of sitting one gap behind it, against the
Gesetz der Nähe. `ContainerHorizontal` now hugs a LEADING text child via the new
`rowTextHugIndices`. The rule is deliberately narrow, because a filling text in a row is often
exactly right: `spread` rows (SPACE_BETWEEN) are never touched, since there the leading block grows
so the trailing one sits flush right; a DATA ROW is not touched either, because the equal FILL widths
of its text cells (`dashboard.text-cell` inside `dashboard.list-row`) ARE the column alignment — so
the rule only applies when every OTHER child of the row hugs. A lone text keeps filling so its own
`align` still works, and `fillWidth: true` opts out explicitly.

Deterministic enforcement in `auditTree`: `collapsed-fill-height` reports any node that fills the
height of a hugging vertical parent, so the defect cannot silently return through `applyEdits` or the
`api` fallback. Rules mirrored in `dashboard.md` (`fillHeight` cannot CREATE height; empty grid cells
are legitimate and get hidden), `layout-guidelines.md` (text in a left-packed row hugs) and the PLAN
SCHEMA. Covered by unit tests against the built runtime (`test/db-ux-designer-powers/figma-runtime-charts.spec.ts`), whose
node mock now models Figma's own sizing coupling so a fill chain cannot "pass" in the test while
collapsing on canvas.

Runtime rebuilt (sha `54e881446906`, 9 chunks, last chunk 3 087 chars — bootstrap counts in
`SKILL.md`/`POWER.md` updated). The target Figma file re-bootstraps lazily on the next real render,
per the skill's cost rule.
