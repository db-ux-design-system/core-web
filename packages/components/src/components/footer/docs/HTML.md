## HTML

For general installation and configuration take a look at the [components](https://www.npmjs.com/package/@db-ux/core-components) package.

### Use component

```html index.html
<!-- index.html -->
...
<body>
	<footer class="db-footer">
		<section class="db-footer-main">
			<div class="db-footer-content-container">
				<div class="db-footer-main-inner">
					<ul>
						<li>
							<a class="db-link" href="#">About Us</a>
						</li>
						<li>
							<a class="db-link" href="#">Contact</a>
						</li>
						<li>
							<a class="db-link" href="#">Careers</a>
						</li>
					</ul>
				</div>
			</div>
		</section>

		<section class="db-footer-meta">
			<div class="db-footer-content-container">
				<div class="db-footer-meta-inner">
					<p class="db-footer-copyright">© Deutsche Bahn AG</p>
					<ul>
						<li>
							<a class="db-link" href="#">Privacy Policy</a>
						</li>
						<li>
							<a class="db-link" href="#">Terms of Service</a>
						</li>
						<li>
							<a class="db-link" href="#">Imprint</a>
						</li>
					</ul>
				</div>
			</div>
		</section>
	</footer>
</body>
```

- Remove the `db-footer-main` section to hide the main area.
- Remove the `db-footer-meta` section to hide the meta area.
- Remove the `db-footer-copyright` paragraph to hide the copyright line.

### Width

Use the `data-width` attribute to control the max-width of the footer content. Supported values: `full`, `medium`, `large`, `small`.

```html index.html
<!-- index.html -->
...
<body>
	<footer class="db-footer" data-width="full">
		<section class="db-footer-main">
			<div class="db-footer-content-container">
				<div class="db-footer-main-inner">
					<div>Footer Navigation</div>
				</div>
			</div>
		</section>

		<section class="db-footer-meta">
			<div class="db-footer-content-container">
				<div class="db-footer-meta-inner">
					<p class="db-footer-copyright">© Deutsche Bahn AG</p>
					<div>Legal Links</div>
				</div>
			</div>
		</section>
	</footer>
</body>
```
