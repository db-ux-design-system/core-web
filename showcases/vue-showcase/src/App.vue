<script setup lang="ts">
import {
	DBPage,
	DBHeader,
	DBBrand,
	DBSelect,
	DBNavigation,
	DBButton
} from "../../../output/vue/src";
import {
	COLOR,
	COLORS,
	DENSITIES,
	DENSITY,
	COLOR_CONST,
	DENSITY_CONST
} from "../../../packages/components/src/shared/constants";
import {
	getSortedNavigationItems,
	navigationItems
} from "./utils/navigation-items";

import { ref, watch, computed } from "vue";
import { useRouter, useRoute } from "vue-router";
import NavItemComponent from "./NavItemComponent.vue";

const router = useRouter();
const route = useRoute();

const density = ref(DENSITY.REGULAR);
const color = ref(COLOR.NEUTRAL_BG_LEVEL_1);
const page = ref();
const fullscreen = ref();

const drawerOpen = ref(false);

const toggleDrawer = (open: boolean) => {
	drawerOpen.value = open;
};

const classNames = computed(
	() => `db-density-${density.value} db-${color.value}`
);

const onChange = (event: any) => {
	router.push({
		path: route.path,
		query: {
			...route.query,
			[DENSITY_CONST]: density.value,
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
		if (query[DENSITY_CONST] && query[DENSITY_CONST] !== density.value) {
			density.value = query[DENSITY_CONST];
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
	<div v-if="page || fullscreen" :class="classNames">
		<router-view></router-view>
	</div>
	<DBPage
		v-if="!page && !fullscreen"
		variant="fixed"
		documentOverflow="auto"
		:fadeIn="true"
	>
		<template v-slot:header>
			<DBHeader :drawerOpen="drawerOpen" :onToggle="toggleDrawer">
				<template v-slot:brand>
					<DBBrand>Showcase</DBBrand>
				</template>
				<DBNavigation>
					<template v-for="item of sortedNavigation">
						<NavItemComponent :navItem="item"></NavItemComponent>
					</template>
				</DBNavigation>
				<template v-slot:call-to-action>
					<DBButton
						icon="magnifying_glass"
						variant="ghost"
						:no-text="true"
					>
						Search
					</DBButton>
				</template>
				<template v-slot:action-bar>
					<DBButton icon="user" variant="ghost" :no-text="true">
						Profile
					</DBButton>
					<DBButton icon="bell" variant="ghost" :no-text="true">
						Notification
					</DBButton>
					<DBButton
						icon="question_mark_circle"
						variant="ghost"
						:no-text="true"
					>
						Help
					</DBButton>
				</template>
				<template v-slot:meta-navigation>
					<DBSelect
						label="Density"
						variant="floating"
						v-model:value="density"
						@change="onChange($event)"
					>
						<option v-for="ton of DENSITIES" :value="ton">
							{{ ton }}
						</option>
					</DBSelect>
					<DBSelect
						label="Color"
						variant="floating"
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
		<div :class="classNames">
			<router-view></router-view>
		</div>
	</DBPage>
</template>
