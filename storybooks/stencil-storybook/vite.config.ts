import * as path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename).replaceAll('\\', '/');

// https://vite.dev/config/
export default defineConfig({
	resolve: {
		alias: {
			// Weird issue with storybook vite-builder inside monorepo
			vue: path.resolve(__dirname, '../../node_modules/vue'),
			// Web components reference the element by tag; the generated stories
			// only import the Props types from the stencil output source.
			'@components': path.resolve(__dirname, '../../output/stencil/src')
		}
	},
	build: {
		cssMinify: 'esbuild'
	}
});
