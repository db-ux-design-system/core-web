<script setup lang="ts">
import {
	DBControlPanelNavigationItem,
	DBControlPanelNavigationItemGroup
} from "@components";
import { type NavItem } from "./utils/navigation-items";

defineProps<{
	navItem: NavItem;
}>();
</script>

<template>
	<template v-if="navItem.subNavigation">
		<DBControlPanelNavigationItemGroup :text="navItem.label">
			<template v-for="item of navItem.subNavigation">
				<NavItemComponent :navItem="item"></NavItemComponent>
			</template>
		</DBControlPanelNavigationItemGroup>
	</template>
	<template v-if="!navItem.subNavigation">
		<DBControlPanelNavigationItem
			:backButtonText="`Back to ${navItem.label}`"
		>
			<router-link :to="navItem.path" ariaCurrentValue="page">
				{{ navItem.label }}
			</router-link>
		</DBControlPanelNavigationItem>
	</template>
</template>
