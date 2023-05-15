<script setup lang="ts">
import DefaultComponent from "../DefaultComponent.vue";
import defaultComponentVariants from "../../../../shared/alert.json";
import { DBAlert } from "../../../../../output/vue/vue3/src";

const log = (exampleName: string) => {
	// eslint-disable-next-line no-alert
	alert(exampleName);
};
</script>

<template>
	<DefaultComponent title="DBAlert" :variants="defaultComponentVariants">
		<template
			#example="{ exampleIndex, variantIndex, exampleName, exampleProps }"
		>
			<DBAlert
				:variant="exampleProps.variant"
				:headline="exampleProps.headline"
				:link="exampleProps.link"
				:icon="exampleProps.icon"
				:behaviour="exampleProps.behaviour"
				:type="exampleProps.type"
				@click="log(exampleName)"
			>
				{{ exampleName }}
			</DBAlert>
		</template>
	</DefaultComponent>
</template>
