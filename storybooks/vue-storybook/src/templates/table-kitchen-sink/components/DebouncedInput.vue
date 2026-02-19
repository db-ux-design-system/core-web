<script setup lang="ts">
import { DBInput } from "@components";
import { ref, watch } from "vue";

interface Props {
	label: string;
	placeholder: string;
	modelValue: string | number;
	debounce?: number;
}

const props = withDefaults(defineProps<Props>(), {
	debounce: 500
});

const emit = defineEmits<{
	"update:modelValue": [value: string | number];
}>();

const value = ref<string | number>(props.modelValue);

watch(
	() => props.modelValue,
	(newVal) => {
		value.value = newVal;
	}
);

let timeout: ReturnType<typeof setTimeout>;
watch(value, (newVal) => {
	clearTimeout(timeout);
	timeout = setTimeout(() => {
		emit("update:modelValue", newVal);
	}, props.debounce);
});
</script>

<template>
	<DBInput
		variant="floating"
		:label="label"
		:placeholder="placeholder"
		v-model="value"
	/>
</template>
