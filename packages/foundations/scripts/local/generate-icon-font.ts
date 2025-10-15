import { generateIconFonts } from '@db-ux/icon-font-tools';
import { generateIconTypes } from './generate-icon-types.js';

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
