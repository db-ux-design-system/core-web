## HTML

For general installation and configuration look at the [components](https://www.npmjs.com/package/@db-ui/components) package.

### Use component

```html index.html
<!-- index.html -->
...
<body>
	<nav class="db-main-navigation">
		<menu>
			<li class="db-navigation-item" aria-current="page">
				<button
					class="db-navigation-item-expand-button"
					aria-haspopup="true"
				>
					Navi-Item 1
				</button>
				<menu class="db-sub-navigation">
					<li class="db-navigation-item" aria-current="page">
						<button
							class="db-navigation-item-expand-button"
							aria-haspopup="true"
						>
							Sub-Navi-Item 1
						</button>
						<menu class="db-sub-navigation">
							<li class="db-navigation-item" aria-current="page">
								<a href="#">Sub-Sub-Navi-Item 1</a>
							</li>

							<li class="db-navigation-item">
								<a href="#">Sub-Sub-Navi-Item 2</a>
							</li>
						</menu>
					</li>

					<li class="db-navigation-item">
						<a href="#">Sub-Navi-Item 2</a>
					</li>
				</menu>
			</li>

			<li class="db-navigation-item" data-icon="account">
				<a href="#">Navi-Item 2</a>
			</li>

			<li class="db-navigation-item" aria-disabled="true">
				<a href="#">Navi-Item 3</a>
			</li>
		</menu>
	</nav>
</body>
```
