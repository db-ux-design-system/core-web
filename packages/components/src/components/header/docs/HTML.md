## HTML

For general installation and configuration take a look at the [components](https://www.npmjs.com/package/@db-ui/components) package.

### Use component

```html index.html
<!-- index.html -->
...
<body>
	<header class="db-header" id="(Default) Regular">
		<dialog class="db-drawer">
			<article
				class="db-drawer-container db-header-drawer"
				data-spacing="small"
				data-rounded="true"
			>
				<header class="db-drawer-header">
					<div class="db-drawer-header-text"></div>
					<button
						class="db-button button-close-drawer"
						data-icon="cross"
						data-variant="ghost"
						data-no-text="true"
					>
						Close Button
					</button>
				</header>
				<div class="db-drawer-content">
					<div class="db-header-drawer-navigation">
						<div class="db-header-navigation">
							<nav
								aria-label="(Default) Regular"
								id="navigation-72e972ba-2aec-4cf2-b07e-4e0105b05cbf"
								class="db-navigation"
							>
								<menu>
									<li
										class="db-navigation-item"
										data-icon="user"
									>
										<a href="#">(Default) Regular</a>
									</li>
									<li
										class="db-navigation-item"
										aria-disabled="true"
									>
										<a href="#"
											>(Default) Regular disabled</a
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
							class="db-button"
							data-icon="user"
							data-variant="ghost"
							data-no-text="true"
						>
							Profile</button
						><button
							class="db-button"
							data-icon="bell"
							data-variant="ghost"
							data-no-text="true"
						>
							Notification</button
						><button
							class="db-button"
							data-icon="question_mark_circle"
							data-variant="ghost"
							data-no-text="true"
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
				<div title="DBHeader" data-icon="db" class="db-brand">
					DBHeader
				</div>
			</div>
			<div class="db-header-navigation-container">
				<div class="db-header-navigation">
					<nav
						aria-label="(Default) Regular"
						id="navigation-fa95a4b9-ebf5-4869-8c98-bd0634d51684"
						class="db-navigation"
					>
						<menu>
							<li class="db-navigation-item" data-icon="user">
								<a href="#">(Default) Regular</a>
							</li>
							<li class="db-navigation-item" aria-disabled="true">
								<a href="#">(Default) Regular disabled</a>
							</li>
						</menu>
					</nav>
				</div>
				<div class="db-header-primary-action">
					<button
						class="db-button"
						data-icon="magnifying_glass"
						data-variant="ghost"
						data-no-text="true"
					>
						Search
					</button>
				</div>
			</div>
			<div class="db-header-action-container">
				<div class="db-header-burger-menu-container">
					<button
						id="button-burger-menu"
						class="db-button"
						data-icon="menu"
						data-variant="ghost"
						data-no-text="true"
					>
						BurgerMenu
					</button>
				</div>
				<div class="db-header-secondary-action">
					<button
						class="db-button"
						data-icon="user"
						data-variant="ghost"
						data-no-text="true"
					>
						Profile</button
					><button
						class="db-button"
						data-icon="bell"
						data-variant="ghost"
						data-no-text="true"
					>
						Notification</button
					><button
						class="db-button"
						data-icon="question_mark_circle"
						data-variant="ghost"
						data-no-text="true"
					>
						Help
					</button>
				</div>
			</div>
		</div>
	</header>
</body>
```
