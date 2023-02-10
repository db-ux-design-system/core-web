import { navigationItems } from './utils/navigation-items.js';
import getAppShell from './app-shell.js';

const getRouter = () => {
	const foundNavItem = navigationItems
		.filter((item) => item.path !== '/')
		.find((item) => window.location.href.includes(item.path));

	if (foundNavItem) {
		return foundNavItem.component();
	}

	return navigationItems[0].component();
};

document.querySelector('#app').innerHTML = getAppShell(getRouter());
