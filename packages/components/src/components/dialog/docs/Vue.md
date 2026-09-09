## Vue

For general installation and configuration take a look at the [v-core-components](https://www.npmjs.com/package/@db-ux/v-core-components) package.

### General

`DBDialog` renders a native [`<dialog>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dialog) element in the top layer. The browser centers it, `backdrop` decides whether it opens modal (`strong`, `weak`) or non-modal (`none`), and `containerSize` (`small`, `medium`, `large`, `full`, default `medium`) sets the maximum inline size.

You are able to overwrite the resulting `max-inline-size` with the `--db-dialog-max-width` CSS variable (at every `containerSize`, capped by the viewport inset).

Every `containerSize`, `full` included, keeps a gap of `--db-dialog-viewport-inset` (default `40px`) to the viewport edges, so an area outside the dialog stays available for backdrop clicks. Set it to `0px` for an edge-to-edge dialog.

### Use component

Pass `DBDialogHeader` through `<template #header>` and `DBDialogFooter` through `<template #footer>`. `DBDialogHeader` links its heading to the dialog via `aria-labelledby` and renders the close button, so it should be part of every dialog.

#### Invoker Commands

Use [Invoker Commands](https://developer.mozilla.org/en-US/docs/Web/API/Invoker_Commands_API) (`command` and `commandfor`) to open and close the dialog declaratively, without any component state. `commandfor` references the `id` of the dialog. The built-in commands for `<dialog>` are `show-modal`, `close` and `request-close` (`request-close` is recommended over `close`).

Prefer `request-close` for close buttons: it fires a `cancel` event before closing, so you can veto the close with `event.preventDefault()`. `close` dismisses the dialog immediately without that opportunity.

There is no built-in command to open a dialog non-modally (`backdrop="none"`). Open it via the `open` property instead (or a [custom `--` command](https://developer.mozilla.org/en-US/docs/Web/API/Invoker_Commands_API#custom_commands) whose `command` event handler calls `dialog.show()`).

```vue App.vue
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
```

The close button inside `DBDialogHeader` already uses `command="request-close"` with the resolved dialog `id`.

#### Manage component by state

```vue App.vue
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
	// fired before the dialog closes via ESC, backdrop click or `request-close`
	openDialog.value = false;
};
</script>

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
```

### Return a value

Put a `<form method="dialog">` in the dialog content. Submitting it closes the dialog without submitting the form to a server and writes the activating button's `value` to `dialog.returnValue`. Read that value from the event target in the `close` handler. If you place the submit buttons in the footer (outside the form), associate them with the form via the `form` prop pointing at the form `id`; buttons kept inside the form in the content need no `form` prop.

```vue App.vue
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

const onClose = (event: Event) => {
	openDialog.value = false;
	const dialog = event.target as HTMLDialogElement;
	console.log(dialog.returnValue); // 'cancel' or 'confirm'
};
</script>

<template>
	<DBDialog :open="openDialog" @close="onClose">
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
```

### Nested overlays

A modal `<dialog>` renders in the top layer. Overlay content nested inside it renders correctly: top-layer or fixed-position overlays such as `DBTooltip` and native popovers paint above the dialog, and overlays in the normal flow (e.g. the `DBCustomSelect` option list) are no longer clipped by the dialog box. Content that exceeds the dialog height scrolls inside the dialog content area.

### Migration

`DBDialog` replaces a hand-written modal.

Before, a possible hand-written modal:

```vue App.vue
<!-- App.vue -->
<script setup lang="ts">
import { ref } from "vue";

const modal = ref<HTMLDialogElement>();
</script>

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
```

After, the same modal with `DBDialog`:

```vue App.vue
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
```

The heading `id`, the `aria-labelledby` wiring, the close button, the centering, the maximum sizes and the scroll behavior come with the components.

### Ponyfill files

Two files carry fallbacks for browser features that the project [Browserslist](https://github.com/db-ux-design-system/core-web/blob/main/.browserslistrc) does not cover yet. Both are deleted in one step once every Browserslist target supports the native features, currently blocked by Firefox ESR (see [BrowserSupport.md](https://github.com/db-ux-design-system/core-web/blob/main/packages/foundations/docs/BrowserSupport.md)).

| File                                    | Missing feature                                                                    | Deleted when                                     | Behavior without native support                                                                                                               |
| --------------------------------------- | ---------------------------------------------------------------------------------- | ------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `utils/dialog/ponyfill.ts`              | `closedby` attribute on `<dialog>` and Invoker Commands (`command` / `commandfor`) | every Browserslist target supports both features | marks the dialog with `data-closedby="not-supported"` and calls `requestClose()` on click of a `command="request-close"` button in JavaScript |
| `styles/internal/_dialog-ponyfill.scss` | `closedby` attribute on `<dialog>`                                                 | every Browserslist target supports `closedby`    | extends the close button hit area over the area outside the dialog box, so a click next to a modal dialog still closes it                     |

Browsers with native support get the native behavior: no `data-closedby` attribute, no intercepted clicks.
