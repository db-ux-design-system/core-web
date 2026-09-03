## React

For general installation and configuration take a look at the [react-core-components](https://www.npmjs.com/package/@db-ux/react-core-components) package.

### General

`DBDialog` renders a native `<dialog>` element. It centres itself, sizes to its content and is capped by
`containerSize` (`small`, `medium`, `large`, `full`, defaults to `medium`).

You are able to overwrite the resulting `max-inline-size` with the `--db-dialog-max-width` CSS variable.

A fixed inset of `40px` is kept between every dialog edge and the corresponding viewport edge, at every
`containerSize` including `full`, so that a clickable backdrop area always remains. Overwrite it with the
`--db-dialog-viewport-inset` CSS variable, e.g. `--db-dialog-viewport-inset: 0px;` for an edge-to-edge dialog.

### Use component

Set `backdrop="none"` to get a non-modal dialog: no dimmed backdrop, no focus trap, and clicks outside the dialog
leave it open.

#### Invoker Commands

Instead of the `open` property you can use
[Invoker Commands](https://developer.mozilla.org/en-US/docs/Web/API/Invoker_Commands_API) (`command` and `commandfor`)
to connect buttons with the dialog declaratively. Pass an explicit `id` to `DBDialog` and reference it with
`commandfor`. Supported built-in commands for `<dialog>` are `show-modal`, `show` and `request-close` (recommended over `close`).

Prefer `request-close` for close buttons: it fires a `cancel` event before closing, so you can veto the close with
`event.preventDefault()`. `close` dismisses the dialog immediately without that opportunity. The close button of
`DBDialogHeader` already uses `request-close` with the resolved dialog `id`.

```tsx App.tsx
// App.tsx
import {
	DBButton,
	DBDialog,
	DBDialogFooter,
	DBDialogHeader
} from "@db-ux/react-core-components";

const App = () => (
	<div>
		<DBButton command="show-modal" commandfor="my-dialog">
			Open dialog
		</DBButton>
		<DBDialog
			id="my-dialog"
			header={
				<DBDialogHeader closeButtonText="Close">
					Dialog title
				</DBDialogHeader>
			}
			footer={
				<DBDialogFooter>
					<DBButton
						variant="brand"
						command="request-close"
						commandfor="my-dialog"
					>
						Confirm
					</DBButton>
				</DBDialogFooter>
			}
		>
			My dialog content
		</DBDialog>
	</div>
);

export default App;
```

#### Manage component by state

```tsx App.tsx
// App.tsx
import { useState } from "react";
import {
	DBButton,
	DBDialog,
	DBDialogFooter,
	DBDialogHeader
} from "@db-ux/react-core-components";

const App = () => {
	const [open, setOpen] = useState<boolean>(false);
	return (
		<div>
			<DBButton
				onClick={() => {
					setOpen(true);
				}}
				type="button"
			>
				Open dialog
			</DBButton>
			<DBDialog
				open={open}
				backdrop="strong"
				containerSize="medium"
				onClose={() => {
					setOpen(false);
				}}
				header={
					<DBDialogHeader closeButtonText="Close">
						Dialog title
					</DBDialogHeader>
				}
				footer={
					<DBDialogFooter>
						<DBButton
							variant="brand"
							onClick={() => {
								setOpen(false);
							}}
						>
							Confirm
						</DBButton>
					</DBDialogFooter>
				}
			>
				My dialog content
			</DBDialog>
		</div>
	);
};

export default App;
```

### Return a value

A submit control with `formmethod="dialog"`, or any submit control inside a `<form method="dialog">`, closes the dialog
on submission and writes its `value` into `dialog.returnValue`, so you do not need any close handling of your own.
Read the value in `onClose` from the event target.

`DBButton` does not expose `formmethod`, so wrap the submit controls in a `<form method="dialog">`. If the dialog
already contains a form with a different method, use a native `<button class="db-button" formmethod="dialog" type="button">`
instead.

```tsx App.tsx
// App.tsx
import {
	DBButton,
	DBDialog,
	DBDialogFooter,
	DBDialogHeader
} from "@db-ux/react-core-components";

const App = () => (
	<DBDialog
		id="my-dialog"
		open
		onClose={(event) => {
			console.log((event.target as HTMLDialogElement).returnValue);
		}}
		footer={
			<DBDialogFooter>
				<form method="dialog">
					<DBButton type="submit" value="cancel">
						Cancel
					</DBButton>
					<DBButton type="submit" variant="brand" value="confirm">
						Confirm
					</DBButton>
				</form>
			</DBDialogFooter>
		}
		header={
			<DBDialogHeader closeButtonText="Close">
				Dialog title
			</DBDialogHeader>
		}
	>
		Delete this entry?
	</DBDialog>
);

export default App;
```

### Top-layer limitation

A modal `<dialog>` is rendered in the browser top layer and the `.db-dialog` box uses `overflow: clip`. Overlay
content that itself renders into the top layer or uses fixed positioning escapes the box and paints correctly above
the dialog: `DBTooltip` (`position: fixed`) and native popovers work as expected inside a modal dialog.

Only overlay content that is positioned in the normal flow of the dialog (e.g. an absolutely positioned dropdown such
as the `DBCustomSelect` option list on desktop) can be clipped at the dialog edges when it overflows the box. Keep
such content inside the scrollable dialog content area, or leave enough room so its overlay stays within the dialog
bounds.

### Migration from a hand-written modal

`DBDialog` replaces a hand-written modal.

Before, a possible hand-written modal:

```tsx App.tsx
// App.tsx
import { useEffect, useState } from "react";

const App = () => {
	const [open, setOpen] = useState<boolean>(false);

	useEffect(() => {
		document.body.style.overflow = open ? "hidden" : "";
		const onKeyDown = (event: KeyboardEvent) => {
			if (event.key === "Escape") {
				setOpen(false);
			}
		};
		document.addEventListener("keydown", onKeyDown);
		return () => {
			document.removeEventListener("keydown", onKeyDown);
		};
	}, [open]);

	return (
		<div>
			<button
				type="button"
				onClick={() => {
					setOpen(true);
				}}
			>
				Open dialog
			</button>
			{open && (
				<div
					className="my-modal-overlay"
					onClick={() => {
						setOpen(false);
					}}
				>
					<div
						className="my-modal"
						role="dialog"
						aria-modal="true"
						aria-labelledby="my-modal-heading"
						onClick={(event) => {
							event.stopPropagation();
						}}
					>
						<h2 id="my-modal-heading">Dialog title</h2>
						<button
							type="button"
							onClick={() => {
								setOpen(false);
							}}
						>
							Close
						</button>
						<div className="my-modal-content">
							My dialog content
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default App;
```

After, with `DBDialog`:

```tsx App.tsx
// App.tsx
import { useState } from "react";
import {
	DBButton,
	DBDialog,
	DBDialogHeader
} from "@db-ux/react-core-components";

const App = () => {
	const [open, setOpen] = useState<boolean>(false);
	return (
		<div>
			<DBButton
				onClick={() => {
					setOpen(true);
				}}
				type="button"
			>
				Open dialog
			</DBButton>
			<DBDialog
				open={open}
				onClose={() => {
					setOpen(false);
				}}
				header={
					<DBDialogHeader closeButtonText="Close">
						Dialog title
					</DBDialogHeader>
				}
			>
				My dialog content
			</DBDialog>
		</div>
	);
};

export default App;
```

Focus trap, scroll locking, backdrop dismissal, Escape handling and the close and cancel events come from the
platform, so the effect and the key handling go away entirely.

### Ponyfill

Two fallbacks ship for browser features that our [Browserslist](https://browsersl.ist) targets do not fully cover yet
(currently blocked by Firefox ESR). Both live in dedicated files so they can be deleted in one step. They are part of
the component, so you do not have to add anything yourself.

| File                                    | Missing feature                           | Deleted when                                     | Behaviour without native support                                                                                                                    |
| --------------------------------------- | ----------------------------------------- | ------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| `utils/dialog/ponyfill.ts`              | `closedby` attribute and Invoker Commands | every Browserslist target supports both features | `data-closedby="not-supported"` is set on the dialog, and a click on a `command="request-close"` button calls `requestClose()` on the dialog itself |
| `styles/internal/_dialog-ponyfill.scss` | `closedby` attribute                      | every Browserslist target supports `closedby`    | the close button gets a hit area covering the area outside the dialog box, so clicking the backdrop still closes the dialog                         |
