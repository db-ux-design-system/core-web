/** Standard return type for all MCP tool handlers. */
export type ToolResult = {
	content: { type: 'text'; text: string }[];
	isError?: boolean;
};

/** Maximum time in milliseconds a tool operation is allowed to run before being aborted. */
export const TOOL_TIMEOUT_MS = 10000;

/**
 * Races a promise against a fixed timeout.
 * If the operation does not settle within TOOL_TIMEOUT_MS, returns a semantic
 * MCP error object instead of throwing, so the LLM receives a readable message.
 *
 * @param operation - The async work to execute.
 * @param timeoutMessage - The error text returned to the LLM on timeout.
 */
export async function withTimeout(
	operation: Promise<ToolResult>,
	timeoutMessage: string
): Promise<ToolResult> {
	let timer: ReturnType<typeof setTimeout> | undefined;
	const timeoutPromise = new Promise<ToolResult>((resolve) => {
		timer = setTimeout(() => {
			resolve({
				content: [{ type: 'text', text: timeoutMessage }],
				isError: true
			});
		}, TOOL_TIMEOUT_MS);
	});
	const result = await Promise.race([operation, timeoutPromise]);
	if (timer) clearTimeout(timer);
	return result;
}
