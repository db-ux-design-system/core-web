import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
// @ts-ignore
import tailwindcss from '@tailwindcss/vite';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
import dbUxPlugin from '../../../src/index';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
	plugins: [react(), dbUxPlugin(), tailwindcss()],
	resolve: {
		alias: {
			'@components': resolve(__dirname, '../../../../../output/react/src')
		}
	},
	build: {
		outDir: 'dist',
		cssCodeSplit: false
	}
});
