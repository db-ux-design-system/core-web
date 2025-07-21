<script setup lang="ts">
import { DBCard } from "@components";
import defaultComponentVariants from "../../../../shared/card.json";
import DefaultComponent from "../DefaultComponent.vue";
</script>

<template>
	<DefaultComponent title="DBCard" :variants="defaultComponentVariants">
		<template
			#example="{ exampleIndex, variantIndex, exampleName, exampleProps }"
		>
			<DBCard
				:behavior="exampleProps?.behavior"
				:elevationLevel="exampleProps?.elevationLevel"
				:spacing="exampleProps?.spacing"
			>
				<strong>{{ exampleName }}</strong>
			</DBCard>
		</template>
	</DefaultComponent>
</template>
