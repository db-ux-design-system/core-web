---
"@db-ux/agent-cli": patch
---

fix: enforce list/table, stepper and panel contracts in the designer power

Closes a class of defects that shipped with a GREEN audit, because the rules existed as prose but
nothing compared the rendered frame — or the captured block — against the catalog template.

Registries:

- `process.stepper` and `process.navigation` regained the edge-to-edge distribution of their
  templates (`spread: true`; measured at 0/310/619/940 and 0/941 of 1024). Both had been captured
  as `align: "left"`, so the registered block contradicted the audit rule demanding spread.
- New `process.stepper-step-active` (`pen` icon) and numbered pending steps, completing the three
  item states the template defines; `_meta.stateModel` documents them.
- `dashboard.list-row` / `list-row-stacked` no longer carry their own `padding` — they sit in a
  padded Card, which produced a doubled indentation. Row padding stays only on the rows of the
  full-bleed table card.
- `dashboard.badge-cell` right-aligns, so a status Badge can no longer float mid-row.

Audit:

- Row detection no longer depends on `layoutMode` alone. That property is not reliably readable on
  the instance-internal SLOT nodes rows live in, so checks gated on it returned early and reported
  nothing; geometry is now an additional path.
- New `table-header-arity`: the previous drift check only compared rows that already had the same
  cell count, so a 5-column header above 3-cell data rows was never compared and two declared
  columns stayed empty.
- New `nested-card`: a Card wrapped around Cards doubles border and elevation.
- Stepper detection no longer requires every item to be an icon+label pair — per the template only
  the done and active steps carry an icon, so the old condition could essentially never match.

Runtime:

- `Header` raises the Navigation LIST `Amount` variant to the requested item count and HARD STOPS
  instead of silently dropping entries. A lost nav item makes a page unreachable while the frame
  still looks correct.
- `anchorChartsToCardBottom` no longer trusts that writing `fillHeight` along the chain worked.
  Stretching is a chain of preconditions and any link may refuse — `canFillVertical` correctly
  declines the main axis of a hugging parent, and a component's internal content SLOT can be that
  blocker even though the card above it owns a fixed height. The pass now escalates once (make the
  blocking parent's height explicit and retry), then MEASURES the result, and if the graph still
  falls short it distributes the surplus with the mechanism the DB Card already provides: its root
  ships `SPACE_BETWEEN`, so on the container holding the panel title AND the graph the title stays
  at the top while the graph moves onto the floor. That needs no stretching, only a parent with a
  height — which a stretched card has by definition.

Guideline correction:

- `layout-type-guidelines/process.md` described a Badge-based stepper (number badges, `opacity:
0.4`) that CONTRADICTED the catalog template `1716:21928` and claimed no stepper template exists.
  It now documents the template's three icon-based states and forbids the badge treatment, so
  guideline, registry and audit finally describe the same stepper.

Guidelines and workflow:

- `layout-guidelines.md` gains a "list or table" decision matrix with the construction rules for
  each, the rule that row padding belongs to the panel, and defined content behaviour for a
  stretched card (chart grows to the floor, lists stay top-aligned; large dead space means the
  bento row is paired wrong).
- `SKILL.md` gains a Phase-3 decision preflight covering all of the above.
- Adds regression tests for the new checks and for the registry decisions.
