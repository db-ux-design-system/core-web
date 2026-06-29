import { execSync } from 'child_process';
import { describe, test } from 'vitest';

describe('figma', () => {
	test('check if preview works', () => {
		try {
			execSync('npx figma connect preview', { stdio: 'pipe' });
		} catch (error: any) {
			const output =
				(error.stdout?.toString() ?? '') +
				(error.stderr?.toString() ?? '');
			// CLI exits non-zero for parser warnings even when preview succeeds
			if (!output.includes('Previewing')) {
				throw error;
			}
		}
	});
});
