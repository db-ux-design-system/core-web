import vue from '@vitejs/plugin-vue';
import * as path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename).replaceAll('\\', '/');

// https://vite.dev/config/
export default defineConfig({
	plugins: [vue()],
	resolve: {
		alias: {
			// Wired issue with storybook vite-builder inside monorepo
			react: path.resolve(__dirname, '../../node_modules/react'),
			// eslint-disable-next-line @typescript-eslint/naming-convention
			'@components': path.resolve(__dirname, '../../output/vue/src')
		}
	}
});
