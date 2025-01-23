// SPDX-FileCopyrightText: 2025 DB Systel GmbH
//
// SPDX-License-Identifier: Apache-2.0

import type { ReplaceInFileConfig } from 'replace-in-file';

export const v006_v007: ReplaceInFileConfig[] = [
	{
		files: '',
		from: /db-ui-42-/g,
		to: ''
	},
	{
		files: '',
		from: /db-ui-42/g,
		to: 'relative'
	},
	{
		files: '',
		from: /db-ui-foundations-/g,
		to: ''
	},
	{
		files: '',
		from: /db-ui-foundations/g,
		to: 'relative'
	},
	{
		files: '',
		from: /foundations\/build\/css/g,
		to: 'foundations/build/styles'
	},
	{
		files: '',
		from: /foundations\/build\/scss/g,
		to: 'foundations/build/styles'
	}
];
