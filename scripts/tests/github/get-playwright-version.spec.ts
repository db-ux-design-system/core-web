import { describe, expect, test } from 'vitest';
import { execSync } from 'child_process';

const command = 'npx tsx github/get-playwright-version.ts';

describe('get-playwright-version', () => {
	test('default', async () => {
		const result = execSync(command);
		expect(result.length > 0).toBeTruthy();
	});
});
