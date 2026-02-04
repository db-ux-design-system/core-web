<script setup lang="ts">
import DefaultComponent from "../DefaultComponent.vue";
import defaultComponentVariants from "../../../../shared/loading-indicator.json";
import { DBLoadingIndicator } from "../../../../../output/vue/src";
</script>

<template>
	<DefaultComponent title="DBLoadingIndicator" :variants="defaultComponentVariants">
		<template #example="{ exampleIndex, variantIndex, exampleName, exampleProps }">
            <DBLoadingIndicator>{{exampleName}}</DBLoadingIndicator>
		</template>
	</DefaultComponent>
</template>

