<script setup lang="ts">
import {
	COLORS,
	DBBrand,
	DBButton,
	DBHeader,
	DBPage,
	DBSelect,
	DBSwitch,
	DENSITIES
} from "@components";
import { ref } from "vue";
import { useLayout } from "../composables/use-layout";
import PageNavigation from "./PageNavigation.vue";

const { density, color, shell, onChange } = useLayout();

const drawerOpen = ref(false);

const onToggle = (open: boolean) => {
	drawerOpen.value = open;
};

const onShellToggle = () => {
	onChange({} as Event, "shell");
};
</script>

<template>
	<DBPage variant="fixed" documentOverflow="auto" fadeIn>
		<template #header>
			<DBHeader
				:drawerOpen="drawerOpen"
				:onToggle="onToggle"
				drawerHeaderText="Showcase"
			>
				<template #brand>
					<DBBrand>Showcase</DBBrand>
				</template>
				<template #meta-navigation>
					<DBSelect
						label="Density"
						variant="floating"
						:value="density"
						@change="onChange($event, 'density')"
					>
						<option v-for="ton of DENSITIES" :value="ton">
							{{ ton }}
						</option>
					</DBSelect>
					<DBSelect
						label="Color"
						variant="floating"
						:value="color"
						@change="onChange($event, 'color')"
					>
						<option v-for="col of COLORS" :value="col">
							{{ col }}
						</option>
					</DBSelect>
				</template>
				<template #primary-action>
					<DBButton icon="magnifying_glass" variant="ghost" noText>
						Search
					</DBButton>
				</template>
				<template #secondary-action>
					<DBSwitch :checked="shell" @change="onShellToggle">
						Shell
					</DBSwitch>
				</template>
				<PageNavigation />
			</DBHeader>
		</template>
		<div :data-density="density" :class="`db-${color}`">
			<router-view></router-view>
		</div>
	</DBPage>
</template>
