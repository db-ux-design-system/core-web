## Vue

For general installation and configuration take a look at the [v-core-components](https://www.npmjs.com/package/@db-ux/v-core-components) package.

### Use component

```vue App.vue
<!-- App.vue -->
<script>
import {
	DBShell,
	DBShellContent,
	DBControlPanelDesktop,
	DBControlPanelBrand
} from "@db-ux/v-core-components";
</script>

<template>
	<DBShell>
		<DBControlPanelDesktop>
			<template v-slot:brand>
				<DBControlPanelBrand>My App</DBControlPanelBrand>
			</template>
			<!-- Navigation goes here -->
		</DBControlPanelDesktop>
		<DBShellContent>Main Content</DBShellContent>
	</DBShell>
</template>
```

### Add a footer

`DBShell` lays its children out in a grid with areas for the control panel, the sub-navigation, and the content only. There is no footer area, so a footer must not be a direct child of `DBShell` — it would be auto-placed by the grid instead of ending up below the content. Put it in the `end-slot` of `DBShellContent`:

```vue App.vue
<!-- App.vue -->
<script>
import {
	DBShell,
	DBShellContent,
	DBControlPanelDesktop,
	DBControlPanelBrand,
	DBFooter,
	DBFooterMeta
} from "@db-ux/v-core-components";
</script>

<template>
	<DBShell>
		<DBControlPanelDesktop>
			<template #brand>
				<DBControlPanelBrand>My App</DBControlPanelBrand>
			</template>
			<!-- Navigation goes here -->
		</DBControlPanelDesktop>
		<DBShellContent
			>Main Content
			<template #end-slot>
				<DBFooter width="medium">
					<DBFooterMeta copyright="My Company" />
				</DBFooter>
			</template>
		</DBShellContent>
	</DBShell>
</template>
```

With the default `variant="auto"` the whole content area scrolls, so the footer scrolls out of view and is pushed to the bottom edge whenever the content is shorter than the viewport. With `variant="fixed"` only `main` scrolls, so the footer stays visible. The same slot also takes any other content that should sit below `main`, for example a cookie banner. Use `start-slot` for content above `main`.
