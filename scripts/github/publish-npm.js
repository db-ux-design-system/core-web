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

console.log('goto packages');
process.chdir('packages');

// Map package names to their directory names
const packageDirs = {
	'core-foundations': 'foundations',
	'core-components': 'components',
	'ngx-core-components': 'ngx-core-components',
	'react-core-components': 'react-core-components',
	'v-core-components': 'v-core-components',
	'wc-core-components': 'wc-core-components',
	'core-migration': 'migration',
	'core-stylelint': 'stylelint',
	'agent-cli': 'agent-cli'
};

const packages = [
	'core-foundations',
	'core-components',
	'ngx-core-components',
	'react-core-components',
	'v-core-components',
	'wc-core-components',
	'core-migration',
	'core-stylelint',
	'agent-cli'
];

for (const PACKAGE of packages) {
	const dir = packageDirs[PACKAGE];
	console.log(`Start ${PACKAGE} bundle (in ${dir}):`);
	process.chdir(dir);

	if (PRE_RELEASE) {
		// Only update versions for pre-releases
		console.log('🆚 Update Version');
		execSync(`pnpm version --no-git-tag-version ${VALID_SEMVER_VERSION}`);

		if (
			PACKAGE !== 'core-foundations' &&
			PACKAGE !== 'agent-cli' &&
			PACKAGE !== 'core-migration' &&
			PACKAGE !== 'core-stylelint'
		) {
			console.log('🕵️‍ Set foundations dependency');
			execSync(
				`pnpm pkg set dependencies.@db-ux/core-foundations=${VALID_SEMVER_VERSION}`
			);
			if (PACKAGE !== 'core-components') {
				execSync(
					`pnpm pkg set dependencies.@db-ux/core-components=${VALID_SEMVER_VERSION}`
				);
			}
		}
	}

	console.log('📦 Create npm package');
	execSync(`pnpm pack --quiet`);
	process.chdir('..');
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
		console.log('🔑 Using trusted publishing for NPM');
	} else {
		console.error(`Could not authenticate with ${REGISTRY}`);
		process.exit(1);
	}

	// We do a try-run to check if everything is alright

	for (const step of ['dry-run', 'provenance']) {
		for (const PACKAGE of packages) {
			const dir = packageDirs[PACKAGE];
			console.log(
				`⤴ (${step}) Publish ${PACKAGE} with tag ${TAG} to ${REGISTRY}`
			);
			try {
				execSync(
					`pnpm publish --tag ${TAG} ${dir}/db-ux-${PACKAGE}-${VALID_SEMVER_VERSION}.tgz --${step}`
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
