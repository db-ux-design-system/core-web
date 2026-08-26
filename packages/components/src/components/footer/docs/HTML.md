## HTML

For installation and configuration, see [components](https://www.npmjs.com/package/@db-ux/core-components).

Compose the visual content and meta wrappers inside a native footer. Omit either wrapper when that area is not needed, and add copyright text only when required.

```html index.html
<div class="db-page" data-variant="fixed">
	<main class="db-main">Page content</main>
	<footer class="db-footer" data-width="medium">
		<div class="db-footer-content">
			<div class="db-footer-content-container">
				<nav aria-label="Footer navigation">
					<ul>
						<li>
							<a class="db-link" data-wrap="true" href="/about"
								>About us</a
							>
						</li>
						<li>
							<a class="db-link" data-wrap="true" href="/contact"
								>Contact</a
							>
						</li>
					</ul>
				</nav>
			</div>
		</div>
		<div class="db-footer-meta">
			<div class="db-footer-content-container">
				<div class="db-footer-meta-inner">
					<p class="db-footer-copyright">© Example Company</p>
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
		</div>
	</footer>
</div>
```

`data-width` accepts `full`, `large`, `medium`, or `small`; it limits only the centred inner content to the available width, 1440 px, 1024 px, or 768 px respectively. The native `<footer>` and both visual areas always remain full width.
