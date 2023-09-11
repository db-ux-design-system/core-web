<script setup lang="ts">
import DefaultComponent from "../DefaultComponent.vue";
import defaultComponentVariants from "../../../../shared/tag.json";
import { DBTag } from "../../../../../output/vue/vue3/src";

const showAlert = (exampleName: string) => {
	// eslint-disable-next-line no-alert
	alert(exampleName);
};
</script>

<template>
	<DefaultComponent title="DBTag" :variants="defaultComponentVariants">
		<template
			#example="{ exampleIndex, variantIndex, exampleName, exampleProps }"
		>
			<DBTag
				:name="exampleProps.name"
				:variant="exampleProps.variant"
				:disabled="exampleProps.disabled"
				:icon="exampleProps.icon"
				:noText="exampleProps.noText"
				:behaviour="exampleProps.behaviour"
				:emphasis="exampleProps.emphasis"
				:checked="exampleProps.checked"
				:label="exampleProps.label"
				:overflow="exampleProps.overflow"
				:removeButton="exampleProps.removeButton"
				@remove="showAlert(exampleName)"
			>
				{{ exampleName }}
			</DBTag>
		</template>
	</DefaultComponent>
</template>
