#!/usr/bin/env node
import { execSync } from 'node:child_process';

const { VALID_SEMVER_VERSION, NPM_TOKEN } = process.env;
const RELEASE = process.env.RELEASE === 'true';
const PRE_RELEASE = process.env.PRE_RELEASE === 'true';

if (!VALID_SEMVER_VERSION) {
	console.error('Version is missing!');
	process.exit(1);
}

if (!RELEASE && !PRE_RELEASE) {
	console.error(
		'RELEASE and PRE_RELEASE are false, there should be an error in the pipeline!'
	);
	process.exit(1);
}

console.log('🛠 Forge all packages version numbers');
console.log(`which package version ?: ${VALID_SEMVER_VERSION}`);

console.log('goto build-outputs');
process.chdir('build-outputs');

const packages = [
	'core-foundations',
	'core-migration',
	'core-stylelint',
	'core-components',
	'ngx-core-components',
	'react-core-components',
	'v-core-components',
	'wc-core-components'
];

for (const PACKAGE of packages) {
	console.log(`Start ${PACKAGE} bundle:`);

	if (PRE_RELEASE) {
		// Only update versions for pre-releases
		console.log('🆚 Update Version');
		execSync(
			`pnpm --filter=@db-ux/${PACKAGE} version --no-git-tag-version ${VALID_SEMVER_VERSION}`
		);

		if (
			PACKAGE !== 'core-foundations' &&
			PACKAGE !== 'core-migration' &&
			PACKAGE !== 'core-stylelint'
		) {
			console.log('🕵️‍ Set foundations dependency');
			execSync(
				`pnpm --filter=@db-ux/${PACKAGE} pkg set dependencies.@db-ux/core-components=${VALID_SEMVER_VERSION}`
			);
			if (PACKAGE !== 'core-components') {
				execSync(
					`pnpm --filter=@db-ux/${PACKAGE} pkg set dependencies.@db-ux/core-components=${VALID_SEMVER_VERSION}`
				);
			}
		}
	}

	console.log('📦 Create npm package');
	execSync(`pnpm --filter=@db-ux/${PACKAGE} pack --quiet`);
}

let TAG = 'latest';
if (PRE_RELEASE) {
	TAG = 'next';
}

console.log(`📰 Publish Package to Registry with tag: ${TAG}`);
const registries = ['NPM'];

for (const REGISTRY of registries) {
	console.log(`🔒 Authenticate ${REGISTRY} NPM Registry`);

	if (REGISTRY === 'NPM') {
		execSync('pnpm config set @db-ux:registry https://registry.npmjs.org/');
		execSync(`pnpm set //registry.npmjs.org/:_authToken ${NPM_TOKEN}`);
		console.log('🔑 Authenticated with NPM');
	} else {
		console.error(`Could not authenticate with ${REGISTRY}`);
		process.exit(1);
	}

	for (const PACKAGE of packages) {
		console.log(`⤴ Publish ${PACKAGE} with tag ${TAG} to ${REGISTRY}`);
		execSync(
			`pnpm publish --tag ${TAG} db-ux-${PACKAGE}-${VALID_SEMVER_VERSION}.tgz --provenance`
		);
	}
}
