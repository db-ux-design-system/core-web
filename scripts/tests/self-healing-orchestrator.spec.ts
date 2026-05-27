import { describe, expect, test, vi } from 'vitest';
import {
	exitAllPassed,
	exitFixedWithChanges,
	exitUnfixable,
	orchestrate,
	type CheckConfig,
	type CommandExecResult
} from '../self-healing-orchestrator.js';

// ─── Helpers ─────────────────────────────────────────────────────────────────

const pass = async (): Promise<CommandExecResult> => ({
	exitCode: 0,
	timedOut: false
});

const fail = async (): Promise<CommandExecResult> => ({
	exitCode: 1,
	timedOut: false
});

const timeout = async (): Promise<CommandExecResult> => ({
	exitCode: undefined,
	timedOut: true
});

const noChanges = async () => false;
const hasChanges = async () => true;

const check = (
	name: string,
	fixCommands: CheckConfig['fixCommands'] = []
): CheckConfig => ({
	name,
	checkCommand: `pnpm run ${name}`,
	fixCommands
});

// ─── Exit code 0: all checks pass ────────────────────────────────────────────

describe('exit code 0 – all checks pass', () => {
	test('returns exitAllPassed when every check succeeds', async () => {
		const spawnFn = vi.fn().mockImplementation(pass);

		const result = await orchestrate([check('lint'), check('test')], {
			spawnFn,
			detectChangesFn: noChanges
		});

		expect(result.exitCode).toBe(exitAllPassed);
		expect(result.filesChanged).toBe(false);
		expect(result.fixesApplied).toHaveLength(0);
		expect(result.checkResults.every((r) => r.passed)).toBe(true);
	});

	test('does not call detectChangesFn when all checks pass', async () => {
		const detectFn = vi.fn().mockImplementation(noChanges);

		await orchestrate([check('lint')], {
			spawnFn: vi.fn().mockImplementation(pass),
			detectChangesFn: detectFn
		});

		expect(detectFn).not.toHaveBeenCalled();
	});
});

// ─── Exit code 1: fixes applied but no file changes ──────────────────────────

describe('exit code 1 – unfixable', () => {
	test('returns exitUnfixable when fixes run but no files changed', async () => {
		const spawnFn = vi
			.fn()
			.mockImplementationOnce(fail) // Check fails
			.mockImplementationOnce(pass); // Fix succeeds

		const result = await orchestrate(
			[check('lint', [{ command: 'pnpm', args: ['run', 'lint:fix'] }])],
			{ spawnFn, detectChangesFn: noChanges }
		);

		expect(result.exitCode).toBe(exitUnfixable);
		expect(result.filesChanged).toBe(false);
	});

	test('returns exitUnfixable when check has no fix commands and no files changed', async () => {
		const spawnFn = vi.fn().mockImplementation(fail);

		const result = await orchestrate([check('test')], {
			spawnFn,
			detectChangesFn: noChanges
		});

		expect(result.exitCode).toBe(exitUnfixable);
		expect(result.fixesApplied).toHaveLength(0);
	});
});

// ─── Exit code 2: fixes produced file changes ────────────────────────────────

describe('exit code 2 – fixed with changes', () => {
	test('returns exitFixedWithChanges when fixes produce file changes', async () => {
		const spawnFn = vi
			.fn()
			.mockImplementationOnce(fail) // Check fails
			.mockImplementationOnce(pass); // Fix succeeds

		const result = await orchestrate(
			[check('lint', [{ command: 'pnpm', args: ['run', 'lint:fix'] }])],
			{ spawnFn, detectChangesFn: hasChanges }
		);

		expect(result.exitCode).toBe(exitFixedWithChanges);
		expect(result.filesChanged).toBe(true);
		expect(result.fixesApplied).toEqual(['pnpm run lint:fix']);
	});

	test('collects fixes from multiple failed checks', async () => {
		const spawnFn = vi
			.fn()
			.mockImplementationOnce(fail) // Lint check fails
			.mockImplementationOnce(fail) // Format check fails
			.mockImplementationOnce(pass) // Lint fix
			.mockImplementationOnce(pass); // Format fix

		const result = await orchestrate(
			[
				check('lint', [{ command: 'pnpm', args: ['run', 'lint:fix'] }]),
				check('check:format', [
					{ command: 'pnpm', args: ['run', 'codestyle'] }
				])
			],
			{ spawnFn, detectChangesFn: hasChanges }
		);

		expect(result.exitCode).toBe(exitFixedWithChanges);
		expect(result.fixesApplied).toEqual([
			'pnpm run lint:fix',
			'pnpm run codestyle'
		]);
	});
});

// ─── Timeout handling ────────────────────────────────────────────────────────

describe('timeout handling', () => {
	test('marks check as timed out when spawnFn returns timedOut: true', async () => {
		const spawnFn = vi.fn().mockImplementation(timeout);

		const result = await orchestrate([check('lint')], {
			spawnFn,
			detectChangesFn: noChanges
		});

		expect(result.checkResults[0].timedOut).toBe(true);
		expect(result.checkResults[0].passed).toBe(false);
	});

	test('timed-out check still triggers fix phase', async () => {
		const spawnFn = vi
			.fn()
			.mockImplementationOnce(timeout) // Check times out
			.mockImplementationOnce(pass); // Fix runs

		const result = await orchestrate(
			[check('lint', [{ command: 'pnpm', args: ['run', 'lint:fix'] }])],
			{ spawnFn, detectChangesFn: hasChanges }
		);

		expect(result.exitCode).toBe(exitFixedWithChanges);
	});

	test('skips timed-out fix commands and continues', async () => {
		const spawnFn = vi
			.fn()
			.mockImplementationOnce(fail) // Check fails
			.mockImplementationOnce(timeout) // First fix times out
			.mockImplementationOnce(pass); // Second fix succeeds

		const result = await orchestrate(
			[
				check('lint', [
					{ command: 'pnpm', args: ['run', 'lint:fix1'] },
					{ command: 'pnpm', args: ['run', 'lint:fix2'] }
				])
			],
			{ spawnFn, detectChangesFn: hasChanges }
		);

		// Only the second fix (which succeeded) should be in fixesApplied
		expect(result.fixesApplied).toEqual(['pnpm run lint:fix2']);
	});
});

// ─── Abort / total timeout ───────────────────────────────────────────────────

describe('abort signal propagation', () => {
	test('aborted checks are treated as failed', async () => {
		// Simulate a check that respects the abort signal by returning a failed result
		const spawnFn = vi
			.fn()
			.mockImplementation(
				async (
					_cmd: string,
					_args: string[],
					options: { abortSignal?: AbortSignal }
				) => {
					return new Promise<CommandExecResult>((resolve) => {
						if (options.abortSignal?.aborted) {
							resolve({ exitCode: 1, timedOut: false });
							return;
						}

						options.abortSignal?.addEventListener(
							'abort',
							() => {
								resolve({ exitCode: 1, timedOut: false });
							},
							{ once: true }
						);
					});
				}
			);

		const controller = new AbortController();
		// Abort immediately after orchestrate starts
		setTimeout(() => {
			controller.abort();
		}, 0);

		// Use a very short total timeout so the orchestrator aborts quickly
		const result = await orchestrate([check('lint')], {
			spawnFn,
			detectChangesFn: noChanges,
			totalTimeoutMs: 50
		});

		expect(result.exitCode).not.toBe(exitAllPassed);
	});
});

// ─── Change detection ────────────────────────────────────────────────────────

describe('change detection', () => {
	test('uses custom detectChangesFn', async () => {
		const detectFn = vi.fn().mockImplementation(hasChanges);
		const spawnFn = vi.fn().mockImplementation(fail);

		await orchestrate([check('lint')], {
			spawnFn,
			detectChangesFn: detectFn
		});

		expect(detectFn).toHaveBeenCalledOnce();
	});

	test('filesChanged reflects detectChangesFn result', async () => {
		const spawnFn = vi.fn().mockImplementation(fail);

		const withChanges = await orchestrate([check('lint')], {
			spawnFn,
			detectChangesFn: hasChanges
		});
		expect(withChanges.filesChanged).toBe(true);

		const withoutChanges = await orchestrate([check('lint')], {
			spawnFn: vi.fn().mockImplementation(fail),
			detectChangesFn: noChanges
		});
		expect(withoutChanges.filesChanged).toBe(false);
	});
});

// ─── checkResults shape ──────────────────────────────────────────────────────

describe('checkResults shape', () => {
	test('includes a result entry for every check', async () => {
		const checks = [check('lint'), check('test'), check('check:format')];
		const spawnFn = vi.fn().mockImplementation(pass);

		const result = await orchestrate(checks, {
			spawnFn,
			detectChangesFn: noChanges
		});

		expect(result.checkResults).toHaveLength(3);
		expect(result.checkResults.map((r) => r.name)).toEqual([
			'lint',
			'test',
			'check:format'
		]);
	});

	test('each result has required fields', async () => {
		const spawnFn = vi.fn().mockImplementation(pass);
		const result = await orchestrate([check('lint')], {
			spawnFn,
			detectChangesFn: noChanges
		});

		const r = result.checkResults[0];
		expect(r).toHaveProperty('name');
		expect(r).toHaveProperty('passed');
		expect(r).toHaveProperty('timedOut');
		expect(r).toHaveProperty('duration');
		expect(typeof r.duration).toBe('number');
	});
});
