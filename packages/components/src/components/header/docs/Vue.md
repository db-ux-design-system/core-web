## Vue

For general installation and configuration take a look at the [v-components](https://www.npmjs.com/package/@db-ui/v-components) package.

### Use component

#### Simple

```vue App.vue
<!-- App.vue -->
<script>
import { DBHeader, DBBrand } from "@db-ui/v-components";
</script>

<template>
	<DBHeader>
		<DBBrand slot="brand">Header</DBBrand>
	</DBHeader>
</template>
```

#### Full

```vue App.vue
<!-- App.vue -->
<script>
import { ref } from "vue";
import { DBHeader, DBBrand, DBLink, DBButton } from "@db-ui/v-components";

const drawerOpen = ref(false);

const toggleDrawer = (open: boolean) => {
	drawerOpen.value = open;
};
</script>

<template>
	<DBHeader :drawerOpen="drawerOpen" :onToggle="toggleDrawer">
		<template v-slot:brand>
			<DBBrand> My Awesome App </DBBrand>
		</template>
		<template v-slot:primary-action>
			<DBButton icon="magnifying_glass" variant="ghost" :no-text="true">
				Search
			</DBButton>
		</template>
		<template v-slot:secondary-action>
			<DBButton icon="person" variant="ghost" :no-text="true">
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
			https://github.com/db-ui/mono/blob/main/packages/components/src/components/navigation/docs/Vue.md
		</DBNavigation>
	</DBHeader>
</template>
```
