/* eslint-disable unicorn/prefer-top-level-await */
import childProcess from 'node:child_process';
import inquirer from 'inquirer';

inquirer
	.prompt([
		{
			type: 'checkbox',
			message: 'Select frameworks to start;',
			name: 'frameworks',
			choices: [
				{
					name: 'angular'
				},
				{
					name: 'patternhub'
				},
				{
					name: 'react',
					checked: true
				},
				{
					name: 'reactwind'
				},
				{
					name: 'vanilla'
				},
				{
					name: 'vue'
				}
			],
			validate(answer) {
				if (answer.length === 0) {
					return 'You must choose at least one framework.';
				}

				return true;
			}
		}
	])

	.then((answers) => {
		let startCommand = 'npm-run-all -p build:* -p';
		if (answers?.frameworks)
			for (const answer of answers.frameworks) {
				startCommand += ` start-showcase:${answer}`;
			}

		// eslint-disable-next-line no-console
		console.log(`Start with command: '${startCommand}'`);
		// TODO: Handle child process better
		childProcess.execSync(startCommand, { stdio: 'inherit' });
	});
