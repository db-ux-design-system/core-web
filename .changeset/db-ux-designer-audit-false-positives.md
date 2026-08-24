---
"@db-ux/agent-cli": patch
---

fix: stop the designer audit from reporting violations on correct screens

Three checks reported `valid: false` on compliant output. That is worse than no check at all,
because it teaches people to ignore the audit — and the audit is the only thing standing between a
plan and a broken frame.

- **`unresolved-icon`** fired on a library internal. The DB Theme icon components are themselves
  built around an `<Icon>` node, so a RESOLVED glyph such as the `<IconClose>` that a Notification
  ships with legitimately nests a blank `<Icon>` below itself. Nothing in a plan can set that node.
  A placeholder inside the subtree of a resolved icon is now exempt; a bare `<Icon>` with no
  resolved icon above it is still the real unset slot, which is what the check was written for.
- **`gap-exceeds-card-padding`** and **`table-columns-misaligned`** both measured a library
  component's internals. Neither check was scoped to the layout boxes the runtime OWNS, so every
  Notification, Tag or Tab inside a 12px card counted as a gap violation (30+ hits on two screens),
  and a component's inner three-child row was compared against the table it happened to sit in.
  Both now resolve the nearest enclosing INSTANCE and only report when it is one of ours
  (Container/Grid/Card/Section) — the same scoping the overflow checks already had.
- **`process-step-without-content`** demanded an input control on two steps that are complete
  without one. An upload step's control IS `🧪 Upload`, which never matched because the check tested
  the name from the START and every Concept component is prefixed with its maturity emoji; the
  leading non-letter run is now stripped, which fixes the whole class rather than one component. And
  a pure REVIEW step asks for nothing by design — it shows the summary it reviews, so two or more
  label/value rows inside a panel now count as content. A single lone row still does not, or the
  check would be satisfied by the step's own description.

Four copy-pasted blocks in the runtime source are extracted into shared helpers in the same pass
(`applySpacingVariant`, `applyContainerSurface`, `applyLeafFields`, `resolveEditTarget`), which also
shrinks the bundle the model has to store. `AGENTS.md` records the scoping rule so the next check
does not reopen the same gap.
