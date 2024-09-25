<script setup lang="ts">
import DefaultComponent from "../DefaultComponent.vue";
import defaultComponentVariants from "../../../../shared/stack.json";
import {
	DBStack,
	DBInfotext,
	DBDivider
} from "../../../../../output/vue/src";
</script>

<template>
	<DefaultComponent title="DBStack" :variants="defaultComponentVariants">
		<template
			#example="{ exampleIndex, variantIndex, exampleName, exampleProps }"
		>
			<DBStack>
				<DBInfotext size="small" icon="none" semantic="informational">
					{{ exampleName }}
				</DBInfotext>
				<DBStack
					:className="
						(exampleProps.justifyContent ?? exampleProps.alignment)
							? 'stack-container stack-show-alignment'
							: 'stack-container'
					"
					:gap="exampleProps.gap"
					:alignment="exampleProps.alignment"
					:wrap="exampleProps.wrap"
					:variant="exampleProps.variant"
					:direction="exampleProps.direction"
					:justifyContent="exampleProps.justifyContent"
				>
					<a href="#" className="dummy-component"> Content 1 </a>
					<template v-if="exampleProps.variant === 'divider'"
						><DBDivider />
					</template>
					<a href="#" className="dummy-component"> Content 2 </a>
					<template v-if="exampleProps.variant === 'divider'"
						><DBDivider />
					</template>
					<a href="#" className="dummy-component"> Content 3 </a>
				</DBStack>
			</DBStack>
		</template>
	</DefaultComponent>
</template>
