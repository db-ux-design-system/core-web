## HTML

For general installation and configuration take a look at the [components](https://www.npmjs.com/package/@db-ux/core-components) package.

### Use component

```html index.html
<!-- index.html -->
...
<body>
	<label class="db-checkbox" for="checkbox-element">
		<input type="checkbox" id="checkbox-element" name="States" />
		Label
	</label>
</body>
```

#### Adding Formatted Infotext

To add a descriptive text with HTML formatting (e.g., bold or italic text) to a checkbox, you should use a separate element for the message and link it via the [`aria-describedby`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby)-HTML-attribute for accessibility. This ensures that screen readers correctly associate the message with the checkbox.

```html index.html
<!-- Checkbox with formatted infotext -->
...
<body>
	<label class="db-checkbox" for="checkbox-element">
		<input
			type="checkbox"
			id="checkbox-element"
			name="States"
			aria-describedby="checkbox-message"
		/>
		Label
	</label>
	<p class="db-infotext" id="checkbox-message">
		Example <strong>Text</strong>
	</p>
</body>
```
