---
"@db-ux/core-components": patch
"@db-ux/ngx-core-components": patch
"@db-ux/react-core-components": patch
"@db-ux/wc-core-components": patch
"@db-ux/v-core-components": patch
---

fix(DBLoadingIndicator): follow-up review fixes for parent ARIA/state handling

- Resolve the loading state on mount (`props.state ?? "active"`) so the indicator is correct from the first paint instead of starting `inactive`.
- Only clear the parent `aria-busy` on unmount when this indicator set it, so a parent busy for unrelated concurrent work is preserved.
- Delete the internal `data-did-disable-parent` marker instead of leaving it as `"false"` in the consumer DOM.
- Reset the previous loading state when `onTimeout` is removed while a timer is pending, so re-adding the callback can schedule a new timeout.
- Target a dedicated `.db-loading-indicator-content` wrapper in the styles instead of a bare descendant `div`, so nested consumer markup no longer picks up the component's layout/progress-track styling.
