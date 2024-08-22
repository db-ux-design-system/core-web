<script setup lang="ts">
import DefaultComponent from "../DefaultComponent.vue";
import defaultComponentVariants from "../../../../shared/card.json";
import { DBCard } from "../../../../../output/vue/src";
</script>

<template>
	<DefaultComponent title="DBCard" :variants="defaultComponentVariants">
		<template
			#example="{ exampleIndex, variantIndex, exampleName, exampleProps }"
		>
			<DBCard
				:behaviour="exampleProps?.behaviour"
				:elevationLevel="exampleProps?.elevationLevel"
				:spacing="exampleProps?.spacing"
			>
				<strong>{{ exampleName }}</strong>
			</DBCard>
		</template>
	</DefaultComponent>
</template>
