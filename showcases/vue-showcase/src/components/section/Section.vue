<script setup lang="ts">
import { DBCard, DBSection } from "@db-ux/v-core-components/src";
import defaultComponentVariants from "../../../../shared/section.json";
import DefaultComponent from "../DefaultComponent.vue";
</script>

<template>
	<DefaultComponent title="DBSection" :variants="defaultComponentVariants">
		<template
			#example="{ exampleIndex, variantIndex, exampleName, exampleProps }"
		>
			<DBSection
				class="db-color-informational db-bg-color-basic-level-2 section-card-container"
				:spacing="exampleProps?.spacing"
				:width="exampleProps?.width"
				:id="exampleProps?.id"
			>
				<DBCard>{{ exampleName }}</DBCard>
				<DBCard>{{ exampleName }}</DBCard>
				<DBCard>{{ exampleName }}</DBCard>
				<DBCard>{{ exampleName }}</DBCard>
			</DBSection>
		</template>
	</DefaultComponent>
</template>
