## Vue

Use `DBShellContent` as the content area of `DBShell`. It owns the `shell-content` grid area and wraps a native `main`, which is the target of the skip-navigation link, so use only one per page.

The `start-slot` renders above the content, `end-slot` below it — `end-slot` is where a `DBFooter` belongs. `DBShell` itself has no footer area, so a footer placed as a direct child of `DBShell` is auto-placed by the grid and does not end up below the content.

```vue App.vue
<!-- App.vue -->
<script>
import {
	DBFooter,
	DBNotification,
	DBShell,
	DBShellContent
} from "@db-ux/v-core-components";
</script>

<template>
	<DBShell>
		<!-- Control panels go here -->
		<DBShellContent variant="fixed"
			>Main content
			<template #start-slot>
				<DBNotification>Content above main</DBNotification>
			</template>
			<template #end-slot>
				<DBFooter>...</DBFooter>
			</template>
		</DBShellContent>
	</DBShell>
</template>
```

`variant` controls the scrolling behaviour. With the default `auto` the whole content area scrolls, and `main` pushes the `end-slot` content to the bottom edge while the content is shorter than the viewport. With `fixed` only `main` scrolls, so both slots stay visible.

Override `mainId` only when the default `main-content` clashes with an existing id, and keep it in sync with the skip-navigation target.
