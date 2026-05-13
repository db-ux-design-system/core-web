import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
	base: '/stencil-showcase/',
	plugins: [
		viteStaticCopy({
			targets: [
				{
					src: '../../output/stencil/bundle/*',
					dest: './stencil'
				},
				{
					src: './images/*',
					dest: './assets'
				}
			]
		})
	],
	build: {
		outDir: '../../build-showcases/stencil-showcase',
		emptyOutDir: true
	}
});
