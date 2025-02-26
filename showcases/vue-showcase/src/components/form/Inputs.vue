<!--
SPDX-FileCopyrightText: 2025 DB Systel GmbH

SPDX-License-Identifier: Apache-2.0
-->

<script setup lang="ts">
import FormWrapper from "./FormWrapper.vue";
import { DBInput } from "../../../../../output/vue/src";
import { ref } from "vue";

const plain = ref("test1");
const vModel = ref("test2");
</script>

<template>
	<FormWrapper :plain="plain" :vmodel="vModel">
		<DBInput
			label="Plain"
			placeholder="Placeholder"
			message="Description"
			icon="x_placeholder"
			name="input-name"
			:value="plain"
			@change="plain = $event.target.value"
		/>
		<DBInput
			label="VModel"
			placeholder="Placeholder"
			message="Description"
			icon="x_placeholder"
			name="input-name"
			v-model:value="vModel"
		/>
	</FormWrapper>
</template>
