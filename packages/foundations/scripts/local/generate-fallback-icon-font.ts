import { generateIconFonts } from '@db-ux/icon-font-tools';
import { promises as fs } from 'node:fs';
import { rename } from 'node:fs/promises';
import * as path from 'node:path';
import { fileURLToPath } from 'node:url';

const fontName = 'icon-font-fallback';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const fallbackIconPath = path.resolve(
	__dirname,
	'../../assets/fallback-icon.svg'
);
const fallbackIconsDir = path.resolve(__dirname, '../../assets/fallback-icons');
const fallbackFontSource = path.resolve(
	__dirname,
	'../../assets/fallback-icons/fonts/all/icon-font-fallback.woff2'
);
const fallbackFontDestination = path.resolve(
	__dirname,
	'../../assets/icons/fonts/fallback/icon-font-fallback.woff2'
);

const run = async () => {
	// Ensure fallback-icons directory exists
	await fs.mkdir(fallbackIconsDir, { recursive: true });

	// Read the content of fallback-icon.svg
	const fallbackIconContent = await fs.readFile(fallbackIconPath, 'utf-8');

	// Generate files for [a-z], `_`, and `-`
	const characters = Array.from('abcdefghijklmnopqrstuvwxyz_-');
	await Promise.all(
		characters.map(async (char) => {
			const filePath = path.join(fallbackIconsDir, `${char}.svg`);
			await fs.writeFile(filePath, fallbackIconContent, 'utf-8');
		})
	);

	// eslint-disable-next-line @typescript-eslint/no-unsafe-call
	await generateIconFonts({
		fontName,
		src: fallbackIconsDir,
		variants: [],
		withSizes: false,
		debug: true
	});

	await fs.mkdir(path.dirname(fallbackFontDestination), { recursive: true });
	await rename(fallbackFontSource, fallbackFontDestination);
};

void run();
