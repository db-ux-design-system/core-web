<!--
SPDX-FileCopyrightText: 2025 DB Systel GmbH

SPDX-License-Identifier: Apache-2.0
-->

<script setup lang="ts">
import DefaultComponent from "../DefaultComponent.vue";
import defaultComponentVariants from "../../../../shared/tooltip.json";
import { DBButton, DBTooltip } from "../../../../../output/vue/src";
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
