/**
 * Build step `build-style:03_css-properties`: runs the css-properties plugin
 * (css-properties.ts) over the compiled CSS of every component and writes
 * `build/components/<name>/<name>.css-properties.json`. The CSS files stay
 * unchanged.
 *
 * A separate step instead of postcss.config.cjs: `build-style:02_postcss`
 * only reaches the bundles in `build/styles/`, because the shell of the
 * package scripts expands `build/**\/*.css` like `build/*\/*.css`.
 *
 *   node scripts/write-css-properties.ts
 */
import { globSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import postcss from 'postcss';
import cssProperties from './css-properties.ts';

const BUILD = resolve(import.meta.dirname, '..', 'build');
const files = globSync('components/*/*.css', { cwd: BUILD }).map((file) =>
	resolve(BUILD, file)
);
if (files.length === 0) {
	throw new Error(`[css-properties] no component CSS in ${BUILD}`);
}

const processor = postcss([cssProperties()]);
await Promise.all(
	files.map(async (from) =>
		processor.process(readFileSync(from, 'utf8'), { from })
	)
);
console.log(`[css-properties] checked ${files.length} component CSS files`);
