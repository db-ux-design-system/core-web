#!/usr/bin/env node

import { program } from 'commander';
import { action } from './index';

const startProgram = (
	name: string,
	description: string,
	action: (root: string) => void
) => {
	program.name(name).description(description);
	program.argument(
		'[root]',
		'Root path to generate AI agent instructions. Default: `.`'
	);
	program.action(action);

	program.parse();
};

startProgram(
	'@db-ux/agent-cli',
	'CLI for DB UX Design System generate AI agent instructions',
	action
);
