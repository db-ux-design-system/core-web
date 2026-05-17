import { resolve } from 'node:path';
import { rimraf } from 'rimraf';

const root = resolve(import.meta.dirname, '..');

const paths = [
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
].map((p) => resolve(root, p));

await rimraf(paths, { glob: true });
