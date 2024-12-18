<script setup lang="ts">
import DefaultComponent from "../DefaultComponent.vue";
import defaultComponentVariants from "../../../../shared/section.json";
import { DBSection, DBCard } from "../../../../../output/vue/src";
</script>

<template>
	<DefaultComponent title="DBSection" :variants="defaultComponentVariants">
		<template
			#example="{ exampleIndex, variantIndex, exampleName, exampleProps }"
		>
			<DBSection
				class="db-informational-bg-basic-level-2 section-card-container"
				:spacing="exampleProps?.spacing"
				:width="exampleProps?.width"
			>
				<DBCard>{{ exampleName }}</DBCard>
				<DBCard>{{ exampleName }}</DBCard>
				<DBCard>{{ exampleName }}</DBCard>
				<DBCard>{{ exampleName }}</DBCard>
			</DBSection>
		</template>
	</DefaultComponent>
</template>
