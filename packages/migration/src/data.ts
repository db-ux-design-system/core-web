import type { ReplaceInFileConfig } from 'replace-in-file';
import type { ProgrammOptionsType } from './types';
import { colorQ32024 } from './migration/color-q32024';
import { iconQ32024 } from './migration/icon-q32024';
import { v005_v006 } from './migration/v0.0.5-v0.0.6.ts';
import { v006_v007 } from './migration/v0.0.6-v0.0.7.ts';

export const migrationTypes: Record<string, ReplaceInFileConfig[]> = {
	colorQ32024,
	iconQ32024,
	v005_v006,
	v006_v007
};

export const options: ProgrammOptionsType[] = [
	{
		name: 'type',
		description: `Type of migration (${Object.keys(migrationTypes).join(', ')})`,
		required: true,
		array: true
	},
	{
		name: 'src',
		description: 'Src folder with all files',
		required: true
	},
	{
		name: 'dryRun',
		short: 'd',
		description: 'prints the output of the command'
	}
];
