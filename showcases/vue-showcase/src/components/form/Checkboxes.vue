<script setup lang="ts">
import { ref } from "vue";
import { DBCheckbox } from "../../../../../output/vue/src";
import FormWrapper from "./FormWrapper.vue";

const plain = ref(true);
const vModel = ref(true);
const standardVModel = ref(false);
</script>

<template>
	<FormWrapper :plain="plain" :vmodel="vModel">
		<DBCheckbox
			name="checkbox-1"
			@change="plain = $event.target.checked"
			:checked="plain"
		>
			Plain
		</DBCheckbox>
		<DBCheckbox name="checkbox-2" v-model:checked="vModel">
			VModel:checked
		</DBCheckbox>
		<DBCheckbox name="checkbox-3" v-model="standardVModel">
			Standard v-model: {{ standardVModel }}
		</DBCheckbox>
	</FormWrapper>
</template>
