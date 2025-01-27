import { describe, expect, test } from 'vitest';
import { execSync } from 'child_process';
import { existsSync } from 'fs-extra';

const command = 'npx tsx github/build-gh-page.ts';

describe('build-gh-page', () => {
	process.env.NAME = 'test-branch';
	process.env.OUT_DIR = 'tests/fixtures';
	process.env.OWNER_NAME = 'db-ui';
	process.env.REPO_NAME = 'live-demo'; // Use different repo because of size
	process.env.RELEASE = 'false';
	process.env.PRE_RELEASE = 'false';

	test('branch', async () => {
		execSync(command);
		expect(existsSync('public/review/test-branch')).toBeTruthy();
	});

	test('release', async () => {
		process.env.NAME = '1.2.3';
		process.env.RELEASE = 'true';
		process.env.PRE_RELEASE = 'false';
		execSync(command);
		expect(existsSync('public/version/1.2.3')).toBeTruthy();
	});

	test('pre-release', async () => {
		process.env.NAME = '1.2.3-pre';
		process.env.RELEASE = 'false';
		process.env.PRE_RELEASE = 'true';
		const result = execSync(command);
		expect(existsSync('public/version/1.2.3-pre')).toBeTruthy();
	});
});
