import { execSync } from 'node:child_process';
import { describe, expect, test } from 'vitest';

describe('figma', () => {
	test('check if parse has same snapshot', async () => {
		const result = execSync(
			'npx figma connect parse --exit-on-unreadable-files'
		).toString();

		expect(result).matchSnapshot();
	});
});
