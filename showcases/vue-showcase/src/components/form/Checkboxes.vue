<script setup lang="ts">
import { ref } from "vue";
import { DBCheckbox } from "../../../../../packages/v-core-components/src";
import FormWrapper from "./FormWrapper.vue";

const plain = ref(true);
const vModel = ref(true);
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
		<DBCheckbox name="checkbox-1" v-model:checked="vModel">
			VModel
		</DBCheckbox>
	</FormWrapper>
</template>
