import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineNuxtConfig({
	telemetry: false,
	devtools: { enabled: true },
	generate: {
		routes: ['/']
	},
	app: {
		baseURL: '/nuxt-showcase/'
	},
	imports: {
		autoImport: false
	},
	devServer: {
		port: 4000
	},
	vite: {
		base: `/nuxt-showcase/`,
		build: {
			outDir: '../../build-showcases/nuxt-showcase',
			emptyOutDir: true
		}
	},
	nitro: {
		output: {
			dir: '../../build-showcases/nuxt-showcase',
			publicDir: '../../build-showcases/nuxt-showcase'
		}
	},
	alias: {
		'@components': path.resolve(__dirname, '../../output/vue/src')
	}
});
