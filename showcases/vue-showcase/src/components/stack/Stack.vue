<script setup lang="ts">
import DefaultComponent from "../DefaultComponent.vue";
import defaultComponentVariants from "../../../../shared/stack.json";
import {
	DBStack,
	DBInfotext,
	DBTag,
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
							? 'stack-container'
							: ''
					"
					:gap="exampleProps.gap"
					:alignment="exampleProps.alignment"
					:wrap="exampleProps.wrap"
					:variant="exampleProps.variant"
					:direction="exampleProps.direction"
					:justifyContent="exampleProps.justifyContent"
				>
					<DBTag><button>Content 1</button></DBTag>
					<template v-if="exampleProps.variant === 'divider'"
						><DBDivider />
					</template>
					<DBTag><button>Content 2</button></DBTag>
					<template v-if="exampleProps.variant === 'divider'"
						><DBDivider />
					</template>
					<DBTag><button>Content 3</button></DBTag>
				</DBStack>
			</DBStack>
		</template>
	</DefaultComponent>
</template>
