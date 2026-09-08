## HTML

For general installation and configuration take a look at the [components](https://www.npmjs.com/package/@db-ux/core-components) package.

### General

If you use `containerSize !== full` you are able to overwrite the `max-width` with `--db-drawer-max-width:` CSS variable.

### Use component

Use [Invoker Commands](https://developer.mozilla.org/en-US/docs/Web/API/Invoker_Commands_API) (`command` and
`commandfor` HTML attributes) to declaratively connect buttons with the `<dialog>` element via its `id`. Supported
built-in commands for `<dialog>` are `show-modal`, `show` and `request-close` (recommended over `close`).

Prefer `request-close` for close buttons: it fires a `cancel` event before closing, so you can veto the close with
`event.preventDefault()`. `close` dismisses the drawer immediately without that opportunity.

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
					command="request-close"
					commandfor="my-drawer"
				>
					Close Button
				</button>
			</header>
			<div class="db-drawer-content">My Drawer content</div>
		</article>
	</dialog>
</body>
```

### Ponyfill

Two fallbacks ship for browser features that our [Browserslist](https://browsersl.ist) targets do not fully cover yet
(currently blocked by Firefox ESR). Both live in dedicated files so they can be deleted in one step.

| File                                    | Missing feature                           | Deleted when                                     | Behaviour without native support                                                                                                                    |
| --------------------------------------- | ----------------------------------------- | ------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| `utils/dialog/ponyfill.ts`              | `closedby` attribute and Invoker Commands | every Browserslist target supports both features | `data-closedby="not-supported"` is set on the drawer, and a click on a `command="request-close"` button calls `requestClose()` on the drawer itself |
| `styles/internal/_dialog-ponyfill.scss` | `closedby` attribute                      | every Browserslist target supports `closedby`    | the close button gets a hit area covering the area outside the drawer box, so clicking the backdrop still closes the drawer                         |

If you do need to provide support for [browser versions that haven't implemented Invoker Commands](https://caniuse.com/wf-invoker-commands), add a feature detection fallback in JavaScript (see example below) or the [polyfill `invokers-polyfill`](https://github.com/keithamus/invokers-polyfill).

In plain HTML you wire these fallbacks yourself: mark the drawer when `closedby` is unsupported (so the CSS backdrop fallback applies) and fall back to event handlers when Invoker Commands are unsupported:

```html index.html
<!-- index.html -->
<script>
	const drawer = document.querySelector("#my-drawer");

	/*
	 * Feature detection for the `closedby` attribute:
	 * If the browser does not support it, mark the drawer so the shipped CSS
	 * backdrop fallback (gated on `[data-closedby="not-supported"]`) extends
	 * the close button's hit area over the backdrop.
	 */
	if (!("closedBy" in HTMLDialogElement.prototype)) {
		drawer?.setAttribute("data-closedby", "not-supported");
	}

	/*
	 * Feature detection for Invoker Commands:
	 * If the browser does not support the `command` and `commandfor`
	 * HTML attributes, we fall back to JavaScript event handlers.
	 */
	if (!("commandForElement" in HTMLButtonElement.prototype)) {
		document
			.querySelector('[commandfor="my-drawer"][command="show-modal"]')
			?.addEventListener("click", () => {
				drawer?.showModal?.();
			});
		document
			.querySelector('[commandfor="my-drawer"][command="request-close"]')
			?.addEventListener("click", () => {
				drawer?.requestClose?.();
			});
	}
</script>
```
