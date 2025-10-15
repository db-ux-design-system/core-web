import fs from 'node:fs';
import path from 'node:path';
import { describe, expect, test } from 'vitest';
import { generateCopilot } from '../src/copilot';

describe('default', () => {
	test('check if docs are created', async () => {
		const copilotFile = path.resolve(
			'test/.github/copilot-instructions.md'
		);
		generateCopilot('test');

		expect(fs.readFileSync(copilotFile).toString()).toMatchSnapshot();
	});
});
