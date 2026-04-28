import { execSync } from 'node:child_process';
import { describe, test } from 'vitest';

describe('figma', () => {
	test('check if preview works', () => {
		execSync(
			'npx figma connect preview --file src/components/button/figma/text.button.figma.tsx'
		);
	});
});
