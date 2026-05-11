/**
 * Prebuild asset copy script for @db-ux/mcp-server node package.
 *
 * Copies migration guides and compiled token files from the monorepo into the
 * local assets/ directories so they are available for standalone npx usage.
 */

import { cpSync, existsSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { buildTokens } from './build-tokens.ts';
import { buildVisuals } from './build-visuals.ts';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '../../..');

/**
 * Copies src → dest.
 * Throws a hard error when src does not exist to prevent publishing
 * an incomplete package.
 */
function copyAsset(
	src: string,
	dest: string,
	opts: { recursive?: boolean } = {}
): void {
	const srcAbs = resolve(ROOT, src);
	const destAbs = resolve(
		dirname(fileURLToPath(import.meta.url)),
		'..',
		dest
	);

	if (!existsSync(srcAbs)) {
		throw new Error(`[prebuild] FATAL: required source not found: ${src}`);
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
// Structured tokens JSON (assets/tokens/tokens.json)
// ---------------------------------------------------------------------------
await buildTokens();

// ---------------------------------------------------------------------------
// Visual reference images (build-time downsampling via sharp)
// ---------------------------------------------------------------------------
await buildVisuals();
