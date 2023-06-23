<script setup lang="ts">
import DefaultComponent from "../DefaultComponent.vue";
import defaultComponentVariants from "../../../../shared/navigation-item.json";
import { DBNavigationItem } from "../../../../../output/vue/vue3/src";

const log = (exampleName: string) => {
	// eslint-disable-next-line no-alert
	alert(exampleName);
};
</script>

<template>
	<DefaultComponent
		title="DBNavigationItem"
		:variants="defaultComponentVariants"
	>
		<template
			#example="{ exampleIndex, variantIndex, exampleName, exampleProps }"
		>
			<DBNavigationItem
				:icon="exampleProps.icon"
				:iconAfter="exampleProps.iconAfter"
				:width="exampleProps.width"
				:disabled="exampleProps.disabled"
				:active="exampleProps.active"
				:isMainMenuItem="exampleProps.isMainMenuItem"
				@click="log(exampleName)"
				>{{ exampleName }}</DBNavigationItem
			>
		</template>
	</DefaultComponent>
</template>
