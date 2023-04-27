<script setup lang="ts">
import DefaultComponent from "../DefaultComponent.vue";
import defaultComponentVariants from "../../../../shared/card.json";
import { DBCard } from "../../../../../output/vue/vue3/src";
</script>

<template>
	<DefaultComponent title="DBCard" :variants="defaultComponentVariants">
		<template
			#example="{ exampleIndex, variantIndex, exampleName, exampleProps }"
		>
			<DBCard
				:colorVariant="exampleProps.colorVariant"
				:variant="exampleProps.variant"
				:spacing="exampleProps.spacing"
			>
				<strong>{{ exampleName }}</strong>
				<span v-if="exampleProps.colorVariant">{{
					exampleProps.colorVariant
				}}</span>
			</DBCard>
		</template>
	</DefaultComponent>
</template>
