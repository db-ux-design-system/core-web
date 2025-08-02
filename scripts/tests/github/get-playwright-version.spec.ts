import { execSync } from 'node:child_process';
import { describe, expect, test } from 'vitest';

const command = 'pnpm exec tsx github/get-playwright-version.ts';

describe('get-playwright-version', () => {
	test('default', async () => {
		const result = execSync(command);
		expect(result.length > 0).toBeTruthy();
	});
});
