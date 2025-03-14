## HTML

For general installation and configuration take a look at the [components](https://www.npmjs.com/package/@db-ux/core-components) package.

### Use component

```html index.html
<!-- index.html -->
...
<body>
	<header class="db-header">
		<dialog class="db-drawer">
			<article
				class="db-drawer-container db-header-drawer"
				data-spacing="small"
				data-rounded="true"
			>
				<header class="db-drawer-header">
					<div class="db-drawer-header-text"></div>
					<button
						class="db-button button-close-drawer is-icon-text-replace"
						data-icon="cross"
						data-variant="text"
					>
						Close Button
					</button>
				</header>
				<div class="db-drawer-content">
					<div class="db-header-drawer-navigation">
						<div class="db-header-navigation">
							<nav class="db-main-navigation">
								<menu>
									<li
										class="db-navigation-item"
										data-icon="x_placeholder"
									>
										<a href="#">Regular (Default)</a>
									</li>
									<li
										class="db-navigation-item"
										aria-disabled="true"
									>
										<a href="#"
											>Regular (Default) disabled</a
										>
									</li>
								</menu>
							</nav>
						</div>
						<div class="db-header-meta-navigation">
							<a
								class="db-link"
								href="#"
								tabindex="0"
								data-content="internal"
								>Imprint</a
							><a
								class="db-link"
								href="#"
								tabindex="0"
								data-content="internal"
								>Help</a
							>
						</div>
					</div>
					<div class="db-header-secondary-action">
						<button
							class="db-button is-icon-text-replace"
							data-icon="x_placeholder"
							data-variant="text"
						>
							Profile</button
						><button
							class="db-button is-icon-text-replace"
							data-icon="alert"
							data-variant="text"
						>
							Notification</button
						><button
							class="db-button is-icon-text-replace"
							data-icon="help"
							data-variant="text"
						>
							Help
						</button>
					</div>
				</div>
			</article>
		</dialog>
		<div class="db-header-meta-navigation">
			<a class="db-link" href="#" tabindex="0" data-content="internal"
				>Imprint</a
			><a class="db-link" href="#" tabindex="0" data-content="internal"
				>Help</a
			>
		</div>
		<div class="db-header-navigation-bar">
			<div class="db-header-brand-container">
				<div class="db-brand">
					<a href="/"
						><img
							class="db-logo"
							src="https://design-system.deutschebahn.com/images/db_logo.svg"
							alt=""
							height="24"
							width="34" /></a
					>DBHeader
				</div>
			</div>
			<div class="db-header-navigation-container">
				<div class="db-header-navigation">
					<nav class="db-navigation">
						<menu>
							<li
								class="db-navigation-item"
								data-icon="x_placeholder"
							>
								<a href="#">Regular (Default)</a>
							</li>
							<li class="db-navigation-item" aria-disabled="true">
								<a href="#">Regular (Default) disabled</a>
							</li>
						</menu>
					</nav>
				</div>
				<div class="db-header-primary-action">
					<button
						class="db-button is-icon-text-replace"
						data-icon="magnifying_glass"
						data-variant="text"
					>
						Search
					</button>
				</div>
			</div>
			<div class="db-header-action-container">
				<div class="db-header-burger-menu-container">
					<button
						class="db-button is-icon-text-replace"
						data-icon="menu"
						data-variant="text"
					>
						BurgerMenu
					</button>
				</div>
				<div class="db-header-secondary-action">
					<button
						class="db-button is-icon-text-replace"
						data-icon="x_placeholder"
						data-variant="text"
					>
						Profile</button
					><button
						class="db-button is-icon-text-replace"
						data-icon="alert"
						data-variant="text"
					>
						Notification</button
					><button
						class="db-button is-icon-text-replace"
						data-icon="help"
						data-variant="text"
					>
						Help
					</button>
				</div>
			</div>
		</div>
	</header>
</body>
```
