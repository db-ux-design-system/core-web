import { execSync } from 'node:child_process';
import { describe, expect, test } from 'vitest';

describe('publish', () => {
	test('check if publish dry-run works', async () => {
		const works = true;
		execSync(
			'npx figma connect publish --dry-run --exit-on-unreadable-files'
		);

		expect(works).toBeTruthy();
	});
});
