<script setup lang="ts">
import DefaultComponent from "../DefaultComponent.vue";
import defaultComponentVariants from "../../../../shared/divider.json";
import { DBDivider, DBInfotext } from "../../../../../output/vue/vue3/src";

const log = (exampleName: string) => {
	// eslint-disable-next-line no-alert
	alert(exampleName);
};
</script>

<template>
	<DefaultComponent title="Divider" :variants="defaultComponentVariants">
		<template
			#example="{ exampleIndex, variantIndex, exampleName, exampleProps }"
		>
			<DBInfotext size="small" variant="informational">
				{{ exampleName }}</DBInfotext
			>
			<DBDivider :variant="exampleProps.variant" />
		</template>
	</DefaultComponent>
</template>
