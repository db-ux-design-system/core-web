<script setup lang="ts">
import DefaultComponent from "../DefaultComponent.vue";
import defaultComponentVariants from "../../../../shared/infotext.json";
import { DBInfotext } from "../../../../../output/vue/src";
</script>

<template>
	<DefaultComponent title="DBInfotext" :variants="defaultComponentVariants">
		<template
			#example="{ exampleIndex, variantIndex, exampleName, exampleProps }"
		>
			<DBInfotext
				:size="exampleProps?.size"
				:semantic="exampleProps?.semantic"
				:icon="exampleProps?.icon"
				:showIcon="exampleProps?.showIcon"
			>
				{{ exampleName }}
			</DBInfotext>
		</template>
	</DefaultComponent>
</template>
