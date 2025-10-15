#!/usr/bin/env node

import { options } from './data';
import { migrate } from './migration';
import startProgram from './program';
import type { OptionsType } from './types';

const action = async (_: unknown, options: OptionsType) => {
	migrate(options, true);
};

startProgram(
	'@db-ux/core-foundations - migration',
	'CLI for DB UX Design System foundations',
	options,
	action
);
