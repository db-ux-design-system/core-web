## HTML

Load SCSS globally somewhere in your app:

```scss
@use "@db-ui/components/build/styles/db-ui-42" as *;
```

Use it:

```html
<div class="db-input">
	<input type="text" name="username" aria-labelledby="username-label" />
	<label for="username" id="username-label" aria-hidden="true">Label</label>
</div>
```
