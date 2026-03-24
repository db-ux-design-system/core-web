export const MAX_FILE_CONTENT = 20_000;
export const MAX_JSON_OUTPUT = 20_000;

export function truncate(text: string, limit: number, label = 'TRUNCATED DUE TO SIZE'): string {
	return text.length > limit ? text.substring(0, limit) + `\n... [${label}]` : text;
}

export const COMPONENT_NOT_FOUND_MSG = (name: string) =>
	`Error: Component '${name}' is not available in the DB UX Design System. Please check your spelling or use the 'list_components' tool to see all valid components.`;
