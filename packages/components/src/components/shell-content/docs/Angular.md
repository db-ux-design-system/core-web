## Angular

Use `db-shell-content` as the content area of `db-shell`. It owns the `shell-content` grid area and wraps a native `main`, which is the target of the skip-navigation link, so use only one per page.

`start-slot` renders above the content, `end-slot` below it — `end-slot` is where a `db-footer` belongs. `db-shell` itself has no footer area, so a footer placed as a direct child of `db-shell` is auto-placed by the grid and does not end up below the content.

```html app.component.html
<!-- app.component.html -->
<db-shell>
	<!-- Control panels go here -->
	<db-shell-content variant="fixed"
		>Main content
		<db-notification start-slot>Content above main</db-notification>
		<db-footer end-slot>...</db-footer>
	</db-shell-content>
</db-shell>
```

`variant` controls the scrolling behaviour. With the default `auto` the whole content area scrolls, and `main` pushes the `end-slot` content to the bottom edge while the content is shorter than the viewport. With `fixed` only `main` scrolls, so both slots stay visible.

Override `mainId` only when the default `main-content` clashes with an existing id, and keep it in sync with the skip-navigation target.
