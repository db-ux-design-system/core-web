## HTML

### Use component

```html
<nav class="db-breadcrumb" aria-label="breadcrumb">
	<ol class="db-breadcrumb-list">
		<li><a href="#">Home</a></li>
		<li><a href="#">Category</a></li>
		<li aria-current="page">Current Page</li>
	</ol>
</nav>
```

### Import styles

```scss app.scss
@forward "@db-ux/core-components/build/styles/relative";
```
