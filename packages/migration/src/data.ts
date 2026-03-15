import type { ReplaceInFileConfig } from 'replace-in-file';
import { colorQ32024 } from './migration/color-q32024';
import { iconQ32024 } from './migration/icon-q32024';
import { sass_to_postcss } from './migration/sass-to-postcss';
import { v005_v006 } from './migration/v0.0.5-v0.0.6';
import { v006_v007 } from './migration/v0.0.6-v0.0.7';
import { v007_v100 } from './migration/v0.0.7-v1.0.0';
import { v100_v200 } from './migration/v1.0.0-v2.0.0';
import { v200_v300 } from './migration/v2.0.0-v3.0.0';
import type { ProgramOptionsType } from './types';

export const migrationTypes: Record<string, ReplaceInFileConfig[]> = {
	colorQ32024,
	iconQ32024,
	sass_to_postcss,
	v005_v006,
	v006_v007,
	v007_v100,
	v100_v200,
	v200_v300
};

export const options: ProgramOptionsType[] = [
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
