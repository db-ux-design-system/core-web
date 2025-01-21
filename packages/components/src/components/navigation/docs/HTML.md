<!--
SPDX-FileCopyrightText: 2025 DB Systel GmbH

SPDX-License-Identifier: Apache-2.0
-->

## HTML

For general installation and configuration look at the [components](https://www.npmjs.com/package/@db-ui/components) package.

### Use component

```html index.html
<!-- index.html -->
...
<body>
	<nav class="db-navigation">
		<menu>
			<li class="db-navigation-item">
				<button
					class="db-navigation-item-expand-button"
					aria-haspopup="true"
				>
					Navi-Item 1
				</button>
				<menu class="db-sub-navigation">
					<li class="db-navigation-item">
						<button
							class="db-navigation-item-expand-button"
							aria-haspopup="true"
						>
							Sub-Navi-Item 1
						</button>
						<menu class="db-sub-navigation">
							<li class="db-navigation-item">
								<a href="#" aria-current="page"
									>Sub-Sub-Navi-Item 1</a
								>
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

			<li class="db-navigation-item" data-icon="x_placeholder">
				<a href="#">Navi-Item 2</a>
			</li>

			<li class="db-navigation-item" aria-disabled="true">
				<a href="#">Navi-Item 3</a>
			</li>
		</menu>
	</nav>
</body>
```
