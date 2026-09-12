## Angular

For general installation and configuration take a look at the [ngx-core-components](https://www.npmjs.com/package/@db-ux/ngx-core-components) package.

### General

`DBDialog` renders a native [`<dialog>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dialog) element in the top layer. The browser centers it, `backdrop` decides whether it opens modal (`strong`, `weak`) or non-modal (`none`), and `containerSize` (`small`, `medium`, `large`, `full`, default `medium`) sets the maximum inline size.

You are able to overwrite the resulting `max-inline-size` with the `--db-dialog-max-width` CSS variable (at every `containerSize`, capped by the viewport inset).

Every `containerSize`, `full` included, keeps a gap of `--db-dialog-viewport-inset` (default `40px`) to the viewport edges, so an area outside the dialog stays available for backdrop clicks. Set it to `0px` for an edge-to-edge dialog.

### Load component

```ts app.component.ts
// app.component.ts
import {
	DBButton,
	DBDialog,
	DBDialogFooter,
	DBDialogHeader
} from '@db-ux/ngx-core-components';

@Component({
	// ...
	standalone: true,
	imports: [..., DBButton, DBDialog, DBDialogFooter, DBDialogHeader]
	// ...
})
```

### Use Component

Project `db-dialog-header` with the `header` attribute and `db-dialog-footer` with the `footer` attribute. `DBDialogHeader` links its heading to the dialog via `aria-labelledby` and renders the close button, so it should be part of every dialog.

Set `backdrop="none"` to get a non-modal dialog: no dimmed backdrop, no focus trap, and clicks outside the dialog
leave it open.

#### Invoker Commands

Use [Invoker Commands](https://developer.mozilla.org/en-US/docs/Web/API/Invoker_Commands_API) (`command` and `commandfor`) to open and close the dialog declaratively, without any component state. `commandfor` references the `id` of the dialog. The built-in commands for `<dialog>` are `show-modal`, `close` and `request-close` (`request-close` is recommended over `close`).

Prefer `request-close` for close buttons: it fires a `cancel` event before closing, so you can veto the close with `event.preventDefault()`. `close` dismisses the dialog immediately without that opportunity.

There is no built-in command to open a dialog non-modally (`backdrop="none"`). Open it via the `open` property instead (or a [custom `--` command](https://developer.mozilla.org/en-US/docs/Web/API/Invoker_Commands_API#custom_commands) whose `command` event handler calls `dialog.show()`).

`DBDialog` already ponyfills `request-close` and the backdrop click for [browser versions that haven't implemented Invoker Commands](https://caniuse.com/wf-invoker-commands) (see [Ponyfill files](#ponyfill-files) below), so you do not have to. Command-based _opening_ (`show-modal`) is not ponyfilled, though: if you need to open via a command in those browsers, use the `open` property (as in [Manage component by state](#manage-component-by-state)) or add the [polyfill `invokers-polyfill`](https://github.com/keithamus/invokers-polyfill).

```html app.component.html
<!-- app.component.html -->

<db-button command="show-modal" commandfor="my-dialog">Open dialog</db-button>

<db-dialog id="my-dialog">
	<db-dialog-header header text="Dialog title" closeButtonText="Close">
	</db-dialog-header>
	My dialog content
	<db-dialog-footer footer>
		<db-button command="request-close" commandfor="my-dialog">
			Confirm
		</db-button>
	</db-dialog-footer>
</db-dialog>
```

The close button inside `DBDialogHeader` already uses `command="request-close"` with the resolved dialog `id`.

#### Manage component by state

```html app.component.html
<!-- app.component.html -->

<db-button (click)="toggleDialog(true)">Open dialog</db-button>

<db-dialog
	[open]="openDialog"
	backdrop="strong"
	containerSize="medium"
	(close)="toggleDialog(false)"
	(cancel)="onCancel()"
>
	<db-dialog-header header text="Dialog title" closeButtonText="Close">
	</db-dialog-header>
	My dialog content
	<db-dialog-footer footer>
		<db-button variant="brand" (click)="toggleDialog(false)">
			Confirm
		</db-button>
	</db-dialog-footer>
</db-dialog>
```

```ts app.component.ts
// app.component.ts
export class AppComponent {
	openDialog: boolean = false;
	toggleDialog = (open: boolean) => {
		this.openDialog = open;
	};
	onCancel = () => {
		// fired before the dialog closes via ESC, backdrop click or `request-close`
		this.openDialog = false;
	};
}
```

### Return a value

Put a `<form method="dialog">` in the dialog content. Submitting it closes the dialog without submitting the form to a server and writes the activating button's `value` to `dialog.returnValue`. Read that value from the event target in the `close` handler. If you place the submit buttons in the footer (outside the form), associate them with the form via the `form` attribute pointing at the form `id`; buttons kept inside the form in the content need no `form` attribute.

```html app.component.html
<!-- app.component.html -->

<db-button
	command="show-modal"
	commandfor="my-dialog"
	(click)="toggleDialog(true)"
>
	Open dialog
</db-button>
<db-dialog id="my-dialog" [open]="openDialog" (close)="onClose($event)">
	<db-dialog-header header text="Rename entry" closeButtonText="Close">
	</db-dialog-header>
	<form id="my-dialog-form" method="dialog">
		<db-input label="Name" name="name"></db-input>
	</form>
	<db-dialog-footer footer>
		<db-button type="submit" form="my-dialog-form" value="cancel">
			Cancel
		</db-button>
		<db-button
			type="submit"
			variant="brand"
			form="my-dialog-form"
			value="confirm"
		>
			Save
		</db-button>
	</db-dialog-footer>
</db-dialog>
```

```ts app.component.ts
// app.component.ts
export class AppComponent {
	openDialog: boolean = false;
	toggleDialog = (open: boolean) => {
		this.openDialog = open;
	};
	onClose = (event: Event) => {
		this.openDialog = false;
		const dialog = event.target as HTMLDialogElement;
		console.log(dialog.returnValue); // 'cancel' or 'confirm'
	};
}
```

### Nested overlays

A modal `<dialog>` renders in the top layer. Overlay content nested inside it renders correctly: top-layer or fixed-position overlays such as `DBTooltip` and native popovers paint above the dialog, and overlays in the normal flow (e.g. the `DBCustomSelect` option list) are no longer clipped by the dialog box. Content that exceeds the dialog height scrolls inside the dialog content area.

### Migration

`DBDialog` replaces a hand-written modal.

Before, a possible hand-written modal:

```html app.component.html
<!-- app.component.html -->

<dialog #modal aria-labelledby="my-modal-title" class="my-modal">
	<header>
		<h2 id="my-modal-title">Dialog title</h2>
		<button type="button" (click)="modal.close()">Close</button>
	</header>
	<div class="my-modal-content">My dialog content</div>
	<footer>
		<button type="button" (click)="modal.close()">Confirm</button>
	</footer>
</dialog>
```

After, the same modal with `DBDialog`:

```html app.component.html
<!-- app.component.html -->

<db-dialog [open]="openDialog" (close)="toggleDialog(false)">
	<db-dialog-header header text="Dialog title" closeButtonText="Close">
	</db-dialog-header>
	My dialog content
	<db-dialog-footer footer>
		<db-button (click)="toggleDialog(false)">Confirm</db-button>
	</db-dialog-footer>
</db-dialog>
```

The heading `id`, the `aria-labelledby` wiring, the close button, the centering, the maximum sizes and the scroll behavior come with the components.

### Ponyfill files

Two files carry fallbacks for browser features that the project [Browserslist](https://github.com/db-ux-design-system/core-web/blob/main/.browserslistrc) does not cover yet. Both are deleted in one step once every Browserslist target supports the native features, currently blocked by Firefox ESR (see [BrowserSupport.md](https://github.com/db-ux-design-system/core-web/blob/main/packages/foundations/docs/BrowserSupport.md)).

| File                                    | Missing feature                                                                    | Deleted when                                     | Behavior without native support                                                                                                               |
| --------------------------------------- | ---------------------------------------------------------------------------------- | ------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `utils/dialog/ponyfill.ts`              | `closedby` attribute on `<dialog>` and Invoker Commands (`command` / `commandfor`) | every Browserslist target supports both features | marks the dialog with `data-closedby="not-supported"` and calls `requestClose()` on click of a `command="request-close"` button in JavaScript |
| `styles/internal/_dialog-ponyfill.scss` | `closedby` attribute on `<dialog>`                                                 | every Browserslist target supports `closedby`    | extends the close button hit area over the area outside the dialog box, so a click next to a modal dialog still closes it                     |

Browsers with native support get the native behavior: no `data-closedby` attribute, no intercepted clicks.
