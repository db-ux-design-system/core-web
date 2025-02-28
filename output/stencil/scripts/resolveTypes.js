// SPDX-FileCopyrightText: 2025 DB Systel GmbH
//
// SPDX-License-Identifier: Apache-2.0

import { analyzePhase } from './analyzePhase.js';
import { packageLinkPhase } from './packageLinkPhase.js';

export const resolveTypesPlugin = (postFn) => {
	return {
		name: 'resolve-types-plugin',
		analyzePhase,
		packageLinkPhase: ({ customElementsManifest, context }) =>
			packageLinkPhase({ customElementsManifest, context }, postFn)
	};
};
