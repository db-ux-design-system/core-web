export const uuid = () => {
	if (typeof window !== 'undefined') {
		return window.crypto?.randomUUID();
	}

	return Math.random().toString();
};

export const setMainMenuToFirstListElement = (element: Element) => {
	if (element.children?.length > 0) {
		const children = Array.from(element.children);
		const foundListElements = children.filter(
			(child) => child.nodeName === 'LI'
		);
		if (foundListElements.length > 0) {
			foundListElements.forEach((listElement) =>
				listElement.setAttribute('data-main-menu', 'true')
			);
			const restElements = children.filter(
				(child) => child.nodeName !== 'LI'
			);
			restElements.forEach((child) =>
				setMainMenuToFirstListElement(child)
			);
		} else {
			children.forEach((child) => setMainMenuToFirstListElement(child));
		}
	}
};
