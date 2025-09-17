## HTML

For general installation and configuration take a look at the [components](https://www.npmjs.com/package/@db-ux/core-components) package.

### Use component

```html index.html
<!-- index.html -->
...
<body>
	<label class="db-radio" for="radio-element">
		<input type="radio" id="radio-element" name="States" value="Y" />
		Label
	</label>
</body>
```

### Group multiple radio buttons

When grouping multiple radio buttons, use `fieldset` and `legend` elements for proper accessibility:

```html index.html
<!-- index.html -->
...
<body>
	<fieldset>
		<legend>Choose an option</legend>
		<label class="db-radio" for="radio-option-1">
			<input type="radio" id="radio-option-1" name="options" value="option1" />
			Option 1
		</label>
		<label class="db-radio" for="radio-option-2">
			<input type="radio" id="radio-option-2" name="options" value="option2" />
			Option 2
		</label>
		<label class="db-radio" for="radio-option-3">
			<input type="radio" id="radio-option-3" name="options" value="option3" />
			Option 3
		</label>
	</fieldset>
</body>
```
