import Replace from 'replace-in-file';
import packageJson from '../../package.json' assert { type: 'json' };

const oldPlaywrightVersion = '1.41.0';

const updatePlaywright = () => {
	const version = packageJson.devDependencies['@playwright/test'];
	if (!version) {
		console.error('Playwright version is missing');
		process.exit(1);
	} else if (version === oldPlaywrightVersion) {
		console.error('Playwright version is up to date');
		process.exit(1);
	}

	const replacements = [
		{
			from: `playwright:v${oldPlaywrightVersion}`,
			to: `playwright:v${version}`,
			files: [
				'.github/workflows/02-e2e.yml',
				'.github/workflows/02-e2e-foundations.yml',
				'.github/workflows/02-e2e-showcases.yml',
				'e2e/Dockerfile'
			]
		},
		{
			from: `@playwright/test": "${oldPlaywrightVersion}"`,
			to: `@playwright/test": "${version}"`,
			files: ['e2e/package.json']
		},
		{
			from: `oldPlaywrightVersion = '${oldPlaywrightVersion}'`,
			to: `oldPlaywrightVersion = '${version}'`,
			files: ['scripts/update-playwright.js']
		}
	];

	for (const replacement of replacements) {
		Replace.sync(replacement);
	}

	return 'Success';
};

updatePlaywright();
