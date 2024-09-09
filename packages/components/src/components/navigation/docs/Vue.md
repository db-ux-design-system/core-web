## Vue

For general installation and configuration look at the [v-components](https://www.npmjs.com/package/@db-ui/v-components) package.

### Use component

```vue App.vue
<!-- App.vue -->
<script>
import { DBNavigation, DBNavigationItem } from "@db-ui/v-components";
</script>

<template>
	<DBNavigation>
		<DBNavigationItem :active="true">
			Navi-Item 1
			<template v-slot:sub-navigation>
				<DBNavigationItem :active="true">
					Sub-Navi-Item 1

					<template v-slot:sub-navigation>
						<DBNavigationItem :active="true">
							<a href="#">Sub-Sub-Navi-Item 1</a>
						</DBNavigationItem>
						<DBNavigationItem>
							<a href="#">Sub-Sub-Navi-Item 2</a>
						</DBNavigationItem>
					</template>
				</DBNavigationItem>
				<DBNavigationItem>
					<a href="#">Sub-Navi-Item 2</a>
				</DBNavigationItem>
			</template>
		</DBNavigationItem>
		<DBNavigationItem icon="person">
			<a href="#">Navi-Item 2</a>
		</DBNavigationItem>
		<DBNavigationItem :disabled="true">
			<a href="#">Navi-Item 3</a>
		</DBNavigationItem>
	</DBNavigation>
</template>
```

### Vue Router and active state handling

You can set the property `active` to a boolean value as in the example above.
It will cause the navigation item to render in active style and implicitly
set `aria-current="page"` to the list element.

The component will also check for child element set to `aria-current="page"`.
Such elements are also displayed in active state.
This makes the component [integration with the Vue Router](https://router.vuejs.org/api/interfaces/RouterLinkProps.html#ariaCurrentValue) way more elegant
compared to the first variant.

Now you can use Vue Routers `RouterLink` component to define your targets.
The active style is automatically set once an item receives the `aria-current="page"` attribute.

```vue App.vue
<!-- App.vue -->
<script>
import { DBMainNavigation, DBNavigationItem } from "@db-ui/v-components";
</script>

<template>
	<DBMainNavigation>
		<DBNavigationItem>
			<RouterLink to="/" ariaCurrentValue="page">Home</RouterLink>
		</DBNavigationItem>
		<DBNavigationItem>
			<template> Demo Pages </template>
			<template #subnavigation>
				<DBNavigationItem>
					<RouterLink to="/demo/1" ariaCurrentValue="page">
						Demo Page 1
					</RouterLink>
				</DBNavigationItem>
				<DBNavigationItem>
					<RouterLink to="/demo/2" ariaCurrentValue="page">
						Demo Page 2
					</RouterLink>
				</DBNavigationItem>
			</template>
		</DBNavigationItem>
	</DBMainNavigation>
</template>
```
