const getRelease = () => {
	const GITHUB_REF = process.env.GITHUB_REF;
	const GITHUB_ACTOR = process.env.GITHUB_ACTOR;
	const GITHUB_COMMITISH = process.env.GITHUB_COMMITISH;
	const GITHUB_PRE_RELEASE = process.env.GITHUB_PRE_RELEASE === 'true';

	if (GITHUB_REF && GITHUB_REF.startsWith('refs/tags/v')) {
		if (GITHUB_ACTOR !== 'dependabot[bot]') {
			if (GITHUB_COMMITISH === 'main' && !GITHUB_PRE_RELEASE) {
				console.log('RELEASE');
			} else {
				console.log('PRE_RELEASE');
			}
		} else {
			console.error('Dependabot has no permission to publish!');
			process.exit(1);
		}
	} else {
		console.error("Your tag has to start with 'v'");
		process.exit(1);
	}
};

getRelease();
