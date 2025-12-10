# Migration DBPage, DBHeader, DBNavigation

## Original Example

### MetaNavigation.vue

```vue
<script setup lang="ts">
import { DBLink } from "@db-ux/v-core-components";
</script>

<template>
	<DBLink href="#">Imprint</DBLink> <DBLink href="#">Help</DBLink>
</template>
```

### PrimaryActions.vue

```vue
<script setup lang="ts">
import { DBButton } from "@db-ux/v-core-components";
</script>

<template>
	<DBButton icon="magnifying_glass" variant="ghost" noText> Search </DBButton>
</template>
```

### SecondaryActions.vue

```vue
<script setup lang="ts">
import { DBButton } from "@db-ux/v-core-components";
</script>

<template>
	<DBButton icon="x_placeholder" variant="ghost" noText> Profile </DBButton>
	<DBButton icon="alert" variant="ghost" noText> Notification </DBButton>
	<DBButton icon="help" variant="ghost" noText> Help </DBButton>
</template>
```

### Navigation.vue

```vue
<script setup lang="ts">
import { Navigation, NavigationItem } from "@db-ux/v-core-components";
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

### App.vue

```vue
<script setup lang="ts">
import { _ref } from "vue";
import Navigation from "./Navigation.vue";
import MetaNavigation from "./MetaNavigation.vue";
import PrimaryActions from "./PrimaryActions.vue";
import SecondaryActions from "./SecondaryActions.vue";
import { DBPage, DBHeader, DBBrand } from "@db-ux/v-core-components";

const drawerOpen = _ref(false);

const toggleDrawer = (open: boolean) => {
	drawerOpen.value = open;
};
</script>

<template>
	<DBPage fadeIn docuementOverflow="hidden" variant="fixed">
		<template v-slot:header>
			<DBHeader :drawerOpen="drawerOpen" :onToggle="toggleDrawer">
				<template v-slot:brand>
					<DBBrand> My Awesome App </DBBrand>
				</template>
				<template v-slot:primary-action>
					<PrimaryActions />
				</template>
				<template v-slot:secondary-action>
					<SecondaryActions />
				</template>
				<template v-slot:meta-navigation>
					<MetaNavigation />
				</template>

				<Navigation />
			</DBHeader>
		</template>
		<template v-slot:footer><div>Footer</div></template>
		Main Page
	</DBPage>
</template>
```

## Refactored Example

### MetaNavigation.vue

```vue
<script setup lang="ts">
import {
	DBLink,
	DBControlPanelMetaNavigation // new
} from "@db-ux/v-core-components";
</script>

<template>
	<!--	added DBControlPanelMetaNavigation	-->
	<DBControlPanelMetaNavigation>
		<DBLink href="#">Imprint</DBLink>
		<DBLink href="#">Help</DBLink>
	</DBControlPanelMetaNavigation>
</template>
```

### PrimaryActions.vue

```vue
<script setup lang="ts">
import {
	DBButton,
	DBControlPanelPrimaryActions // new
} from "@db-ux/v-core-components";
</script>

<template>
	<!--	added DBControlPanelPrimaryActions	-->
	<DBControlPanelPrimaryActions>
		<DBButton icon="magnifying_glass" variant="ghost" noText>
			Search
		</DBButton>
	</DBControlPanelPrimaryActions>
</template>
```

### SecondaryActions.vue

```vue
<script setup lang="ts">
import {
	DBButton,
	DBControlPanelSecondaryActions // new
} from "@db-ux/v-core-components";
</script>

<template>
	<!--	added DBControlPanelSecondaryActions	-->
	<DBControlPanelSecondaryActions>
		<DBButton icon="x_placeholder" variant="ghost" noText>
			Profile
		</DBButton>
		<DBButton icon="alert" variant="ghost" noText> Notification </DBButton>
		<DBButton icon="help" variant="ghost" noText> Help </DBButton>
	</DBControlPanelSecondaryActions>
</template>
```

### Navigation.vue

```vue
<script setup lang="ts">
import {
	Navigation,
	NavigationItem,
	DBNavigationItemGroup // new
} from "@db-ux/v-core-components";
</script>

<template>
	<DBNavigation>
		<DBNavigationItemGroup text="Navi-Item 1">
			<!--	replaced DBNavigationItem with `subNavigation`	-->
			<DBNavigationItemGroup text="Sub-Navi-Item 1">
				<!--	replaced DBNavigationItem with `subNavigation`	-->
				<DBNavigationItem>
					<a href="#" aria-current="page">Sub-Sub-Navi-Item 1</a>
				</DBNavigationItem>
				<DBNavigationItem>
					<a href="#">Sub-Sub-Navi-Item 2</a>
				</DBNavigationItem>
			</DBNavigationItemGroup>
			<DBNavigationItem>
				<a href="#">Sub-Navi-Item 2</a>
			</DBNavigationItem>
		</DBNavigationItemGroup>
		<DBNavigationItem icon="x_placeholder">
			<a href="#">Navi-Item 2</a>
		</DBNavigationItem>
		<DBNavigationItem :disabled="true">
			<a href="#">Navi-Item 3</a>
		</DBNavigationItem>
	</DBNavigation>
</template>
```

### App.vue

```vue
<script setup lang="ts">
import { _ref } from "vue";
import Navigation from "./Navigation.vue";
import MetaNavigation from "./MetaNavigation.vue";
import PrimaryActions from "./PrimaryActions.vue";
import SecondaryActions from "./SecondaryActions.vue";
import {
	DBShell, // previously: DBPage
	DBControlPanelDesktop, // previously: DBHeader
	DBControlPanelMobile, // previously: DBHeader
	DBControlPanelBrand // previously: DBBrand
} from "@db-ux/v-core-components";

// No need for own drawer state
/*const drawerOpen = _ref(false);

const toggleDrawer = (open: boolean) => {
	drawerOpen.value = open;
};*/
</script>

<template>
	<DBShell fadeIn>
		<template v-slot:controlPanelDesktop>
			<DBControlPanelDesktop>
				<template v-slot:brand>
					<DBControlPanelBrand> My Awesome App </DBControlPanelBrand>
				</template>
				<template v-slot:primary-actions>
					<PrimaryActions />
				</template>
				<template v-slot:secondary-actions>
					<SecondaryActions />
				</template>
				<template v-slot:meta-navigation>
					<MetaNavigation />
				</template>

				<Navigation />
			</DBControlPanelDesktop>
		</template>
		<template v-slot:controlPanelMobile>
			<DBControlPanelMobile>
				<template v-slot:brand>
					<DBControlPanelBrand> My Awesome App </DBControlPanelBrand>
				</template>
				<template v-slot:primary-actions>
					<PrimaryActions />
				</template>
				<template v-slot:secondary-actions>
					<SecondaryActions />
				</template>
				<template v-slot:meta-navigation>
					<MetaNavigation />
				</template>
				<Navigation />
			</DBControlPanelMobile>
		</template>
		Main Page
	</DBShell>
</template>
```
