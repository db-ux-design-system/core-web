import { exec as execCb } from 'node:child_process';
import { randomUUID } from 'node:crypto';
import { unlink, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { promisify } from 'node:util';
import type { ToolResult } from '../utils';
import { truncate } from '../utils';

const exec = promisify(execCb);

/** File extension used for each framework when writing the temporary file. */
const FRAMEWORK_EXT: Record<string, string> = {
	react: '.tsx',
	angular: '.ts',
	vue: '.vue'
};

/**
 * Maximum number of characters returned from compiler/linter diagnostics.
 * Prevents context-window overflows when the compiler produces very long output.
 */
const MAX_DIAGNOSTICS_LENGTH = 2000;

/**
 * Standard React imports prepended to the user code when the framework is
 * "react" so that simple snippets don't fail with "Missing import" errors.
 */
const REACT_IMPORT_WRAPPER = `import React from 'react';\n`;

/**
 * Standard Angular imports prepended to the user code when the framework is
 * "angular" so that simple snippets don't fail with "Missing import" errors.
 */
const ANGULAR_IMPORT_WRAPPER = `import { Component } from '@angular/core';\n`;

/**
 * Checks whether the given code already contains a React import.
 * Uses simple string matching instead of regex to avoid ReDoS on untrusted input.
 */
function hasReactImport(code: string): boolean {
	return (
		code.includes('import React') ||
		code.includes("from 'react'") ||
		code.includes('from "react"')
	);
}

/**
 * Checks whether the given code already imports `Component` from `@angular/core`.
 * Uses simple string matching instead of regex to avoid ReDoS on untrusted input.
 */
function hasAngularComponentImport(code: string): boolean {
	return code.includes('@angular/core') && code.includes('Component');
}

/**
 * Wraps incoming code with framework-specific boilerplate imports to prevent
 * trivial "missing import" errors during the verification check.
 */
function wrapCode(code: string, framework: string): string {
	switch (framework) {
		case 'react': {
			if (!hasReactImport(code)) {
				return REACT_IMPORT_WRAPPER + code;
			}
			return code;
		}
		case 'angular': {
			if (!hasAngularComponentImport(code)) {
				return ANGULAR_IMPORT_WRAPPER + code;
			}
			return code;
		}
		default: {
			return code;
		}
	}
}

/**
 * Saves the given code to a temporary file, runs a compiler check, and
 * returns either a success message or the captured diagnostics so the LLM can
 * self-correct.
 *
 * The temporary file is **always** deleted in a `finally` block, regardless of
 * whether the check succeeded, failed, or threw an unexpected error.
 *
 * ### Production hardening
 * - **node_modules scope:** The temporary file is written directly into the
 *   workspace root (`process.cwd()`) as a hidden dot-file so that `tsc`
 *   resolves the project's `tsconfig.json` and `node_modules` without extra
 *   configuration. The file is always cleaned up in a `finally` block.
 * - **Token-limit protection:** Diagnostics are truncated to
 *   {@link MAX_DIAGNOSTICS_LENGTH} characters before being returned to the LLM.
 * - **Race-condition safety:** File names use `crypto.randomUUID()` instead
 *   of `Date.now()` to eliminate collisions under concurrent requests.
 * - **Cross-platform paths:** `path.join` + `process.cwd()` produce OS-native
 *   paths; file paths are always double-quoted in shell commands for
 *   Windows compatibility.
 * - **Buffer overflow protection:** `maxBuffer` is set to 10 MB so that verbose
 *   compiler output is fully captured before {@link truncate} reduces it.
 */
export async function handleVerifyMigratedCode({
	code,
	framework
}: {
	code: string;
	framework: string;
}): Promise<ToolResult> {
	const ext = FRAMEWORK_EXT[framework] ?? '.ts';
	const tmpFile = join(process.cwd(), `.tmp_verify_${randomUUID()}${ext}`);
	const wrappedCode = wrapCode(code, framework);

	try {
		await writeFile(tmpFile, wrappedCode, 'utf-8');

		const command = buildCheckCommand(tmpFile, framework);
		await exec(command, {
			timeout: 30_000,
			cwd: process.cwd(),
			maxBuffer: 10 * 1024 * 1024
		});

		return {
			content: [
				{
					type: 'text',
					text: `✅ Verification passed – the ${framework} code compiled/linted without errors.`
				}
			]
		};
	} catch (error: unknown) {
		const diagnostics = truncate(
			extractDiagnostics(error),
			MAX_DIAGNOSTICS_LENGTH,
			'Output truncated'
		);
		return {
			content: [
				{
					type: 'text',
					text: `❌ Verification failed for ${framework} code.\n\n${diagnostics}\n\nPlease fix the errors above and call verify_migrated_code again.`
				}
			],
			isError: true
		};
	} finally {
		try {
			await unlink(tmpFile);
		} catch {
			// File may not exist if writeFile itself failed – ignore.
		}
	}
}

/**
 * Builds the shell command used to verify the temporary file.
 * Uses `npx --no-install tsc --noEmit` for React/Angular (TypeScript) and
 * `npx --no-install vue-tsc --noEmit` for Vue single-file components.
 *
 * File paths are always double-quoted to handle spaces and special characters
 * on all operating systems (Unix + Windows).
 */
function buildCheckCommand(filePath: string, framework: string): string {
	switch (framework) {
		case 'vue': {
			return `npx --no-install vue-tsc --noEmit "${filePath}" 2>&1`;
		}
		case 'react': {
			return `npx --no-install tsc --noEmit --jsx react-jsx --esModuleInterop --moduleResolution node --skipLibCheck "${filePath}" 2>&1`;
		}
		case 'angular': {
			return `npx --no-install tsc --noEmit --experimentalDecorators --esModuleInterop --moduleResolution node --skipLibCheck "${filePath}" 2>&1`;
		}
		default: {
			return `npx --no-install tsc --noEmit --esModuleInterop --moduleResolution node --skipLibCheck "${filePath}" 2>&1`;
		}
	}
}

/**
 * Extracts human-readable diagnostic output (stdout + stderr) from a
 * `child_process.exec` rejection. Falls back to a generic message if the
 * error shape is unexpected.
 */
function extractDiagnostics(error: unknown): string {
	if (error && typeof error === 'object') {
		const { stdout, stderr, message } = error as {
			stdout?: string;
			stderr?: string;
			message?: string;
		};
		const parts: string[] = [];
		if (stdout) parts.push(stdout.trim());
		if (stderr) parts.push(stderr.trim());
		if (parts.length > 0) return parts.join('\n');
		if (message) return message;
	}
	return String(error);
}
