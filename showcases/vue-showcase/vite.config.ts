import vue from '@vitejs/plugin-vue';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import dbUxFlatten from '../../packages/postcss-plugin/build/index.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://vitejs.dev/config/
export default defineConfig({
	base: `/vue-showcase/`,
	plugins: [vue()],
	build: {
		outDir: '../../build-showcases/vue-showcase',
		emptyOutDir: true,
		cssMinify: 'esbuild'
	},
	resolve: {
		alias: {
			'@components': path.resolve(__dirname, '../../output/vue/src')
		}
	},
	css: {
		devSourcemap: true, // Enables source maps in dev mode for CSS
		postcss: {
			plugins: [dbUxFlatten()]
		}
	}
});
