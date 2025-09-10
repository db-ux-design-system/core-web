<script setup lang="ts">
import { ref } from "vue";
import { DBSelect } from "../../../../../output/vue/src";
import FormWrapper from "./FormWrapper.vue";

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
