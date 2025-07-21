import { type ReplaceResult } from 'replace-in-file';
import { describe, expect, test } from 'vitest';
import { migrate } from '../../src/migration';

describe('v006_v007', () => {
	test('check if changes are detected', async () => {
		const result = migrate({
			src: './test/v0.0.6-v0.0.7',
			type: ['v006_v007'],
			dryRun: true
		});

		expect(result).not.undefined;

		expect(
			(result as ReplaceResult[]).filter((res) => res.hasChanged)
		).toHaveLength(1);
	});
});
