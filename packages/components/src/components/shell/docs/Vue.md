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
