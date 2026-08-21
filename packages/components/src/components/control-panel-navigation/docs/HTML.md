## HTML

For general installation and configuration look at the [components](https://www.npmjs.com/package/@db-ux/core-components) package.

### Use component

```html index.html
<!-- index.html -->
...
<body>
	<nav class="db-control-panel-navigation">
		<menu>
			<li class="db-control-panel-navigation-item-group">
				<button
					class="db-control-panel-navigation-item-group-expand-button"
					aria-haspopup="true"
					aria-expanded="false"
				>
					Navi-Group 1
				</button>
				<menu class="db-control-panel-navigation-item-group-menu">
					<li class="db-control-panel-navigation-item-group">
						<button
							class="db-control-panel-navigation-item-group-expand-button"
							aria-haspopup="true"
							aria-expanded="false"
						>
							Sub-Group 1
						</button>
						<menu
							class="db-control-panel-navigation-item-group-menu"
						>
							<li class="db-control-panel-navigation-item">
								<a href="#" aria-current="page"
									>Sub-Sub-Navi-Item 1</a
								>
							</li>

							<li class="db-control-panel-navigation-item">
								<a href="#">Sub-Sub-Navi-Item 2</a>
							</li>
						</menu>
					</li>

					<li class="db-control-panel-navigation-item">
						<a href="#">Sub-Navi-Item 2</a>
					</li>
				</menu>
			</li>

			<li
				class="db-control-panel-navigation-item"
				data-icon="x_placeholder"
			>
				<a href="#">Navi-Item 2</a>
			</li>

			<li class="db-control-panel-navigation-item" aria-disabled="true">
				<a href="#">Navi-Item 3</a>
			</li>
		</menu>
	</nav>
</body>
```
