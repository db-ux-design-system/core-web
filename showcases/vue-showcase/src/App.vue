<script setup lang="ts">
import {
	DBPage,
	DBHeader,
	DBBrand,
	DBSelect,
	DBMainNavigation,
	DBButton
} from "../../../output/vue/vue3/src";
import {
	COLOR,
	COLORS,
	TONALITIES,
	TONALITY,
	COLOR_CONST,
	TONALITY_CONST
} from "../../../packages/components/src/shared/constants";
import {
	getSortedNavigationItems,
	navigationItems
} from "./utils/navigation-items";

import { ref, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
import NavItemComponent from "./NavItemComponent.vue";

const router = useRouter();
const route = useRoute();

const tonality = ref(TONALITY.REGULAR);
const color = ref(COLOR.BASE);
const page = ref();
const fullscreen = ref();

const drawerOpen = ref(false);

const toggleDrawer = (open: boolean) => {
	drawerOpen.value = open;
};

const getClassNames = () => {
	return `db-ui-${tonality.value} db-bg-${color.value}`;
};

const onChange = (event: any) => {
	router.push({
		path: route.path,
		query: {
			...route.query,
			[TONALITY_CONST]: tonality.value,
			[COLOR_CONST]: color.value
		}
	});
};

watch(
	() => route.query,
	async (query: any) => {
		if (query[COLOR_CONST] && query[COLOR_CONST] !== color.value) {
			color.value = query[COLOR_CONST];
		}
		if (query[TONALITY_CONST] && query[TONALITY_CONST] !== tonality.value) {
			tonality.value = query[TONALITY_CONST];
		}
		if (query.page) {
			page.value = query.page;
		}
		if (query.fullscreen) {
			page.value = query.fullscreen;
		}
	}
);

const sortedNavigation = getSortedNavigationItems(navigationItems);
</script>

<template>
	<div v-if="page || fullscreen" :class="getClassNames()">
		<router-view></router-view>
	</div>
	<DBPage v-if="!page && !fullscreen" type="fixedHeaderFooter" :fadeIn="true">
		<template v-slot:header>
			<DBHeader :drawerOpen="drawerOpen" :onToggle="toggleDrawer">
				<template v-slot:brand>
					<DBBrand
						title="Showcase"
						src="db_logo.svg"
						href="/vue-showcase/"
					>
						Showcase
					</DBBrand>
				</template>
				<DBMainNavigation>
					<template v-for="item of sortedNavigation">
						<NavItemComponent :navItem="item"></NavItemComponent>
					</template>
				</DBMainNavigation>
				<template v-slot:call-to-action>
					<DBButton icon="search" variant="text" :no-text="true">
						Search
					</DBButton>
				</template>
				<template v-slot:action-bar>
					<DBButton icon="account" variant="text" :no-text="true">
						Profile
					</DBButton>
					<DBButton icon="alert" variant="text" :no-text="true">
						Notification
					</DBButton>
					<DBButton icon="help" variant="text" :no-text="true">
						Help
					</DBButton>
				</template>
				<template v-slot:meta-navigation>
					<DBSelect
						label="Tonality"
						v-model:value="tonality"
						@change="onChange($event)"
					>
						<option v-for="ton of TONALITIES" :value="ton">
							{{ ton }}
						</option>
					</DBSelect>
					<DBSelect
						label="Color"
						v-model:value="color"
						@change="onChange($event)"
					>
						<option v-for="col of COLORS" :value="col">
							{{ col }}
						</option>
					</DBSelect>
				</template>
			</DBHeader>
		</template>
		<div :class="getClassNames()">
			<router-view></router-view>
		</div>
	</DBPage>
</template>
