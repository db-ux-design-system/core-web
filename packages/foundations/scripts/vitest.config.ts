import { defineConfig } from 'vitest/config';

export default defineConfig({
	test: {
		include: ['scripts/**/*.{test,spec}.?(c|m)[jt]s?(x)']
	}
});
