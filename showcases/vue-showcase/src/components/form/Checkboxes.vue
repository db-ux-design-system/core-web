<script setup lang="ts">
import { DBCheckbox } from "@components";
import { ref } from "vue";
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
