export const isEventTargetNavigationItem = (
	event: MouseEvent & { currentTarget: HTMLElement; target: HTMLElement }
): boolean =>
	!event.target.classList.contains('db-navigation-item-expand-button') &&
	event.target.parentElement.classList.contains('db-navigation-item');

export default {
	isEventTargetNavigationItem
};
