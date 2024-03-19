export const isEventTargetNavigationItem = (event: unknown): boolean => {
	const { target } = event as { target: HTMLElement };
	return Boolean(
		!target?.classList?.contains('db-navigation-item-expand-button') &&
			target?.parentElement?.classList.contains('db-navigation-item')
	);
};

export default {
	isEventTargetNavigationItem
};
