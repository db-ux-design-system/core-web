// SPDX-FileCopyrightText: 2025 DB Systel GmbH
//
// SPDX-License-Identifier: Apache-2.0

import { build } from 'esbuild';

await build({
	entryPoints: ['./src/cli.ts'],
	bundle: true,
	outfile: './build/index.js',
	platform: 'node',
	format: 'esm',
	packages: 'external'
});
