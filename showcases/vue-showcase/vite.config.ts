import vue from '@vitejs/plugin-vue';
import devtoolsJson from 'vite-plugin-devtools-json';
import { defineConfig } from 'vite';

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
	css: {
		devSourcemap: true // Enables source maps in dev mode for CSS
	}
});
