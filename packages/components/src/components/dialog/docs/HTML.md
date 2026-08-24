## HTML

For general installation and configuration take a look at the [components](https://www.npmjs.com/package/@db-ux/core-components) package.

### General

The dialog is a native `<dialog>` element. It centres itself, sizes to its content and is capped by
`data-container-size` (`small`, `medium`, `large`, `full`, defaults to `medium`).

You are able to overwrite the resulting `max-inline-size` with the `--db-dialog-max-width:` CSS variable.

A fixed inset of `40px` is kept between every dialog edge and the corresponding viewport edge, at every container size
including `full`, so that a clickable backdrop area always remains. Overwrite it with the
`--db-dialog-viewport-inset:` CSS variable, e.g. `--db-dialog-viewport-inset: 0px;` for an edge-to-edge dialog.

### Use component

Use [Invoker Commands](https://developer.mozilla.org/en-US/docs/Web/API/Invoker_Commands_API) (`command` and
`commandfor` HTML attributes) to declaratively connect buttons with the `<dialog>` element via its `id`. Supported
built-in commands for `<dialog>` are `show-modal`, `close` and `request-close`.

Prefer `request-close` for close buttons: it fires a `cancel` event before closing, so you can veto the close with
`event.preventDefault()`. `close` dismisses the dialog immediately without that opportunity.

```html index.html
<!-- index.html -->
...
<body>
	<button class="db-button" command="show-modal" commandfor="my-dialog">
		Open dialog
	</button>
	<dialog
		id="my-dialog"
		class="db-dialog"
		data-backdrop="strong"
		data-container-size="medium"
		closedby="any"
		aria-labelledby="my-dialog-heading"
	>
		<div class="db-dialog-header">
			<header id="my-dialog-heading" class="db-dialog-header-container">
				<h2>Dialog title</h2>
			</header>
			<button
				class="db-button is-icon-text-replace"
				data-icon="cross"
				data-variant="ghost"
				type="button"
				command="request-close"
				commandfor="my-dialog"
			>
				Close
			</button>
		</div>
		<div class="db-dialog-content">My dialog content</div>
		<footer class="db-dialog-footer">
			<button
				class="db-button"
				data-variant="brand"
				command="close"
				commandfor="my-dialog"
			>
				Confirm
			</button>
		</footer>
	</dialog>
</body>
```

Set `data-backdrop="none"` and `closedby="closerequest"` together to get a non-modal dialog: no dimmed backdrop, no
focus trap, and clicks outside the dialog leave it open.

### Return a value

A submit control with `formmethod="dialog"` closes the dialog on submission and writes its `value` into
`dialog.returnValue`, so you do not need any close handling of your own. A `<form method="dialog">` does the same for
all of its submit buttons.

```html index.html
<!-- index.html -->
<dialog id="my-dialog" class="db-dialog">
	<div class="db-dialog-content">Delete this entry?</div>
	<footer class="db-dialog-footer">
		<form>
			<button class="db-button" formmethod="dialog" value="cancel">
				Cancel
			</button>
			<button
				class="db-button"
				data-variant="brand"
				formmethod="dialog"
				value="confirm"
			>
				Confirm
			</button>
		</form>
	</footer>
</dialog>

<script>
	const dialog = document.getElementById("my-dialog");
	dialog?.addEventListener("close", () => {
		console.log(dialog.returnValue); // "cancel" or "confirm"
	});
</script>
```

### Top-layer limitation

A modal `<dialog>` is rendered in the browser top layer. Elements inside the dialog that create a top layer of their
own or that rely on the stacking context of the page do not escape the dialog box. This affects the tooltip, the
popover and `DBCustomSelect`: their overlays are clipped at the dialog edges or stack below the dialog instead of
above it. No workaround ships in this phase, so avoid these components close to the dialog edges, or keep their
content inside the scrollable `db-dialog-content` area.

### Migration from a hand-written modal

One row per public property and per slot of the dialog, against the construct a hand-written modal needs and against
the `DBDrawer` equivalent:

| Dialog (HTML)                     | Hand-written modal                                                       | `DBDrawer`                   |
| --------------------------------- | ------------------------------------------------------------------------ | ---------------------------- |
| `open` attribute                  | `showModal()` / `show()` / `close()` calls plus your own state flag      | `open`                       |
| `data-backdrop="strong \| weak"`  | overlay element with a dim colour, `z-index` and scroll locking          | `data-backdrop`, same values |
| `data-backdrop="none"`            | `show()` instead of `showModal()`, no overlay element                    | `data-backdrop="none"`       |
| `data-container-size`             | media queries and `max-width` values per breakpoint                      | `data-container-size`        |
| `closedby="any"`                  | click listener on the overlay comparing `event.target`                   | `closedby="any"`             |
| `closedby="closerequest"`         | `keydown` listener for Escape                                            | `closedby="closerequest"`    |
| `close` event                     | your own callback after every close path                                 | `close` event                |
| `cancel` event                    | Escape handler that can be vetoed                                        | `cancel` event               |
| `.db-dialog-header` (header slot) | heading markup plus a close button plus `aria-labelledby` wiring by hand | `.db-drawer-header`          |
| `.db-dialog-footer` (footer slot) | action row with its own divider, padding and gap                         | `.db-drawer-footer`          |
| `.db-dialog-content`              | scroll container with `overflow: auto` and `overscroll-behavior`         | `.db-drawer-content`         |
| `class`, `id`, `data-*`, `aria-*` | same attributes on your own root element                                 | same                         |

The drawer properties `direction`, `position`, `rounded`, `showSpacing` and `variant` as well as
`data-backdrop="invisible"` have no dialog equivalent: the dialog is always centred, always rounded, always spaced by
the viewport inset, and non-modal usage is covered by `data-backdrop="none"`.

Before, a hand-written modal:

```html index.html
<!-- index.html -->
<div class="my-modal-overlay" hidden>
	<div class="my-modal" role="dialog" aria-modal="true" aria-labelledby="t">
		<h2 id="t">Dialog title</h2>
		<button type="button" class="my-modal-close">Close</button>
		<div class="my-modal-content">My dialog content</div>
	</div>
</div>

<script>
	const overlay = document.querySelector(".my-modal-overlay");
	document.querySelector(".my-modal-open").addEventListener("click", () => {
		overlay.hidden = false;
		document.body.style.overflow = "hidden";
	});
	document.querySelector(".my-modal-close").addEventListener("click", () => {
		overlay.hidden = true;
		document.body.style.overflow = "";
	});
	document.addEventListener("keydown", (event) => {
		if (event.key === "Escape") {
			overlay.hidden = true;
		}
	});
</script>
```

After, with the dialog:

```html index.html
<!-- index.html -->
<button class="db-button" command="show-modal" commandfor="my-dialog">
	Open dialog
</button>
<dialog
	id="my-dialog"
	class="db-dialog"
	data-backdrop="strong"
	closedby="any"
	aria-labelledby="my-dialog-heading"
>
	<div class="db-dialog-header">
		<header id="my-dialog-heading" class="db-dialog-header-container">
			<h2>Dialog title</h2>
		</header>
		<button
			class="db-button is-icon-text-replace"
			data-icon="cross"
			data-variant="ghost"
			type="button"
			command="request-close"
			commandfor="my-dialog"
		>
			Close
		</button>
	</div>
	<div class="db-dialog-content">My dialog content</div>
</dialog>
```

Focus trap, scroll locking, backdrop dismissal, Escape handling and the `close` and `cancel` events come from the
platform, so the script goes away entirely.

### Ponyfill

Two fallbacks ship for browser features that our [Browserslist](https://browsersl.ist) targets do not fully cover yet
(currently blocked by Firefox ESR). Both live in dedicated files so they can be deleted in one step.

| File                                    | Missing feature                           | Deleted when                                     | Behaviour without native support                                                                                                                    |
| --------------------------------------- | ----------------------------------------- | ------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| `utils/dialog-ponyfill.ts`              | `closedby` attribute and Invoker Commands | every Browserslist target supports both features | `data-closedby="not-supported"` is set on the dialog, and a click on a `command="request-close"` button calls `requestClose()` on the dialog itself |
| `styles/internal/_dialog-ponyfill.scss` | `closedby` attribute                      | every Browserslist target supports `closedby`    | the close button gets a hit area covering the area outside the dialog box, so clicking the backdrop still closes the dialog                         |

In plain HTML you wire these fallbacks yourself. Feature-detect Invoker Commands and fall back to event handlers:

```html index.html
<!-- index.html -->
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
		const dialog = document.getElementById("my-dialog");
		document
			.querySelector('[commandfor="my-dialog"][command="show-modal"]')
			?.addEventListener("click", () => {
				dialog?.showModal?.();
			});
		document
			.querySelector('[commandfor="my-dialog"][command="request-close"]')
			?.addEventListener("click", () => {
				dialog?.requestClose?.();
			});
	}
</script>
```
