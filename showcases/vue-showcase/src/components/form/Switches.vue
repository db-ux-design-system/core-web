<script setup lang="ts">
import { DBSwitch } from "@db-ux/v-core-components/src";
import { ref } from "vue";
import FormWrapper from "./FormWrapper.vue";

const plain = ref(true);
const vModel = ref(true);
</script>

<template>
	<FormWrapper :plain="plain" :vmodel="vModel">
		<DBSwitch
			name="switch-1"
			@change="plain = $event.target.checked"
			:checked="plain"
		>
			Plain
		</DBSwitch>
		<DBSwitch name="switch-1" v-model:checked="vModel"> VModel </DBSwitch>
	</FormWrapper>
</template>
