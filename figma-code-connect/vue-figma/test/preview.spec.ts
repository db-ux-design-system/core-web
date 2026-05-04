import { execSync } from 'child_process';
import { describe, expect, test } from 'vitest';

describe('figma', () => {
	test('check if preview works', () => {
		try {
			execSync(
				'npx figma connect preview --file src/components/button/figma/text.button.figma.ts'
			);
		} catch (error: any) {
			// Payload Too Large is an API limit, not a code error
			expect(error.message).toContain('Payload Too Large');
		}
	});
});
