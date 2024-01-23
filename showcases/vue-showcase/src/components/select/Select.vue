<script setup lang="ts">
import DefaultComponent from "../DefaultComponent.vue";
import defaultComponentVariants from "../../../../shared/select.json";
import { DBInput, DBSelect } from "../../../../../output/vue/vue3/src";
</script>

<template>
	<DefaultComponent title="Select" :variants="defaultComponentVariants">
		<template
			#example="{ exampleIndex, variantIndex, exampleName, exampleProps }"
		>
			<DBSelect
				:label="exampleProps.label"
				:labelVariant="exampleProps.labelVariant"
				:placeholder="exampleName"
				:variant="exampleProps.variant"
				:options="exampleProps.options"
				:disabled="exampleProps.disabled"
				:icon="exampleProps.icon"
				:value="exampleProps.value"
				:message="exampleProps.message"
				:required="exampleProps.required"
				>{{ exampleName }}</DBSelect
			>
		</template>
	</DefaultComponent>
</template>
