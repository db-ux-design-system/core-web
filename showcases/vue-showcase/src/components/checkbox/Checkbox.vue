<!--
SPDX-FileCopyrightText: 2025 DB Systel GmbH

SPDX-License-Identifier: Apache-2.0
-->

<script setup lang="ts">
import DefaultComponent from "../DefaultComponent.vue";
import defaultComponentVariants from "../../../../shared/checkbox.json";
import { DBCheckbox, DBInfotext } from "../../../../../output/vue/src";
</script>

<template>
	<DefaultComponent title="DBCheckbox" :variants="defaultComponentVariants">
		<template
			#example="{ exampleIndex, variantIndex, exampleName, exampleProps }"
		>
			<DBCheckbox
				:label="exampleProps?.label"
				:variant="exampleProps?.variant"
				:show-label="exampleProps?.showLabel"
				:options="exampleProps?.options"
				:checked="exampleProps?.checked"
				:disabled="exampleProps?.disabled"
				:value="exampleProps?.value"
				:required="exampleProps?.required"
				:validation="exampleProps?.validation"
				:invalidMessage="exampleProps?.invalidMessage"
				:validMessage="exampleProps?.validMessage"
				:indeterminate="exampleProps?.indeterminate"
				:size="exampleProps?.size"
				>{{ exampleName }}</DBCheckbox
			>

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
