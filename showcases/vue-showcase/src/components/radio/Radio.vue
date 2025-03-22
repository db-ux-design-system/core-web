<!--
SPDX-FileCopyrightText: 2025 DB Systel GmbH

SPDX-License-Identifier: Apache-2.0
-->

<script setup lang="ts">
import DefaultComponent from "../DefaultComponent.vue";
import defaultComponentVariants from "../../../../shared/radio.json";
import { DBCheckbox, DBInfotext, DBRadio } from "../../../../../output/vue/src";
</script>

<template>
	<DefaultComponent title="DBRadio" :variants="defaultComponentVariants">
		<template
			#example="{ exampleIndex, variantIndex, exampleName, exampleProps }"
		>
			<DBRadio
				:label="exampleProps?.label"
				:size="exampleProps?.size"
				:name="exampleProps?.name"
				:checked="exampleProps?.checked"
				:value="exampleProps?.value"
				:required="exampleProps?.required"
				:show-label="exampleProps?.showLabel"
				:disabled="exampleProps?.disabled"
				:validation="exampleProps?.validation"
			>
				{{ exampleName }}
			</DBRadio>
			<template
				v-if="
					exampleProps?.showLabel !== undefined &&
					!exampleProps?.showLabel
				"
			>
				<DBInfotext
					semantic="informational"
					size="small"
					:showIcon="false"
				>
					{{ exampleName }}
				</DBInfotext>
			</template>
		</template>
	</DefaultComponent>
</template>
