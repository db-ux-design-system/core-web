/* eslint-disable unicorn/prefer-top-level-await */
import childProcess from 'node:child_process';
import inquirer from 'inquirer';

const answersFrameworkPairs = [
	{
		answers: ['plain-html'],
		framework: 'plain-html'
	},
	{
		answers: ['vue', 'nuxt'],
		framework: 'vue'
	},
	{
		answers: ['react', 'next', 'patternhub'],
		framework: 'react'
	},
	{
		answers: ['angular', 'angular-ssr'],
		framework: 'angular'
	}
];

inquirer
	.prompt([
		{
			type: 'checkbox',
			message: 'Select frameworks to develop with:',
			name: 'frameworks',
			choices: [
				{
					name: 'plain-html',
					checked: true
				},
				{
					name: 'patternhub'
				},
				{
					name: 'angular'
				},
				{
					name: 'angular-ssr'
				},
				{
					name: 'react'
				},
				{
					name: 'next'
				},
				{
					name: 'vue'
				},
				{
					name: 'nuxt'
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
		if (!answers?.frameworks) {
			return;
		}

		// Let startCommand = 'npm-run-all -p start:foundations dev:sass';
		let startCommand = 'npm run start:foundations & npm run dev:sass';

		const currentAnswers = answers?.frameworks;

		for (const { framework, answers } of answersFrameworkPairs) {
			const isAnswerSelected = currentAnswers.some((currentAnswer) =>
				answers.includes(currentAnswer)
			);

			if (isAnswerSelected) {
				startCommand += ` & npm run dev:${framework}-components`;
			}
		}

		for (const currentAnswer of currentAnswers) {
			startCommand += ` & npm run start-showcase:${currentAnswer} --if-present`;
		}

		// TODO: Handle child process better
		childProcess.execSync(startCommand, { stdio: 'inherit' });
	});
