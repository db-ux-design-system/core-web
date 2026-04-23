---
"@db-ux/core-eslint-plugin": patch
---

fix(`DBNotification`): `close-button-text-required` rule now only requires `closeButtonText` when `closeable` attribute is set.

fix(angular): resolve bug in parsing where checking multiple components would only lint the first component in the array due to an early return. ESLint rules that target multiple components now correctly lint all components in the array instead of stopping after the first match.
