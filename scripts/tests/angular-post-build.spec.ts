import { describe, expect, test, vi } from 'vitest';

vi.mock('replace-in-file', () => ({
	replaceInFileSync: vi.fn(() => {
		throw new Error('ENOENT: no such file or directory');
	})
}));

describe('Angular Post-Build Error Handling', () => {
	test('runReplacements throws when replaceInFileSync fails on missing file', async () => {
		const { runReplacements } =
			await import('../../packages/components/scripts/utils/index.ts');

		const component = { name: 'non-existent-component' };
		const replacements = [{ from: 'pattern-not-found', to: 'replacement' }];

		expect(() => {
			runReplacements(
				replacements,
				component,
				'angular',
				'/non/existent/file.ts'
			);
		}).toThrow();
	});
});
