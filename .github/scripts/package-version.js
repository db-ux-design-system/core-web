import findVersions from 'find-versions';

const TAG = process.env.TAG;
const RELEASE = process.env.RELEASE === 'true';
const PRE_RELEASE = process.env.PRE_RELEASE === 'true';
const GITHUB_SHA = process.env.GITHUB_SHA;

const SEMVER_VERSION = findVersions(TAG).toString();

if (RELEASE) {
	if (SEMVER_VERSION.includes('-')) {
		console.error(
			`Version ${SEMVER_VERSION} contains hyphen, maybe you forgot to check the prerelease checkbox in GitHub release draft. A release should not have a hyphen!`
		);
		process.exit(1);
	}
	console.log(SEMVER_VERSION);
} else if (PRE_RELEASE) {
	if (SEMVER_VERSION.includes('-')) {
		const GITHUB_SHA_SHORT = GITHUB_SHA.substring(0, 7);
		const VALID_SEMVER_VERSION = `${SEMVER_VERSION}-${GITHUB_SHA_SHORT}`;
		console.log(VALID_SEMVER_VERSION);
	} else {
		console.error(
			`Version ${SEMVER_VERSION} doesn't contain a hyphen. A prerelease should have a hyphen!`
		);
		process.exit(1);
	}
} else {
	console.error('nothing found in environment for RELEASE or PRE_RELEASE');
	process.exit(1);
}
