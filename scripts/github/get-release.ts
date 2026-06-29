#!/usr/bin/env node
const getRelease = () => {
	/* eslint-disable @typescript-eslint/naming-convention */
	const { GITHUB_REF } = process.env;
	const { GITHUB_ACTOR } = process.env;
	const { GITHUB_COMMITISH } = process.env;
	const GITHUB_PRE_RELEASE = process.env.GITHUB_PRE_RELEASE === 'true';
	/* eslint-enable @typescript-eslint/naming-convention */

	if (GITHUB_REF?.startsWith('refs/tags/v')) {
		if (GITHUB_ACTOR === 'dependabot[bot]') {
			console.error('Dependabot has no permission to publish!');
			process.exit(1);
		} else if (GITHUB_COMMITISH === 'main' && !GITHUB_PRE_RELEASE) {
			console.log('RELEASE');
		} else {
			console.log('PRE_RELEASE');
		}
	} else {
		console.error("Your tag has to start with 'v'");
		process.exit(1);
	}
};

getRelease();
