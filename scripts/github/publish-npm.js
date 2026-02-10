#!/usr/bin/env node
import { execSync } from 'node:child_process';

const { VALID_SEMVER_VERSION } = process.env;
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
	'core-components',
	'ngx-core-components',
	'react-core-components',
	'v-core-components',
	'wc-core-components',
	'core-migration',
	'core-stylelint',
	'core-eslint-plugin',
	'agent-cli'
];

for (const PACKAGE of packages) {
	console.log(`Start ${PACKAGE} bundle:`);

	if (PRE_RELEASE) {
		// Only update versions for pre-releases
		console.log('🆚 Update Version');
		execSync(
			`npm version --no-git-tag-version ${VALID_SEMVER_VERSION} --workspace=@db-ux/${PACKAGE}`
		);

		if (
			PACKAGE !== 'core-foundations' &&
			PACKAGE !== 'agent-cli' &&
			PACKAGE !== 'core-migration' &&
			PACKAGE !== 'core-stylelint' &&
			PACKAGE !== 'core-eslint-plugin'
		) {
			console.log('🕵️‍ Set foundations dependency');
			execSync(
				`npm pkg set dependencies.@db-ux/core-foundations=${VALID_SEMVER_VERSION} --workspace=@db-ux/${PACKAGE}`
			);
			if (PACKAGE !== 'core-components') {
				execSync(
					`npm pkg set dependencies.@db-ux/core-components=${VALID_SEMVER_VERSION} --workspace=@db-ux/${PACKAGE}`
				);
			}
		}
	}

	console.log('📦 Create npm package');
	execSync(`npm pack --quiet --workspace=@db-ux/${PACKAGE}`);
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
		execSync('npm config set @db-ux:registry https://registry.npmjs.org/');
		console.log('🔑 Using trusted publishing for NPM');
	} else {
		console.error(`Could not authenticate with ${REGISTRY}`);
		process.exit(1);
	}

	// We do a try-run to check if everything is alright

	for (const step of ['dry-run', 'provenance']) {
		for (const PACKAGE of packages) {
			console.log(
				`⤴ (${step}) Publish ${PACKAGE} with tag ${TAG} to ${REGISTRY}`
			);
			try {
				execSync(
					`npm publish --tag ${TAG} db-ux-${PACKAGE}-${VALID_SEMVER_VERSION}.tgz --${step}`
				);
			} catch (error) {
				console.error(
					`❌ ${step} publish failed for ${PACKAGE} with tag ${TAG} to ${REGISTRY}`
				);
				console.error(error.message || error);
				process.exit(1);
			}
		}
	}
}
