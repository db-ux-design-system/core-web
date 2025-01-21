<!--
SPDX-FileCopyrightText: 2025 DB Systel GmbH

SPDX-License-Identifier: Apache-2.0
-->

<script setup lang="ts">
import DefaultComponent from "../DefaultComponent.vue";
import defaultComponentVariants from "../../../../shared/link.json";
import { DBLink } from "../../../../../output/vue/src";
</script>

<template>
	<DefaultComponent title="DBLink" :variants="defaultComponentVariants">
		<template
			#example="{ exampleIndex, variantIndex, exampleName, exampleProps }"
		>
			<DBLink
				:variant="exampleProps?.variant"
				:href="exampleProps?.href"
				:disabled="exampleProps?.disabled"
				:size="exampleProps?.size"
				:content="exampleProps?.content"
				:showIcon="exampleProps?.showIcon"
			>
				{{ exampleName }}
			</DBLink>
		</template>
	</DefaultComponent>
</template>
