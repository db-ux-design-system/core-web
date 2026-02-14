// @ts-check
import { defineConfig } from 'astro/config';
import { viteStaticCopy } from 'vite-plugin-static-copy';

// https://astro.build/config
export default defineConfig({
	site: 'https://design-system.deutschebahn.com/core-web',
	base: '/stencil-showcase/',
	outDir: '../../build-showcases/stencil-showcase',
	vite: {
		plugins: [
			viteStaticCopy({
				targets: [
					{
						src: '../../output/stencil/bundle',
						dest: './stencil',
					},
					{
						src: './images',
						dest: './assets',
					},
				],
			}),
		],
	},
});
