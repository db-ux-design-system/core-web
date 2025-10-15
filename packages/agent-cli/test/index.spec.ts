import fs from 'node:fs';
import path from 'node:path';
import { describe, expect, test } from 'vitest';
import { generateCopilot } from '../src/copilot';

describe('default', () => {
	test('check if docs are created', async () => {
		const copilotFile = path.resolve(
			'test/frontend/.github/copilot-instructions.md'
		);
		generateCopilot('test/frontend');

		expect(fs.readFileSync(copilotFile).toString()).toMatchSnapshot();
	});

	test('check if docs are created from pnpm symlinked packages', async () => {
		const copilotFile = path.resolve(
			'test/pnpm-test/.github/copilot-instructions.md'
		);
		generateCopilot('test/pnpm-test');

		const content = fs.readFileSync(copilotFile).toString();

		// Verify that the symlinked package was detected and processed
		expect(content).toContain('test-symlink-package');
		expect(content).toContain('Symlinked Package Instructions');
		expect(content).toContain(
			'This is a test package accessed via symlink'
		);
	});
});
