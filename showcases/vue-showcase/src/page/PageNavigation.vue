<script setup lang="ts">
import { DBNavigation } from "@components";
import {
	getSortedNavigationItems,
	navigationItems
} from "../utils/navigation-items";
import PageNavItem from "./PageNavItem.vue";
</script>

<template>
	<DBNavigation aria-label="main navigation">
		<template v-for="item of getSortedNavigationItems(navigationItems)">
			<PageNavItem :navItem="item" />
		</template>
	</DBNavigation>
</template>
