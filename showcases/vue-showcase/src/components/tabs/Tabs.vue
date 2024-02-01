<script setup lang="ts">
import DefaultComponent from "../DefaultComponent.vue";
import defaultComponentVariants from "../../../../shared/tabs.json";
import { DBTabs } from "../../../../../output/vue/vue3/src";
</script>

<template>
	<DefaultComponent title="DBTabs" :variants="defaultComponentVariants">
		<template #example="{ exampleIndex, variantIndex, exampleName, exampleProps }">
            <DBTabs>{{exampleName}}</DBTabs>
		</template>
	</DefaultComponent>
</template>

