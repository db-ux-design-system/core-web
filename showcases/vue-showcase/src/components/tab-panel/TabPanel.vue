<script setup lang="ts">
import DefaultComponent from "../DefaultComponent.vue";
import defaultComponentVariants from "../../../../shared/tab-panel.json";
import { DBTabPanel } from "../../../../../output/vue/vue3/src";
</script>

<template>
	<DefaultComponent title="DBTabPanel" :variants="defaultComponentVariants">
		<template #example="{ exampleIndex, variantIndex, exampleName, exampleProps }">
            <DBTabPanel>{{exampleName}}</DBTabPanel>
		</template>
	</DefaultComponent>
</template>

