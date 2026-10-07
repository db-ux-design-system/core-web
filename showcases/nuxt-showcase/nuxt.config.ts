import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineNuxtConfig } from 'nuxt/config';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineNuxtConfig({
	telemetry: false,
	// Disabled: @nuxt/devtools@3.x does `import Git from 'simple-git'` (default
	// import), but the security override forces simple-git >=4.0.1, which is
	// named-exports-only ESM with no default export. Enabling devtools crashes
	// `nuxt prepare`/`dev`. DevTools adds nothing to this static showcase build.
	devtools: { enabled: false },
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
			emptyOutDir: true,
			cssMinify: 'esbuild'
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
