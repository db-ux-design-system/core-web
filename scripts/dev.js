/* eslint-disable unicorn/prefer-top-level-await */
import childProcess from 'node:child_process';
import inquirer from 'inquirer';

inquirer
	.prompt([
		{
			type: 'checkbox',
			message: 'Select frameworks to develop with:',
			name: 'frameworks',
			choices: [
				{
					name: 'angular'
				},
				{
					name: 'react',
					checked: true
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
		let startCommand = 'npm-run-all -p start:foundations dev:sass';
		if (answers?.frameworks)
			for (const answer of answers.frameworks) {
				startCommand += ` dev:${answer}-components start-showcase:${answer}`;
			}

		// TODO: Handle child process better
		childProcess.execSync(startCommand, { stdio: 'inherit' });
	});
