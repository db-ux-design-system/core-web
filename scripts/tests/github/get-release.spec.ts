import { describe, expect, test } from 'vitest';
import { execSync } from 'child_process';

const command = 'npx tsx github/get-release.ts';

describe('build-gh-page', () => {
	process.env.GITHUB_REF = 'refs/tags/v1.2.3';
	process.env.GITHUB_ACTOR = 'johndoe';
	process.env.GITHUB_COMMITISH = 'main';
	process.env.GITHUB_PRE_RELEASE = 'false';

	test('release', async () => {
		const result = execSync(command);
		expect(result.toString().trim()).toEqual('RELEASE');
	});

	test('pre-release', async () => {
		process.env.GITHUB_PRE_RELEASE = 'true';
		const result = execSync(command);
		expect(result.toString().trim()).toEqual('PRE_RELEASE');
	});

	test('release fail', async () => {
		process.env.GITHUB_REF = 'refs/branch/should-fail';
		process.env.GITHUB_PRE_RELEASE = 'false';
		let result: string;
		try {
			result = execSync(command).toString();
		} catch (e) {
			result = e.message;
		}
		expect(result.toString().trim()).toEqual(
			'Command failed: npx --no tsx github/get-release.ts\n' +
				"Your tag has to start with 'v'"
		);
	});
});
