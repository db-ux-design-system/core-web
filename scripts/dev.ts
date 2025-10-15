import { checkbox } from '@inquirer/prompts';
import childProcess from 'node:child_process';

const answersFrameworkPairs = [
	{
		answers: ['plain-html'],
		framework: 'plain-html'
	},
	{
		answers: ['stencil'],
		framework: 'stencil'
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
const currentAnswers = await checkbox({
	message: 'Select frameworks to develop with:',
	choices: [
		{
			value: 'plain-html',
			checked: true
		},
		{
			value: 'patternhub'
		},
		{
			value: 'angular'
		},
		{
			value: 'angular-ssr'
		},
		{
			value: 'stencil'
		},
		{
			value: 'react'
		},
		{
			value: 'next'
		},
		{
			value: 'vue'
		},
		{
			value: 'nuxt'
		}
	],
	validate(answer) {
		if (answer.length === 0) {
			return 'You must choose at least one framework.';
		}

		return true;
	}
});

const startDev = () => {
	if (currentAnswers.length === 0) {
		return;
	}

	let startCommand = 'npm-run-all --parallel start:foundations dev:sass';

	for (const { framework, answers } of answersFrameworkPairs) {
		const isAnswerSelected = currentAnswers.some((currentAnswer) =>
			answers.includes(currentAnswer)
		);

		if (isAnswerSelected) {
			startCommand += ` dev:${framework}-components`;
		}
	}

	for (const currentAnswer of currentAnswers) {
		if (currentAnswer === 'plain-html') continue;

		startCommand += ` start-showcase:${currentAnswer}`;
	}

	// TODO: Handle child process better
	childProcess.execSync(startCommand, { stdio: 'inherit' });
};

startDev();
