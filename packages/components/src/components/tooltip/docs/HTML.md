## HTML

For general installation and configuration take a look at the [components](https://www.npmjs.com/package/@db-ux/core-components) package.

### Use component

The tooltip content is provided as the text content of the element, **not** as a `content` attribute.

```html index.html
<!-- index.html -->
...
<body>
	<button class="db-button" aria-describedby="tooltip-01">
		Hover on me to open Tooltip
		<i class="db-tooltip" id="tooltip-01">Tooltip</i>
	</button>
</body>
```
