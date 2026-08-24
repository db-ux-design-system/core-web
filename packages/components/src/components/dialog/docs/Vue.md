## Vue

For general installation and configuration take a look at the [v-core-components](https://www.npmjs.com/package/@db-ux/v-core-components) package.

### General

`DBDialog` renders a native [`<dialog>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dialog) element in the top layer. The browser centers it, `backdrop` decides whether it opens modal (`strong`, `weak`) or non-modal (`none`), and `containerSize` (`small`, `medium`, `large`, `full`, default `medium`) sets the maximum inline size.

If you use `containerSize !== full` you are able to overwrite the `max-width` with the `--db-dialog-max-width:` CSS variable.

Every `containerSize`, `full` included, keeps a gap of `--db-dialog-viewport-inset:` (default `40px`) to the viewport edges, so an area outside the dialog stays available for backdrop clicks. Set it to `0px` for an edge-to-edge dialog.

### Use component

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

Pass `DBDialogHeader` through `<template #header>` and `DBDialogFooter` through `<template #footer>`. `DBDialogHeader` links its heading to the dialog via `aria-labelledby` and renders the close button, so it should be part of every dialog.

### Invoker Commands

Use [Invoker Commands](https://developer.mozilla.org/en-US/docs/Web/API/Invoker_Commands_API) (`command` and `commandfor`) to open and close the dialog declaratively, without any component state. `commandfor` references the `id` of the dialog. Supported built-in commands for `<dialog>` are `show-modal`, `close` and `request-close`.

Prefer `request-close` for close buttons: it fires a `cancel` event before closing, so you can veto the close with `event.preventDefault()`. `close` dismisses the dialog immediately without that opportunity.

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

### Return a value

A submit control with `formmethod="dialog"` inside a `<form>` in the dialog closes the dialog without submitting the form and writes its `value` to `dialog.returnValue`. Read that value from the event target in the `close` handler. `DBButton` does not forward `formmethod`, so use a native `<button class="db-button">` for those controls, or set `method="dialog"` on the form and keep `DBButton` with `type="submit"`.

```vue App.vue
<!-- App.vue -->
<script setup lang="ts">
import { ref } from "vue";
import {
	DBDialog,
	DBDialogFooter,
	DBDialogHeader
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
			<DBDialogHeader text="Delete entry" closeButtonText="Close" />
		</template>
		Delete this entry?
		<template #footer>
			<DBDialogFooter>
				<form>
					<button
						class="db-button"
						formmethod="dialog"
						value="cancel"
					>
						Cancel
					</button>
					<button
						class="db-button"
						data-variant="brand"
						formmethod="dialog"
						value="confirm"
					>
						Delete
					</button>
				</form>
			</DBDialogFooter>
		</template>
	</DBDialog>
</template>
```

### Top layer limitation

Components that render into the top layer themselves - `DBTooltip`, native popovers and the option list of `DBCustomSelect` - are painted in top-layer order. Inside a modal dialog they can be clipped by the dialog box or stack below the dialog, so they may become partially or fully invisible. No workaround ships in this phase, so avoid these components inside a dialog for now.

### Migration

The table maps every public `DBDialog` property and slot to the construct a hand-written modal needs and to its `DBDrawer` equivalent.

| `DBDialog` property or slot           | Hand-written modal                                                                        | `DBDrawer`                                                                           |
| ------------------------------------- | ----------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| `open`                                | own `showModal()` / `show()` / `close()` calls on the `<dialog>` element                  | `open`                                                                               |
| `backdrop` (`strong`, `weak`, `none`) | own `::backdrop` color plus the choice between `showModal()` and `show()`                 | `backdrop` (`strong`, `weak`, `none`, `invisible`)                                   |
| `containerSize` (`small` to `full`)   | own `max-inline-size` and viewport gap declarations                                       | `containerSize`                                                                      |
| `onClose` / `@close`                  | own `close` event listener                                                                | `onClose` / `@close`                                                                 |
| `onCancel` / `@cancel`                | own `cancel` event listener, including ESC and backdrop dismissal                         | `onCancel` / `@cancel`                                                               |
| `header` slot with `DBDialogHeader`   | own `<header>` with heading, generated heading `id`, `aria-labelledby` and a close button | `header` slot with `DBDrawerHeader`                                                  |
| `footer` slot with `DBDialogFooter`   | own `<footer>` holding the action buttons                                                 | no equivalent, drawer actions live in the content                                    |
| default slot (`.db-dialog-content`)   | own scroll container so only the content scrolls                                          | default slot (`.db-drawer-content`)                                                  |
| not available                         | -                                                                                         | `direction`, `position`, `rounded`, `showSpacing`, `variant`, `backdrop="invisible"` |

A dialog is always centered in the top layer and uses the `DBCard` visual base, so the drawer properties in the last row have no `DBDialog` counterpart.

Before, a hand-written modal:

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
| `utils/dialog-ponyfill.ts`              | `closedby` attribute on `<dialog>` and Invoker Commands (`command` / `commandfor`) | every Browserslist target supports both features | marks the dialog with `data-closedby="not-supported"` and calls `requestClose()` on click of a `command="request-close"` button in JavaScript |
| `styles/internal/_dialog-ponyfill.scss` | `closedby` attribute on `<dialog>`                                                 | every Browserslist target supports `closedby`    | extends the close button hit area over the area outside the dialog box, so a click next to a modal dialog still closes it                     |

Browsers with native support get the native behavior: no `data-closedby` attribute, no intercepted clicks.
