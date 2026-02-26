import { defineConfig } from 'vitest/config';

export default defineConfig({
	test: {
		include: ['src/utils/**/*.{test,spec}.?(c|m)[jt]s?(x)']
	}
});
