---
"@db-ux/core-components": patch
"@db-ux/ngx-core-components": patch
"@db-ux/react-core-components": patch
"@db-ux/wc-core-components": patch
"@db-ux/v-core-components": patch
---

fix(DBBreadcrumb): keep keyboard focus off hidden crumbs while collapsed

The middle crumbs that are visually hidden while the trail is auto-collapsed,
as well as disabled and current-page crumbs, are now removed from the tab
order so keyboard focus no longer lands on them. Focusable crumbs stay in the
natural DOM order and the expand toggle is rendered after the list, so no
positive `tabindex` is used and the breadcrumb no longer disturbs the page tab
order. Expanding the trail now moves focus to the first revealed crumb instead
of dropping it to the document when the toggle unmounts.
