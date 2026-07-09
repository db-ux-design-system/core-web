import { type ReplaceResult } from 'replace-in-file';
import { describe, expect, test } from 'vitest';
import { migrate } from '../../src/migration';

describe('v400_v500', () => {
	test('check if changes are detected', async () => {
		const result = migrate({
			src: './test/v4.0.0-v5.0.0',
			type: ['v400_v500'],
			dryRun: true
		});

		expect(result).not.undefined;

		// Two fixtures change: `has-changes.txt` (matches the React handler
		// rename) and `tab-select-only.txt` (matches only the framework event
		// rename). The latter guards against the dry-run loop stopping after
		// the first replacement rule. Restrict to `.txt` fixtures so the spec
		// file itself (also scanned by the migration) can't skew the count.
		expect(
			(result as ReplaceResult[]).filter(
				(res) => res.hasChanged && res.file.endsWith('.txt')
			)
		).toHaveLength(2);
	});
});
