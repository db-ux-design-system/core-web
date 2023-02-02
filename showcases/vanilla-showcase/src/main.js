import { navigationItems } from './utils/navigation-items.js';
import getAppShell from './app-shell.js';

const getRouter = () => {
	const foundNavItem = navigationItems.find((item) =>
		window.location.href.endsWith(item.path)
	);

	if (foundNavItem) {
		return foundNavItem.component;
	}

	return navigationItems[0].component;
};

document.querySelector('#app').innerHTML = getAppShell(getRouter());
