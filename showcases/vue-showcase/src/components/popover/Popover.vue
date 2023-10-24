<script setup lang="ts">
import DefaultComponent from "../DefaultComponent.vue";
import defaultComponentVariants from "../../../../shared/popover.json";
import { DBButton, DBPopover } from "../../../../../output/vue/vue3/src";
</script>

<template>
	<DefaultComponent title="DBPopover" :variants="defaultComponentVariants">
		<template
			#example="{ exampleIndex, variantIndex, exampleName, exampleProps }"
		>
			<DBButton>
				{{ exampleName }}
				<DBPopover
					:width="exampleProps.width"
					:gap="exampleProps.gap"
					:spacing="exampleProps.spacing"
					:placement="exampleProps.placement"
					:animation="exampleProps.animation"
					:delay="exampleProps.delay"
				>
					{{ exampleProps.content }}
				</DBPopover>
			</DBButton>
		</template>
	</DefaultComponent>
</template>
