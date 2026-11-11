#!/usr/bin/env node
/**
 * Pre-commit helper (lint-staged): regenerates the GitHub Actions dependency
 * lockfile `.github/workflows/actions.lock` and re-stages it.
 *
 * `gh actions-lock` is a GitHub CLI extension, not a built-in command, so a
 * contributor without it would otherwise be blocked from committing any
 * workflow or action change. In that case we only warn and skip: the
 * self-healing validation step in CI runs `gh actions-lock --verify` and
 * regenerates + auto-commits a stale lockfile, so nothing unlocked can merge.
 *
 * Keep the pinned version in sync with `.github/workflows/01-validate.yml`.
 */
import { spawnSync } from 'node:child_process';
import { exit } from 'node:process';

const EXTENSION = 'github/gh-actions-lock';
const VERSION = 'v0.2.0';
const LOCKFILE = '.github/workflows/actions.lock';

const run = (command, args, options = {}) =>
	spawnSync(command, args, { encoding: 'utf8', ...options });

const extensionAvailable = () => {
	const result = run('gh', ['actions-lock', '--version']);
	// `error` is set when `gh` itself is not installed (ENOENT)
	return !result.error && result.status === 0;
};

if (!extensionAvailable()) {
	console.warn(
		[
			`⚠️  Skipping ${LOCKFILE} regeneration: the GitHub CLI extension "gh actions-lock" is not installed.`,
			`   Install it with: gh extension install ${EXTENSION} --pin ${VERSION}`,
			'   CI verifies the lockfile and auto-commits a fix if it is stale.'
		].join('\n')
	);
	exit(0);
}

const lock = run('gh', ['actions-lock', '--no-interactive'], {
	stdio: 'inherit'
});
if (lock.status !== 0) {
	exit(lock.status ?? 1);
}

const add = run('git', ['add', LOCKFILE], { stdio: 'inherit' });
exit(add.status ?? 1);
