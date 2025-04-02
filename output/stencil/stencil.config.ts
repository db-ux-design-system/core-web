// SPDX-FileCopyrightText: 2025 DB Systel GmbH
//
// SPDX-License-Identifier: Apache-2.0

import { Config } from '@stencil/core';

export const config: Config = {
	namespace: 'DB-UX',
	srcDir: 'src',
	outputTargets: [
		{
			type: 'dist'
		}
	]
};
