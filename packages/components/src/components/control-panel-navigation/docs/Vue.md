## Vue

For general installation and configuration look at the [v-core-components](https://www.npmjs.com/package/@db-ux/v-core-components) package.

### Use component

```vue App.vue
<!-- App.vue -->
<script>
import {
	DBControlPanelNavigation,
	DBControlPanelNavigationItem,
	DBControlPanelNavigationItemGroup
} from "@db-ux/v-core-components";
</script>

<template>
	<DBControlPanelNavigation>
		<DBControlPanelNavigationItemGroup text="Navi-Group 1">
			<DBControlPanelNavigationItemGroup text="Sub-Group 1">
				<DBControlPanelNavigationItem>
					<a href="#" aria-current="page">Sub-Sub-Navi-Item 1</a>
				</DBControlPanelNavigationItem>
				<DBControlPanelNavigationItem>
					<a href="#">Sub-Sub-Navi-Item 2</a>
				</DBControlPanelNavigationItem>
			</DBControlPanelNavigationItemGroup>
			<DBControlPanelNavigationItem>
				<a href="#">Sub-Navi-Item 2</a>
			</DBControlPanelNavigationItem>
		</DBControlPanelNavigationItemGroup>
		<DBControlPanelNavigationItem icon="x_placeholder">
			<a href="#">Navi-Item 2</a>
		</DBControlPanelNavigationItem>
		<DBControlPanelNavigationItem :disabled="true">
			<a href="#">Navi-Item 3</a>
		</DBControlPanelNavigationItem>
	</DBControlPanelNavigation>
</template>
```

### Vue Router and active state handling

We recommend using the automatic [integration with the Vue Router](https://router.vuejs.org/api/interfaces/RouterLinkProps.html#ariaCurrentValue). This is way more elegant than setting the aria attribute to the anchor yourself.

You can use Vue Routers `RouterLink` component to define your targets.
The active style is automatically set once an item receives the `aria-current="page"` attribute.

For other purposes, `NavigationItems` themselves can also be set to active with their prop `:active="true"`. However, this does not guarantee correct a11y.

```vue App.vue
<!-- App.vue -->
<script>
import {
	DBControlPanelNavigation,
	DBControlPanelNavigationItem,
	DBControlPanelNavigationItemGroup
} from "@db-ux/v-core-components";
</script>

<template>
	<DBControlPanelNavigation>
		<DBControlPanelNavigationItem>
			<RouterLink to="/" ariaCurrentValue="page">Home</RouterLink>
		</DBControlPanelNavigationItem>
		<DBControlPanelNavigationItemGroup text="Demo Pages">
			<DBControlPanelNavigationItem>
				<RouterLink to="/demo/1" ariaCurrentValue="page">
					Demo Page 1
				</RouterLink>
			</DBControlPanelNavigationItem>
			<DBControlPanelNavigationItem>
				<RouterLink to="/demo/2" ariaCurrentValue="page">
					Demo Page 2
				</RouterLink>
			</DBControlPanelNavigationItem>
		</DBControlPanelNavigationItemGroup>
	</DBControlPanelNavigation>
</template>
```
