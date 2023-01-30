export const NAVIGATION_ITEMS = [
	{ link: '/', label: 'Home', icon: 'home' },
	{ link: '/form', label: 'Form', icon: 'chat' },
	{ link: '/elements', label: 'OtherElements', icon: 'grid-view' },
	{ link: '/components', label: 'OtherComponents', icon: 'menu' },
	{ link: '/tables', label: 'Tables', icon: 'list' },
	{ link: '/navigation', label: 'Navigation', icon: 'gps' }
];

export const isAreaCurrent = (index: number): 'page' | 'false' => {
	return index === 0 ? 'page' : 'false';
};
