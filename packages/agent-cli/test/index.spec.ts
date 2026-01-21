import fs from 'node:fs';
import path from 'node:path';
import { describe, expect, test } from 'vitest';
import { action } from '../src';

const checkExpectations = (copilotFile: string, amazonqFile: string) => {
	const copilotContent = fs.readFileSync(copilotFile).toString();
	expect(copilotContent.length).toBeGreaterThan(0);
	expect(copilotContent).toMatchSnapshot();
	const amazonqContent = fs.readFileSync(amazonqFile).toString();
	expect(amazonqContent.length).toBeGreaterThan(0);
	expect(amazonqContent).toMatchSnapshot();
};

describe('default', () => {
	test('check if docs are created', async () => {
		const copilotFile = path.resolve(
			'test/frontend/.github/copilot-instructions.md'
		);
		const amazonqFile = path.resolve(
			'test/frontend/.amazonq/rules/db-ux.md'
		);

		await action('test/frontend');

		checkExpectations(copilotFile, amazonqFile);
	});

	test('check if docs are created from pnpm symlinked packages', async () => {
		const copilotFile = path.resolve(
			'test/pnpm-test/.github/copilot-instructions.md'
		);
		const amazonqFile = path.resolve(
			'test/pnpm-test/.amazonq/rules/db-ux.md'
		);
		await action('test/pnpm-test');


		checkExpectations(copilotFile, amazonqFile);
	});
});
