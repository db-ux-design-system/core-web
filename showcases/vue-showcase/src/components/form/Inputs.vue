<script setup lang="ts">
import { DBButton, DBInput } from "@components";
import { ref } from "vue";
import FormWrapper from "./FormWrapper.vue";

const plain = ref("test1");
const vModel = ref("test2");
/**
 * Regression fixture for
 * https://github.com/db-ux-design-system/core-web/issues/6147 -- a consumer
 * resets a field by binding `value` to `undefined`.
 */
const undefinedValue = ref<string | undefined>("reset-me");
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
	<fieldset>
		<legend>Reset to undefined</legend>
		<!--
			Two-way bound on purpose: with a one-way `:value` the typed value
			would not flow back into `undefinedValue`, so a second reset would
			assign `undefined` to a ref that already holds `undefined` and the
			field would not be cleared.
		-->
		<DBInput label="Undefined reset" v-model:value="undefinedValue" />
		<DBButton
			data-testid="unset-value-button"
			@click="undefinedValue = undefined"
		>
			Set value to undefined
		</DBButton>
	</fieldset>
</template>
