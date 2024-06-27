<script setup lang="ts">
import DefaultComponent from "../DefaultComponent.vue";
import defaultComponentVariants from "../../../../shared/select.json";
import { DBSelect } from "../../../../../output/vue/src";
</script>

<template>
	<DefaultComponent title="DBSelect" :variants="defaultComponentVariants">
		<template
			#example="{ exampleIndex, variantIndex, exampleName, exampleProps }"
		>
			<DBSelect
				:label="exampleProps.label"
				:placeholder="exampleName"
				:variant="exampleProps.variant"
				:options="exampleProps.options"
				:disabled="exampleProps.disabled"
				:icon="exampleProps.icon"
				:value="exampleProps.value"
				:message="exampleProps.message"
				:required="exampleProps.required"
			>
				{{ exampleName }}
			</DBSelect>
		</template>
	</DefaultComponent>
</template>
