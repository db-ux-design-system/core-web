---
"@db-ux/ngx-core-components": minor
"@db-ux/react-core-components": minor
"@db-ux/v-core-components": minor
"@db-ux/wc-core-components": minor
---

feat: add `text` property to components that previously only supported children for their label, e.g. `DBTooltip`.

refactor: allow `text` property and components children to be used together in components. Previously, `text` and children were mutually exclusive.

refactor(`DBRadio`, `DBCheckbox`, `DBSwitch`): `label` and `children` can now be used together. Previously they were mutually exclusive.

refactor(`DBTag`): changed render order of `children` and `text` to align with design (children rendered before text).
