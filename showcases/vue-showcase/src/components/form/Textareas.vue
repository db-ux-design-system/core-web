<script setup lang="ts">
import { ref } from "vue";
import { DBTextarea } from "../../../../../output/vue/src";
import FormWrapper from "./FormWrapper.vue";

const plain = ref("test1");
const vModel = ref("test2");
</script>

<template>
	<FormWrapper :plain="plain" :vmodel="vModel">
		<DBTextarea
			label="Plain"
			placeholder="Placeholder"
			message="Description"
			icon="x_placeholder"
			name="textarevalue-name"
			:value="plain"
			@change="plain = $event.target.value"
		/>
		<DBTextarea
			label="VModel"
			placeholder="Placeholder"
			message="Description"
			icon="x_placeholder"
			name="textarea-name"
			v-model:value="vModel"
		/>
	</FormWrapper>
</template>
