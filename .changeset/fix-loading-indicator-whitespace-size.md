---
"@db-ux/core-components": patch
"@db-ux/ngx-core-components": patch
"@db-ux/react-core-components": patch
"@db-ux/wc-core-components": patch
"@db-ux/v-core-components": patch
---

fix(DBLoadingIndicator): remove stray whitespace and fix spinner size inside buttons

- removed the stray inline gap next to the spinner inside a button so it no longer resizes the button
- removed the stray gap below the progress bar when the label is hidden and no progress text is shown (`data-hide-label="true"` together with `data-show-progress-text="false"` or no progress span)
- a loading indicator inside a button now always matches the button's icon size (24px, and 20px for `size="small"` buttons) instead of requiring a manual `size="large"`; this overrides an explicit `size` on the indicator and the overlay spinner, so a default-button overlay spinner is now 24px (previously 20px)
