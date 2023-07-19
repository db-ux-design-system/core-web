<script setup lang="ts">
import DefaultComponent from "../DefaultComponent.vue";
import defaultComponentVariants from "../../../../shared/badge.json";
import { DBBadge } from "../../../../../output/vue/vue3/src";
</script>

<template>
	<DefaultComponent title="DBBadge" :variants="defaultComponentVariants">
		<template #example="{ exampleIndex, variantIndex, exampleName, exampleProps }">
            <DBBadge>{{exampleName}}</DBBadge>
		</template>
	</DefaultComponent>
</template>

