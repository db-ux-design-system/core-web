<!--
SPDX-FileCopyrightText: 2025 DB Systel GmbH

SPDX-License-Identifier: Apache-2.0
-->

## HTML

For general installation and configuration take a look at the [components](https://www.npmjs.com/package/@db-ux/core-components) package.

### General

If you use `width !== full` you are able to overwrite the `max-width` with `--db-drawer-max-width:` CSS variable.

### Use component

```html index.html
<!-- index.html -->
...
<body>
	<dialog class="db-drawer" data-backdrop="true" open>
		<article class="db-drawer-container">
			<header class="db-drawer-header">
				<button
					class="db-button button-close-drawer is-icon-text-replace"
					data-icon="cross"
					data-variant="ghost"
				>
					Close Button
				</button>
			</header>
			<div class="db-drawer-content">My Drawer content</div>
		</article>
	</dialog>
</body>
```
