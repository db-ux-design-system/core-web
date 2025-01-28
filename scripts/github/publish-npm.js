#!/usr/bin/env node
import { execSync } from 'node:child_process';

const VALID_SEMVER_VERSION = process.env.VALID_SEMVER_VERSION;
const RELEASE = process.env.RELEASE === 'true';
const PRE_RELEASE = process.env.PRE_RELEASE === 'true';
const GPR_TOKEN = process.env.GPR_TOKEN;
const NPM_TOKEN = process.env.NPM_TOKEN;

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
	'foundations',
	'migration',
	'components',
	'ngx-components',
	'react-components',
	'v-components',
	'web-components'
];

for (const PACKAGE of packages) {
	console.log(`Start ${PACKAGE} bundle:`);

	console.log('🆚 Update Version');
	execSync(
		`npm version --no-git-tag-version ${VALID_SEMVER_VERSION} --workspace=@db-ui/${PACKAGE}`
	);

	if (PACKAGE !== 'foundations' && PACKAGE !== 'migration') {
		console.log('🕵️‍ Set foundations dependency');
		execSync(
			`npm pkg set dependencies.@db-ui/foundations=${VALID_SEMVER_VERSION} --workspace=@db-ui/${PACKAGE}`
		);
		if (PACKAGE !== 'components') {
			execSync(
				`npm pkg set dependencies.@db-ui/components=${VALID_SEMVER_VERSION} --workspace=@db-ui/${PACKAGE}`
			);
		}
	}

	console.log('📦 Create npm package');
	execSync(`npm pack --quiet --workspace=@db-ui/${PACKAGE}`);
}

let TAG = 'latest';
if (PRE_RELEASE) {
	TAG = 'next';
}

console.log(`📰 Publish Package to Registry with tag: ${TAG}`);
const registries = ['NPM']; // 'GITHUB', -> we don't push to GitHub packages at the moment

for (const REGISTRY of registries) {
	console.log(`🔒 Authenticate ${REGISTRY} NPM Registry`);

	if (REGISTRY === 'GITHUB') {
		execSync('npm config set @db-ui:registry https://npm.pkg.github.com');
		execSync(`npm set //npm.pkg.github.com/:_authToken ${GPR_TOKEN}`);
		console.log('🔑 Authenticated with GitHub');
	} else if (REGISTRY === 'NPM') {
		execSync('npm config set @db-ui:registry https://registry.npmjs.org/');
		execSync(`npm set //registry.npmjs.org/:_authToken ${NPM_TOKEN}`);
		console.log('🔑 Authenticated with NPM');
	} else {
		console.error(`Could not authenticate with ${REGISTRY}`);
		process.exit(1);
	}

	for (const PACKAGE of packages) {
		console.log(`⤴ Publish ${PACKAGE} with tag ${TAG} to ${REGISTRY}`);
		execSync(
			`npm publish --tag ${TAG} db-ui-${PACKAGE}-${VALID_SEMVER_VERSION}.tgz --provenance`
		);
	}
}
