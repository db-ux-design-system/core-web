<script setup lang="ts">
import { ref } from "vue";
import { DBInput } from "../../../../../packages/v-core-components/src";
import FormWrapper from "./FormWrapper.vue";

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
