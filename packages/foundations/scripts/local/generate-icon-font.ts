import { generateIconFonts } from '@db-ux/icon-font-tools';
import { generateIconTypes } from './generate-icon-types.js';
import { ICON_FONT_SIZES, writeIconFontSizesScss } from './icon-font-sizes.js';

const defaultBuildDir = './assets/icons';

const fontName = 'db-ux';

const run = async () => {
	// Keep scss/icons/_sizes.scss in sync with the sizes we generate below, so
	// the `@font-face` rules only ever reference font folders that exist.
	await writeIconFontSizesScss();

	// eslint-disable-next-line @typescript-eslint/no-unsafe-call
	await generateIconFonts({
		fontName,
		src: defaultBuildDir,
		variants: ['filled'],
		// Passing `sizes` implicitly enables splitting and skips the unused
		// `all` output folder.
		sizes: [...ICON_FONT_SIZES],
		debug: false
	});

	generateIconTypes({
		fontJsonPath: `${defaultBuildDir}/fonts/default/info.json`,
		outDir: './src'
	});
};

void run();
