import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineNuxtConfig } from 'nuxt/config';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineNuxtConfig({
	telemetry: false,
	// Nuxt DevTools is intentionally disabled and excluded from the dependency
	// tree (see the "nuxt>@nuxt/devtools" override in pnpm-workspace.yaml). It
	// pulls in simple-git, whose only security-patched line (4.x) is published
	// incorrectly / is incompatible with Node's native type-stripping, which
	// breaks `nuxt prepare`.
	// The showcase does not need the DevTools panel, so we drop it entirely.
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
