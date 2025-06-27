import { type ReplaceResult } from 'replace-in-file';
import { describe, expect, test } from 'vitest';
import { migrate } from '../../src/migration';

describe('color-q32024', () => {
	test('check if changes are detected', async () => {
		const result = migrate({
			src: './test/color-q32024',
			type: ['colorQ32024'],
			dryRun: true
		});

		expect(result).not.undefined;

		expect(
			(result as ReplaceResult[]).filter((res) => res.hasChanged)
		).toHaveLength(1);
	});
});
