## HTML

Load SCSS globally somewhere in your app:

```scss
@forward "@db-ui/components/build/styles/db-ui-42";
```

Use it:

```html
<div class="db-input">
	<label for="username">Label</label>
	<input type="text" name="username" id="username" />
</div>
```
