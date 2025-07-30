<script setup lang="ts">
import { DBNavigationItem, DBNavigationItemGroup } from "@components";
import { type NavItem } from "./utils/navigation-items";

defineProps<{
	navItem: NavItem;
}>();
</script>

<template>
	<template v-if="navItem.subNavigation">
		<DBNavigationItemGroup :text="navItem.label">
			<template v-for="item of navItem.subNavigation">
				<NavItemComponent :navItem="item"></NavItemComponent>
			</template>
		</DBNavigationItemGroup>
	</template>
	<template v-if="!navItem.subNavigation">
		<DBNavigationItem :backButtonText="`Back to ${navItem.label}`">
			<router-link :to="navItem.path" ariaCurrentValue="page">
				{{ navItem.label }}
			</router-link>
		</DBNavigationItem>
	</template>
</template>
