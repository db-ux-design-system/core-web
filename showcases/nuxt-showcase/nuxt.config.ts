// SPDX-FileCopyrightText: 2025 DB Systel GmbH
//
// SPDX-License-Identifier: Apache-2.0

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
	}
});
