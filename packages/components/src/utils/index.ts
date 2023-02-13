export const uuid = () => {
	return window?.crypto?.randomUUID() || Math.random().toString();
};
