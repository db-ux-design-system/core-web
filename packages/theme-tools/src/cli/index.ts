#!/usr/bin/env node
/*
 * @db-ux/core-theme-tools/cli — CLI entry (bin `db-ux-theme-tools`).
 *
 * The only surface that serves non-Node consumers (Java/Python/CI). A thin
 * wrapper over the core generator, built like `@db-ux/agent-cli` (esbuild +
 * `commander`, explicit plain `bin` key) — see `esbuild.js` and the `bin` /
 * `exports["./cli"]` entries in `package.json` (Requirement 7.1).
 *
 * Scope: this wires the `commander` program with the `init` and `generate`
 * subcommands. `generate` resolves the committed configuration (the single
 * source of truth — auto-discovered, or an explicit `--config <path>`) and
 * writes the optimized CSS; `init` scans the project with the shared Detector
 * and writes a starter configuration.
 */

import { Command } from 'commander';
import process from 'node:process';
import { runGenerate } from './generate.js';
import { runInit } from './init.js';

/**
 * Parse a comma-separated flag value into a trimmed, non-empty string list, or
 * `undefined` when the flag is absent.
 */
const parseList = (value: string | undefined): string[] | undefined => {
	if (value === undefined) {
		return undefined;
	}
	return value
		.split(',')
		.map((item) => item.trim())
		.filter((item) => item.length > 0);
};

/**
Exit code used when a subcommand fails.
*/
const FAILURE_EXIT_CODE = 1;

const program = new Command();

program
	.name('db-ux-theme-tools')
	.description(
		'Generate adaptive-color CSS for the DB UX Design System – Generation 3 from a theme of color values.'
	);

/*
 * `generate` — resolve the committed configuration (the single source of truth)
 * and write the optimized adaptive CSS to the configured output path. The only
 * option is `--config <path>` to load an explicit config file; without it, the
 * standard db-ux config is discovered automatically.
 */
program
	.command('generate')
	.description('Resolve configuration and emit the optimized adaptive CSS.')
	.option(
		'--config <path>',
		'path to the db-ux config file (defaults to auto-discovery)'
	)
	.action(async (flags: { config?: string }) => {
		try {
			const outPath = await runGenerate(flags.config);
			console.log(`Wrote ${outPath}`);
		} catch (error) {
			console.error(
				error instanceof Error ? error.message : String(error)
			);
			process.exitCode = FAILURE_EXIT_CODE;
		}
	});

/*
 * `init` — scan the project with the shared Detector and write a starter
 * configuration recording the detected colors, materials, and high-contrast
 * opt-in (Requirement 7.3). The Detector is delivered in Phase 3 (Task 20);
 * until then `init` scans through the detector-interface stub
 * (`./detector.ts`), so the written config is scope-clean and the command
 * works end-to-end.
 */
program
	.command('init')
	.description(
		'Scan the project and write a starter configuration from detected usage.'
	)
	.option(
		'--scan <list>',
		'comma-separated source globs to scan (defaults to the standard framework file types)'
	)
	.action(async (flags: { scan?: string }) => {
		try {
			const scan = parseList(flags.scan);
			const outPath = await runInit(process.cwd(), scan);
			console.log(`Wrote ${outPath}`);
		} catch (error) {
			console.error(
				error instanceof Error ? error.message : String(error)
			);
			process.exitCode = FAILURE_EXIT_CODE;
		}
	});

program.parse();
