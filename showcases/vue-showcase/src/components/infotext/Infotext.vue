<!--
SPDX-FileCopyrightText: 2025 DB Systel GmbH

SPDX-License-Identifier: Apache-2.0
-->

<script setup lang="ts">
import DefaultComponent from "../DefaultComponent.vue";
import defaultComponentVariants from "../../../../shared/infotext.json";
import { DBInfotext } from "../../../../../output/vue/src";
</script>

<template>
	<DefaultComponent title="DBInfotext" :variants="defaultComponentVariants">
		<template
			#example="{ exampleIndex, variantIndex, exampleName, exampleProps }"
		>
			<DBInfotext
				:size="exampleProps?.size"
				:semantic="exampleProps?.semantic"
				:icon="exampleProps?.icon"
				:showIcon="exampleProps?.showIcon"
			>
				{{ exampleName }}
			</DBInfotext>
		</template>
	</DefaultComponent>
</template>
