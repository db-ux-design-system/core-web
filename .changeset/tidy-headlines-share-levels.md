---
"@db-ux/core-foundations": minor
---

refactor: expose the headline level mapping as `fonts.$headlines`

The default visual size per semantic level moves from
`defaults/default-fonts.scss` into the new non-emitting partial
`fonts/_headline-levels.scss`, so `defaults/default-fonts.scss` and the Heading
component styles share one source of truth. The emitted CSS is unchanged.
