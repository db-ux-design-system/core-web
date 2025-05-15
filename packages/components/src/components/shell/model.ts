import { GlobalProps, GlobalState } from '../../shared/model';

export const ShellVariantList = ['auto', 'fixed'] as const;
export type ShellVariantType = (typeof ShellVariantList)[number];

export const ShellDocumentOverflowList = ['hidden', 'auto'] as const;
export type ShellDocumentOverflowType =
	(typeof ShellDocumentOverflowList)[number];

export type DBShellDefaultProps = {
	/**
	 * The slot can be used for React to set a mobileContentPanel.
	 */
	desktopContentPanel?: any;
	/**
	 * The documentOverflow sets the overflow:hidden/auto to the root document
	 */
	documentOverflow?: ShellDocumentOverflowType;
	/**
	 * Set this to have a transition with opacity to avoid layout-shifts https://simonhearne.com/2021/layout-shifts-webfonts/
	 */
	fadeIn?: boolean | string;
	/**
	 * Adds `class` to `<main>` element
	 */
	mainClass?: string;

	/**
	 * The slot can be used for React to set a mobileContentPanel.
	 */
	mobileContentPanel?: any;

	/**
	 * The variant=fixed uses flex-box to make header and footer static
	 */
	variant?: ShellVariantType;
};

export type DBShellProps = DBShellDefaultProps & GlobalProps;

export type DBShellDefaultState = {
	fontsLoaded?: boolean;
};

export type DBShellState = DBShellDefaultState & GlobalState;
