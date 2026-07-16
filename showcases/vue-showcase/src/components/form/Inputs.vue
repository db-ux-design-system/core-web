<script setup lang="ts">
import { ref } from "vue";
import { DBInput } from "../../../../../output/vue/src";
import FormWrapper from "./FormWrapper.vue";

const plain = ref("test1");
const vModel = ref("test2");
const datePlain = ref("2025-01-15");
const dateVModel = ref("2025-06-20");
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
		<DBInput
			label="Date (plain)"
			type="date"
			name="input-date-plain"
			:value="datePlain"
			@change="datePlain = $event.target.value"
		/>
		<DBInput
			label="Date (v-model)"
			type="date"
			name="input-date-vmodel"
			v-model:value="dateVModel"
		/>
	</FormWrapper>
</template>
