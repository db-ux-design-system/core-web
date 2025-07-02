<script setup lang="ts">
import { DBInfotext } from "../../../../../output/vue/src";
import defaultComponentVariants from "../../../../shared/infotext.json";
import DefaultComponent from "../DefaultComponent.vue";
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
