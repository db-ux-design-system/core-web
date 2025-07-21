import react from '@vitejs/plugin-react';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://vitejs.dev/config/
export default defineConfig({
	base: `/react-showcase/`,
	plugins: [react()],
	build: {
		outDir: '../../build-showcases/react-showcase',
		emptyOutDir: true
	},
	define: {
		process
	},
	resolve: {
		alias: {
			'@components': path.resolve(__dirname, '../../output/react/src')
		}
	}
});
