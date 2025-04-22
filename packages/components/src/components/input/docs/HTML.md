## HTML

Load SCSS globally somewhere in your app:

```scss
@forward "@db-ux/core-components/build/styles/relative";
```

Use it:

```html
<div class="db-input">
	<label for="username">Label</label>
	<input type="text" name="username" id="username" />
</div>
```
