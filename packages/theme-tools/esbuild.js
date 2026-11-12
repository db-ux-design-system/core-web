import * as esbuild from 'esbuild';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/*
 * Bundle the CLI surface src/cli/index.ts -> build/cli/index.js, built like
 * `@db-ux/agent-cli` (esbuild + commander). `tsc` (run first in the `build`
 * script) emits the core `.` entry and the CLI's `.d.ts`; this step then
 * overwrites build/cli/index.js with the bundled executable that the
 * `db-ux-theme-tools` bin points at. The `#!/usr/bin/env node` shebang is
 * carried by `src/cli/index.ts` itself (as in `@db-ux/agent-cli`), so esbuild
 * needs no banner.
 *
 * All paths are absolute so the script is safe to invoke from any cwd.
 *
 * `packages: 'external'` keeps node_modules dependencies (commander) and the
 * package's own `@db-ux/*` imports out of the bundle: commander resolves from
 * the published `dependencies`, and the core generator is already emitted by
 * `tsc` into build/ rather than re-bundled here.
 */
await esbuild.build({
	entryPoints: [`${__dirname}/src/cli/index.ts`],
	outfile: `${__dirname}/build/cli/index.js`,
	bundle: true,
	platform: 'node',
	format: 'esm',
	resolveExtensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
	packages: 'external'
});
