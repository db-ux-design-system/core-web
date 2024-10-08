import { describe, expect, test } from 'vitest';
import { migrate } from '../../migration';
import { ReplaceResult } from 'replace-in-file';

describe('icon-q32024', () => {
	test('check if changes are detected', async () => {
		const result = migrate({
			src: './scripts/test/icon-q32024',
			type: ['iconQ32024'],
			dryRun: true
		});

		expect(result).not.undefined;

		expect(
			(result as ReplaceResult[]).filter((res) => res.hasChanged)
		).toHaveLength(1);
	});
});
