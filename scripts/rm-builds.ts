import { glob, rm } from 'node:fs/promises';
import { resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');

const patterns = [
	// Package builds
	'packages/components/build',
	'packages/foundations/build',
	// Output builds
	'output/**/dist',
	'output/**/playwright',
	'output/**/src',
	// Showcase builds
	'build-showcases/**',
	'showcases/**/dist',
	// Playwright
	'output/react/playwright'
];

const resolved = await Promise.all(
	patterns.map(async (p) => Array.fromAsync(glob(resolve(root, p))))
);
const entries = resolved.flat();

await Promise.all(
	entries.map(async (entry) => rm(entry, { recursive: true, force: true }))
);
