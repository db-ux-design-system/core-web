/**
 * Prebuild asset copy script for @db-ux/mcp-server node package.
 *
 * Copies migration guides and compiled token files from the monorepo into the
 * local assets/ directories so they are available for standalone npx usage.
 *
 * All copies are OPTIONAL — if a source file or directory does not exist
 * (e.g. in CI before foundations has been built, or in a partial checkout),
 * the copy is skipped with a warning instead of aborting the build.
 */

import {
	cpSync,
	existsSync,
	mkdirSync,
	readFileSync,
	writeFileSync
} from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '../../..');

/**
 * Copies src → dest.
 * Skips silently (with a warning) when src does not exist so that the build
 * succeeds in environments where optional build artifacts haven't been
 * generated yet (e.g. CI runners that haven't built foundations yet).
 *
 * @param {string} src  - Path relative to monorepo root.
 * @param {string} dest - Path relative to this package root (packages/mcp-server).
 * @param {{ recursive?: boolean }} [opts]
 */
function copyAsset(src, dest, opts = {}) {
	const srcAbs = resolve(ROOT, src);
	const destAbs = resolve(
		dirname(fileURLToPath(import.meta.url)),
		'..',
		dest
	);

	if (!existsSync(srcAbs)) {
		console.warn(
			`[prebuild] SKIP: source not found (will use fallback at runtime): ${src}`
		);
		return;
	}

	mkdirSync(dirname(destAbs), { recursive: true });
	cpSync(srcAbs, destAbs, {
		recursive: opts.recursive ?? false,
		force: true
	});
	console.log(`[prebuild] copied: ${src} → ${dest}`);
}

// ---------------------------------------------------------------------------
// Migration guides (Single Source of Truth: docs/migration/db-ui/)
// ---------------------------------------------------------------------------
copyAsset('docs/migration/db-ui', 'assets/migration', { recursive: true });

// ---------------------------------------------------------------------------
// Compiled token files (for standalone / npx fallback)
// ---------------------------------------------------------------------------
mkdirSync(
	resolve(dirname(fileURLToPath(import.meta.url)), '..', 'assets/tokens'),
	{ recursive: true }
);

// Primitive token values — DB theme, from @db-ux/db-theme package
copyAsset(
	'node_modules/@db-ux/db-theme/build/styles/_default_variables.scss',
	'assets/tokens/db-variables.scss'
);

// Density class overrides — BUILD ARTIFACT, may not exist in CI
// Strip empty "@layer variables {}" blocks that are SCSS compilation artifacts
// (generated when a partial has no content for a given density layer).
// They are harmless at runtime (filtered by readFilteredLines) but pollute
// the asset file and trigger stylelint block-no-empty.
const DENSITY_SRC = 'packages/foundations/build/styles/density/classes/all.css';
const DENSITY_DEST = 'assets/tokens/density-all.css';

const densitySrcAbs = resolve(ROOT, DENSITY_SRC);
const densityDestAbs = resolve(
	dirname(fileURLToPath(import.meta.url)),
	'..',
	DENSITY_DEST
);

if (!existsSync(densitySrcAbs)) {
	console.warn(
		`[prebuild] SKIP: source not found (will use fallback at runtime): ${DENSITY_SRC}`
	);
} else {
	const raw = readFileSync(densitySrcAbs, 'utf-8');
	// Remove empty @layer variables {} blocks (single-line or with only whitespace)
	const cleaned = raw
		// Remove empty @layer variables {} blocks (SCSS compilation artifacts)
		.replace(/@layer variables\s*\{\s*\}\n?/g, '')
		// Remove stylelint-disable comments (not needed in MCP token assets)
		.replace(/\/\*\s*stylelint-disable[^\*]*\*\/\n?/g, '')
		.replace(/\/\/\s*stylelint-disable.*\n?/g, '')
		// Remove empty CSS rule blocks: any selector(s) followed by { whitespace-only }
		// Handles multi-line selectors and blocks with only whitespace/newlines inside
		.replace(/[^{}]+\{\s*\}\n?/g, '')
		// Collapse runs of 3+ blank lines down to one
		.replace(/\n{3,}/g, '\n\n')
		.trimStart();

	mkdirSync(dirname(densityDestAbs), { recursive: true });
	writeFileSync(densityDestAbs, cleaned, 'utf-8');

	const removedLayers = (raw.match(/@layer variables\s*\{\s*\}/g) ?? [])
		.length;
	const removedStylelint = (raw.match(/stylelint-disable/g) ?? []).length;
	const removedEmpty =
		(raw.match(/[^{}]+\{\s*\}/g) ?? []).length - removedLayers;
	console.log(
		`[prebuild] copied+cleaned: ${DENSITY_SRC} → ${DENSITY_DEST} ` +
			`(removed ${removedLayers} empty @layer blocks, ${removedStylelint} stylelint comments, ${removedEmpty} empty selectors)`
	);
}
