export type BranchGroup = {
	others: string[];
	features: string[];
	bugfixes: string[];
	refactors: string[];
	issues: string[];
	docs: string[];
	versions: string[];
};

export type GithubResponse = {
	name: string;
};

/**
 * Sanitizes a branch or tag name for use in URLs and folder paths.
 * Converts German Umlauts and other special characters to URL-safe equivalents.
 * @param name - The branch or tag name to sanitize
 * @returns The sanitized name
 */
export const sanitizeName = (name: string): string => {
	if (!name) return '';

	// German Umlaut replacements
	const umlautMap: Record<string, string> = {
		ä: 'ae',
		ö: 'oe',
		ü: 'ue',
		Ä: 'Ae',
		Ö: 'Oe',
		Ü: 'Ue',
		ß: 'ss'
	};

	let sanitized = name;

	// Replace German Umlauts
	for (const [umlaut, replacement] of Object.entries(umlautMap)) {
		sanitized = sanitized.replaceAll(umlaut, replacement);
	}

	// Replace any remaining non-URL-safe characters (except /, -, _, .)
	// Keep alphanumeric, dash, underscore, dot, and slash (for branch paths like feature/abc)
	sanitized = sanitized.replaceAll(/[^\w/.-]/g, '-');

	// Remove consecutive dashes
	sanitized = sanitized.replaceAll(/-+/g, '-');

	// Remove leading/trailing dashes
	sanitized = sanitized.replaceAll(/^-+|-+$/g, '');

	return sanitized;
};
