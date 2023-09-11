## HTML

For general installation and configuration take a look at the [components](https://www.npmjs.com/package/@db-ui/components) package.

### Use component

```html index.html
<!-- index.html -->
...
<body>
	<div class="db-alert" data-icon="info">
		<div class="db-alert-content-container">
			<div class="db-alert-headline-container">
				<strong>Headline</strong>
				<div class="db-alert-close-container">
					<button
						class="db-button is-icon-text-replace"
						data-size="small"
						data-variant="transparent"
						data-icon="close"
					>
						Close Button
					</button>
				</div>
			</div>
			<span>Alert</span>
		</div>
	</div>
</body>
```
