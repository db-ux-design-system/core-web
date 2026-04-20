## HTML

For general installation and configuration take a look at the [components](https://www.npmjs.com/package/@db-ux/core-components) package.

### General

If you use `width !== full` you are able to overwrite the `max-width` with `--db-drawer-max-width:` CSS variable.

### Use component

Use [Invoker Commands](https://developer.mozilla.org/en-US/docs/Web/API/Invoker_Commands_API) (`command` and `commandfor` HTML attributes) to declaratively connect buttons with the `<dialog>` element. Supported built-in commands for `<dialog>` are `show-modal` and `close`.

If you do need to provide support for [browser versions that haven't implemented Invoker Commands](https://caniuse.com/wf-invoker-commands), add a feature detection fallback in JavaScript (see example below) or the [polyfill `invokers-polyfill`](https://github.com/keithamus/invokers-polyfill).

```html index.html
<!-- index.html -->
...
<body>
	<button class="db-button" command="show-modal" commandfor="my-drawer">
		Open Drawer
	</button>
	<dialog id="my-drawer" class="db-drawer" data-backdrop="true">
		<article class="db-drawer-container">
			<header class="db-drawer-header">
				<button
					class="db-button button-close-drawer is-icon-text-replace"
					data-icon="cross"
					data-variant="ghost"
					command="close"
					commandfor="my-drawer"
				>
					Close Button
				</button>
			</header>
			<div class="db-drawer-content">My Drawer content</div>
		</article>
	</dialog>

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
			const openButton = document.querySelector(
				'[commandfor="my-drawer"][command="show-modal"]'
			);
			const closeButton = document.querySelector(
				'[commandfor="my-drawer"][command="close"]'
			);
			const drawer = document.getElementById("my-drawer");

			openButton?.addEventListener("click", () => {
				drawer?.showModal?.();
			});
			closeButton?.addEventListener("click", () => {
				drawer?.close?.();
			});
		}
	</script>
</body>
```
