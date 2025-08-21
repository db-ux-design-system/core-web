import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import devtoolsJson from 'vite-plugin-devtools-json';

// https://vitejs.dev/config/
export default defineConfig({
	build: {
		lib: {
			entry: 'src/index.ts',
			name: 'DB-UX',
			fileName: (format) => `db-ux.${format}.js`
		},
		rollupOptions: {
			external: ['vue'],
			output: {
				// Provide global variables to use in the UMD build
				// Add external deps here
				globals: {
					vue: 'Vue'
				}
			}
		}
	},
	plugins: [
		vue(),
		devtoolsJson() // Enable Chrome DevTools JSON generation for enhanced debugging
	]
});
