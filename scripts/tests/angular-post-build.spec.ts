import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { describe, expect, test, vi } from 'vitest';

vi.mock('replace-in-file', () => ({
	replaceInFileSync: vi.fn(() => {
		throw new Error('ENOENT: no such file or directory');
	})
}));

const outputDir = resolve(__dirname, '../../output/angular/src/components');
const outputExists = existsSync(resolve(outputDir, 'input/input.ts'));

describe.skipIf(!outputExists)('Angular Post-Build Transformations', () => {
	describe('CVA Provider Always Registered (Requirement 6.1)', () => {
		test('output contains NG_VALUE_ACCESSOR provider', () => {
			const inputFile = readFileSync(
				resolve(outputDir, 'input/input.ts'),
				'utf8'
			);
			expect(inputFile).toContain('NG_VALUE_ACCESSOR');
			expect(inputFile).toContain('provide: NG_VALUE_ACCESSOR');
		});
	});

	describe('Duck-Typing Fields Injection (Requirement 6.2)', () => {
		test('CVA components have hidden InputSignal injected', () => {
			const inputFile = readFileSync(
				resolve(outputDir, 'input/input.ts'),
				'utf8'
			);
			expect(inputFile).toContain('hidden = input<boolean>(false)');
		});

		test('CVA components have errors InputSignal injected', () => {
			const inputFile = readFileSync(
				resolve(outputDir, 'input/input.ts'),
				'utf8'
			);
			expect(inputFile).toContain('errors = input<any>(undefined)');
		});
	});

	describe('Checked Components keep value as InputSignal (Requirement 6.3)', () => {
		test('checkbox value is declared with input<> not model<>', () => {
			const checkboxFile = readFileSync(
				resolve(outputDir, 'checkbox/checkbox.ts'),
				'utf8'
			);
			// Value should be InputSignal (via input<>), NOT ModelSignal (via model<>)
			expect(checkboxFile).toMatch(/value.*=\s*\n?\s*input</);
			expect(checkboxFile).not.toMatch(/value\s*=\s*model</);
		});

		test('switch value is declared with input<> not model<>', () => {
			const switchFile = readFileSync(
				resolve(outputDir, 'switch/switch.ts'),
				'utf8'
			);
			expect(switchFile).toMatch(/value.*=\s*\n?\s*input</);
			expect(switchFile).not.toMatch(/value\s*=\s*model</);
		});
	});

	describe('Legacy JSDoc Comments (Requirement 6.5)', () => {
		test('CVA methods have @legacy annotations', () => {
			const inputFile = readFileSync(
				resolve(outputDir, 'input/input.ts'),
				'utf8'
			);
			expect(inputFile).toContain('@legacy CVA');

			// Check that specific CVA methods are preceded by legacy comments
			const legacyCount = (
				inputFile.match(/\/\*\*\s*@legacy CVA.*?\*\//g) ?? []
			).length;
			// At least writeValue, registerOnChange, registerOnTouched, setDisabledState, propagateChange
			expect(legacyCount).toBeGreaterThanOrEqual(5);
		});
	});
});

describe('Error Handling: missing pattern (Requirement 6.7)', () => {
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
