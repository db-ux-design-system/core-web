import { defineConfig } from 'vitest/config';

export default defineConfig({
	test: {
		globals: true,
		environment: 'node',
		/*
		 * All tests live under `test/` — unit (`*.test.ts`) and bundler-plugin
		 * integration (`*.spec.ts`). Scoped here so `tsc` build output under
		 * `build/` is never picked up as a duplicate suite (which would write a
		 * stray snapshot there).
		 */
		include: ['test/**/*.{test,spec}.ts']
	}
});
