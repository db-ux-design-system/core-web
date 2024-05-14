<script setup lang="ts">
import DefaultComponent from "../DefaultComponent.vue";
import defaultComponentVariants from "../../../../shared/section.json";
import { DBSection } from "../../../../../output/vue/src";
</script>

<template>
	<DefaultComponent title="DBSection" :variants="defaultComponentVariants">
		<template
			#example="{ exampleIndex, variantIndex, exampleName, exampleProps }"
		>
			<DBSection
				class="db-informational-bg-lvl-2"
				:spacing="exampleProps.spacing"
				:width="exampleProps.width"
			>
				{{ exampleName }}
			</DBSection>
		</template>
	</DefaultComponent>
</template>
