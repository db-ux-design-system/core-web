import react from '@vitejs/plugin-react';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import devtoolsJson from 'vite-plugin-devtools-json';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://vitejs.dev/config/
export default defineConfig({
	base: `/react-showcase/`,
	plugins: [
		react(),
		devtoolsJson() // Enable Chrome DevTools JSON generation for enhanced debugging
	],
	build: {
		outDir: '../../build-showcases/react-showcase',
		emptyOutDir: true
	},
	define: {
		process: {
			env: {
				REDIRECT_URL_SEARCH_PARAMS: JSON.stringify(
					process.env.REDIRECT_URL_SEARCH_PARAMS
				),
				BASE_PATH: JSON.stringify(process.env.BASE_PATH),
				NEXT_SHOWCASE_VARIANT: JSON.stringify(
					process.env.NEXT_SHOWCASE_VARIANT
				),
				GITHUB_BRANCH: JSON.stringify(process.env.GITHUB_BRANCH),
				BRANCH_NAME: JSON.stringify(process.env.BRANCH_NAME)
			}
		}
	},
	resolve: {
		alias: {
			'@components': path.resolve(__dirname, '../../packages/react-core-components/src')
		}
	},
	css: {
		devSourcemap: true // Enables source maps in dev mode for CSS
	}
});
