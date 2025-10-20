import fs from 'node:fs';
import path from 'node:path';
import { describe, expect, test } from 'vitest';
import { action } from '../src';

describe('default', () => {
	test('check if docs are created', async () => {
		const copilotFile = path.resolve(
			'test/.github/copilot-instructions.md'
		);
		const amazonqFile = path.resolve('test/.amazonq/rules/db-ux.md');

		await action('test');

		expect(fs.readFileSync(copilotFile).toString()).toMatchSnapshot();
		expect(fs.readFileSync(amazonqFile).toString()).toMatchSnapshot();
	});
});
