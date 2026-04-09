import * as esbuild from 'esbuild';
import { execSync } from 'node:child_process';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Step 1: generate the embedded manifest from live monorepo data
execSync('npx tsx src/build-manifest.ts', { stdio: 'inherit', cwd: __dirname });

// Step 2: bundle src/index.ts → build/index.js
// All paths are absolute so this script is safe to invoke from any cwd
// (e.g. `node ../../packages/mcp-server/esbuild.js` from packages/components/).
await esbuild.build({
	entryPoints: [`${__dirname}/src/index.ts`],
	outfile: `${__dirname}/dist/index.js`,
	bundle: true,
	platform: 'node',
	target: 'node22',
	format: 'esm',
	banner: { js: '#!/usr/bin/env node' },
	resolveExtensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
	// Keep @db-ux/* packages external — the MCP server only embeds manifest.json,
	// it must not pull in the component library source.
	// @modelcontextprotocol/sdk is bundled so the output runs standalone via npx.
	external: ['@db-ux/*']
});
