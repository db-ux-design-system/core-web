<!--
SPDX-FileCopyrightText: 2025 DB Systel GmbH

SPDX-License-Identifier: Apache-2.0
-->

<script setup lang="ts">
import FormWrapper from "./FormWrapper.vue";
import { DBSelect } from "../../../../../output/vue/src";
import { ref } from "vue";

const plain = ref("combobox-2");
const vModel = ref("combobox-2");
</script>

<template>
	<FormWrapper :plain="plain" :vmodel="vModel">
		<DBSelect
			:value="plain"
			label="Plain"
			@change="plain = $event.target.value"
		>
			<option value="combobox-0">combobox-0</option>
			<option value="combobox-1">combobox-1</option>
			<option value="combobox-2">combobox-2</option>
		</DBSelect>
		<DBSelect label="VModel" v-model:value="vModel">
			<option value="combobox-0">combobox-0</option>
			<option value="combobox-1">combobox-1</option>
			<option value="combobox-2">combobox-2</option>
		</DBSelect>
	</FormWrapper>
</template>
