<script setup lang="ts">
import { DBDivider, DBInfotext, DBStack } from "../../../../../output/vue/src";
import defaultComponentVariants from "../../../../shared/stack.json";
import DefaultComponent from "../DefaultComponent.vue";
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
					:class="
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
					<span class="dummy-component">
						<a href="#">Content 1</a>
					</span>
					<template v-if="exampleProps.variant === 'divider'"
						><DBDivider />
					</template>
					<span class="dummy-component"> Content 2 </span>
					<template v-if="exampleProps.variant === 'divider'"
						><DBDivider />
					</template>
					<span class="dummy-component"> Content 3 </span>
				</DBStack>
			</DBStack>
		</template>
	</DefaultComponent>
</template>
