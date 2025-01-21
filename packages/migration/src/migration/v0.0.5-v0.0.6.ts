// SPDX-FileCopyrightText: 2025 DB Systel GmbH
//
// SPDX-License-Identifier: Apache-2.0

import type { ReplaceInFileConfig } from 'replace-in-file';

export const v005_v006: ReplaceInFileConfig[] = [
	// Components
	{
		files: '',
		from: /behaviour="closeable"/g,
		to: 'closeable="true"'
	},
	{
		files: '',
		from: /behaviour="permanent"/g,
		to: 'closeable="false"'
	},
	{
		files: '',
		from: /variant="hidden"/g,
		to: 'showLabel="false"'
	},
	{
		files: '',
		from: /customValidity/g,
		to: 'validation'
	}
];
