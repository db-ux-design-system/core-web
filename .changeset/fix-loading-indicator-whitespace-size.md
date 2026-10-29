---
"@db-ux/core-components": patch
"@db-ux/ngx-core-components": patch
"@db-ux/react-core-components": patch
"@db-ux/wc-core-components": patch
"@db-ux/v-core-components": patch
---

fix(DBLoadingIndicator): remove stray whitespace and fix spinner size inside buttons

- removed the stray inline gap next to the spinner inside a button so it no longer resizes the button
- removed the stray gap below the progress bar when no label/progress text is shown (`data-show-progress-text="false"` or no text span present)
- the spinner inside a button now matches the icon size by default (24px, and the small-button size for `size="small"` buttons) instead of requiring a manual `size="large"`
