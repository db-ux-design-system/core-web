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
	'showcases/patternhub/out',
	// Patternhub generated pages
	'showcases/patternhub/pages/components/**/code',
	'showcases/patternhub/pages/components/**/docs',
	'showcases/patternhub/pages/components/**/how-to-use.mdx',
	'showcases/patternhub/pages/components/**/index.tsx',
	'showcases/patternhub/pages/components/**/migration.mdx',
	'showcases/patternhub/pages/components/**/overview.tsx',
	'showcases/patternhub/pages/components/**/properties.mdx',
	// Patternhub generated components
	'showcases/patternhub/components/src/**/*.ts',
	'showcases/patternhub/components/src/**/*.tsx',
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
