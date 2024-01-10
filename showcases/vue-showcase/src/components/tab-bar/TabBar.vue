<script setup lang="ts">
import DefaultComponent from "../DefaultComponent.vue";
import defaultComponentVariants from "../../../../shared/tab-bar.json";
import { DBTabBar } from "../../../../../output/vue/vue3/src";
</script>

<template>
	<DefaultComponent title="DBTabBar" :variants="defaultComponentVariants">
		<template #example="{ exampleIndex, variantIndex, exampleName, exampleProps }">
            <DBTabBar>{{exampleName}}</DBTabBar>
		</template>
	</DefaultComponent>
</template>

