<script setup lang="ts">
import {
	DBNavigationItem,
	DBSubNavigation
} from "../../../output/vue/vue3/src";
import { NavItem } from "./utils/navigation-items";
import { useRoute } from "vue-router";

defineProps<{
	navItem?: NavItem;
}>();

const route = useRoute();

const isActive = (navItem: NavItem) =>
	navItem.path !== "/"
		? route.path.includes(navItem.path)
		: route.path === "/";
</script>

<template>
	<DBNavigationItem
		:backButtonText="`Back to ${navItem.label}`"
		:active="isActive(navItem)"
	>
		<template v-if="navItem.subNavigation" v-slot:sub-navigation>
			<template v-for="item of navItem.subNavigation">
				<NavItemComponent :navItem="item"></NavItemComponent>
			</template>
		</template>
		<router-link v-if="navItem.component" :to="navItem.path">
			{{ navItem.label }}
		</router-link>
		<template v-if="!navItem.component">{{ navItem.label }}</template>
	</DBNavigationItem>
</template>
