#!/usr/bin/env node
import findVersions from 'find-versions';

export const packageVersion = () => {
	const { TAG } = process.env;
	const IS_RELEASE: boolean = process.env.RELEASE === 'true';
	const IS_PRE_RELEASE: boolean = process.env.PRE_RELEASE === 'true';
	const { GITHUB_SHA } = process.env;

	if (!TAG) {
		console.error('TAG is not defined');
		process.exit(1);
	}

	if (!GITHUB_SHA) {
		console.error('GITHUB_SHA is not defined');
		process.exit(1);
	}

	const SEMVER_VERSION: string = findVersions(TAG).toString();

	if (IS_RELEASE) {
		if (SEMVER_VERSION.includes('-')) {
			console.error(
				`Version ${SEMVER_VERSION} contains hyphen, maybe you forgot to check the prerelease checkbox in GitHub release draft. A release should not have a hyphen!`
			);
			process.exit(1);
		}

		console.log(SEMVER_VERSION);
	} else if (IS_PRE_RELEASE) {
		if (SEMVER_VERSION.includes('-')) {
			const GITHUB_SHA_SHORT: string = GITHUB_SHA.slice(0, 7);

			const VALID_SEMVER_VERSION = `${SEMVER_VERSION}-${GITHUB_SHA_SHORT}`;
			console.log(VALID_SEMVER_VERSION);
		} else {
			console.error(
				`Version ${SEMVER_VERSION} doesn't contain a hyphen. A prerelease should have a hyphen!`
			);
			process.exit(1);
		}
	} else {
		console.error(
			'nothing found in environment for RELEASE or PRE_RELEASE'
		);
		process.exit(1);
	}
};

packageVersion();
