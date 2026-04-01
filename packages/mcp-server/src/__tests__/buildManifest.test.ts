import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

// Mock fs before importing the module under test
vi.mock('node:fs', () => ({ existsSync: vi.fn() }));
vi.mock('node:fs/promises', () => ({
	readdir: vi.fn().mockResolvedValue([]),
	readFile: vi.fn(),
	writeFile: vi.fn().mockResolvedValue(undefined)
}));

const { existsSync } = await import('node:fs');
const { readFile, writeFile } = await import('node:fs/promises');
const { processComponent } = await import('../build-manifest.js');

const BASE = '/mock/components';
const OUTPUT = '/mock/output';

beforeEach(() => {
	vi.resetAllMocks();
	// Default: no example dirs exist
	vi.mocked(existsSync).mockReturnValue(false);
	vi.mocked(writeFile).mockResolvedValue(undefined as any);
});

describe('processComponent', () => {
	it('returns hasError:false with props and examples on success', async () => {
		vi.mocked(existsSync).mockImplementation(
			(p: any) =>
				String(p).includes('model.ts') || String(p).includes('showcase')
		);
		vi.mocked(readFile).mockImplementation((p: any) => {
			if (String(p).includes('model.ts'))
				return Promise.resolve(
					'export interface ButtonProps {}' as any
				);
			if (String(p).includes('showcase'))
				return Promise.resolve(
					'exampleName="Variant" exampleName="Size"' as any
				);
			return Promise.resolve('' as any);
		});

		const result = await processComponent('button', BASE, OUTPUT);

		expect(result.hasError).toBe(false);
		if (!result.hasError) {
			expect(result.name).toBe('button');
			expect(result.data.props).toContain('ButtonProps');
			expect(result.data.examples).toEqual(['Variant', 'Size']);
		}
	});

	it('returns hasError:true when readFile throws', async () => {
		vi.mocked(existsSync).mockReturnValue(true);
		vi.mocked(readFile).mockRejectedValue(
			new Error('EACCES: permission denied')
		);

		const result = await processComponent('broken', BASE, OUTPUT);

		expect(result.hasError).toBe(true);
	});

	it('returns hasError:false with null props when model.ts is absent', async () => {
		// existsSync returns false for everything → readOptional returns null
		vi.mocked(existsSync).mockReturnValue(false);

		const result = await processComponent('button', BASE, OUTPUT);

		expect(result.hasError).toBe(false);
		if (!result.hasError) {
			expect(result.data.props).toBeNull();
			expect(result.data.examples).toEqual([]);
		}
	});
});

describe('collect-and-fail pattern (Promise.all)', () => {
	let exitSpy: ReturnType<typeof vi.spyOn>;

	beforeEach(() => {
		exitSpy = vi
			.spyOn(process, 'exit')
			.mockImplementation((() => {}) as any);
	});

	afterEach(() => {
		exitSpy.mockRestore();
	});

	it('processes all components and calls process.exit(1) when one fails', async () => {
		// Simulate: 'button' succeeds, 'broken' throws during readFile
		vi.mocked(existsSync).mockImplementation(
			(p: any) =>
				String(p).includes('button/model.ts') ||
				String(p).includes('broken/model.ts')
		);
		vi.mocked(readFile).mockImplementation((p: any) => {
			if (String(p).includes('broken'))
				throw new Error('ENOENT: broken component');
			return Promise.resolve('// button props' as any);
		});

		const results = await Promise.all([
			processComponent('button', BASE, OUTPUT),
			processComponent('broken', BASE, OUTPUT)
		]);

		const hasErrors = results.some((r) => r.hasError);
		const successful = results.filter((r) => !r.hasError);

		// Both settled — no early crash
		expect(results).toHaveLength(2);
		// button succeeded
		expect(successful).toHaveLength(1);
		if (!successful[0].hasError) {
			expect(successful[0].name).toBe('button');
		}
		// broken failed
		expect(hasErrors).toBe(true);

		// Simulate what buildManifest does after Promise.all
		if (hasErrors) process.exit(1);
		expect(exitSpy).toHaveBeenCalledWith(1);
	});

	it('does not call process.exit when all components succeed', async () => {
		vi.mocked(existsSync).mockReturnValue(false);

		const results = await Promise.all([
			processComponent('button', BASE, OUTPUT),
			processComponent('input', BASE, OUTPUT)
		]);

		const hasErrors = results.some((r) => r.hasError);
		if (hasErrors) process.exit(1);

		expect(exitSpy).not.toHaveBeenCalled();
	});
});
