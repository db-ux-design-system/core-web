import { GlobalProps, GlobalState } from '../../shared/model';

export const ShellControlPanelDesktopPosition = ['top', 'left'] as const;
export type ShellControlPanelDesktopPositionType =
	(typeof ShellControlPanelDesktopPosition)[number];

export const ShellControlPanelMobilePosition = ['top', 'bottom'] as const;
export type ShellControlPanelMobilePositionType =
	(typeof ShellControlPanelMobilePosition)[number];

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
};

export type DBShellProps = DBShellDefaultProps & GlobalProps;

export type DBShellDefaultState = {
	fontsLoaded?: boolean;
};

export type DBShellState = DBShellDefaultState & GlobalState;
