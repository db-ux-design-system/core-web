import { describe, expect, test } from 'vitest';
import { execSync } from 'child_process';

const command = 'node github/get-playwright-version.js';

describe('get-playwright-version', () => {
	test('default', async () => {
		const result = execSync(command);
		expect(result.length > 0).toBeTruthy();
	});
});
