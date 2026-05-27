/**
 * Self-Healing CI Orchestrator
 *
 * Runs lint, test, and check:format in parallel, attempts auto-fixes on failure,
 * and exits with a code indicating the result for the GitHub Actions workflow.
 *
 * Exit codes:
 *   0 - All checks passed
 *   1 - Checks failed, fixes did not produce changes (unfixable)
 *   2 - Checks failed, fixes produced file changes
 */

import { spawn, type ChildProcess } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// ─── Interfaces ──────────────────────────────────────────────────────────────

export type FixCommand = {
	command: string;
	args: string[];
};

export type CheckConfig = {
	name: string;
	checkCommand: string;
	fixCommands: FixCommand[];
};

export type CheckResult = {
	name: string;
	passed: boolean;
	timedOut: boolean;
	duration: number;
};

export type OrchestratorResult = {
	exitCode: 0 | 1 | 2;
	checkResults: CheckResult[];
	fixesApplied: string[];
	filesChanged: boolean;
};

// ─── Constants ───────────────────────────────────────────────────────────────

export const exitAllPassed = 0;
export const exitUnfixable = 1;
export const exitFixedWithChanges = 2;

export const commandTimeoutMs = 120_000; // 120 seconds per command
export const totalTimeoutMs = 300_000; // 300 seconds total

export const checkFixMap: CheckConfig[] = [
	{
		name: 'lint',
		checkCommand: 'pnpm run lint',
		fixCommands: [
			{ command: 'pnpm', args: ['run', 'lint:xo', '--', '--fix'] },
			{ command: 'pnpm', args: ['run', 'lint:stylelint', '--', '--fix'] },
			{
				command: 'pnpm',
				args: ['run', 'lint:markdownlint', '--', '--fix']
			}
		]
	},
	{
		name: 'test',
		checkCommand: 'pnpm run test',
		fixCommands: []
	},
	{
		name: 'check:format',
		checkCommand: 'pnpm run check:format',
		fixCommands: []
	}
];

/**
 * Fix command that always runs last, after all other fixers, to ensure
 * prettier formats whatever was changed by lint/markdownlint/stylelint/xo.
 */
export const finalFixCommand: FixCommand = {
	command: 'pnpm',
	args: ['run', 'codestyle']
};

// ─── Logging ─────────────────────────────────────────────────────────────────

function log(message: string): void {
	console.log(message);
}

function logError(message: string): void {
	console.error(message);
}

// ─── Command Execution ───────────────────────────────────────────────────────

export type SpawnCommandOptions = {
	timeoutMs: number;
	abortSignal?: AbortSignal;
};

export type CommandExecResult = {
	exitCode: number | undefined;
	timedOut: boolean;
};

/**
 * Spawns a command and returns a promise that resolves with the exit code.
 * Kills the process if it exceeds the timeout or if the abort signal fires.
 */
export async function spawnCommand(
	command: string,
	args: string[],
	options: SpawnCommandOptions
): Promise<CommandExecResult> {
	return new Promise((resolve) => {
		let child: ChildProcess;
		let timedOut = false;
		let settled = false;

		try {
			child = spawn(command, args, {
				stdio: 'inherit',
				shell: true
			});
		} catch {
			resolve({ exitCode: 1, timedOut: false });
			return;
		}

		const timeout = setTimeout(() => {
			timedOut = true;
			child.kill('SIGTERM');
			// Force kill after 5s if SIGTERM doesn't work
			setTimeout(() => {
				if (!settled) {
					child.kill('SIGKILL');
				}
			}, 5000);
		}, options.timeoutMs);

		const onAbort = () => {
			if (!settled) {
				timedOut = true;
				child.kill('SIGTERM');
				setTimeout(() => {
					if (!settled) {
						child.kill('SIGKILL');
					}
				}, 5000);
			}
		};

		if (options.abortSignal) {
			options.abortSignal.addEventListener('abort', onAbort, {
				once: true
			});
		}

		child.on('error', () => {
			settled = true;
			clearTimeout(timeout);
			if (options.abortSignal) {
				options.abortSignal.removeEventListener('abort', onAbort);
			}

			resolve({ exitCode: 1, timedOut: false });
		});

		child.on('close', (code) => {
			settled = true;
			clearTimeout(timeout);
			if (options.abortSignal) {
				options.abortSignal.removeEventListener('abort', onAbort);
			}

			resolve({ exitCode: code ?? undefined, timedOut });
		});
	});
}

// ─── Check Execution ─────────────────────────────────────────────────────────

/**
 * Runs a single check command and returns the result.
 */
async function runCheck(
	config: CheckConfig,
	spawn_: typeof spawnCommand,
	cmdTimeout: number,
	abortSignal?: AbortSignal
): Promise<CheckResult> {
	const start = Date.now();
	log(`🔍 Running check: ${config.name}`);

	const parts = config.checkCommand.split(' ');
	const command = parts[0];
	const args = parts.slice(1);

	const result = await spawn_(command, args, {
		timeoutMs: cmdTimeout,
		abortSignal
	});

	const duration = Date.now() - start;

	if (result.timedOut) {
		log(
			`⏱️ Check "${config.name}" timed out after ${Math.round(duration / 1000)}s`
		);
		return { name: config.name, passed: false, timedOut: true, duration };
	}

	if (result.exitCode === 0) {
		log(
			`✅ Check "${config.name}" passed (${Math.round(duration / 1000)}s)`
		);
		return { name: config.name, passed: true, timedOut: false, duration };
	}

	log(
		`❌ Check "${config.name}" failed with exit code ${result.exitCode} (${Math.round(duration / 1000)}s)`
	);
	return { name: config.name, passed: false, timedOut: false, duration };
}

// ─── Fix Execution ───────────────────────────────────────────────────────────

/**
 * Runs fix commands sequentially for a failed check.
 * Returns the list of fix command descriptions that were applied.
 */
/* eslint-disable no-await-in-loop -- Sequential execution is intentional to avoid file conflicts */
async function runFixes(
	config: CheckConfig,
	spawn_: typeof spawnCommand,
	cmdTimeout: number,
	abortSignal?: AbortSignal
): Promise<string[]> {
	const applied: string[] = [];

	for (const fix of config.fixCommands) {
		const fixDescription = `${fix.command} ${fix.args.join(' ')}`;
		log(`🔧 Running fix: ${fixDescription}`);

		const result = await spawn_(fix.command, fix.args, {
			timeoutMs: cmdTimeout,
			abortSignal
		});

		if (result.timedOut) {
			logError(`⏱️ Fix "${fixDescription}" timed out`);
			continue;
		}

		if (result.exitCode !== 0) {
			logError(
				`❌ Fix "${fixDescription}" failed with exit code ${result.exitCode}`
			);
			continue;
		}

		log(`✅ Fix "${fixDescription}" completed successfully`);
		applied.push(fixDescription);
	}

	return applied;
}
/* eslint-enable no-await-in-loop */

// ─── Git Status ──────────────────────────────────────────────────────────────

/**
 * Detects file changes via `git status --porcelain`.
 * Returns true if there are uncommitted changes.
 */
export async function detectFileChanges(): Promise<boolean> {
	return new Promise((resolve) => {
		let output = '';
		let child: ChildProcess;

		try {
			child = spawn('git', ['status', '--porcelain'], {
				stdio: ['ignore', 'pipe', 'pipe'],
				shell: true
			});
		} catch {
			logError('❌ Failed to spawn git status');
			resolve(false);
			return;
		}

		child.stdout?.on('data', (data: Uint8Array) => {
			output += new TextDecoder().decode(data);
		});

		child.on('error', () => {
			logError('❌ git status command failed');
			resolve(false);
		});

		child.on('close', (code) => {
			if (code !== 0) {
				logError(`❌ git status exited with code ${code}`);
				resolve(false);
				return;
			}

			const hasChanges = output.trim().length > 0;
			if (hasChanges) {
				log(`📝 Changed files detected:\n${output.trim()}`);
			} else {
				log('📝 No file changes detected');
			}

			resolve(hasChanges);
		});
	});
}

// ─── Orchestrator ────────────────────────────────────────────────────────────

/**
 * Main orchestration function. Exported for testability.
 */
export async function orchestrate(
	checks: CheckConfig[] = checkFixMap,
	options?: {
		commandTimeoutMs?: number;
		totalTimeoutMs?: number;
		spawnFn?: typeof spawnCommand;
		detectChangesFn?: typeof detectFileChanges;
	}
): Promise<OrchestratorResult> {
	const timeout = options?.totalTimeoutMs ?? totalTimeoutMs;
	const cmdTimeout = options?.commandTimeoutMs ?? commandTimeoutMs;
	const spawn_ = options?.spawnFn ?? spawnCommand;
	const abortController = new AbortController();

	// Set up total timeout
	const totalTimer = setTimeout(() => {
		log(
			`⏱️ Total orchestrator timeout (${timeout / 1000}s) reached. Aborting all commands.`
		);
		abortController.abort();
	}, timeout);

	try {
		// Phase 1: Run all checks in parallel
		log('🚀 Starting parallel checks...');
		const checkPromises = checks.map(async (config) =>
			runCheck(config, spawn_, cmdTimeout, abortController.signal)
		);
		const checkResults = await Promise.allSettled(checkPromises);

		// Collect results
		const results: CheckResult[] = checkResults.map((settled, index) => {
			if (settled.status === 'fulfilled') {
				return settled.value;
			}

			// If a promise rejected (shouldn't happen, but handle gracefully)
			return {
				name: checks[index].name,
				passed: false,
				timedOut: false,
				duration: 0
			};
		});

		// Check if all passed
		const failedChecks = checks.filter(
			(_, index) => !results[index].passed
		);

		if (failedChecks.length === 0) {
			log('✅ All checks passed!');
			return {
				exitCode: exitAllPassed,
				checkResults: results,
				fixesApplied: [],
				filesChanged: false
			};
		}

		// Phase 2: Run fixes sequentially for failed checks (in order: lint, test, check:format)
		// then always run prettier last to format whatever was changed by other fixers
		log(`🔧 ${failedChecks.length} check(s) failed. Running fixes...`);
		const allFixesApplied: string[] = [];

		for (const config of failedChecks) {
			log(`🔧 Fixing: ${config.name}`);
			// eslint-disable-next-line no-await-in-loop
			const fixes = await runFixes(
				config,
				spawn_,
				cmdTimeout,
				abortController.signal
			);
			allFixesApplied.push(...fixes);
		}

		// Always run prettier last so it formats any files changed by other fixers
		log(
			`🔧 Running final formatter: ${finalFixCommand.command} ${finalFixCommand.args.join(' ')}`
		);
		const finalResult = await spawn_(
			finalFixCommand.command,
			finalFixCommand.args,
			{ timeoutMs: cmdTimeout, abortSignal: abortController.signal }
		);
		if (finalResult.exitCode === 0) {
			allFixesApplied.push(
				`${finalFixCommand.command} ${finalFixCommand.args.join(' ')}`
			);
		}

		// Phase 3: Detect file changes
		const detectChanges = options?.detectChangesFn ?? detectFileChanges;
		const filesChanged = await detectChanges();

		if (!filesChanged) {
			log('❌ Fixes did not produce file changes. Exiting with code 1.');
			return {
				exitCode: exitUnfixable,
				checkResults: results,
				fixesApplied: allFixesApplied,
				filesChanged: false
			};
		}

		log('✅ Fixes applied. Exiting with code 2.');
		return {
			exitCode: exitFixedWithChanges,
			checkResults: results,
			fixesApplied: allFixesApplied,
			filesChanged: true
		};
	} finally {
		clearTimeout(totalTimer);
	}
}

// ─── Main Entry Point ────────────────────────────────────────────────────────

const isDirectExecution =
	process.argv[1] !== undefined &&
	path.resolve(process.argv[1]) === fileURLToPath(import.meta.url);

if (isDirectExecution) {
	log('🏁 Self-Healing CI Orchestrator starting...');
	const result = await orchestrate();
	log(`🏁 Orchestrator finished with exit code ${result.exitCode}`);
	// eslint-disable-next-line unicorn/no-process-exit
	process.exit(result.exitCode);
}
