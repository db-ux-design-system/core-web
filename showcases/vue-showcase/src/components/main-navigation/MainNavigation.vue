<script setup lang="ts">
import DefaultComponent from "../DefaultComponent.vue";
import defaultComponentVariants from "../../../../shared/main-navigation.json";
import { DBMainNavigation } from "../../../../../output/vue/vue3/src";
</script>

<template>
	<DefaultComponent
		title="DBMainNavigation"
		:variants="defaultComponentVariants"
	>
		<template
			#example="{ exampleIndex, variantIndex, exampleName, exampleProps }"
		>
			<DBMainNavigation>{{ exampleName }}</DBMainNavigation>
		</template>
	</DefaultComponent>
</template>
