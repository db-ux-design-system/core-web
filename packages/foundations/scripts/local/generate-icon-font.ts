import generateIconFonts from '@db-ui/gif/dist/generate-icon-fonts';
import { generateIconTypes } from './generate-icon-types';

const defaultBuildDir = './assets/icons';

const fontName = 'db-ux';

const run = async () => {
	await generateIconFonts({
		fontName,
		src: defaultBuildDir,
		ignoreGlobs: ['**/tmp/**', '**/functional/**'],
		cleanIgnoreVariants: [],
		variants: ['filled'],
		withSizes: true,
		skipClean: true,
		debug: false
	});

	generateIconTypes({
		fontJsonPath: `${defaultBuildDir}/fonts/default/${fontName}.json`,
		outDir: './scripts/public'
	});
};

void run();
