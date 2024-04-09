## HTML

For general installation and configuration take a look at the [components](https://www.npmjs.com/package/@db-ui/components) package.

### Use component

```html index.html
<!-- index.html -->
...
<body>
	<header class="db-header" id="regular (Default)">
		<dialog
			class="db-drawer"
			id="drawer-bffe6918-05e7-4baa-b532-66467e61905c"
		>
			<article
				class="db-drawer-container db-header-drawer"
				data-spacing="small"
				data-rounded="true"
			>
				<header class="db-drawer-header">
					<div class="db-drawer-header-text"></div>
					<button
						id="button-9c38e111-6ef8-4322-9da4-b72cf8223e48"
						class="db-button button-close-drawer is-icon-text-replace"
						data-icon="close"
						data-variant="text"
					>
						Close Button
					</button>
				</header>
				<div class="db-drawer-content">
					<div class="db-header-drawer-navigation">
						<div class="db-header-navigation">
							<nav
								id="main-navigation-8f8a0873-90c6-4674-9860-5685004b0705"
								class="db-main-navigation"
							>
								<menu>
									<li
										id="navigation-item-60f3835c-adb0-4267-832a-d8324162d3f6"
										class="db-navigation-item"
										data-icon="account"
									>
										<a href="#">Regular (Default)</a>
									</li>
									<li
										id="navigation-item-3281f02e-bbc3-4b43-a0dd-b79813fd94f7"
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
								id="link-8bfc3e9b-5c1e-43ec-b85a-6601afa9e972"
								class="db-link"
								href="#"
								tabindex="0"
								data-content="internal"
								>Imprint</a
							><a
								id="link-cbfd6439-a3b2-4360-8127-cb524476d4d5"
								class="db-link"
								href="#"
								tabindex="0"
								data-content="internal"
								>Help</a
							>
						</div>
					</div>
					<div class="db-header-action-bar">
						<button
							id="button-65ba5268-2f08-47e3-9884-283c7f3e0be8"
							class="db-button is-icon-text-replace"
							data-icon="account"
							data-variant="text"
						>
							Profile</button
						><button
							id="button-22ab64a6-b2ce-4d7d-99a8-aa6bb8b9f998"
							class="db-button is-icon-text-replace"
							data-icon="alert"
							data-variant="text"
						>
							Notification</button
						><button
							id="button-179a8a69-df76-4e8b-a09a-681d70431101"
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
			<a
				id="link-09fe5d7a-451a-47ba-bab0-dd6596f3d192"
				class="db-link"
				href="#"
				tabindex="0"
				data-content="internal"
				>Imprint</a
			><a
				id="link-35eca2e2-12d7-4765-b869-b00329a69351"
				class="db-link"
				href="#"
				tabindex="0"
				data-content="internal"
				>Help</a
			>
		</div>
		<div class="db-header-navigation-bar">
			<div class="db-header-brand-container">
				<div
					id="brand-b39a57f2-1fc9-4937-8eeb-f99f29406d41"
					class="db-brand"
				>
					<a href="/"
						><img
							class="db-logo"
							src="https://db-ui.github.io/images/db_logo.svg"
							alt=""
							height="24"
							width="34" /></a
					>DBHeader
				</div>
			</div>
			<div class="db-header-navigation-container">
				<div class="db-header-navigation">
					<nav
						id="main-navigation-0405fe64-0c12-4362-91a2-2f9fae857bac"
						class="db-main-navigation"
					>
						<menu>
							<li
								id="navigation-item-7191fbb8-5319-4480-94d5-c2813fd8b029"
								class="db-navigation-item"
								data-icon="account"
							>
								<a href="#">Regular (Default)</a>
							</li>
							<li
								id="navigation-item-9da396bf-2a41-402e-a9d8-cf54a219919b"
								class="db-navigation-item"
								aria-disabled="true"
							>
								<a href="#">Regular (Default) disabled</a>
							</li>
						</menu>
					</nav>
				</div>
				<div class="db-header-call-to-action">
					<button
						id="button-46f070bc-adb3-4729-97ae-bfa41e62e51b"
						class="db-button is-icon-text-replace"
						data-icon="search"
						data-variant="text"
					>
						Search
					</button>
				</div>
			</div>
			<div class="db-header-action-container">
				<div class="db-header-burger-menu-container">
					<button
						id="button-burger-menu"
						class="db-button is-icon-text-replace"
						data-icon="menu"
						data-variant="text"
					>
						BurgerMenu
					</button>
				</div>
				<div class="db-header-action-bar">
					<button
						id="button-cad51b9a-a428-42ea-91e7-ec52539f8f37"
						class="db-button is-icon-text-replace"
						data-icon="account"
						data-variant="text"
					>
						Profile</button
					><button
						id="button-b706112c-8f61-4f8c-a814-637c94648e54"
						class="db-button is-icon-text-replace"
						data-icon="alert"
						data-variant="text"
					>
						Notification</button
					><button
						id="button-3d93a031-6a65-4739-bae2-b92fe3820458"
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
