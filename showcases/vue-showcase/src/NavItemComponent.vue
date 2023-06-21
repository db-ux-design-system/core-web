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
	<DBNavigationItem :active="isActive(navItem)">
		<template v-if="navItem.subNavigation" v-slot:sub-navigation>
			<template v-for="item of navItem.subNavigation">
				<router-link v-if="item.component" :to="item.path">
					<NavItemComponent :navItem="item"></NavItemComponent>
				</router-link>
				<NavItemComponent
					v-if="!item.component"
					:navItem="item"
				></NavItemComponent>
			</template>
		</template>
		{{ navItem.label }}
	</DBNavigationItem>
</template>
