<script setup lang="ts">
import { ref } from "vue";
import DefaultComponent from "../DefaultComponent.vue";
import defaultComponentVariants from "../../../../shared/drawer.json";
import { DBDrawer, DBButton } from "../../../../../output/vue/src";

const openDrawer = ref<string | undefined>(undefined);

const toggleDrawer = (example?: string) => {
	openDrawer.value = example;
};
</script>

<template>
	<DefaultComponent title="DBDrawer" :variants="defaultComponentVariants">
		<template
			#example="{ exampleIndex, variantIndex, exampleName, exampleProps }"
		>
			<DBDrawer
				:backdrop="exampleProps?.backdrop"
				:rounded="exampleProps?.rounded"
				:width="exampleProps?.width"
				:spacing="exampleProps?.spacing"
				:direction="exampleProps?.direction"
				:variant="exampleProps?.variant"
				:open="openDrawer && openDrawer === exampleName"
				@close="toggleDrawer(undefined)"
			>
				{{ exampleName }}
			</DBDrawer>
			<DBButton @click="toggleDrawer(exampleName)">
				Open: {{ exampleName }}
			</DBButton>
		</template>
	</DefaultComponent>
</template>
