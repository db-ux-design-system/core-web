import { execSync } from 'node:child_process';
import { describe, expect, test } from 'vitest';

const command = 'pnpm exec tsx github/get-release.ts';

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
		} catch (error) {
			// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
			result = error.message;
		}

		expect(result.toString().trim()).toEqual(
			"Command failed: pnpm exec tsx github/get-release.ts\nYour tag has to start with 'v'"
		);
	});

	test('bot should be blocked', async () => {
		process.env.GITHUB_REF = 'refs/tags/v1.2.3';
		process.env.GITHUB_ACTOR = 'dependabot[bot]';
		process.env.GITHUB_COMMITISH = 'main';
		process.env.GITHUB_PRE_RELEASE = 'false';
		let result: string;
		try {
			result = execSync(command).toString();
		} catch (error) {
			// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
			result = error.message;
		}

		expect(result.toString().trim()).toEqual(
			'Command failed: pnpm exec tsx github/get-release.ts\nDependabot has no permission to publish!'
		);
	});
});
