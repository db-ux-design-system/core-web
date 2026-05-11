#!/usr/bin/env node
import { execSync } from 'node:child_process';
import { readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const repoRoot = path.join(fileURLToPath(import.meta.url), '../../..');

const { VALID_SEMVER_VERSION } = process.env;
const RELEASE = process.env.RELEASE === 'true';
const PRE_RELEASE = process.env.PRE_RELEASE === 'true';
const CI = process.env.CI === 'true';

if (!VALID_SEMVER_VERSION) {
	if (CI) {
		console.error('Version is missing!');
		process.exit(1);
	}

	process.env.VALID_SEMVER_VERSION = '0.0.0-local';
	console.warn('⚠️ No version set, using 0.0.0-local for local run');
}

if (!RELEASE && !PRE_RELEASE) {
	if (CI) {
		console.error(
			'RELEASE and PRE_RELEASE are false, there should be an error in the pipeline!'
		);
		process.exit(1);
	}

	console.warn(
		'⚠️ No RELEASE/PRE_RELEASE set, defaulting to PRE_RELEASE=true for local run'
	);
	process.env.PRE_RELEASE = 'true';
}

const VALID_SEMVER = process.env.VALID_SEMVER_VERSION;
const IS_PRE_RELEASE = process.env.PRE_RELEASE === 'true';

console.log('🛠 Forge all packages version numbers');
console.log(`which package version ?: ${VALID_SEMVER}`);

console.log('goto build-outputs');
process.chdir(path.join(repoRoot, 'build-outputs'));

const packages = [
	{ dir: 'foundations', name: 'core-foundations' },
	{ dir: 'components', name: 'core-components' },
	{ dir: 'angular', name: 'ngx-core-components' },
	{ dir: 'react', name: 'react-core-components' },
	{ dir: 'vue', name: 'v-core-components' },
	{ dir: 'wc-core-components', name: 'wc-core-components' },
	{ dir: 'migration', name: 'core-migration' },
	{ dir: 'stylelint', name: 'core-stylelint' },
	{ dir: 'eslint-plugin', name: 'core-eslint-plugin' },
	{ dir: 'vite-plugin', name: 'core-vite-plugin' },
	{ dir: 'postcss-plugin', name: 'core-postcss-plugin' },
	{ dir: 'agent-cli', name: 'agent-cli' },
	{ dir: 'mcp-server', name: 'mcp-server' }
];

const packagesWithFoundationsDep = new Set([
	'core-components',
	'ngx-core-components',
	'react-core-components',
	'v-core-components',
	'wc-core-components'
]);

const packagesWithComponentsDep = new Set([
	'ngx-core-components',
	'react-core-components',
	'v-core-components',
	'wc-core-components'
]);

for (const { dir, name: PACKAGE } of packages) {
	console.log(`Start ${PACKAGE} bundle:`);

	if (IS_PRE_RELEASE) {
		// Only update versions for pre-releases
		console.log('🆚 Update Version');
		const pkgPath = path.join(dir, 'package.json');
		const pkg = JSON.parse(readFileSync(pkgPath, 'utf8'));
		pkg.version = VALID_SEMVER;

		if (packagesWithFoundationsDep.has(PACKAGE)) {
			console.log('🕵️ Set foundations dependency');
			pkg.dependencies ??= {};
			pkg.dependencies['@db-ux/core-foundations'] = VALID_SEMVER;
		}

		if (packagesWithComponentsDep.has(PACKAGE)) {
			pkg.dependencies ??= {};
			pkg.dependencies['@db-ux/core-components'] = VALID_SEMVER;
		}

		writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + '\n');
	}

	console.log('📦 Create npm package');
	execSync(
		`pnpm pack --quiet --config.ignore-scripts=true --ignore-workspace`,
		{ cwd: dir }
	);
}

let TAG = 'latest';
if (IS_PRE_RELEASE) {
	TAG = 'next';
}

console.log(`📰 Publish Package to Registry with tag: ${TAG}`);

console.log('🔒 Authenticate NPM Registry');
execSync('pnpm config set @db-ux:registry https://registry.npmjs.org/');
console.log('🔑 Using trusted publishing for NPM');

// Only run provenance (real publish) in CI, locally only dry-run
for (const step of CI ? ['dry-run', 'provenance'] : ['dry-run']) {
	for (const { dir, name: PACKAGE } of packages) {
		console.log(`⤴ (${step}) Publish ${PACKAGE} with tag ${TAG} to NPM`);
		try {
			execSync(
				`pnpm publish --tag ${TAG} ${dir}/db-ux-${PACKAGE}-${VALID_SEMVER}.tgz --${step} --no-git-checks`
			);
		} catch (error) {
			console.error(
				`❌ ${step} publish failed for ${PACKAGE} with tag ${TAG} to NPM`
			);
			console.error(error.message || error);
			process.exit(1);
		}
	}
}
