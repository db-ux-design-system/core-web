## HTML

For installation and configuration, see [components](https://www.npmjs.com/package/@db-ux/core-components).

Compose the visual content and meta wrappers inside a native footer. The meta wrapper is semantically neutral and accepts navigation, contact information, or other secondary content. It does not create a navigation landmark, so wrap navigational content in a labelled `nav`. Omit either wrapper when that area is not needed, and add copyright text only when required.

Place the footer as the last child of `.db-shell-content`, after `.db-main`. `.db-shell` lays its children out in a grid with areas for the control panel, the sub-navigation, and the content only — it has no footer area. A `.db-footer` placed as a direct child of `.db-shell` is therefore auto-placed by the grid and does not end up below the content.

```html index.html
<div class="db-shell">
	<header class="db-control-panel-desktop">
		<div class="db-control-panel-brand">My App</div>
		<!-- Navigation goes here -->
	</header>
	<div class="db-shell-content">
		<main class="db-main" id="main-content">Page content</main>
		<footer class="db-footer" data-width="medium">
			<div class="db-footer-content">
				<div class="db-footer-container">
					<nav aria-label="Footer navigation">
						<ul>
							<li>
								<a
									class="db-link"
									data-wrap="true"
									href="/about"
									>About us</a
								>
							</li>
							<li>
								<a
									class="db-link"
									data-wrap="true"
									href="/contact"
									>Contact</a
								>
							</li>
						</ul>
					</nav>
				</div>
			</div>
			<div class="db-footer-meta">
				<div class="db-footer-container">
					<p class="db-footer-copyright">
						&copy;&nbsp;Example Company
					</p>
					<nav aria-label="Legal navigation">
						<ul>
							<li>
								<a
									class="db-link"
									data-wrap="true"
									href="/privacy"
									>Privacy</a
								>
							</li>
							<li>
								<a
									class="db-link"
									data-wrap="true"
									href="/imprint"
									>Imprint</a
								>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</footer>
	</div>
</div>
```

The `data-variant` of `.db-shell-content` decides how the footer behaves while scrolling. Without it the whole content area scrolls, so the footer scrolls out of view and is pushed to the bottom edge whenever the content is shorter than the viewport. With `data-variant="fixed"` only `.db-main` scrolls, so the footer stays visible.

`data-width` accepts `full`, `large`, `medium`, or `small`; it limits only the centred inner content to the available width, 1440 px, 1024 px, or 768 px respectively. The native `<footer>` and both visual areas always remain full width.
