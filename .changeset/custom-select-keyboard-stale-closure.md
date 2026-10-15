---
"@db-ux/core-components": patch
"@db-ux/ngx-core-components": patch
"@db-ux/react-core-components": patch
"@db-ux/wc-core-components": patch
"@db-ux/v-core-components": patch
---

fix(DBCustomSelect): keep dropdown keyboard handling in sync with filtered options

Moving the keyboard handling onto the field wrapper left the React output reading a stale options snapshot captured when the listener was attached, so Enter in the search field selected the first unfiltered option and arrow navigation between option groups broke.

- in-dropdown keydown is handled again on `<details>` via its `onKeyDown` prop, so the handler reads the current options/search value
- the wrapper-level listener now only handles keydown originating outside `<details>` (tag remove buttons, clear button)
