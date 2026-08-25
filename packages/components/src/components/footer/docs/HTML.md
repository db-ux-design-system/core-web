## HTML

For installation and configuration, see [components](https://www.npmjs.com/package/@db-ux/core-components).

Place the native footer markup inside a `.db-page[data-variant="fixed"]`. Consumer-provided navigation remains semantic and independently labelled.

```html index.html
<div class="db-page" data-variant="fixed">
	<main class="db-main">Page content</main>
	<footer class="db-footer" data-width="medium">
		<div class="db-footer-main">
			<div class="db-footer-content-container">
				<nav aria-label="Footer navigation">
					<ul>
						<li><a class="db-link" href="/about">About us</a></li>
						<li><a class="db-link" href="/contact">Contact</a></li>
					</ul>
				</nav>
			</div>
		</div>
		<div class="db-footer-meta">
			<div class="db-footer-content-container">
				<div class="db-footer-meta-inner">
					<p class="db-footer-copyright">© Deutsche Bahn AG</p>
					<nav aria-label="Legal navigation">
						<ul>
							<li>
								<a class="db-link" href="/privacy">Privacy</a>
							</li>
							<li>
								<a class="db-link" href="/imprint">Imprint</a>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</div>
	</footer>
</div>
```

Remove the corresponding visual wrapper to omit the main or meta area, and remove `.db-footer-copyright` to omit the copyright. `data-width` accepts `full`, `large`, `medium`, or `small`; it limits only the centred inner content to the available width, 1440 px, 1024 px, or 768 px respectively. The native `<footer>` and both visual areas always remain full width.
