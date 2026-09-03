## HTML

For general installation and configuration take a look at the [components](https://www.npmjs.com/package/@db-ux/core-components) package.

### Use component

The `db-loading-indicator` class expects an inner `<div>` with a live-region role
(`status`) that wraps a `<label>`, its associated native `<progress>` and an
`aria-hidden` span for the visible progress text. For the circular variant, add
the SVG spinner markup.

```html index.html
<!-- index.html -->
...
<body>
	<div
		class="db-loading-indicator"
		data-variant="circular"
		data-orientation="horizontal"
	>
		<svg
			class="db-loading-indicator-circle"
			viewBox="10 10 20 20"
			aria-hidden="true"
		>
			<circle class="db-loading-indicator-circle-track"></circle>
			<circle class="db-loading-indicator-circle-segment"></circle>
		</svg>
		<div role="status">
			<label
				id="loading-indicator-1-label"
				for="loading-indicator-1-progress"
			>
				Loading
				<progress
					id="loading-indicator-1-progress"
					value="42"
					max="100"
				>
					42 of 100
				</progress>
			</label>
			<span aria-hidden="true">42 of 100</span>
		</div>
	</div>
</body>
```
