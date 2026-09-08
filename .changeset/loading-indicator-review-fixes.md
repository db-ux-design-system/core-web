---
"@db-ux/core-foundations": patch
"@db-ux/core-components": patch
"@db-ux/ngx-core-components": patch
"@db-ux/react-core-components": patch
"@db-ux/wc-core-components": patch
"@db-ux/v-core-components": patch
---

fix(DBLoadingIndicator): correct determinate progress, ARIA naming and role handling

- Default `max` to 100 in the percentage calculation so a determinate `value` without an explicit `max` still renders progress.
- Apply the `--db-loading-indicator-percentage` custom property on the root so the `bar` variant (which has no circular SVG) shows determinate progress.
- Default the loading state to `active` when `indeterminate={false}` is set without an explicit `state`, so the documented `value`/`max` API renders progress.
- Re-enable a parent that this indicator disabled when `autoDisable` is turned off.
- Keep the host button icon visible while the indicator is `inactive`.
- Remove the parent ARIA relationship when `overlay` is turned off, and clean up the old relationship before an `id` change.
- Cancel a pending timeout when `onTimeout` is removed.
- Keep `role` off the generated React root so it only applies to the inner live region.
- Remove the unused `width` prop, which had no effect on the component.
- Flip the indeterminate bar `wobbling` animation under `dir="rtl"`.
