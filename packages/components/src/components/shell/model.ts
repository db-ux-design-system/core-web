import {
	GlobalProps,
	GlobalState,
	ShellControlPanelDesktopPositionType,
	ShellControlPanelMobilePositionType,
	SidebarProps,
	SidebarState,
	ToggleEventState
} from '../../shared/model';

export const ShellSubNavigationMobilePosition = ['top', 'hidden'] as const;
export type ShellSubNavigationMobilePositionType =
	(typeof ShellSubNavigationMobilePosition)[number];

export type DBShellDefaultProps = {
	/**
	 * The slot can be used for React to set a desktopControlPanel.
	 */
	controlPanelDesktop?: any;
	/**
	 * Change the position of the desktop content panel
	 */
	controlPanelDesktopPosition?: ShellControlPanelDesktopPositionType;
	/**
	 * The slot can be used for React to set a mobileControlPanel.
	 */
	controlPanelMobile?: any;
	/**
	 * Change the position of the mobile content panel
	 */
	controlPanelMobilePosition?: ShellControlPanelMobilePositionType;
	/**
	 * Set this to have a transition with opacity to avoid layout-shifts https://simonhearne.com/2021/layout-shifts-webfonts/
	 */
	fadeIn?: boolean | string;

	/**
	 * Adds `class` to `<main>` element
	 */
	mainClass?: string;

	/**
	 * The slot can be used for React to set a subNavigation.
	 */
	subNavigation?: any;
	/**
	 * Change the position of the optional sub navigation for desktop
	 */
	subNavigationDesktopPosition?: ShellControlPanelDesktopPositionType;

	/**
	 * Change the position of the optional sub navigation for mobile
	 */
	subNavigationMobilePosition?: ShellSubNavigationMobilePositionType;

	/**
	 * Change the default text of the toggle button for collapse if you use sub-navigation with position:left.
	 */
	subNavigationToggleButtonCollapse?: string;
	/**
	 * Change the default text of the toggle button for expand if you use sub-navigation with position:left.
	 */
	subNavigationToggleButtonExpand?: string;
};

export type DBShellProps = DBShellDefaultProps & GlobalProps & SidebarProps;

export type DBShellDefaultState = {
	fontsLoaded?: boolean;
};

export type DBShellState = DBShellDefaultState &
	GlobalState &
	ToggleEventState<HTMLButtonElement> &
	SidebarState;
