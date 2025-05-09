---
force: true
to: src/components/<%= name %>/docs/HTML.md
---
## HTML

For general installation and configuration take a look at the [components](https://www.npmjs.com/package/@db-ux/core-components) package.

### Use component

```html index.html
<!-- index.html -->
...
<body>
	<div class="db-<%= name %>">
		<%= h.changeCase.pascal(name) %>
	</div>
</body>
```

