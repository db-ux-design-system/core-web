import { describe, expect, test } from 'vitest';
import { migrate } from '../../migration';
import { ReplaceResult } from 'replace-in-file';

describe('color-q32024', () => {
	test('check if changes are detected', async () => {
		const result = migrate({
			src: './scripts/test/color-q32024',
			type: ['colorQ32024'],
			dryRun: true
		});

		expect(result).not.undefined;

		expect(
			(result as ReplaceResult[]).filter((res) => res.hasChanged)
		).toHaveLength(1);
	});
});
