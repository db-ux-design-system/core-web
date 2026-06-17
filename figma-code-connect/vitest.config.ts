import { defineConfig } from 'vitest/config';

export default defineConfig({
	test: {
		include: ['test/**/*.{test,spec}.?(c|m)[jt]s?(x)'],
		testTimeout: 180_000 // 3 Minutes
	}
});
