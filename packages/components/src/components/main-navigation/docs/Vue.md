## Vue

For general installation and configuration look at the [v-components](https://www.npmjs.com/package/@db-ui/v-components) package.

### Use component

```vue App.vue
<!-- App.vue -->
<script>
import { DBMainNavigation, DBNavigationItem } from "@db-ui/v-components";
</script>

<template>
	<DBMainNavigation>
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
		<DBNavigationItem icon="account">
			<a href="#">Navi-Item 2</a>
		</DBNavigationItem>
		<DBNavigationItem :disabled="true">
			<a href="#">Navi-Item 3</a>
		</DBNavigationItem>
	</DBMainNavigation>
</template>
```
