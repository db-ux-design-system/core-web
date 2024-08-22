<script setup lang="ts">
import { ref } from "vue";
import DefaultComponent from "../DefaultComponent.vue";
import defaultComponentVariants from "../../../../shared/drawer.json";
import { DBDrawer, DBButton } from "../../../../../output/vue/vue3/src";

const openDrawer = ref<string | undefined>(undefined);

const toggleDrawer = (example?: string) => {
	openDrawer.value = example;
};
</script>

<template>
	<DefaultComponent title="Drawer" :variants="defaultComponentVariants">
		<template
			#example="{ exampleIndex, variantIndex, exampleName, exampleProps }"
		>
			<DBDrawer
				:backdrop="exampleProps.backdrop"
				:withCloseButton="exampleProps.withCloseButton"
				:rounded="exampleProps.rounded"
				:width="exampleProps.width"
				:spacing="exampleProps.spacing"
				:direction="exampleProps.direction"
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
