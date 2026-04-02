export const getBasePath = () => {
	if (process?.env?.BASE_PATH) {
		return process.env.BASE_PATH;
	}

	if (typeof globalThis !== 'undefined') {
		return (globalThis as unknown as Record<string, Record<string, string>>)
			.env?.BASE_URL;
	}

	return '';
};
