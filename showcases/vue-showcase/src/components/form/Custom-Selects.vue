<script setup lang="ts">
import { DBCustomSelect } from "@components";
import { ref } from "vue";
import FormWrapper from "./FormWrapper.vue";

const plain = ref(["combobox-2"]);
const vModel = ref(["combobox-2"]);

const options = [
	{ value: "combobox-0", id: "combobox-0" },
	{ value: "combobox-1", id: "combobox-1" },
	{ value: "combobox-2", id: "combobox-2" }
];

const log = (values: string[]) => {
	plain.value = values;
};
</script>

<template>
	<FormWrapper :plain="plain" :vmodel="vModel">
		<DBCustomSelect
			:options="options"
			:values="plain"
			@option-selected="log"
			label="Plain"
		/>
		<DBCustomSelect
			:options="options"
			label="VModel"
			v-model:values="vModel"
		/>
	</FormWrapper>
</template>
