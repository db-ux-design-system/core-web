#!/usr/bin/env node
import { readFileSync } from 'node:fs';

const pkgName = process.argv.slice(2);
const cmdArgs = process.argv.slice(3);

if (!pkgName) {
	console.error(
		'Usage: node scripts/npx-from-dependencies.mjs <pkgName> [args...]'
	);
	process.exit(1);
}

const pkgJson = JSON.parse(
	readFileSync(new URL('../package.json', import.meta.url))
);
const version =
	pkgJson.devDependencies?.[pkgName] ?? pkgJson.dependencies?.[pkgName];

if (!version) {
	console.error(
		`No dependency version found for "${pkgName}" in package.json`
	);
	process.exit(1);
}

// Note: version might be ^1.2.3, ~1.2.3, etc. npx accepts ranges.
const spec = `${pkgName}@${version}`;
const { spawnSync } = await import('node:child_process');

const result = spawnSync(
	'npx',
	['--yes', '--package', spec, pkgName, ...cmdArgs],
	{
		stdio: 'inherit',
		shell: process.platform === 'win32'
	}
);

console.log(
	'### running npx',
	['--yes', '--package', spec, pkgName, ...cmdArgs].join(' '),
	'###'
);

process.exit(result.status ?? 1);
