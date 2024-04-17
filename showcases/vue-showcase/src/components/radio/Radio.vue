<script setup lang="ts">
import DefaultComponent from "../DefaultComponent.vue";
import defaultComponentVariants from "../../../../shared/radio.json";
import { DBRadio } from "../../../../../output/vue/src";
</script>

<template>
	<DefaultComponent title="DBRadio" :variants="defaultComponentVariants">
		<template
			#example="{ exampleIndex, variantIndex, exampleName, exampleProps }"
		>
			<DBRadio
				:label="exampleProps.label"
				:size="exampleProps.size"
				:name="exampleProps.name"
				:checked="exampleProps.checked"
				:value="exampleProps.value"
				:required="exampleProps.required"
				:variant="exampleProps.variant"
				:disabled="exampleProps.disabled"
			>
				{{ exampleName }}
			</DBRadio>
		</template>
	</DefaultComponent>
</template>
