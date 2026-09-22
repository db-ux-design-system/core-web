---
"@db-ux/core-components": patch
"@db-ux/ngx-core-components": patch
"@db-ux/react-core-components": patch
"@db-ux/wc-core-components": patch
"@db-ux/v-core-components": patch
---

fix(DBDrawer): accessibility, dismissal and shared dialog layer

- The header composes the drawer's `aria-labelledby` (appending its heading id, preserving a consumer value) instead of overwriting it; a consumer `aria-label` still wins.
- Non-modal drawers (`backdrop="none"`, `variant="inside"`, `position="absolute"`) now dismiss on Escape and backdrop click in browsers without `closedby` support (e.g. Firefox ESR) via the ponyfill.
- Generates the fallback `id` hydration-safely (via the framework `useId()`), re-syncing when the consumer `id` changes or is cleared, so the document never keeps a stale or duplicate id.
- `open={undefined}` no longer counts as "closed", so a natively opened drawer stays open until `open` is set explicitly.
- Now uses the shared dialog utils, style mixins and ponyfill module. Behaviour change: the header close button no longer calls `stopPropagation()`, so its click follows native bubbling like every other click in the drawer (identify it via `command="request-close"` on `event.target` if you relied on the old behaviour).
