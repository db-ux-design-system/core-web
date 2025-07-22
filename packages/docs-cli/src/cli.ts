#!/usr/bin/env node

import { copyDocs } from './copy-docs';
import { program } from 'commander';

const action = async (rootPath: string = '.') => {
	copyDocs(rootPath);
};

const startProgram = (
	name: string,
	description: string,
	action: (root: string) => void
) => {
	program.name(name).description(description);
	program.argument('[root]', 'root path to copy docs from');
	program.action(action);

	program.parse();
};

startProgram(
	'@db-ux/docs-cli',
	'CLI for DB UX Design System copy docs for AI agents',
	action
);
