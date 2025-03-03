<!--
SPDX-FileCopyrightText: 2025 DB Systel GmbH

SPDX-License-Identifier: Apache-2.0
-->

## Vue

For general installation and configuration look at the [v-core-components](https://www.npmjs.com/package/@db-ux/v-core-components) package.

### Use component

```vue App.vue
<!-- App.vue -->
<script>
import { DBNavigation, DBNavigationItem } from "@db-ux/v-core-components";
</script>

<template>
	<DBNavigation>
		<DBNavigationItem>
			Navi-Item 1
			<template v-slot:sub-navigation>
				<DBNavigationItem>
					Sub-Navi-Item 1

					<template v-slot:sub-navigation>
						<DBNavigationItem>
							<a href="#" aria-current="page"
								>Sub-Sub-Navi-Item 1</a
							>
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
		<DBNavigationItem icon="x_placeholder">
			<a href="#">Navi-Item 2</a>
		</DBNavigationItem>
		<DBNavigationItem :disabled="true">
			<a href="#">Navi-Item 3</a>
		</DBNavigationItem>
	</DBNavigation>
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
import { DBMainNavigation, DBNavigationItem } from "@db-ux/v-core-components";
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
