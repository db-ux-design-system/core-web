## HTML

Load SCSS globally somewhere in your app:

```scss
@use "@db-ui/components/build/styles/db-ui-42" as *;
```

Use it:

```html
<div
	class="db-card"
	data-variant="interactive"
	data-color-variant="neutral-3"
></div>
```
