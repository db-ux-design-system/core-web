// SPDX-FileCopyrightText: 2025 DB Systel GmbH
//
// SPDX-License-Identifier: Apache-2.0

import generateIconFonts from '@db-ux/icon-font-tools/dist/commands/generate-icon-fonts/utils';
import { generateIconTypes } from './generate-icon-types.js';

const defaultBuildDir = './assets/icons';

const fontName = 'db-ux';

const run = async () => {
	// eslint-disable-next-line @typescript-eslint/no-unsafe-call
	await generateIconFonts({
		fontName,
		src: defaultBuildDir,
		ignoreGlobs: ['**/tmp/**'],
		variants: ['filled'],
		withSizes: true,
		debug: false
	});

	generateIconTypes({
		fontJsonPath: `${defaultBuildDir}/fonts/default/info.json`,
		outDir: './scripts/public'
	});
};

void run();
