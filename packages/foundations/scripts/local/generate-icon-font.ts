// SPDX-FileCopyrightText: 2025 DB Systel GmbH
//
// SPDX-License-Identifier: Apache-2.0

import { generateIconTypes } from './generate-icon-types.js';
import { generateIconFonts } from '@db-ux/icon-font-tools';

const defaultBuildDir = './assets/icons';

const fontName = 'db-ux';

const run = async () => {
	// eslint-disable-next-line @typescript-eslint/no-unsafe-call
	await generateIconFonts({
		fontName,
		src: defaultBuildDir,
		variants: ['filled'],
		withSizes: true,
		debug: false
	});

	generateIconTypes({
		fontJsonPath: `${defaultBuildDir}/fonts/default/info.json`,
		outDir: './src'
	});
};

void run();
