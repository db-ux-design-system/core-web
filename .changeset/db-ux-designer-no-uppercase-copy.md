---
"@db-ux/agent-cli": patch
---

fix: prevent ALL-CAPS copy in generated DB UX Figma screens

A generated Contentpage rendered its Toplines in caps (`ORIENTIERUNG`, `ZUGÄNGLICHKEIT`,
`KONSISTENZ`). The cause was the Composition Plan itself — the text nodes carried
`textCase: ORIGINAL`, so nothing in Figma or the components upper-cased anything; the agent
simply wrote the content in caps. A Topline is differentiated by size, weight and color
emphasis, never by capitalisation.

Locked down at the three layers the skill uses, so guidance alone can no longer be skipped:

- `context/design-system/screen-guidelines.md` (Typografie) — normative rule: no caps for
  Toplines, categories, labels, meta or component text (Tag, Badge, Button, Link), covering both
  the text content and forced casing (Figma `Text Case`, CSS `text-transform`). Established
  acronyms (DB, ICE, AGB) stay allowed.
- `SKILL.md` — a mandatory text-casing constraint next to the existing icon/Notification/Tag
  constraints, plus the casing clause in the Phase 3 visual-rules self-check. Notes explicitly
  that a `Tag` does not upper-case its label, so caps inside a Tag come from the plan.
- `assets/src/60-compliance-audit.js` — `auditTree` now reports `uppercase-text` for any visible
  text whose letters are all uppercase (≥5 letters, so DB/ICE/AGB/PDF/WCAG and mixed-case copy
  mentioning an acronym stay valid) and for a forced `UPPER`/`SMALL_CAPS` text case. This makes
  the rule deterministic instead of advisory: the render fails its own audit and the plan gets
  fixed before delivery.

Runtime rebuilt (sha `547d8a506e5f`, last chunk now 2 850 chars — SKILL.md updated accordingly).
Per the skill's cost rule the target Figma file is re-bootstrapped lazily on the next real
render, not as part of this change.
