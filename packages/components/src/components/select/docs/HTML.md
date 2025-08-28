## HTML

For general installation and configuration take a look at the [components](https://www.npmjs.com/package/@db-ux/core-components) package.

### Use component

```html index.html
<!-- index.html -->
...
<body>
	<div class="db-select">
		<label for="test">Label</label>
		<select id="test">
			<option value="test1">Test1</option>
			<option value="test2">Test2</option>
		</select>
	</div>
</body>
```

### Note on Content

- Use the `children` (option elements) for select options
- Use the `description` prop for textual content that should appear outside the select element
- Avoid putting text content directly in children as it creates invalid HTML
