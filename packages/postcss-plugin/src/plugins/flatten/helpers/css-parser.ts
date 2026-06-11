/**
 * Find the matching closing paren for a CSS function call starting at a given position.
 * Assumes the opening `(` has already been consumed (depth starts at 1).
 * @param value - The full CSS value string
 * @param openIndex - The index right after the opening `(`
 * @returns The index right after the matching `)`, or -1 if unbalanced
 */
export const findMatchingParenthesis = (
	value: string,
	openIndex: number
): number => {
	let depth = 1;
	let i = openIndex;
	while (i < value.length && depth > 0) {
		if (value[i] === '(') depth++;
		if (value[i] === ')') depth--;
		i++;
	}
	return depth === 0 ? i : -1;
};

/**
 * Find the index of the first top-level comma in a string,
 * skipping commas inside nested parentheses.
 * @param value - The string to search
 * @returns The index of the first top-level comma, or -1 if none found
 */
export const findTopLevelComma = (value: string): number => {
	let depth = 0;
	for (let i = 0; i < value.length; i++) {
		if (value[i] === '(') depth++;
		else if (value[i] === ')') depth--;
		else if (value[i] === ',' && depth === 0) return i;
	}
	return -1;
};

/**
 * Find the next occurrence of a CSS function by name and extract its span and inner content.
 * Uses paren counting to handle nested parentheses.
 * @param value - The CSS value string to search
 * @param funcName - The function name (e.g. "var", "calc", "light-dark")
 * @param fromIndex - The index to start searching from
 * @returns An object with `start`, `end`, and `inner` content, or null if not found
 */
export const findCssFunction = (
	value: string,
	funcName: string,
	fromIndex = 0
): { start: number; end: number; inner: string } | null => {
	const prefix = `${funcName}(`;
	const idx = value.indexOf(prefix, fromIndex);
	if (idx === -1) return null;

	const end = findMatchingParenthesis(value, idx + prefix.length);
	if (end === -1) return null;

	return {
		start: idx,
		end,
		inner: value.slice(idx + prefix.length, end - 1)
	};
};
