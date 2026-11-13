import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{h as t,l as n,n as r,r as i,u as a}from"./blocks-BOVY-1TL.js";import{s as o}from"./chunk-W22LQPXL-BFH_Bymq.js";import{i as s,r as c}from"./react-DITjJg24.js";import{i as l,n as u,r as d,t as f}from"./dialog-header-DFrtLW4_.js";import{a as p,n as m,r as h,t as g}from"./backdrop.example.stories-C6cPnail.js";import{i as _,n as v,o as y,r as b,t as x}from"./container-size.example.stories-CDj8YosY.js";import{a as S,n as C,r as w,t as T}from"./density.example.stories-D02L82Y6.js";import{a as E,c as D,i as O,n as k,o as A,r as j,s as M,t as N,u as P}from"./examples.example.stories-DRryUZS4.js";import{n as F,t as I}from"./dialog.overview.stories-CCG6-LDX.js";function L(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...s(),...e.components};return(0,z.jsxs)(z.Fragment,{children:[`
`,(0,z.jsx)(a,{of:I}),`
`,(0,z.jsx)(t.h1,{id:`dbdialog`,children:`DBDialog`}),`
`,(0,z.jsx)(n,{children:`The dialog focuses attention on a single task and lets people complete or discard it before moving on.`}),`
`,(0,z.jsxs)(t.p,{children:[(0,z.jsx)(t.strong,{children:`Status:`}),` Beta`]}),`
`,(0,z.jsxs)(t.p,{children:[(0,z.jsx)(t.strong,{children:`Parts:`}),` DBDialogFooter, DBDialogHeader – documented on this page.`]}),`
`,(0,z.jsx)(t.h2,{id:`guidelines`,children:`Guidelines`}),`
`,(0,z.jsxs)(`a`,{className:`db-card db-sb-platform-card`,"data-behavior":`interactive`,"data-spacing":`small`,href:`https://design-system.deutschebahn.com/documentation/components/dialog/dialog`,target:`_blank`,rel:`noopener noreferrer`,children:[(0,z.jsx)(`i`,{className:`db-sb-platform-card-logo`,"aria-hidden":`true`}),(0,z.jsx)(`strong`,{children:`Dialog guidelines`}),(0,z.jsx)(`span`,{children:`When to use it, variants, Do and Don’t and the design rules for accessibility.`}),(0,z.jsx)(`strong`,{"data-icon-trailing":`arrow_up_right`,children:`Design System Platform`})]}),`
`,(0,z.jsxs)(t.p,{children:[`Setup: `,(0,z.jsx)(t.a,{href:`https://design-system.deutschebahn.com/documentation/learn/vue-setup`,rel:`nofollow`,children:`Add the components to Vue`}),` on the Design System Platform.`]}),`
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

\`DBDialog\` renders a native [\`<dialog>\`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dialog) element in the top layer. The browser centers it, \`backdrop\` decides whether it opens modal (\`strong\`, \`weak\`) or non-modal (\`none\`), and \`containerSize\` (\`small\`, \`medium\`, \`large\`, \`full\`, default \`medium\`) sets the maximum inline size.

You are able to overwrite the resulting \`max-inline-size\` with the \`--db-dialog-max-width\` CSS variable (at every \`containerSize\`, capped by the viewport inset).

Every \`containerSize\`, \`full\` included, keeps a gap of \`--db-dialog-viewport-inset\` (default \`40px\`) to the viewport edges, so an area outside the dialog stays available for backdrop clicks. Set it to \`0px\` for an edge-to-edge dialog.

### Use component

Pass \`DBDialogHeader\` through \`<template #header>\` and \`DBDialogFooter\` through \`<template #footer>\`. \`DBDialogHeader\` links its heading to the dialog via \`aria-labelledby\` and renders the close button, so it should be part of every dialog.

#### Invoker Commands

Use [Invoker Commands](https://developer.mozilla.org/en-US/docs/Web/API/Invoker_Commands_API) (\`command\` and \`commandfor\`) to open and close the dialog declaratively, without any component state. \`commandfor\` references the \`id\` of the dialog. The built-in commands for \`<dialog>\` are \`show-modal\`, \`close\` and \`request-close\` (\`request-close\` is recommended over \`close\`).

Prefer \`request-close\` for close buttons: it fires a \`cancel\` event before closing, so you can veto the close with \`event.preventDefault()\`. \`close\` dismisses the dialog immediately without that opportunity.

There is no built-in command to open a dialog non-modally (\`backdrop="none"\`). Open it via the \`open\` property instead (or a [custom \`--\` command](https://developer.mozilla.org/en-US/docs/Web/API/Invoker_Commands_API#custom_commands) whose \`command\` event handler calls \`dialog.show()\`).

\`DBDialog\` already ponyfills \`request-close\` and the backdrop click for [browser versions that haven't implemented Invoker Commands](https://caniuse.com/wf-invoker-commands) (see [Ponyfill files](#ponyfill-files) below), so you do not have to. Command-based _opening_ (\`show-modal\`) is not ponyfilled, though: if you need to open via a command in those browsers, use the \`open\` property (as in [Manage component by state](#manage-component-by-state)) or add the [polyfill \`invokers-polyfill\`](https://github.com/keithamus/invokers-polyfill).

\`\`\`vue App.vue
<!-- App.vue -->
<template>
	<DBButton command="show-modal" commandfor="my-dialog">
		Open dialog
	</DBButton>

	<DBDialog id="my-dialog">
		<template #header>
			<DBDialogHeader text="Dialog title" closeButtonText="Close" />
		</template>
		My dialog content
		<template #footer>
			<DBDialogFooter>
				<DBButton command="request-close" commandfor="my-dialog">
					Confirm
				</DBButton>
			</DBDialogFooter>
		</template>
	</DBDialog>
</template>
\`\`\`

The close button inside \`DBDialogHeader\` already uses \`command="request-close"\` with the resolved dialog \`id\`.

#### Manage component by state

\`\`\`vue App.vue
<!-- App.vue -->
<script setup lang="ts">
import { ref } from "vue";
import {
	DBButton,
	DBDialog,
	DBDialogFooter,
	DBDialogHeader
} from "@db-ux/v-core-components";

const openDialog = ref<boolean>(false);

const toggleDialog = (open: boolean) => {
	openDialog.value = open;
};

const onCancel = () => {
	// fired before the dialog closes via ESC, backdrop click or \`request-close\`
	openDialog.value = false;
};
<\/script>

<template>
	<DBButton @click="toggleDialog(true)">Open dialog</DBButton>

	<DBDialog
		:open="openDialog"
		backdrop="strong"
		containerSize="medium"
		@close="toggleDialog(false)"
		@cancel="onCancel"
	>
		<template #header>
			<DBDialogHeader text="Dialog title" closeButtonText="Close" />
		</template>
		My dialog content
		<template #footer>
			<DBDialogFooter>
				<DBButton variant="brand" @click="toggleDialog(false)">
					Confirm
				</DBButton>
			</DBDialogFooter>
		</template>
	</DBDialog>
</template>
\`\`\`

### Return a value

Put a \`<form method="dialog">\` in the dialog content. Submitting it closes the dialog without submitting the form to a server and writes the activating button's \`value\` to \`dialog.returnValue\`. Read that value from the event target in the \`close\` handler. If you place the submit buttons in the footer (outside the form), associate them with the form via the \`form\` prop pointing at the form \`id\`; buttons kept inside the form in the content need no \`form\` prop.

\`\`\`vue App.vue
<!-- App.vue -->
<script setup lang="ts">
import { ref } from "vue";
import {
	DBButton,
	DBDialog,
	DBDialogFooter,
	DBDialogHeader,
	DBInput
} from "@db-ux/v-core-components";

const openDialog = ref<boolean>(false);

const toggleDialog = (open: boolean) => {
	openDialog.value = open;
};

const onClose = (event: Event) => {
	openDialog.value = false;
	const dialog = event.target as HTMLDialogElement;
	console.log(dialog.returnValue); // 'cancel' or 'confirm'
};
<\/script>

<template>
	<DBButton
		command="show-modal"
		commandfor="my-dialog"
		@click="toggleDialog(true)"
	>
		Open dialog
	</DBButton>

	<DBDialog id="my-dialog" :open="openDialog" @close="onClose">
		<template #header>
			<DBDialogHeader text="Rename entry" closeButtonText="Close" />
		</template>
		<form id="my-dialog-form" method="dialog">
			<DBInput label="Name" name="name" />
		</form>
		<template #footer>
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
		</template>
	</DBDialog>
</template>
\`\`\`

### Nested overlays

A modal \`<dialog>\` renders in the top layer. Overlay content nested inside it renders correctly: top-layer or fixed-position overlays such as \`DBTooltip\` and native popovers paint above the dialog, and overlays in the normal flow (e.g. the \`DBCustomSelect\` option list) are no longer clipped by the dialog box. Content that exceeds the dialog height scrolls inside the dialog content area.

### Migration

\`DBDialog\` replaces a hand-written modal.

Before, a possible hand-written modal:

\`\`\`vue App.vue
<!-- App.vue -->
<script setup lang="ts">
import { ref } from "vue";

const modal = ref<HTMLDialogElement>();
<\/script>

<template>
	<dialog ref="modal" aria-labelledby="my-modal-title" class="my-modal">
		<header>
			<h2 id="my-modal-title">Dialog title</h2>
			<button type="button" @click="modal?.close()">Close</button>
		</header>
		<div class="my-modal-content">My dialog content</div>
		<footer>
			<button type="button" @click="modal?.close()">Confirm</button>
		</footer>
	</dialog>
</template>
\`\`\`

After, the same modal with \`DBDialog\`:

\`\`\`vue App.vue
<!-- App.vue -->
<template>
	<DBDialog :open="openDialog" @close="toggleDialog(false)">
		<template #header>
			<DBDialogHeader text="Dialog title" closeButtonText="Close" />
		</template>
		My dialog content
		<template #footer>
			<DBDialogFooter>
				<DBButton @click="toggleDialog(false)">Confirm</DBButton>
			</DBDialogFooter>
		</template>
	</DBDialog>
</template>
\`\`\`

The heading \`id\`, the \`aria-labelledby\` wiring, the close button, the centering, the maximum sizes and the scroll behavior come with the components.

### Ponyfill files

Two files carry fallbacks for browser features that the project [Browserslist](https://github.com/db-ux-design-system/core-web/blob/main/.browserslistrc) does not cover yet. Both are deleted in one step once every Browserslist target supports the native features, currently blocked by Firefox ESR (see [BrowserSupport.md](https://github.com/db-ux-design-system/core-web/blob/main/packages/foundations/docs/BrowserSupport.md)).

| File                                    | Missing feature                                                                    | Deleted when                                     | Behavior without native support                                                                                                               |
| --------------------------------------- | ---------------------------------------------------------------------------------- | ------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------- |
| \`utils/dialog/ponyfill.ts\`              | \`closedby\` attribute on \`<dialog>\` and Invoker Commands (\`command\` / \`commandfor\`) | every Browserslist target supports both features | marks the dialog with \`data-closedby="not-supported"\` and calls \`requestClose()\` on click of a \`command="request-close"\` button in JavaScript |
| \`styles/internal/_dialog-ponyfill.scss\` | \`closedby\` attribute on \`<dialog>\`                                                 | every Browserslist target supports \`closedby\`    | extends the close button hit area over the area outside the dialog box, so a click next to a modal dialog still closes it                     |

Browsers with native support get the native behavior: no \`data-closedby\` attribute, no intercepted clicks.`}),`
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
`,(0,z.jsxs)(t.li,{children:[`npm: `,(0,z.jsx)(t.a,{href:`https://www.npmjs.com/package/@db-ux/v-core-components`,rel:`nofollow`,children:`@db-ux/v-core-components`})]}),`
`,(0,z.jsx)(t.li,{children:(0,z.jsx)(t.a,{href:`https://github.com/db-ux-design-system/core-web/tree/main/packages/components/src/components/dialog`,rel:`nofollow`,children:`Source code on GitHub`})}),`
`,(0,z.jsx)(t.li,{children:(0,z.jsx)(t.a,{href:`https://github.com/db-ux-design-system/core-web/blob/main/packages/components/CHANGELOG.md`,rel:`nofollow`,children:`Changelog`})}),`
`]})]})}function R(e={}){let{wrapper:t}={...s(),...e.components};return t?(0,z.jsx)(t,{...e,children:(0,z.jsx)(L,{...e})}):L(e)}var z;function B(){return(B=e((()=>{z=o(),c(),t(),F(),l(),u(),p(),y(),S(),P()})))()}B();export{R as default};