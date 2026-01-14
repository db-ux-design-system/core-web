export const getBasePath = () => {
	if (process?.env?.BASE_PATH) {
		return process.env.BASE_PATH;
	}

	if (typeof globalThis !== 'undefined') {
		// eslint-disable-next-line @typescript-eslint/dot-notation
		return (window as any)['env']?.BASE_URL;
	}

	return '';
};
