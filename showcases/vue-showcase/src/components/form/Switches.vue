<script setup lang="ts">
import { ref } from "vue";
import { DBSwitch } from "../../../../../output/vue/src";
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
		<DBSwitch name="switch-1" v-model:checked="vModel">
			VModel
		</DBSwitch>
	</FormWrapper>
</template>

