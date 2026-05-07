---
"@db-ux/ngx-core-components": minor
"@db-ux/react-core-components": minor
"@db-ux/v-core-components": minor
"@db-ux/wc-core-components": minor
---

refactor: allow `text` property and components children to be used together in components. Previously, `text` and children were mutually exclusive.

feat: add `text` property to components that previously only supported children for their label, e.g. `DBTooltip`.

refactor: `label` and `children` can now be used together in `DBRadio`, `DBCheckbox`, and `DBSwitch`. Previously they were mutually exclusive.

refactor: changed render order of `children` and `text` in `DBTag` to align with design (children rendered before text).
