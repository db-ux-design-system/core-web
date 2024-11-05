import { build } from 'esbuild';

await build({
	entryPoints: ['./scripts/cli.ts'],
	bundle: true,
	outfile: './build/index.js',
	platform: 'node',
	format: 'esm',
	external: ['chalk']
});
