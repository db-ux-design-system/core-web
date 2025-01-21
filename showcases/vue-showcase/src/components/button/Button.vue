<!--
SPDX-FileCopyrightText: 2025 DB Systel GmbH

SPDX-License-Identifier: Apache-2.0
-->

<script setup lang="ts">
import DefaultComponent from "../DefaultComponent.vue";
import defaultComponentVariants from "../../../../shared/button.json";
import { DBButton } from "../../../../../output/vue/src";

const log = (exampleName: string) => {
	// eslint-disable-next-line no-alert
	alert(exampleName);
};
</script>

<template>
	<DefaultComponent title="DBButton" :variants="defaultComponentVariants">
		<template
			#example="{ exampleIndex, variantIndex, exampleName, exampleProps }"
		>
			<DBButton
				:variant="exampleProps?.variant"
				:size="exampleProps?.size"
				:icon="exampleProps?.icon"
				:noText="exampleProps?.noText"
				:showIcon="exampleProps?.showIcon"
				:disabled="exampleProps?.disabled"
				:width="exampleProps?.width"
				@click="log(exampleName)"
			>
				{{ exampleName }}
			</DBButton>
		</template>
	</DefaultComponent>
</template>
