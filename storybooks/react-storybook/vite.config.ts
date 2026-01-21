import react from '@vitejs/plugin-react';
import * as path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename).replaceAll('\\', '/');

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			// Wired issue with storybook vite-builder inside monorepo
			vue: path.resolve(__dirname, '../../node_modules/vue'),
			// eslint-disable-next-line @typescript-eslint/naming-convention
			'@components': path.resolve(__dirname, '../../output/react/src')
		}
	}
});
