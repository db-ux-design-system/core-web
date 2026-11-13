import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{h as t,l as n,n as r,r as i,u as a}from"./blocks-c9Ymp184.js";import{t as o}from"./jsx-runtime-MKhVqBIO.js";import{i as s,r as c}from"./react-DITjJg24.js";import{i as l,n as u,r as d,t as f}from"./dialog-header-Z28inn7G.js";import{a as p,n as m,r as h,t as g}from"./backdrop.example.stories-csplMsdx.js";import{i as _,n as v,o as y,r as b,t as x}from"./container-size.example.stories-CJJabkc6.js";import{a as S,n as C,r as w,t as T}from"./density.example.stories-Z7JWVSqm.js";import{a as E,c as D,i as O,n as k,o as A,r as j,s as M,t as N,u as P}from"./examples.example.stories-7s4qbSn3.js";import{n as F,t as I}from"./dialog.overview.stories-ByhdX8BC.js";function L(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...s(),...e.components};return(0,z.jsxs)(z.Fragment,{children:[`
`,(0,z.jsx)(a,{of:I}),`
`,(0,z.jsx)(t.h1,{id:`dbdialog`,children:`DBDialog`}),`
`,(0,z.jsx)(n,{children:`The dialog focuses attention on a single task and lets people complete or discard it before moving on.`}),`
`,(0,z.jsxs)(t.p,{children:[(0,z.jsx)(t.strong,{children:`Status:`}),` Beta`]}),`
`,(0,z.jsxs)(t.p,{children:[(0,z.jsx)(t.strong,{children:`Parts:`}),` DBDialogFooter, DBDialogHeader – documented on this page.`]}),`
`,(0,z.jsx)(t.h2,{id:`guidelines`,children:`Guidelines`}),`
`,(0,z.jsxs)(`a`,{className:`db-card db-sb-platform-card`,"data-behavior":`interactive`,"data-spacing":`small`,href:`https://design-system.deutschebahn.com/documentation/components/dialog/dialog`,target:`_blank`,rel:`noopener noreferrer`,children:[(0,z.jsx)(`i`,{className:`db-sb-platform-card-logo`,"aria-hidden":`true`}),(0,z.jsx)(`strong`,{children:`Dialog guidelines`}),(0,z.jsx)(`span`,{children:`When to use it, variants, Do and Don’t and the design rules for accessibility.`}),(0,z.jsx)(`strong`,{"data-icon-trailing":`arrow_up_right`,children:`Design System Platform`})]}),`
`,(0,z.jsxs)(t.p,{children:[`Setup: `,(0,z.jsx)(t.a,{href:`https://design-system.deutschebahn.com/documentation/learn/react-setup`,rel:`nofollow`,children:`Add the components to React`}),` on the Design System Platform.`]}),`
`,(0,z.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,z.jsxs)(t.p,{children:[`Open `,(0,z.jsx)(t.strong,{children:`Show code`}),` below a preview for a snippet you can copy, including the imports. The example pages linked below each group have controls.`]}),`
`,(0,z.jsx)(t.h3,{id:`backdrop`,children:`Backdrop`}),`
`,(0,z.jsx)(i,{of:g}),`
`,(0,z.jsx)(i,{of:h}),`
`,(0,z.jsx)(i,{of:m}),`
`,(0,z.jsx)(t.p,{children:(0,z.jsx)(t.a,{href:`?path=/docs/components-dbdialog-backdrop--docs`,children:`Open the Backdrop examples`})}),`
`,(0,z.jsx)(t.h3,{id:`container-size`,children:`Container Size`}),`
`,(0,z.jsx)(i,{of:_}),`
`,(0,z.jsx)(i,{of:x}),`
`,(0,z.jsx)(i,{of:b}),`
`,(0,z.jsx)(i,{of:v}),`
`,(0,z.jsx)(t.p,{children:(0,z.jsx)(t.a,{href:`?path=/docs/components-dbdialog-container-size--docs`,children:`Open the Container Size examples`})}),`
`,(0,z.jsx)(t.h3,{id:`density`,children:`Density`}),`
`,(0,z.jsx)(i,{of:w}),`
`,(0,z.jsx)(i,{of:T}),`
`,(0,z.jsx)(i,{of:C}),`
`,(0,z.jsx)(t.p,{children:(0,z.jsx)(t.a,{href:`?path=/docs/components-dbdialog-density--docs`,children:`Open the Density examples`})}),`
`,(0,z.jsx)(t.h3,{id:`examples`,children:`Examples`}),`
`,(0,z.jsx)(i,{of:N}),`
`,(0,z.jsx)(i,{of:j}),`
`,(0,z.jsx)(i,{of:k}),`
`,(0,z.jsx)(i,{of:D}),`
`,(0,z.jsx)(i,{of:E}),`
`,(0,z.jsx)(i,{of:O}),`
`,(0,z.jsx)(i,{of:M}),`
`,(0,z.jsx)(i,{of:A}),`
`,(0,z.jsx)(t.p,{children:(0,z.jsx)(t.a,{href:`?path=/docs/components-dbdialog-examples--docs`,children:`Open the Examples examples`})}),`
`,(0,z.jsx)(t.h2,{id:`usage-notes`,children:`Usage notes`}),`
`,(0,z.jsx)(n,{children:`### General

\`DBDialog\` renders a native \`<dialog>\` element. It centres itself, sizes to its content and is capped by
\`containerSize\` (\`small\`, \`medium\`, \`large\`, \`full\`, defaults to \`medium\`).

You are able to overwrite the resulting \`max-inline-size\` with the \`--db-dialog-max-width\` CSS variable.

A fixed inset of \`40px\` is kept between every dialog edge and the corresponding viewport edge, at every
\`containerSize\` including \`full\`, so that a clickable backdrop area always remains. Overwrite it with the
\`--db-dialog-viewport-inset\` CSS variable, e.g. \`--db-dialog-viewport-inset: 0px;\` for an edge-to-edge dialog.

### Use component

Set \`backdrop="none"\` to get a non-modal dialog: no dimmed backdrop, no focus trap, and clicks outside the dialog
leave it open.

#### Invoker Commands

Instead of the \`open\` property you can use
[Invoker Commands](https://developer.mozilla.org/en-US/docs/Web/API/Invoker_Commands_API) (\`command\` and \`commandfor\`)
to connect buttons with the dialog declaratively. Pass an explicit \`id\` to \`DBDialog\` and reference it with
\`commandfor\`. The built-in commands for \`<dialog>\` are \`show-modal\`, \`close\` and \`request-close\` (\`request-close\` is recommended over \`close\`).

Prefer \`request-close\` for close buttons: it fires a \`cancel\` event before closing, so you can veto the close with
\`event.preventDefault()\`. \`close\` dismisses the dialog immediately without that opportunity. The close button of
\`DBDialogHeader\` already uses \`request-close\` with the resolved dialog \`id\`.

There is no built-in command to open a dialog non-modally (\`backdrop="none"\`). Open it via the \`open\` prop instead (or a [custom \`--\` command](https://developer.mozilla.org/en-US/docs/Web/API/Invoker_Commands_API#custom_commands) whose \`command\` event handler calls \`dialog.show()\`).

\`DBDialog\` already ponyfills \`request-close\` and the backdrop click for [browser versions that haven't implemented Invoker Commands](https://caniuse.com/wf-invoker-commands) (see [Ponyfill](#ponyfill) below), so you do not have to. Command-based _opening_ (\`show-modal\`) is not ponyfilled, though: if you need to open via a command in those browsers, use the \`open\` prop (as in [Manage component by state](#manage-component-by-state)) or add the [polyfill \`invokers-polyfill\`](https://github.com/keithamus/invokers-polyfill).

\`\`\`tsx App.tsx
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
					<h2>Dialog title</h2>
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
\`\`\`

#### Manage component by state

\`\`\`tsx App.tsx
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
						<h2>Dialog title</h2>
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
\`\`\`

### Return a value

Put a \`<form method="dialog">\` in the dialog content. Submitting it closes the dialog and writes the activating
button's \`value\` into \`dialog.returnValue\`, so you do not need any close handling of your own. Read the value in
\`onClose\` from the event target.

If you place the submit buttons in the footer (outside the form), associate them with the form via the \`form\` prop
pointing at the form \`id\`. Buttons you keep inside the form in the content need no \`form\` prop.

\`\`\`tsx App.tsx
// App.tsx
import {
	DBButton,
	DBDialog,
	DBDialogFooter,
	DBDialogHeader,
	DBInput
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
				<DBButton type="submit" form="my-dialog-form" value="cancel">
					Cancel
				</DBButton>
				<DBButton
					type="submit"
					variant="brand"
					form="my-dialog-form"
					value="confirm"
				>
					Save
				</DBButton>
			</DBDialogFooter>
		}
		header={
			<DBDialogHeader closeButtonText="Close">
				<h2>Rename entry</h2>
			</DBDialogHeader>
		}
	>
		<form id="my-dialog-form" method="dialog">
			<DBInput label="Name" name="name" />
		</form>
	</DBDialog>
);

export default App;
\`\`\`

### Nested overlays

A modal \`<dialog>\` is rendered in the browser top layer. Overlay content nested inside it renders correctly:
top-layer or fixed-position overlays such as \`DBTooltip\` and native popovers paint above the dialog, and overlays in
the normal flow (e.g. the \`DBCustomSelect\` option list) are no longer clipped by the dialog box. Content that exceeds
the dialog height scrolls inside the dialog content area.

### Migration from a hand-written modal

\`DBDialog\` replaces a hand-written modal.

Before, a possible hand-written modal:

\`\`\`tsx App.tsx
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
\`\`\`

After, with \`DBDialog\`:

\`\`\`tsx App.tsx
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
						<h2>Dialog title</h2>
					</DBDialogHeader>
				}
			>
				My dialog content
			</DBDialog>
		</div>
	);
};

export default App;
\`\`\`

Focus trap, scroll locking, backdrop dismissal, Escape handling and the close and cancel events come from the
platform, so the effect and the key handling go away entirely.

### Ponyfill

Two fallbacks ship for browser features that our [Browserslist](https://browsersl.ist) targets do not fully cover yet
(currently blocked by Firefox ESR). Both live in dedicated files so they can be deleted in one step. They are part of
the component, so you do not have to add anything yourself.

| File                                    | Missing feature                           | Deleted when                                     | Behaviour without native support                                                                                                                    |
| --------------------------------------- | ----------------------------------------- | ------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| \`utils/dialog/ponyfill.ts\`              | \`closedby\` attribute and Invoker Commands | every Browserslist target supports both features | \`data-closedby="not-supported"\` is set on the dialog, and a click on a \`command="request-close"\` button calls \`requestClose()\` on the dialog itself |
| \`styles/internal/_dialog-ponyfill.scss\` | \`closedby\` attribute                      | every Browserslist target supports \`closedby\`    | the close button gets a hit area covering the area outside the dialog box, so clicking the backdrop still closes the dialog                         |`}),`
`,(0,z.jsx)(t.h2,{id:`properties`,children:`Properties`}),`
`,(0,z.jsx)(r,{of:I}),`
`,(0,z.jsx)(t.h3,{id:`dbdialogfooter`,children:`DBDialogFooter`}),`
`,(0,z.jsx)(r,{of:d}),`
`,(0,z.jsx)(t.h3,{id:`dbdialogheader`,children:`DBDialogHeader`}),`
`,(0,z.jsx)(r,{of:f}),`
`,(0,z.jsx)(t.h2,{id:`css-custom-properties`,children:`CSS custom properties`}),`
`,(0,z.jsxs)(t.p,{children:[`Set them on the component element to adjust its styling, e.g. with the `,(0,z.jsx)(t.code,{children:`style`}),` attribute.`]}),`
`,(0,z.jsx)(n,{children:"| Property | Description | Default |\n| --- | --- | --- |\n| `--db-dialog-max-width` | Maximum inline size of the dialog, at every `containerSize`, capped by `--db-dialog-viewport-inset`. | depends on `containerSize` |\n| `--db-dialog-min-width` | Minimum inline size of the dialog. | `auto` |\n| `--db-dialog-viewport-inset` | Gap between the dialog and the viewport edges, so a backdrop area stays clickable. `0px` gives an edge-to-edge dialog. The dialog sets its own value, so set it on the dialog itself. | `40px` |"}),`
`,(0,z.jsx)(t.h2,{id:`resources`,children:`Resources`}),`
`,(0,z.jsxs)(t.ul,{children:[`
`,(0,z.jsx)(t.li,{children:(0,z.jsx)(t.a,{href:`https://design-system.deutschebahn.com/documentation/components/dialog/dialog`,rel:`nofollow`,children:`Guidelines on the Design System Platform`})}),`
`,(0,z.jsxs)(t.li,{children:[`npm: `,(0,z.jsx)(t.a,{href:`https://www.npmjs.com/package/@db-ux/react-core-components`,rel:`nofollow`,children:`@db-ux/react-core-components`})]}),`
`,(0,z.jsx)(t.li,{children:(0,z.jsx)(t.a,{href:`https://github.com/db-ux-design-system/core-web/tree/main/packages/components/src/components/dialog`,rel:`nofollow`,children:`Source code on GitHub`})}),`
`,(0,z.jsx)(t.li,{children:(0,z.jsx)(t.a,{href:`https://github.com/db-ux-design-system/core-web/blob/main/packages/components/CHANGELOG.md`,rel:`nofollow`,children:`Changelog`})}),`
`]})]})}function R(e={}){let{wrapper:t}={...s(),...e.components};return t?(0,z.jsx)(t,{...e,children:(0,z.jsx)(L,{...e})}):L(e)}var z;function B(){return(B=e((()=>{z=o(),c(),t(),F(),l(),u(),p(),y(),S(),P()})))()}B();export{R as default};