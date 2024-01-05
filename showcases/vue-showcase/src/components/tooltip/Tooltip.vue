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
			<DBButton :describedbyid="exampleProps.id" type="button">
				{{ exampleName }}
				<DBTooltip
					:width="exampleProps.width"
					:emphasis="exampleProps.emphasis"
					:placement="exampleProps.placement"
					:animation="exampleProps.animation"
					:delay="exampleProps.delay"
					:variant="exampleProps.variant"
					:id="exampleProps.id"
				>
					{{ exampleProps.content }}
				</DBTooltip>
			</DBButton>
		</template>
	</DefaultComponent>
</template>
