<script setup lang="ts">
import { ref } from "vue";
import { DBRadio } from "../../../../../packages/v-core-components/src";
import FormWrapper from "./FormWrapper.vue";

const plain = ref("");
const vModel = ref("");
</script>

<template>
	<FormWrapper :plain="plain" :vmodel="vModel">
		<DBRadio
			name="radio-0"
			value="radio-0"
			@change="plain = $event.target.value"
		>
			Plain
		</DBRadio>
		<DBRadio name="radio-1" value="radio-1" v-model:value="vModel">
			VModel
		</DBRadio>
	</FormWrapper>
</template>
