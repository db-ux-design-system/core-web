import * as esbuild from 'esbuild';

await esbuild.build({
	entryPoints: ['./scripts/generate-docs-mdx.js'],
	bundle: true,
	outfile: './generated.js',
	platform: 'node',
	loader: { '.js': 'jsx' },
	format: 'esm',
	banner: {
		js:
			'const require = await (async () => { ' +
			"const { createRequire } = await import('node:module');" +
			'return createRequire(import.meta.url)' +
			'})();'
	}
});
