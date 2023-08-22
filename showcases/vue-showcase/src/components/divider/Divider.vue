<script setup lang="ts">
import DefaultComponent from "../DefaultComponent.vue";
import defaultComponentVariants from "../../../../shared/divider.json";
import { DBDivider, DBInfotext } from "../../../../../output/vue/vue3/src";
</script>

<template>
	<DefaultComponent title="DBDivider" :variants="defaultComponentVariants">
		<template
			#example="{ exampleIndex, variantIndex, exampleName, exampleProps }"
		>
			<DBInfotext size="small" variant="informational">
				{{ exampleName }}</DBInfotext
			>
			<DBDivider
				:variant="exampleProps.variant"
				:emphasis="exampleProps.emphasis"
			/>
		</template>
	</DefaultComponent>
</template>
