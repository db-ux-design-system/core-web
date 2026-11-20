/**
 * Refreshes `platform-components.json`, the copy of `/api/components.json` of
 * the Design System Platform that the overview pages are built from (see
 * platform.ts).
 *
 *   node storybooks/_shared/overview/update-platform-components.ts
 *   DB_UX_PLATFORM_URL=http://localhost:4329 node storybooks/_shared/overview/update-platform-components.ts
 *   node storybooks/_shared/overview/update-platform-components.ts --check
 *
 * `--check` writes nothing and fails when the copy differs from the endpoint.
 * It runs in the self-healing lint (`pnpm run lint:platform-components`),
 * whose fix refreshes the copy and commits it like the other fixes. When the
 * platform is not reachable, `--check` only warns, so the lint does not fail
 * on a network issue; refreshing still fails.
 */
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import {
	PLATFORM_COMPONENTS_FILE,
	PLATFORM_ORIGIN,
	sanitize
} from './platform.ts';

const url = `${PLATFORM_ORIGIN}/api/components.json`;
const isCheck = process.argv.includes('--check');

/** The endpoint's components; `undefined` for an unreachable platform in --check. */
const fetchComponents = async (): Promise<unknown> => {
	try {
		const response = await fetch(url, {
			signal: AbortSignal.timeout(30_000)
		});
		if (!response.ok) {
			throw new Error(`HTTP ${response.status}`);
		}

		return (await response.json()) as unknown;
	} catch (error) {
		const message = `[platform-components] ${url}: ${(error as Error).message}`;
		if (!isCheck) {
			throw new Error(message, { cause: error });
		}

		console.warn(`${message}. Platform not reachable, check skipped.`);
		return undefined;
	}
};

const fetched = await fetchComponents();
if (fetched !== undefined) {
	const components = sanitize(fetched);
	if (Object.keys(components).length === 0) {
		throw new Error(`[platform-components] ${url}: no components`);
	}

	const content = `${JSON.stringify(components, null, '\t')}\n`;
	const current = existsSync(PLATFORM_COMPONENTS_FILE)
		? readFileSync(PLATFORM_COMPONENTS_FILE, 'utf8')
		: '';

	if (isCheck) {
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
}
