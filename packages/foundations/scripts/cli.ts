#!/usr/bin/env node

import { type OptionsType } from './types';
import startProgram from './program';
import { options } from './data';
import { migrate } from './migration';

const action = async (functionName: string, options: OptionsType) => {
	if (functionName === 'migration') {
		migrate(options);
	} else {
		console.error(
			`There is no function for this library named ${functionName}`
		);
	}
};

startProgram(
	'@db-ui/foundations - migration',
	'CLI for DB UX Design System foundations',
	options,
	action
);
