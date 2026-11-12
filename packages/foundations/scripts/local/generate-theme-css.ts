import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

import { generateThemeFromFile } from '../../../theme-tools/build/index.js';

const themePath = fileURLToPath(
	new URL('../../scss/theme/theme.tokens.json', import.meta.url)
);

const outPath = fileURLToPath(
	new URL('../../build/styles/theme/whitelabel.adaptive.css', import.meta.url)
);

/*
 * `layer: false` — emit the raw, un-layered matrix. Consumers import this file
 * with an explicit `@import "...whitelabel.adaptive.css" layer(db-ux-adaptive)`
 * (see the showcases' `db-ux-adaptive.css`), so the file must NOT wrap itself in
 * a second `@layer db-ux-adaptive`; that is the consumer's to assign.
 */
const css = await generateThemeFromFile(themePath, { layer: false });

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, css, 'utf8');
console.log(`Wrote ${outPath}`);
