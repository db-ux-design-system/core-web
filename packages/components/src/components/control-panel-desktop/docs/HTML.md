## HTML

For general installation and configuration take a look at the [components](https://www.npmjs.com/package/@db-ux/core-components) package.

### Use component

Use [Invoker Commands](https://developer.mozilla.org/en-US/docs/Web/API/Invoker_Commands_API) (`command` and `commandfor` HTML attributes) to declaratively connect the burger menu button with the drawer `<dialog>` element, and the close button inside the drawer. Supported built-in commands for `<dialog>` are `show-modal` and `close`.

If you do need to provide support for [browser versions that haven't implemented Invoker Commands](https://caniuse.com/wf-invoker-commands), add a feature detection fallback in JavaScript (see example below) or the [polyfill `invokers-polyfill`](https://github.com/keithamus/invokers-polyfill).

```html index.html
<!-- index.html -->
...
<body>
	<control-panel-desktop class="db-control-panel-desktop">
		<dialog id="header-drawer" class="db-drawer">
			<article
				class="db-drawer-container db-control-panel-desktop-drawer"
				data-spacing="small"
				data-rounded="true"
			>
				<control-panel-desktop class="db-drawer-control-panel-desktop">
					<div class="db-drawer-control-panel-desktop-text"></div>
					<button
						class="db-button button-close-drawer is-icon-text-replace"
						data-icon="cross"
						data-variant="text"
						command="close"
						commandfor="header-drawer"
					>
						Close Button
					</button>
				</control-panel-desktop>
				<div class="db-drawer-content">
					<div class="db-control-panel-desktop-drawer-navigation">
						<div class="db-control-panel-desktop-navigation">
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
						<div class="db-control-panel-desktop-meta-navigation">
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
					<div class="db-control-panel-desktop-secondary-action">
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
		<div class="db-control-panel-desktop-meta-navigation">
			<a class="db-link" href="#" tabindex="0" data-content="internal"
				>Imprint</a
			><a class="db-link" href="#" tabindex="0" data-content="internal"
				>Help</a
			>
		</div>
		<div class="db-control-panel-desktop-navigation-bar">
			<div class="db-control-panel-desktop-control-panel-brand-container">
				<div class="db-control-panel-brand">
					<a href="/"
						><img
							class="db-logo"
							src="https://design-system.deutschebahn.com/images/db_logo.svg"
							alt=""
							height="24"
							width="34" /></a
					>DBControlPanelDesktop
				</div>
			</div>
			<div class="db-control-panel-desktop-navigation-container">
				<div class="db-control-panel-desktop-navigation">
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
				<div class="db-control-panel-desktop-primary-action">
					<button
						class="db-button is-icon-text-replace"
						data-icon="magnifying_glass"
						data-variant="text"
					>
						Search
					</button>
				</div>
			</div>
			<div class="db-control-panel-desktop-action-container">
				<div class="db-control-panel-desktop-burger-menu-container">
					<button
						class="db-button is-icon-text-replace"
						data-icon="menu"
						data-variant="text"
						command="show-modal"
						commandfor="header-drawer"
					>
						BurgerMenu
					</button>
				</div>
				<div class="db-control-panel-desktop-secondary-action">
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
	</control-panel-desktop>

	<script>
		/*
		 * Feature detection for Invoker Commands:
		 * If the browser does not support the `command` and `commandfor`
		 * HTML attributes, we fall back to JavaScript event handlers.
		 */
		if (
			!("command" in HTMLButtonElement.prototype) ||
			!("commandFor" in HTMLButtonElement.prototype)
		) {
			const burgerMenuButton = document.querySelector(
				'[commandfor="header-drawer"][command="show-modal"]'
			);
			const closeButton = document.querySelector(
				'[commandfor="header-drawer"][command="close"]'
			);
			const drawer = document.getElementById("header-drawer");

			burgerMenuButton?.addEventListener("click", () => {
				drawer?.showModal?.();
			});
			closeButton?.addEventListener("click", () => {
				drawer?.close?.();
			});
		}
	</script>
</body>
```
