## HTML

For general installation and configuration look at the [components](https://www.npmjs.com/package/@db-ui/components) package.

### Use component

```html index.html
<!-- index.html -->
...
<body>
	<div class="db-alert">
		<span
			aria-hidden="true"
			class="db-icon db-alert-icon is-icon-text-replace"
			data-icon="info"
		></span>
		<div class="db-alert-content-container">
			<div class="db-alert-headline-container">
				<strong>Headline</strong>
				<div class="db-alert-close-container">
					<button
						class="db-button is-icon-text-replace"
						data-size="small"
						data-variant="transparent"
					>
						<span
							aria-hidden="true"
							class="db-icon is-icon-text-replace"
							data-icon="close"
						></span>
						Close Button
					</button>
				</div>
			</div>
			<span>Alert</span>
		</div>
	</div>
</body>
```
