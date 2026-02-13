import vue from '@vitejs/plugin-vue';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';
import dbUxPlugin from '../../../src/index';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
	plugins: [vue(), dbUxPlugin()],
	resolve: {
		alias: {
			'@components': resolve(__dirname, '../../../../../output/vue/src')
		}
	},
	build: {
		outDir: 'dist',
		cssCodeSplit: false
	}
});
