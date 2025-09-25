<script setup lang="ts">
import { DBButton, DBTooltip } from "../../../../../output/vue/src";
import defaultComponentVariants from "../../../../shared/tooltip.json";
import DefaultComponent from "../DefaultComponent.vue";
</script>

<template>
	<DefaultComponent title="DBTooltip" :variants="defaultComponentVariants">
		<template
			#example="{ exampleIndex, variantIndex, exampleName, exampleProps }"
		>
			<DBButton>
				{{ exampleName }}
				<DBTooltip
					:width="exampleProps?.width"
					:emphasis="exampleProps?.emphasis"
					:placement="exampleProps?.placement"
					:animation="exampleProps?.animation"
					:delay="exampleProps?.delay"
					:variant="exampleProps?.variant"
				>
					{{ exampleProps?.content }}
				</DBTooltip>
			</DBButton>
		</template>
	</DefaultComponent>
</template>
