<script setup lang="ts">
import DefaultComponent from "../DefaultComponent.vue";
import defaultComponentVariants from "../../../../shared/section.json";
import { DBSection } from "../../../../../output/vue/vue3/src";
</script>

<template>
	<DefaultComponent title="DBSection" :variants="defaultComponentVariants">
		<template
			#example="{ exampleIndex, variantIndex, exampleName, exampleProps }"
		>
			<DBSection
				class="db-bg-informational"
				:size="exampleProps.size"
				:variant="exampleProps.variant"
			>
				{{ exampleName }}
			</DBSection>
		</template>
	</DefaultComponent>
</template>
