import vue from '@vitejs/plugin-vue';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://vitejs.dev/config/
export default defineConfig({
	base: `/vue-showcase/`,
	plugins: [vue()],
	build: {
		outDir: '../../build-showcases/vue-showcase',
		emptyOutDir: true
	},
	resolve: {
		alias: {
			'@components': path.resolve(__dirname, '../../output/vue/src')
		}
	}
});
