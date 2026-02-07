import vue from '@vitejs/plugin-vue';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import devtoolsJson from 'vite-plugin-devtools-json';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://vitejs.dev/config/
export default defineConfig({
	base: `/vue-showcase/`,
	plugins: [
		vue(),
		devtoolsJson() // Enable Chrome DevTools JSON generation for enhanced debugging
	],
	build: {
		outDir: '../../build-showcases/vue-showcase',
		emptyOutDir: true
	},
	resolve: {
		alias: {
			'@components': path.resolve(
				__dirname,
				'../../packages/v-core-components/src'
			)
		}
	},
	css: {
		devSourcemap: true // Enables source maps in dev mode for CSS
	}
});
