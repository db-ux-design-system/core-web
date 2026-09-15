---
"@db-ux/core-components": patch
"@db-ux/ngx-core-components": patch
"@db-ux/react-core-components": patch
"@db-ux/wc-core-components": patch
"@db-ux/v-core-components": patch
---

fix(DBDrawer): compose the heading into an explicit `aria-labelledby`

`aria-labelledby` is a supported pass-through attribute, but mounting `DBDrawerHeader`
(or `DBDialogHeader`) overwrote a consumer-supplied value with its generated heading id,
and a conditional header unmounting removed the whole attribute without restoring the
original. The header now **composes** with a consumer value instead of clobbering it:
its generated heading id is appended once to the existing `aria-labelledby` token list
(e.g. `consumer-label` becomes `consumer-label <heading-id>`), so both the consumer
reference and the visible heading contribute to the accessible name. Appending is
idempotent, and cleanup removes only the token the header added, leaving any consumer
ids intact (clearing the attribute entirely only when no tokens remain).

A consumer `aria-label` still wins as an explicit name override: because the
accessible-name computation evaluates `aria-labelledby` before `aria-label`, the header
withholds (or removes) its own token while an `aria-label` is present and re-adds it once
the label is cleared - whether the label was set before mount or added dynamically.
