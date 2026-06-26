import { defineConfig } from 'vitest/config';

export default defineConfig({
	test: {
		include: ['tests/**/*.{test,spec}.?(c|m)[jt]s?(x)'],
		testTimeout: 30_000
	},
	resolve: {
		alias: {
			'@angular/core': new URL(
				'tests/__mocks__/angular-core.ts',
				import.meta.url
			).pathname
		}
	}
});
