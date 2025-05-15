import { GlobalProps, GlobalState } from '../../shared/model';

export const ShellContentPanelDesktopPosition = ['top', 'left'] as const;
export type ShellContentPanelDesktopPositionType =
	(typeof ShellContentPanelDesktopPosition)[number];

export const ShellContentPanelMobilePosition = ['top', 'bottom'] as const;
export type ShellContentPanelMobilePositionType =
	(typeof ShellContentPanelMobilePosition)[number];

export type DBShellDefaultProps = {
	/**
	 * The slot can be used for React to set a desktopContentPanel.
	 */
	contentPanelDesktop?: any;
	/**
	 * Change the position of the desktop content panel
	 */
	contentPanelDesktopPosition?: ShellContentPanelDesktopPositionType;
	/**
	 * The slot can be used for React to set a mobileContentPanel.
	 */
	contentPanelMobile?: any;

	/**
	 * Change the position of the mobile content panel
	 */
	contentPanelMobilePosition?: ShellContentPanelMobilePositionType;

	/**
	 * Set this to have a transition with opacity to avoid layout-shifts https://simonhearne.com/2021/layout-shifts-webfonts/
	 */
	fadeIn?: boolean | string;
	/**
	 * Adds `class` to `<main>` element
	 */
	mainClass?: string;
};

export type DBShellProps = DBShellDefaultProps & GlobalProps;

export type DBShellDefaultState = {
	fontsLoaded?: boolean;
};

export type DBShellState = DBShellDefaultState & GlobalState;
