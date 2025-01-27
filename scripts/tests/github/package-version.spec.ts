import { describe, expect, test } from 'vitest';
import { execSync } from 'child_process';

describe('package-version', () => {
	test('release', async () => {
		process.env.TAG = '1.2.3';
		process.env.GITHUB_SHA = 'abcdefg';
		process.env.RELEASE = 'true';
		process.env.PRE_RELEASE = 'false';
		const result = execSync(`npx tsx github/package-version.ts`);
		expect(result.toString().trim()).toEqual('1.2.3');
	});

	test('pre-release', async () => {
		process.env.TAG = '1.2.3-0';
		process.env.GITHUB_SHA = 'abcdefg';
		process.env.RELEASE = 'false';
		process.env.PRE_RELEASE = 'true';
		const result = execSync(`npx tsx github/package-version.ts`);
		expect(result.toString().trim()).toEqual('1.2.3-0-abcdefg');
	});
});
