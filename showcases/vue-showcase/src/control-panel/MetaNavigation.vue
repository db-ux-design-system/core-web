<script setup lang="ts">
import {
	DBControlPanelMetaNavigation,
	DBSelect
} from "../../../../packages/components/src";
import { COLORS, DENSITIES } from "@db-ux/core-components/src";
import { useLayout } from "../composables/use-layout";

const {
	density,
	color,
	onChange,
} = useLayout();
</script>

<template>
	<DBControlPanelMetaNavigation>
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
	</DBControlPanelMetaNavigation>
</template>
