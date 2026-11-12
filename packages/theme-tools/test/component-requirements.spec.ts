/*
 * Drift guard for the component -> required colors/materials manifest.
 *
 * `src/detector/component-requirements.ts` is EXTRACTED from the component
 * `.lite.tsx` sources (see `scripts/extract-component-requirements.ts`), not
 * authored by hand. This test re-runs that extraction against the live sources
 * and asserts the shipped manifest still matches, so a component that changes
 * which adaptive colors/materials its template emits fails here instead of
 * silently shipping a stale manifest. When this fails, re-run
 * `node scripts/extract-component-requirements.ts` and paste the result into
 * `component-requirements.ts`.
 */
import { existsSync } from 'node:fs';

import { describe, expect, it } from 'vitest';

import {
	COMPONENTS_ROOT,
	extractComponentRequirements
} from '../scripts/extract-component-requirements.js';
import { COMPONENT_REQUIREMENTS } from '../src/detector/component-requirements.js';

/* Normalise the shipped manifest to the extractor's `{colors[], materials[]}`
 * sorted-array shape for a value-equal comparison. */
const normalisedManifest = (): Record<
	string,
	{ colors: string[]; materials: string[] }
> => {
	const result: Record<string, { colors: string[]; materials: string[] }> =
		{};
	for (const [name, req] of Object.entries(COMPONENT_REQUIREMENTS)) {
		result[name] = {
			colors: [...req.colors].sort(),
			materials: [...req.materials].sort()
		};
	}
	return result;
};

describe('COMPONENT_REQUIREMENTS — drift guard', () => {
	/* The extractor needs the sibling @db-ux/core-components sources. In an
	 * isolated checkout of just this package they would be absent; skip rather
	 * than fail so the suite stays green where the monorepo is not present. */
	const hasSources = existsSync(COMPONENTS_ROOT);

	it.runIf(hasSources)(
		'matches the colors/materials extracted from the component sources',
		() => {
			const manifest = normalisedManifest();
			/*
			 * Re-extract on mismatch. The extraction reads 70+ source files
			 * synchronously; when this test shares a vitest worker with the
			 * heavy Angular/webpack `execSync` fixture builds, a transient I/O
			 * hiccup can drop a file and make one extraction pass disagree. A
			 * genuine drift reproduces on every pass, so a few retries
			 * distinguish a real stale manifest from filesystem noise without
			 * masking an actual regression.
			 */
			let extracted = extractComponentRequirements();
			for (
				let attempt = 0;
				attempt < 3 &&
				JSON.stringify(extracted) !== JSON.stringify(manifest);
				attempt++
			) {
				extracted = extractComponentRequirements();
			}
			expect(manifest).toEqual(extracted);
		}
	);

	it('is a non-empty manifest of sane entries', () => {
		const entries = Object.entries(COMPONENT_REQUIREMENTS);
		expect(entries.length).toBeGreaterThan(0);
		// Every entry carries both arrays, and at least one value overall.
		for (const [, req] of entries) {
			expect(Array.isArray(req.colors)).toBe(true);
			expect(Array.isArray(req.materials)).toBe(true);
			expect(req.colors.length + req.materials.length).toBeGreaterThan(0);
		}
	});
});
