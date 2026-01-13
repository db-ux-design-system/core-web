<script setup lang="ts">
import { DBButton, DBDrawer } from "@components";
import { ref } from "vue";
import defaultComponentVariants from "../../../../shared/drawer.json";
import DefaultComponent from "../DefaultComponent.vue";

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
			<DBButton @click="toggleDrawer(exampleName)">
				Open: {{ exampleName }}
			</DBButton>
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
		</template>
	</DefaultComponent>
</template>
