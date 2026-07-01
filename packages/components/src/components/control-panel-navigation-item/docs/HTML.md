## HTML

For general installation and configuration take a look at the [components](https://www.npmjs.com/package/@db-ux/core-components) package.

### Use component

```html index.html
<!-- index.html -->
...
<body>
	<!-- Simple link item -->
	<li class="db-control-panel-navigation-item">
		<a href="mypath">NavigationItem</a>
	</li>

	<!-- With Sub-Navigation (use db-control-panel-navigation-item-group) -->
	<li class="db-control-panel-navigation-item-group">
		<button
			class="db-control-panel-navigation-item-group-expand-button"
			aria-haspopup="true"
			aria-expanded="false"
		>
			Navi-Group 1
		</button>
		<menu class="db-control-panel-navigation-item-group-menu">
			<li class="db-control-panel-navigation-item">
				<a href="mypath">Sub-Navi-Item 1</a>
			</li>
			<li class="db-control-panel-navigation-item">
				<a href="mypath">Sub-Navi-Item 2</a>
			</li>
		</menu>
	</li>
</body>
```
