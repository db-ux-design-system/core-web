---
"@db-ux/core-components": patch
"@db-ux/ngx-core-components": patch
"@db-ux/react-core-components": patch
"@db-ux/wc-core-components": patch
"@db-ux/v-core-components": patch
---

fix(DBFooter): show width variants without a scroll container and space the meta link

The width example no longer needs a track wider than the largest variant: the wrapper
became an inline-size container, so the em-based clamps resolve to a share of the
available width and stay distinguishable without horizontal scrolling. The optional
areas example spaces its label and link with a flex gap, because the JSX whitespace it
relied on is dropped during generation.
