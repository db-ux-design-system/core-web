import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import { defineConfig } from 'vite';

/*
 * Import the plugin from the theme-tools build output. The fixture depends on
 * `@db-ux/core-theme-tools` via `file:`, so `/vite` resolves to the compiled
 * per-bundler entry.
 */
import dbUxThemeTools from '@db-ux/core-theme-tools/vite';

const here = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
	plugins: [
		dbUxThemeTools({
			// The theme supplies the color VALUES; the plugin scans index.html
			// for data-adaptive-color / data-material and emits only what is used.
			theme: resolve(here, 'theme.tokens.json'),
			scan: ['index.html'],
			debug: true
		})
	],
	build: {
		outDir: 'dist',
		cssCodeSplit: false,
		cssMinify: false
	}
});
