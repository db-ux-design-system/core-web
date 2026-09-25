## HTML

For general installation and configuration take a look at the [components](https://www.npmjs.com/package/@db-ux/core-components) package.

### Use component

```html index.html
<!-- index.html -->
...
<body>
	<div class="db-shell">
		<header class="db-control-panel-desktop">
			<div class="db-control-panel-brand">My App</div>
			<!-- Navigation goes here -->
		</header>
		<main class="db-shell-content">Main Content</main>
	</div>
</body>
```

### Add a footer

`.db-shell` lays its children out in a grid with areas for the control panel, the sub-navigation, and the content only. There is no footer area, so a footer must not be a direct child of `.db-shell` — it would be auto-placed by the grid instead of ending up below the content. Put it inside `.db-shell-content`, after `.db-main`:

```html index.html
<!-- index.html -->
...
<body>
	<div class="db-shell">
		<header class="db-control-panel-desktop">
			<div class="db-control-panel-brand">My App</div>
			<!-- Navigation goes here -->
		</header>
		<div class="db-shell-content">
			<main class="db-main" id="main-content">Main Content</main>
			<footer class="db-footer" data-width="medium">
				<div class="db-footer-meta">
					<div class="db-footer-container">
						<p class="db-footer-copyright">
							&copy;&nbsp;My Company
						</p>
					</div>
				</div>
			</footer>
		</div>
	</div>
</body>
```

Without `data-variant` the whole content area scrolls, so the footer scrolls out of view and is pushed to the bottom edge whenever the content is shorter than the viewport. With `data-variant="fixed"` only `.db-main` scrolls, so the footer stays visible. Any other content that should sit below `.db-main` goes in the same place; content above `.db-main` goes before it.
