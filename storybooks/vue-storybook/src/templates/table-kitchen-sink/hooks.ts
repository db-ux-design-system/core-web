import { computed, ref, watchEffect } from 'vue';

export function useSkipper() {
	const shouldSkipRef = ref<boolean | null>(true);

	const skip = () => {
		shouldSkipRef.value = false;
	};

	watchEffect(() => {
		shouldSkipRef.value = true;
	});

	return computed(() => [Boolean(shouldSkipRef.value), skip] as const);
}
