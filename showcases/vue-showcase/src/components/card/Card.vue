<script setup lang="ts">
import { DBCard } from "../../../../../output/vue/src";
import defaultComponentVariants from "../../../../shared/card.json";
import DefaultComponent from "../DefaultComponent.vue";
</script>

<template>
	<DefaultComponent title="DBCard" :variants="defaultComponentVariants">
		<template
			#example="{ exampleIndex, variantIndex, exampleName, exampleProps }"
		>
			<button
				type="button"
				v-if="exampleProps?.behavior === 'interactive'"
			>
				<DBCard
					:behavior="exampleProps?.behavior"
					:elevationLevel="exampleProps?.elevationLevel"
					:spacing="exampleProps?.spacing"
				>
					<strong>{{ exampleName }}</strong>
				</DBCard>
			</button>
			<DBCard
				v-if="exampleProps?.behavior !== 'interactive'"
				:behavior="exampleProps?.behavior"
				:elevationLevel="exampleProps?.elevationLevel"
				:spacing="exampleProps?.spacing"
			>
				<strong>{{ exampleName }}</strong>
			</DBCard>
		</template>
	</DefaultComponent>
</template>
