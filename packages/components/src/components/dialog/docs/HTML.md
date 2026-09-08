## HTML

For general installation and configuration take a look at the [components](https://www.npmjs.com/package/@db-ux/core-components) package.

### General

The dialog is a native `<dialog>` element. It centres itself, sizes to its content and is capped by
`data-container-size` (`small`, `medium`, `large`, `full`, defaults to `medium`).

You are able to overwrite the resulting `max-inline-size` with the `--db-dialog-max-width` CSS variable.

A fixed inset of `40px` is kept between every dialog edge and the corresponding viewport edge, at every container size
including `full`, so that a clickable backdrop area always remains. Overwrite it with the
`--db-dialog-viewport-inset` CSS variable, e.g. `--db-dialog-viewport-inset: 0px;` for an edge-to-edge dialog.

### Use component

Use [Invoker Commands](https://developer.mozilla.org/en-US/docs/Web/API/Invoker_Commands_API) (`command` and
`commandfor` HTML attributes) to declaratively connect buttons with the `<dialog>` element via its `id`. Supported
built-in commands for `<dialog>` are `show-modal`, `show` and `request-close` (recommended over `close`).

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
			<div id="my-dialog-heading" class="db-dialog-header-content">
				<h2>Dialog title</h2>
			</div>
			<button
				class="db-button is-icon-text-replace"
				data-icon="cross"
				data-variant="ghost"
				type="button"
				command="request-close"
				commandfor="my-dialog"
				type="button"
			>
				Close
			</button>
		</div>
		<div class="db-dialog-content">My dialog content</div>
		<div class="db-dialog-footer">
			<button
				class="db-button"
				data-variant="brand"
				command="request-close"
				commandfor="my-dialog"
				type="button"
			>
				Confirm
			</button>
		</div>
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
	<div class="db-dialog-header">
		<div id="my-dialog-heading" class="db-dialog-header-content">
			<h2>Dialog title</h2>
		</div>
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
	<div class="db-dialog-content">Delete this entry?</div>
	<div class="db-dialog-footer">
		<form method="dialog">
			<button class="db-button" value="cancel">Cancel</button>
			<button class="db-button" data-variant="brand" value="confirm">
				Confirm
			</button>
		</form>
	</div>
</dialog>

<script>
	const dialog = document.getElementById("my-dialog");
	dialog?.addEventListener("close", () => {
		console.log(dialog.returnValue); // "cancel" or "confirm"
	});
</script>
```

When the form has fields spread across the content and the footer, keep the `<form method="dialog">` in the content
and associate a footer submit button with it through the `form` attribute referencing the form `id`:

```html index.html
<!-- index.html -->
<dialog id="my-dialog" class="db-dialog">
	<div class="db-dialog-header">
		<div id="my-dialog-heading" class="db-dialog-header-content">
			<h2>Rename entry</h2>
		</div>
	</div>
	<div class="db-dialog-content">
		<form id="my-dialog-form" method="dialog">
			<label class="db-label" for="entry-name">Name</label>
			<input id="entry-name" class="db-input" name="name" />
		</form>
	</div>
	<div class="db-dialog-footer">
		<button class="db-button" form="my-dialog-form" value="cancel">
			Cancel
		</button>
		<button
			class="db-button"
			data-variant="brand"
			form="my-dialog-form"
			value="confirm"
		>
			Save
		</button>
	</div>
</dialog>
```

### Nested overlays

A modal `<dialog>` is rendered in the browser top layer. Overlay content nested inside it renders correctly:
top-layer or fixed-position overlays such as the tooltip and native popovers paint above the dialog, and overlays in
the normal flow (e.g. the `DBCustomSelect` option list) are no longer clipped by the dialog box. Content that exceeds
the dialog height scrolls inside the `db-dialog-content` area.

### Migration from a hand-written modal

The dialog replaces a hand-written modal.

Before, a possible hand-written modal:

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
		<div id="my-dialog-heading" class="db-dialog-header-content">
			<h2>Dialog title</h2>
		</div>
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
| `utils/dialog/ponyfill.ts`              | `closedby` attribute and Invoker Commands | every Browserslist target supports both features | `data-closedby="not-supported"` is set on the dialog, and a click on a `command="request-close"` button calls `requestClose()` on the dialog itself |
| `styles/internal/_dialog-ponyfill.scss` | `closedby` attribute                      | every Browserslist target supports `closedby`    | the close button gets a hit area covering the area outside the dialog box, so clicking the backdrop still closes the dialog                         |

If you do need to provide support for [browser versions that haven't implemented Invoker Commands](https://caniuse.com/wf-invoker-commands), add a feature detection fallback in JavaScript (see example below) or the [polyfill `invokers-polyfill`](https://github.com/keithamus/invokers-polyfill).

In plain HTML you wire these fallbacks yourself: mark the dialog when `closedby` is unsupported (so the CSS backdrop fallback applies) and fall back to event handlers when Invoker Commands are unsupported:

```html index.html
<!-- index.html -->
<script>
	const dialog = document.querySelector("#my-dialog");

	/*
	 * Feature detection for the `closedby` attribute:
	 * If the browser does not support it, mark the dialog so the shipped CSS
	 * backdrop fallback (gated on `[data-closedby="not-supported"]`) extends
	 * the close button's hit area over the backdrop.
	 */
	if (!("closedBy" in HTMLDialogElement.prototype)) {
		dialog?.setAttribute("data-closedby", "not-supported");
	}

	/*
	 * Feature detection for Invoker Commands:
	 * If the browser does not support the `command` and `commandfor`
	 * HTML attributes, we fall back to JavaScript event handlers.
	 */
	if (!("commandForElement" in HTMLButtonElement.prototype)) {
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
