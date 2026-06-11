export type DefaultSettings = {
	controlPanelDesktopPosition: 'top' | 'left';
	controlPanelMobilePosition: 'bottom' | 'top';
	subNavigationDesktopPosition: 'top' | 'left';
	subNavigationMobilePosition: 'top' | 'bottom' | 'none';
	subNavigation: 'true' | 'false';
	subNavigationVariant: 'tree' | 'popover';
	navigationDesktopVariant: 'tree' | 'popover';
	navigationMobileVariant: 'tree' | 'popover';
};

export const defaultSettingsMapping = {
	controlPanelDesktopPosition: ['top', 'left'],
	navigationDesktopVariant: ['tree', 'popover'],
	controlPanelMobilePosition: ['bottom', 'top'],
	navigationMobileVariant: ['tree', 'popover'],
	subNavigation: ['true', 'false'],
	subNavigationDesktopPosition: ['top', 'left'],
	subNavigationMobilePosition: ['top', 'bottom', 'none'],
	subNavigationVariant: ['tree', 'popover']
};

export const defaultSettings: DefaultSettings = {
	navigationMobileVariant: 'popover',
	subNavigation: 'false',
	subNavigationDesktopPosition: 'top',
	subNavigationMobilePosition: 'none',
	subNavigationVariant: 'tree',
	controlPanelDesktopPosition: 'top',
	controlPanelMobilePosition: 'top',
	navigationDesktopVariant: 'popover'
};
