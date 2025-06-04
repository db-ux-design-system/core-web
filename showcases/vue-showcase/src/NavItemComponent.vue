<script setup lang="ts">
import { DBNavigationItem } from "@db-ux/v-core-components";
import { type NavItem } from "./utils/navigation-items";

defineProps<{
	navItem: NavItem;
}>();
</script>

<template>
	<template v-if="navItem.subNavigation">

	</template>
	<template v-if="!navItem.subNavigation">

		<DBNavigationItem :backButtonText="`Back to ${navItem.label}`">
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
</template>
