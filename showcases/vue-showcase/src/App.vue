<script setup lang="ts">
import {
	DBControlPanelBrand,
	DBControlPanelDesktop,
	DBControlPanelMobile,
	DBControlPanelNavigation,
	DBControlPanelSkipNavigation,
	DBShell,
	DBShellContent,
	DBShellSubNavigation
} from "@components";
import { computed, watchEffect } from "vue";
import NavItemComponent from "./NavItemComponent.vue";

import { useLayout } from "./composables/use-layout";
import Actions1 from "./control-panel/Actions1.vue";
import Actions2 from "./control-panel/Actions2.vue";
import MetaNavigation from "./control-panel/MetaNavigation.vue";
// The DB-UX stylesheets are emitted as assets (`?url`); the active one is
// swapped at runtime via the "Coloring" select (see the effect below), mirroring
// the react-showcase. `db-ux.css` is legacy, `db-ux-adaptive.css` is adaptive
// only, `db-ux-legacy-adaptive.css` loads both so they can coexist.
import dbUxAdaptiveStyleUrl from "./db-ux-adaptive.css?url";
import dbUxLegacyAdaptiveStyleUrl from "./db-ux-legacy-adaptive.css?url";
import dbUxStyleUrl from "./db-ux.css?url";
import Page from "./page/Page.vue";

const {
	page,
	fullscreen,
	classNames,
	sortedNavigation,
	settings,
	shell,
	coloringMode
} = useLayout();

// "adaptive" forces the whole document into adaptive coloring. "legacy" and
// "legacy-adaptive" render legacy by default; "legacy-adaptive" additionally
// loads the adaptive bundle so a `[data-adaptive-coloring="true"]` subtree opts in.
const rootAdaptive = computed(() =>
	coloringMode.value === "adaptive" ? "true" : undefined
);

watchEffect(() => {
	const id = "db-ux-stylesheet";
	let link = document.querySelector<HTMLLinkElement>(`#${id}`);
	if (!link) {
		link = document.createElement("link");
		link.id = id;
		link.rel = "stylesheet";
		document.head.appendChild(link);
	}

	if (coloringMode.value === "adaptive") {
		link.href = dbUxAdaptiveStyleUrl;
	} else if (coloringMode.value === "legacy-adaptive") {
		link.href = dbUxLegacyAdaptiveStyleUrl;
	} else {
		link.href = dbUxStyleUrl;
	}
});
</script>

<template>
	<div
		v-if="page || fullscreen"
		:class="`fullscreen-container ${classNames}`"
		:data-adaptive-coloring="rootAdaptive"
	>
		<router-view></router-view>
	</div>
	<Page v-else-if="!shell" />
	<DBShell
		v-if="!page && !fullscreen && shell"
		fadeIn
		:data-adaptive-coloring="rootAdaptive"
		:controlPanelDesktopPosition="settings.controlPanelDesktopPosition"
		:controlPanelMobilePosition="settings.controlPanelMobilePosition"
		:subNavigationDesktopPosition="settings.subNavigationDesktopPosition"
		:subNavigationMobilePosition="settings.subNavigationMobilePosition"
		:show-sub-navigation="settings.subNavigation === 'true'"
	>
		<DBShellSubNavigation>
			<DBControlPanelNavigation
				:variant="settings.subNavigationVariant"
				aria-label="sub navigation"
			>
				<template v-for="item of sortedNavigation">
					<NavItemComponent :navItem="item"></NavItemComponent>
				</template>
			</DBControlPanelNavigation>
		</DBShellSubNavigation>
		<DBControlPanelDesktop>
			<template v-slot:skip-navigation>
				<DBControlPanelSkipNavigation>
					<a href="#main-content">Skip navigation</a>
				</DBControlPanelSkipNavigation>
			</template>
			<template v-slot:brand>
				<DBControlPanelBrand>Showcase</DBControlPanelBrand>
			</template>
			<DBControlPanelNavigation
				:variant="settings.navigationDesktopVariant"
				aria-label="main navigation desktop"
			>
				<template v-for="item of sortedNavigation">
					<NavItemComponent :navItem="item"></NavItemComponent>
				</template>
			</DBControlPanelNavigation>
			<template v-slot:actions-1>
				<Actions1 />
			</template>
			<template v-slot:actions-2>
				<Actions2 />
			</template>
			<template v-slot:meta>
				<MetaNavigation />
			</template>
		</DBControlPanelDesktop>
		<DBControlPanelMobile drawerHeaderText="Showcase">
			<template v-slot:skip-navigation>
				<DBControlPanelSkipNavigation>
					<a href="#main-content">Skip navigation</a>
				</DBControlPanelSkipNavigation>
			</template>
			<template v-slot:brand>
				<DBControlPanelBrand>Showcase</DBControlPanelBrand>
			</template>
			<DBControlPanelNavigation
				:variant="settings.navigationMobileVariant"
				aria-label="main navigation mobile"
			>
				<template v-for="item of sortedNavigation">
					<NavItemComponent :navItem="item"></NavItemComponent>
				</template>
			</DBControlPanelNavigation>
			<template v-slot:actions-1>
				<Actions1 />
			</template>
			<template v-slot:actions-2>
				<Actions2 />
			</template>
			<template v-slot:meta>
				<MetaNavigation />
			</template>
		</DBControlPanelMobile>
		<DBShellContent :class="classNames">
			<router-view></router-view>
		</DBShellContent>
	</DBShell>
</template>
