export const uuid = () => {
	if (typeof window !== 'undefined') {
		return window.crypto?.randomUUID();
	}

	return Math.random().toString();
};
