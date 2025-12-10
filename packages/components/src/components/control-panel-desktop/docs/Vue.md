## Vue

For general installation and configuration take a look at the [v-core-components](https://www.npmjs.com/package/@db-ux/v-core-components) package.

### Use component

#### Simple

```vue App.vue
<!-- App.vue -->
<script>
import {
	DBControlPanelDesktop,
	DBControlPanelBrand
} from "@db-ux/v-core-components";
</script>

<template>
	<DBControlPanelDesktop>
		<DBControlPanelBrand slot="control-panel-brand"
			>ControlPanelDesktop</DBControlPanelBrand
		>
	</DBControlPanelDesktop>
</template>
```

#### Full

```vue App.vue
<!-- App.vue -->
<script>
import { _ref } from "vue";
import { DBControlPanelDesktop, DBControlPanelBrand, DBLink, DBButton } from "@db-ux/v-core-components";

const drawerOpen = _ref(false);

const toggleDrawer = (open: boolean) => {
	drawerOpen.value = open;
};
</script>

<template>
	<DBControlPanelDesktop :drawerOpen="drawerOpen" :onToggle="toggleDrawer">
		<template v-slot:control-panel-brand>
			<DBControlPanelBrand> My Awesome App </DBControlPanelBrand>
		</template>
		<template v-slot:primary-action>
			<DBButton icon="magnifying_glass" variant="ghost" :no-text="true">
				Search
			</DBButton>
		</template>
		<template v-slot:secondary-action>
			<DBButton icon="x_placeholder" variant="ghost" :no-text="true">
				Profile
			</DBButton>
			<DBButton icon="alert" variant="ghost" :no-text="true">
				Notification
			</DBButton>
			<DBButton icon="help" variant="ghost" :no-text="true">
				Help
			</DBButton>
		</template>
		<template v-slot:meta-navigation>
			<DBLink href="#">Imprint</DBLink>
			<DBLink href="#">Help</DBLink>
		</template>

		<DBNavigation>
			//
			https://github.com/db-ux-design-system/core-web/blob/main/packages/components/src/components/navigation/docs/Vue.md
		</DBNavigation>
	</DBControlPanelDesktop>
</template>
```
