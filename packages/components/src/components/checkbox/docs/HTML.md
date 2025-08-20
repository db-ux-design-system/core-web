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

### Group multiple checkboxes

When grouping multiple checkboxes, use `fieldset` and `legend` elements for proper accessibility:

```html index.html
<!-- index.html -->
...
<body>
	<fieldset>
		<legend>Select preferences</legend>
		<label class="db-checkbox" for="checkbox-option-1">
			<input type="checkbox" id="checkbox-option-1" name="preferences" value="option1" />
			Option 1
		</label>
		<label class="db-checkbox" for="checkbox-option-2">
			<input type="checkbox" id="checkbox-option-2" name="preferences" value="option2" />
			Option 2
		</label>
		<label class="db-checkbox" for="checkbox-option-3">
			<input type="checkbox" id="checkbox-option-3" name="preferences" value="option3" />
			Option 3
		</label>
	</fieldset>
</body>
```
