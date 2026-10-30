---
"@db-ux/core-components": minor
"@db-ux/ngx-core-components": minor
"@db-ux/react-core-components": minor
"@db-ux/wc-core-components": minor
"@db-ux/v-core-components": minor
---

fix(DBPagination): make the current page a non-interactive dead end

- A click inside `db-pagination` no longer throws `TypeError: this.isModifiedLinkClick is not a function` in the Web Component output: the capture-phase `click` listener that lost its binding is gone, and so is the `preventDefault` that ran in the delegated `handleClick`.
- Instead, the current page control is taken out of play: it renders with `tabindex="-1"` and `pagination-item.scss` sets `pointer-events: none` on the filled control, so a pointer click cannot land on it and there is no link default to cancel.
- This also fixes a keyboard/screen-reader issue: the current page is no longer a tab stop that announces an actionable control which does nothing, while `aria-current="page"` still marks it as the current page.
- Because the current link is unclickable rather than prevented, a composed router link (React Router `<Link>`, Vue `<RouterLink>`) no longer navigates to the current URL again - the earlier bubble-phase `preventDefault` ran after the router handler and was not seen.
- Markup change: the current page control (`a`/`button` inside `li[data-variant="filled"]`) now carries `tabindex="-1"`; non-current controls carry no `tabindex`.
