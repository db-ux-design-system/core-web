## HTML

For general installation and configuration take a look at the [components](https://www.npmjs.com/package/@db-ux/core-components) package.

### Use component

```html index.html
<!-- index.html -->
...
<body>
	<nav class="db-breadcrumb" aria-label="Breadcrumb">
		<ol>
			<li class="db-breadcrumb-item">
				<a href="/">Home</a>
			</li>
			<li class="db-breadcrumb-item">
				<a href="/section">Section</a>
			</li>
			<li class="db-breadcrumb-item">
				<a href="/section/page" aria-current="page">Page</a>
			</li>
		</ol>
	</nav>
</body>
```
