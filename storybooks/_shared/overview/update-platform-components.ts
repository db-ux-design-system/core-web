/**
 * Refreshes `platform-components.json`, the copy of `/api/components.json` of
 * the Design System Platform that the overview pages are built from (see
 * platform.ts). Run it when summaries, statuses or guidelines URLs change on
 * the platform, and commit the result.
 *
 *   node storybooks/_shared/overview/update-platform-components.ts
 *   DB_UX_PLATFORM_URL=http://localhost:4329 node storybooks/_shared/overview/update-platform-components.ts
 *   node storybooks/_shared/overview/update-platform-components.ts --check
 *
 * `--check` writes nothing and fails when the copy differs from the endpoint.
 */
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import {
	PLATFORM_COMPONENTS_FILE,
	PLATFORM_ORIGIN,
	sanitize
} from './platform.ts';

const url = `${PLATFORM_ORIGIN}/api/components.json`;
const response = await fetch(url, { signal: AbortSignal.timeout(30_000) });
if (!response.ok) {
	throw new Error(`[platform-components] ${url}: HTTP ${response.status}`);
}

const components = sanitize(await response.json());
if (Object.keys(components).length === 0) {
	throw new Error(`[platform-components] ${url}: no components`);
}

const content = `${JSON.stringify(components, null, '\t')}\n`;
const current = existsSync(PLATFORM_COMPONENTS_FILE)
	? readFileSync(PLATFORM_COMPONENTS_FILE, 'utf8')
	: '';

if (process.argv.includes('--check')) {
	if (content !== current) {
		throw new Error(
			`[platform-components] ${PLATFORM_COMPONENTS_FILE} differs from ${url}. Run this script without --check and commit the result.`
		);
	}

	console.log(`[platform-components] up to date with ${url}`);
} else {
	writeFileSync(PLATFORM_COMPONENTS_FILE, content);
	console.log(
		`[platform-components] wrote ${Object.keys(components).length} components from ${url}`
	);
}
