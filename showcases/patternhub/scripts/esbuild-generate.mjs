import * as esbuild from 'esbuild';
import { spawn } from 'node:child_process';

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

await new Promise((resolve, reject) => {
	const child = spawn('node', ['./generated.js']);
	child.on('exit', (code) => {
		if (code === 0) {
			resolve();
		} else {
			reject(new Error(`Generated script exited with code ${code}`));
		}
	});
	child.on('error', reject);
});
