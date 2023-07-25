/* eslint-disable unicorn/prefer-top-level-await */
import childProcess from 'node:child_process';
import Replace from 'replace-in-file';
import inquirer from 'inquirer';

const oldPlaywrightVersion = '1.35.1';

inquirer
	.prompt([
		{
			type: 'input',
			message: 'New version:',
			name: 'version',
			default: oldPlaywrightVersion,
			validate(answer) {
				if (answer.length === 0 || answer.split('.').length < 3) {
					return 'You must choose at least one framework.';
				}

				return true;
			}
		}
	])

	.then((answer) => {
		const version = answer.version;
		const replacements = [
			{
				from: `playwright:v${oldPlaywrightVersion}-focal`,
				to: `playwright:v${version}-focal`,
				files: [
					'.github/workflows/02-e2e.yml',
					'.github/workflows/02-e2e-showcases.yml',
					'e2e/Dockerfile'
				]
			},
			{
				from: `experimental-ct-react": "${oldPlaywrightVersion}"`,
				to: `experimental-ct-react": "${version}"`,
				files: ['output/react/package.json']
			},
			{
				from: `experimental-ct-vue": "${oldPlaywrightVersion}"`,
				to: `experimental-ct-vue": "${version}"`,
				files: ['output/vue/vue3/package.json']
			},
			{
				from: `@playwright/test": "${oldPlaywrightVersion}"`,
				to: `@playwright/test": "${version}"`,
				files: ['package.json']
			},
			{
				from: `oldPlaywrightVersion = '${oldPlaywrightVersion}'`,
				to: `oldPlaywrightVersion = '${version}'`,
				files: ['scripts/update-playwright.js']
			}
		];

		for (const replacement of replacements) {
			Replace.sync(replacement);
			childProcess.execSync('npm i', { stdio: 'inherit' });
		}
	});
