## Angular

For general installation and configuration take a look at the [ngx-core-components](https://www.npmjs.com/package/@db-ux/ngx-core-components) package.

### General

`DBDialog` renders a native [`<dialog>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dialog) element in the top layer. The browser centers it, `backdrop` decides whether it opens modal (`strong`, `weak`) or non-modal (`none`), and `containerSize` (`small`, `medium`, `large`, `full`, default `medium`) sets the maximum inline size.

If you use `containerSize` !== `full` you are able to overwrite the `max-width` with the `--db-dialog-max-width` CSS variable.

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

#### Invoker Commands

Use [Invoker Commands](https://developer.mozilla.org/en-US/docs/Web/API/Invoker_Commands_API) (`command` and `commandfor`) to open and close the dialog declaratively, without any component state. `commandfor` references the `id` of the dialog. Supported built-in commands for `<dialog>` are `show-modal`, `show` and `request-close` (recommended over `close`).

Prefer `request-close` for close buttons: it fires a `cancel` event before closing, so you can veto the close with `event.preventDefault()`. `close` dismisses the dialog immediately without that opportunity.

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

A submit control with `formmethod="dialog"` inside a `<form>` in the dialog closes the dialog without submitting the form and writes its `value` to `dialog.returnValue`. Read that value from the event target in the `close` handler. Set `method="dialog"` on the form and keep `DBButton` with `type="submit"`, or use a native `<button class="db-button" type="button">` for those controls in the meantime, as `DBButton` does not forward `formmethod`.

```html app.component.html
<!-- app.component.html -->

<db-dialog [open]="openDialog" (close)="onClose($event)">
	<db-dialog-header header text="Delete entry" closeButtonText="Close">
	</db-dialog-header>
	Delete this entry?
	<db-dialog-footer footer>
		<form method="dialog">
			<db-button value="cancel"> Cancel </db-button>
			<db-button variant="brand" value="confirm"> Delete </db-button>
		</form>
	</db-dialog-footer>
</db-dialog>
```

```ts app.component.ts
// app.component.ts
export class AppComponent {
	openDialog: boolean = false;
	onClose = (event: Event) => {
		this.openDialog = false;
		const dialog = event.target as HTMLDialogElement;
		console.log(dialog.returnValue); // 'cancel' or 'confirm'
	};
}
```

### Top layer limitation

A modal `<dialog>` renders in the top layer and the `.db-dialog` box uses `overflow: clip`. Overlay content that renders into the top layer itself or uses fixed positioning escapes the box and paints correctly above the dialog: `DBTooltip` (`position: fixed`) and native popovers work as expected inside a modal dialog.

Only overlay content positioned in the normal flow of the dialog - such as the absolutely positioned `DBCustomSelect` option list on desktop - can be clipped at the dialog edges when it overflows the box. Keep such content inside the scrollable dialog content area, or leave enough room so its overlay stays within the dialog bounds.

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
