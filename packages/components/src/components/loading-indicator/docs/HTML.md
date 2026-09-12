## HTML

For general installation and configuration take a look at the [components](https://www.npmjs.com/package/@db-ux/core-components) package.

### Use component

The `db-loading-indicator` class expects an inner `<div>` with a live-region role
(`status`) that wraps a `<label>`, its associated native `<progress>` and an
`aria-hidden` span for the visible progress text. The `<progress>` must be a
**sibling** of the `<label>` (associated via `for`/`id`), not a child, because
the stylesheet only visually hides a `div > progress` sibling — nesting it inside
the label leaves the native control visible next to the custom spinner. For the
circular variant, add the SVG spinner markup.

For a determinate value (as opposed to the indeterminate spinner), CSS-only
consumers must set the attributes the framework logic would otherwise derive:
`data-indeterminate="false"` and `data-state="active"` so the stylesheet shows
the segment instead of the continuous animation, and the
`--db-loading-indicator-percentage` custom property (a fraction between 0 and 1,
here `0.42` for 42 of 100) because there is no JavaScript to calculate it.

```html index.html
<!-- index.html -->
...
<body>
	<div
		class="db-loading-indicator"
		data-variant="circular"
		data-orientation="horizontal"
		data-indeterminate="false"
		data-state="active"
		style="--db-loading-indicator-percentage: 0.42;"
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
			</label>
			<progress id="loading-indicator-1-progress" value="42" max="100">
				42 of 100
			</progress>
			<span aria-hidden="true">42 of 100</span>
		</div>
	</div>
</body>
```
