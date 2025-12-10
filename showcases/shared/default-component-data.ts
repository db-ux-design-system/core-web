export type DefaultComponentExample = {
	name?: string;
	experimental?: boolean;
	example?: any;
	style?: {
		display?: string;
		width?: string;
		height?: string;
	}; // Add additional css properties here if you need more
	className?: string;
	props?: any;
	code?: {
		html?: string; // We will generate this with reacts 'renderToString'
		angular?: string;
		react?: string;
		vue?: string;
	};
	children?: DefaultComponentExample[];
	density?: string;
	class?: string;
};

export type DefaultComponentVariants = {
	name: string;
	codeFileName?: string;
	children?: DefaultComponentExample[];
	examples: DefaultComponentExample[];
	color?: string;
	role?: string;
};

export type DefaultComponentProps = {
	title: string;
	variants: DefaultComponentVariants[];
};

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
