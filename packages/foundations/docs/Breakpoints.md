# Layout breakpoints

- The responsive layout of our components switches between a **mobile**, **tablet** and **desktop** arrangement at two breakpoints.
- The current band is exposed as a single inheriting custom property, `--db-breakpoint`, with the values `"mobile"`, `"tablet"` or `"desktop"`.
- The foundations resolve `--db-breakpoint` from the viewport width with two default media queries, set on `:root` and `:host`:

| Band        | Applies from                | Default            |
| ----------- | --------------------------- | ------------------ |
| `"mobile"`  | below the tablet breakpoint | `< 48em` (768px)   |
| `"tablet"`  | the tablet breakpoint       | `>= 48em` (768px)  |
| `"desktop"` | the desktop breakpoint      | `>= 64em` (1024px) |

Components read `--db-breakpoint` with a [container style query](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_size_and_style_queries) rather than a fixed media query, so the switch point is customizable at runtime: `DBShell`, `DBControlPanel*` and `DBControlPanelNavigation` switch at the `"desktop"` band; `DBBreadcrumb`, `DBPagination`, `DBFooterMeta`, `DBCustomSelect`, `DBPopover` and `DBTooltip` switch at the band matching their design.

## How to move a switch point

Re-declare `--db-breakpoint` with your own media query. Place it **after** the foundations styles so it wins. Scope it to `:root` for the whole document, or to any ancestor of a component for a single subtree - a container style query reads an ancestor, never the element it styles, so the override must not sit on the component root itself.

```css
/* Switch the desktop layout in from 1200px instead of the default 1024px */
@media (width >= 75em) {
	:root {
		--db-breakpoint: "desktop";
	}
}
```

You can use any length unit in the media query. `rem`/`em` thresholds (the foundations default) let the switch scale with the user's font-size zoom, which is the more accessible choice; `px` pins it to a fixed device width. Pick whichever fits your use case.

## Force a layout

Set `--db-breakpoint` unconditionally to pin a layout on every viewport - `"mobile"` keeps the mobile layout, `"desktop"` forces the desktop layout:

```css
/* Force the mobile layout everywhere */
:root {
	--db-breakpoint: "mobile";
}
```

## Override a subtree or set it from JavaScript

The override does not have to sit on `:root`. Declaring `--db-breakpoint` on a wrapper element moves the switch point for that subtree only:

```css
.my-compact-region {
	--db-breakpoint: "mobile";
}
```

You can also set it from JavaScript, for example to drive the layout from a user setting instead of the viewport:

```js
element.style.setProperty("--db-breakpoint", '"desktop"');
```

> **Note:** The value is a quoted string, so the JavaScript value includes the inner quotes: `'"desktop"'`.
