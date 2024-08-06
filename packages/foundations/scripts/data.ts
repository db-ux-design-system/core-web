import { type ProgrammOptionsType } from './types';

export const options: ProgrammOptionsType[] = [
	{
		name: 'src',
		description: 'Src folder with all files',
		required: true
	},
	{
		name: 'dryRun',
		short: 'dry',
		description: 'prints the output of the command'
	}
];
