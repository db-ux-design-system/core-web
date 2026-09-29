## HTML

Use `.db-shell-content` as the content area of `.db-shell`. It owns the `shell-content` grid area and wraps a native `.db-main`, which is the target of the skip-navigation link, so use only one per page.

Anything placed before `.db-main` sits above the content, anything after it sits below — this is where a `.db-footer` belongs. `.db-shell` itself has no footer area, so a footer placed as a direct child of `.db-shell` is auto-placed by the grid and does not end up below the content.

```html index.html
<div class="db-shell">
	<header class="db-control-panel-desktop">...</header>
	<div class="db-shell-content" data-variant="fixed">
		<div class="db-notification">Content above main</div>
		<main class="db-main" id="main-content">Main content</main>
		<footer class="db-footer">...</footer>
	</div>
</div>
```

`data-variant` controls the scrolling behaviour. Without it the whole content area scrolls, and `.db-main` pushes anything following it to the bottom edge while the content is shorter than the viewport. With `data-variant="fixed"` only `.db-main` scrolls, so the surrounding content stays visible.
