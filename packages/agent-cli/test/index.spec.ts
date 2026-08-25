import fs from 'node:fs';
import path from 'node:path';
import { afterAll, describe, expect, test } from 'vitest';
import { action } from '../src';

const TEST_DIRS = ['test/frontend', 'test/pnpm-test'];
const GENERATED_ARTIFACTS = ['.github', '.amazonq', '.cursorrules'];

const cleanup = () => {
	for (const dir of TEST_DIRS) {
		for (const artifact of GENERATED_ARTIFACTS) {
			const target = path.resolve(dir, artifact);
			if (fs.existsSync(target)) {
				fs.rmSync(target, { recursive: true, force: true });
			}
		}
	}
};

const checkExpectations = (copilotFile: string, amazonqFile: string) => {
	const copilotContent = fs.readFileSync(copilotFile).toString();
	expect(copilotContent.length).toBeGreaterThan(0);
	expect(copilotContent).toMatchSnapshot();
	const amazonqContent = fs.readFileSync(amazonqFile).toString();
	expect(amazonqContent.length).toBeGreaterThan(0);
	expect(amazonqContent).toMatchSnapshot();
};

describe('default', () => {
	afterAll(() => {
		cleanup();
	});

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
