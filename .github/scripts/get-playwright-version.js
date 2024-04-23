import packageJson from '../../package.json' assert { type: 'json' };

const getPlaywrightVersion = () => {
	const version = packageJson.devDependencies['@playwright/test'];
	if (!version) {
		console.error('Playwright version is missing');
		process.exit(1);
	}

	return version;
};
export default getPlaywrightVersion;
