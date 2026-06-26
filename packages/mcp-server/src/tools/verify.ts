import type { ToolResult } from '../utils';

/**
 * Instructs the LLM to verify its changes against the project's own toolchain.
 *
 * Instead of writing temporary files and running hardcoded compilers, this tool
 * returns a textual instruction for the LLM to discover and run the appropriate
 * verification scripts from the project's package.json.
 */
export async function handleVerifyMigratedCode(): Promise<ToolResult> {
	const instruction = [
		'Verify that the workspace still builds and type-checks after your changes.',
		'',
		"Determine the appropriate verification command by reading the project's package.json.",
		'Look for scripts like "lint", "typecheck", "check", or "build" to verify that the app still works after your changes, as toolchains (JS, TS, Vite) vary.',
		'',
		'Steps:',
		'1. Read the project\'s package.json "scripts" section.',
		'2. Prefer "typecheck" or "check" scripts if available.',
		'3. Fall back to "lint" or "build" if no dedicated check script exists.',
		'4. Run the chosen script and report any errors.',
		'5. If no suitable script is found, inform the user that manual verification is needed.'
	].join('\n');

	return {
		content: [
			{
				type: 'text',
				text: instruction
			}
		]
	};
}
