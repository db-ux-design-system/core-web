<!--
SPDX-FileCopyrightText: 2025 DB Systel GmbH

SPDX-License-Identifier: Apache-2.0
-->

<script setup lang="ts">
import DefaultComponent from "../DefaultComponent.vue";
import defaultComponentVariants from "../../../../shared/stack.json";
import { DBStack, DBInfotext, DBDivider } from "../../../../../output/vue/src";
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
					<span className="dummy-component">
						<a href="#">Content 1</a>
					</span>
					<template v-if="exampleProps.variant === 'divider'"
						><DBDivider />
					</template>
					<span className="dummy-component"> Content 2 </span>
					<template v-if="exampleProps.variant === 'divider'"
						><DBDivider />
					</template>
					<span className="dummy-component"> Content 3 </span>
				</DBStack>
			</DBStack>
		</template>
	</DefaultComponent>
</template>
