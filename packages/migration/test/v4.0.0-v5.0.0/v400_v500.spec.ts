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

		expect(
			(result as ReplaceResult[]).filter((res) => res.hasChanged)
		).toHaveLength(1);
	});
});
