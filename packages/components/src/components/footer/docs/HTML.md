## HTML

For general installation and configuration take a look at the [components](https://www.npmjs.com/package/@db-ux/core-components) package.

### Use component

```html index.html
<!-- index.html -->
...
<body>
	<footer class="db-footer">
		<section class="db-footer-main" data-name="Main Container (Section)">
			<div
				class="db-footer-content-container"
				data-name="Content Container"
			>
				<div class="db-footer-main-inner">
					<div>
						<a class="db-link" href="#">About Us</a>
						<a class="db-link" href="#">Contact</a>
						<a class="db-link" href="#">Careers</a>
					</div>
				</div>
			</div>
		</section>

		<section class="db-footer-meta" data-name="Meta Container (Section)">
			<div
				class="db-footer-content-container"
				data-name="Content Container"
			>
				<div class="db-footer-meta-inner">
					<p class="db-footer-copyright">© Deutsche Bahn AG</p>
					<div>
						<a class="db-link" href="#">Privacy Policy</a>
						<a class="db-link" href="#">Terms of Service</a>
						<a class="db-link" href="#">Imprint</a>
					</div>
				</div>
			</div>
		</section>
	</footer>
</body>
```

- Remove the `db-footer-main` section to hide the main area.
- Remove the `db-footer-meta` section to hide the meta area.
- Remove the `db-footer-copyright` paragraph to hide the copyright line.
