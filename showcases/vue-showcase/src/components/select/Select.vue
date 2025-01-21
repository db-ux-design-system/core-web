<!--
SPDX-FileCopyrightText: 2025 DB Systel GmbH

SPDX-License-Identifier: Apache-2.0
-->

<script setup lang="ts">
import DefaultComponent from "../DefaultComponent.vue";
import defaultComponentVariants from "../../../../shared/select.json";
import { DBCheckbox, DBInput, DBSelect } from "../../../../../output/vue/src";
</script>

<template>
	<DefaultComponent title="DBSelect" :variants="defaultComponentVariants">
		<template
			#example="{ exampleIndex, variantIndex, exampleName, exampleProps }"
		>
			<DBSelect
				:label="exampleProps?.label"
				:placeholder="exampleName"
				:variant="exampleProps?.variant"
				:show-label="exampleProps?.showLabel"
				:options="exampleProps?.options"
				:disabled="exampleProps?.disabled"
				:icon="exampleProps?.icon"
				:value="exampleProps?.value"
				:message="exampleProps?.message"
				:required="exampleProps?.required"
				:showMessage="exampleProps?.showMessage"
				:invalidMessage="exampleProps?.invalidMessage"
				:validMessage="exampleProps?.validMessage"
				:validation="exampleProps?.validation"
			>
				{{ exampleName }}
			</DBSelect>
		</template>
	</DefaultComponent>
</template>
