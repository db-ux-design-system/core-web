import { execSync } from 'node:child_process';
import { describe, expect, test } from 'vitest';

const command = 'pnpm exec tsx github/package-version.ts';

describe('package-version', () => {
	process.env.GITHUB_SHA = 'abcdefg';
	test('release', async () => {
		process.env.TAG = '1.2.3';
		process.env.RELEASE = 'true';
		process.env.PRE_RELEASE = 'false';
		const result = execSync(command);
		expect(result.toString().trim()).toEqual('1.2.3');
	});

	test('pre-release', async () => {
		process.env.TAG = '1.2.3-0';
		process.env.RELEASE = 'false';
		process.env.PRE_RELEASE = 'true';
		const result = execSync(command);
		expect(result.toString().trim()).toEqual('1.2.3-0-abcdefg');
	});
});
