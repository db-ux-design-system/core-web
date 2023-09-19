## HTML

Load SCSS globally somewhere in your app:

```scss
@use "@db-ui/components/build/styles/db-ui-42" as *;
```

Use it:

```html
<div class="db-input">
	<label for="username">Label</label>
	<input type="text" name="username" id="username" />
</div>
```
