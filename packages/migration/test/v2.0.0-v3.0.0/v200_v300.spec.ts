import { type ReplaceResult } from 'replace-in-file';
import { describe, expect, test } from 'vitest';
import { migrate } from '../../src/migration';

describe('v200_v300', () => {
	test('check if changes are detected', async () => {
		const result = migrate({
			src: './test/v2.0.0-v3.0.0',
			type: ['v200_v300'],
			dryRun: true
		});

		expect(result).not.undefined;

		expect(
			(result as ReplaceResult[]).filter((res) => res.hasChanged)
		).toHaveLength(1);
	});
});
