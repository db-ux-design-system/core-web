<script setup lang="ts">
import DefaultComponent from "../DefaultComponent.vue";
import defaultComponentVariants from "../../../../shared/tab-list.json";
import { DBTabList } from "../../../../../output/vue/vue3/src";
</script>

<template>
	<DefaultComponent title="DBTabList" :variants="defaultComponentVariants">
		<template #example="{ exampleIndex, variantIndex, exampleName, exampleProps }">
            <DBTabList>{{exampleName}}</DBTabList>
		</template>
	</DefaultComponent>
</template>

