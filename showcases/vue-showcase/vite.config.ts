import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';
import devtoolsJson from 'vite-plugin-devtools-json';

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
