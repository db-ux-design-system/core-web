import { generateIconFonts } from '@db-ux/icon-font-tools';
import { promises as fs } from 'node:fs';
import * as path from 'node:path';
import { fileURLToPath } from 'node:url';
import { generateIconTypes } from './generate-icon-types.js';

const defaultBuildDir = './assets/icons';

const fontName = 'db-ux';

// Only the sizes referenced by scss/icons/relative.scss. Passing `sizes`
// implicitly enables splitting and skips the unused `all` output folder.
const sizes = [16, 20, 24, 32, 48, 64];

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/**
 * The generated `_<size>` font folders are only loaded by the `@font-face`
 * rules in scss/icons/relative.scss. If the two lists drift, consumers get a
 * `@font-face` that points at a font folder we never generated (or we ship
 * folders nobody loads). Assert they stay in sync before generating.
 */
const assertSizesMatchScss = async () => {
	const scssPath = path.resolve(__dirname, '../../scss/icons/relative.scss');
	const scss = await fs.readFile(scssPath, 'utf-8');
	const match = scss.match(/@each \$size in \(([^)]*)\)/);
	if (!match) {
		throw new Error(
			`Could not find the icon @each size loop in ${scssPath} - update the parser if the scss changed.`
		);
	}
	const scssSizes = match[1]
		.split(',')
		.map((size) => Number(size.trim()))
		.sort((a, b) => a - b);
	const expected = [...sizes].sort((a, b) => a - b);
	if (JSON.stringify(scssSizes) !== JSON.stringify(expected)) {
		throw new Error(
			`Icon font sizes are out of sync. generate-icon-font.ts: [${expected.join(', ')}], relative.scss: [${scssSizes.join(', ')}]. Update both so every generated font folder is loaded and vice versa.`
		);
	}
};

const run = async () => {
	await assertSizesMatchScss();

	// eslint-disable-next-line @typescript-eslint/no-unsafe-call
	await generateIconFonts({
		fontName,
		src: defaultBuildDir,
		variants: ['filled'],
		sizes,
		debug: false
	});

	generateIconTypes({
		fontJsonPath: `${defaultBuildDir}/fonts/default/info.json`,
		outDir: './src'
	});
};

void run();
