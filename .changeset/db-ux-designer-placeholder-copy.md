---
"@db-ux/agent-cli": patch
---

fix: never ship a component's default placeholder copy as product copy

A generated dialog shipped its `Notification` headline as literally **"Headline"** — the library's
own default — while the audit reported `valid: true`. Fixed at every layer that could have
prevented it, plus a measured net so the whole defect class cannot return.

**Cause.** Every DB component ships its text slots PRE-FILLED with the library's copy ("Headline",
"Text", "Label", "Link"). A `text` field that resolves to no TEXT property therefore does not
render an empty line — it renders that default, which reads like real content. The `modal.consequence`
block passed `text: { label, value }`, but a `Notification` exposes `✏️ Headline` and `✏️ Text`:
`label` matched neither by name nor via its alias (`/label/`), `setInstanceFields` skipped it
SILENTLY, and the default survived. Nothing downstream could see it — the props write succeeded, the
layout was valid, only the CONTENT belonged to the component instead of the screen.

**Fixes.**

- `setInstanceFields` now **hard-stops** on a field that matches no TEXT property, naming the field
  and listing the component's real properties. A silent skip is never acceptable here: it is
  indistinguishable from success on canvas.
- The `label` / `title` / `headline` aliases resolve across the `Label` ↔ `Headline` naming split
  (a "primary line" is `Label` on a form control and `Headline` on a `Notification`), and
  `description` was added, so the intuitive field names work instead of failing.
- `modal.consequence` states the component's own field names (`headline`, `text`), and
  `blocks.json` `_meta.textFields` documents the rule for future blocks.

**Deterministic enforcement.** New audit rule `placeholder-text` measures the RENDERED characters
and reports any text left on a library default. It catches the whole class rather than one cause —
a wrong field name, a field forgotten entirely, or a later hand-edit — and skips hidden regions
(a `Notification`'s optional Link, a switched-off slot) which legitimately keep their defaults.
Exact-match only, so copy that merely contains the word ("Text Screenreader") stays valid.

Rules mirrored in `SKILL.md` (mandatory plan rules). Covered by unit tests against the built
runtime (`test/db-ux-designer-powers/figma-runtime-placeholder-copy.spec.ts`): the alias mapping, the loud failure, every
library default, and the hidden-region and substring exemptions.

Runtime rebuilt (sha `bdace0b962c9`, 10 chunks, last chunk 2 801 chars — bootstrap counts in
`SKILL.md` updated).
