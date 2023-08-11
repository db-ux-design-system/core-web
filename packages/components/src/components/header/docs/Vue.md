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
		<template v-slot:call-to-action>
			<DBButton icon="search" variant="text" :no-text="true">
				Search
			</DBButton>
		</template>
		<template v-slot:action-bar>
			<DBButton icon="account" variant="text" :no-text="true">
				Profile
			</DBButton>
			<DBButton icon="alert" variant="text" :no-text="true">
				Notification
			</DBButton>
			<DBButton icon="help" variant="text" :no-text="true">
				Help
			</DBButton>
		</template>
		<template v-slot:meta-navigation>
			<DBLink href="#">Imprint</DBLink>
			<DBLink href="#">Help</DBLink>
		</template>

		<DBMainNavigation>
			// https://github.com/db-ui/mono/blob/main/packages/components/src/components/main-navigation/docs/Vue.md
		</DBMainNavigation>
	</DBHeader>
</template>
```
