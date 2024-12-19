#!/usr/bin/env node

import type { OptionsType } from './types';
import startProgram from './program';
import { options } from './data';
import { migrate } from './migration';

const action = async (_: unknown, options: OptionsType) => {
	migrate(options, true);
};

startProgram(
	'@db-ui/foundations - migration',
	'CLI for DB UX Design System foundations',
	options,
	action
);
