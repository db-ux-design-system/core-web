<script setup lang="ts">
import DefaultComponent from "../DefaultComponent.vue";
import defaultComponentVariants from "../../../../shared/infotext.json";
import { DBInfotext } from "../../../../../output/vue/vue3/src";
</script>

<template>
	<DefaultComponent title="DBInfotext" :variants="defaultComponentVariants">
		<template
			#example="{ exampleIndex, variantIndex, exampleName, exampleProps }"
		>
			<DBInfotext
				:size="exampleProps.size"
				:variant="exampleProps.variant"
				:icon="exampleProps.icon"
			>
				{{ exampleName }}
			</DBInfotext>
		</template>
	</DefaultComponent>
</template>
