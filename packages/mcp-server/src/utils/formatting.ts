import type { ToolResult } from './async.js';

/** Maximum number of characters returned from a single file read. */
export const MAX_FILE_CONTENT = 20_000;
/** Maximum number of characters returned from a JSON-serialised list response. */
export const MAX_JSON_OUTPUT = 20_000;

/**
 * Truncates a string to at most `limit` characters and appends a labelled marker.
 * Returns the original string unchanged when it is within the limit.
 */
export function truncate(
	text: string,
	limit: number,
	label = 'TRUNCATED DUE TO SIZE'
): string {
	return text.length > limit
		? text.substring(0, limit) + `\n... [${label}]`
		: text;
}

/** Returns a standardised "component not found" error message for the given component name. */
export const COMPONENT_NOT_FOUND_MSG = (name: string) =>
	`Error: Component '${name}' is not available in the DB UX Design System. Please check your spelling or use the 'list_components' tool to see all valid components.`;

/** Creates a standard MCP error ToolResult with the given message. */
export function err(text: string): ToolResult {
	return { content: [{ type: 'text', text }], isError: true };
}
