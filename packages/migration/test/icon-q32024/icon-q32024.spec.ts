import { type ReplaceResult } from 'replace-in-file';
import { describe, expect, test } from 'vitest';
import { migrate } from '../../src/migration';

describe('icon-q32024', () => {
	test('check if changes are detected', async () => {
		const result = migrate({
			src: './test/icon-q32024',
			type: ['iconQ32024'],
			dryRun: true
		});

		expect(result).not.undefined;

		// Restrict to `.txt` fixtures: the migration now evaluates every rule
		// in dry-run mode and also scans this spec file, whose `.filter(` call
		// matches the `filter` icon rule. Only the fixture is relevant here.
		expect(
			(result as ReplaceResult[]).filter(
				(res) => res.hasChanged && res.file.endsWith('.txt')
			)
		).toHaveLength(1);
	});
});
