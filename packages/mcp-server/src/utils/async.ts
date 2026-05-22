/** A single text content block inside an MCP tool result. */
export type TextContent = { type: 'text'; text: string };

/** A single image content block inside an MCP tool result. */
export type ImageContent = { type: 'image'; data: string; mimeType: string };

/** Standard return type for all MCP tool handlers. */
export type ToolResult = {
	content: (TextContent | ImageContent)[];
	isError?: boolean;
};

/** Maximum time in milliseconds a tool operation is allowed to run before being aborted. */
export const TOOL_TIMEOUT_MS = 10_000;

/**
 * Races a promise against a fixed timeout.
 * If the operation does not settle within TOOL_TIMEOUT_MS, returns a semantic
 * MCP error object instead of throwing, so the LLM receives a readable message.
 *
 * **Note on cancellation:** When the timeout fires, the original `operation`
 * promise continues running in the background until it settles (there is no
 * way to cancel an arbitrary Promise in JavaScript). This is acceptable here
 * because the only callers are lightweight in-memory manifest lookups that
 * settle in <1 ms. If I/O-heavy operations are added in the future, refactor
 * callers to accept an `AbortSignal` and pass it through to `readFile` etc.
 *
 * @param operation - The async work to execute.
 * @param timeoutMessage - The error text returned to the LLM on timeout.
 */
export async function withTimeout(
	operation: Promise<ToolResult>,
	timeoutMessage: string
): Promise<ToolResult> {
	let timer: ReturnType<typeof setTimeout> | undefined;
	try {
		const timeoutPromise = new Promise<ToolResult>((resolve) => {
			timer = setTimeout(() => {
				resolve({
					content: [{ type: 'text', text: timeoutMessage }],
					isError: true
				});
			}, TOOL_TIMEOUT_MS);
		});
		return await Promise.race([operation, timeoutPromise]);
	} finally {
		if (timer) clearTimeout(timer);
	}
}
