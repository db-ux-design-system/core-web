// SPDX-FileCopyrightText: 2025 DB Systel GmbH
//
// SPDX-License-Identifier: Apache-2.0

import type { ProgrammOptionsType } from './types';
import { colorQ32024 } from './migration/color-q32024';
import type { ReplaceInFileConfig } from 'replace-in-file';
import { iconQ32024 } from './migration/icon-q32024';
import { v005_v006 } from './migration/v0.0.5-v0.0.6';

export const migrationTypes: Record<string, ReplaceInFileConfig[]> = {
	colorQ32024,
	iconQ32024,
	v005_v006
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
		short: 'dry',
		description: 'prints the output of the command'
	}
];
