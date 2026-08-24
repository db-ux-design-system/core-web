---
"@db-ux/agent-cli": minor
---

feat: validate a Composition Plan statically before it reaches Figma

Adds `assets/src/45-plan-validation.js`, a pure module shared by the render runtime and the new
`plan:lint` script, so plan defects surface locally instead of from the Figma sandbox: an unknown
node type (typically an ES6 shorthand `{ block }`), `text` as a string instead of a field map,
unregistered tokens/icons/image ratios/Grid layouts, `props` matching no variant, a mistyped
`pageType`, and more Header `navItems` than the Navigation can show (now declared as
`Navigation.maxItems`). `renderPlan` runs the same function first and reports every finding at
once. `setInstanceFields` no longer enumerates a `text` string character by character, which used
to report the character indices as field names. Also corrects the Notification field-shape guidance
in the dashboard/form guidelines.

A standalone Notification belongs above the content it refers to; the plan lint reports the
unambiguous violation (it is the LAST element of its container, below that content). Deliberately
not a mechanical sort: a dashboard alert legitimately follows the page-header row, a confirmation's
follows the success block, and a no-results notice follows the filter bar it explains.
