<script setup lang="ts">
import { ref } from "vue";
import { DBCustomSelect } from "../../../../../output/vue/src";
import FormWrapper from "./FormWrapper.vue";

const plain = ref(["combobox-1"]);
const vModel = ref(["combobox-1"]);

const options = [
	{ value: "combobox-0", id: "combobox-0" },
	{ value: "combobox-1", id: "combobox-1" }
];
</script>

<template>
	<FormWrapper :plain="plain" :vmodel="vModel">
		<DBCustomSelect
			:options="options"
			:values="plain"
			label="Plain"
			@optionSelected="(values) => (plain = values)"
		/>
		<DBCustomSelect
			:options="options"
			label="VModel"
			v-model:values="vModel"
		/>
	</FormWrapper>
</template>
