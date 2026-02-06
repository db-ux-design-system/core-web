<script setup lang="ts">
import { DBNavigationItem } from "../../../packages/v-core-components/src";
import { type NavItem } from "./utils/navigation-items";

defineProps<{
	navItem: NavItem;
}>();
</script>

<template>
	<DBNavigationItem :backButtonText="`Back to ${navItem.label}`">
		<template v-if="navItem.subNavigation" v-slot:sub-navigation>
			<template v-for="item of navItem.subNavigation">
				<NavItemComponent :navItem="item"></NavItemComponent>
			</template>
		</template>
		<router-link
			v-if="navItem.component"
			:to="navItem.path"
			ariaCurrentValue="page"
		>
			{{ navItem.label }}
		</router-link>
		<template v-if="!navItem.component">{{ navItem.label }}</template>
	</DBNavigationItem>
</template>
