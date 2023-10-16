<script setup lang="ts">
import DefaultComponent from "../DefaultComponent.vue";
import defaultComponentVariants from "../../../../shared/tooltip.json";
import { DBButton, DBTooltip } from "../../../../../output/vue/vue3/src";
</script>

<template>
	<DefaultComponent title="DBTooltip" :variants="defaultComponentVariants">
		<template
			#example="{ exampleIndex, variantIndex, exampleName, exampleProps }"
		>
			<DBButton>
				{{ exampleName }}
				<DBTooltip
					:width="exampleProps.width"
					:emphasis="exampleProps.emphasis"
					:placement="exampleProps.placement"
					:behaviour="exampleProps.behaviour"
					:delay="exampleProps.delay"
					:variant="exampleProps.variant"
				>
					{{ exampleProps.content }}
				</DBTooltip>
			</DBButton>
		</template>
	</DefaultComponent>
</template>
