import { GlobalProps, GlobalState } from '../../shared/model';

export interface DBPageDefaultProps {
	/**
	 * The documentOverflow sets the overflow:hidden/auto to the root document
	 */
	documentOverflow?: 'hidden' | 'auto';
	/**
	 * Set this to have a transition with opacity to avoid layout-shifts https://simonhearne.com/2021/layout-shifts-webfonts/
	 */
	fadeIn?: boolean;

	/**
	 * The slot can be used for React to set a footer.
	 */
	footer?: unknown;
	/**
	 * The slot can be used for React to set a header.
	 */
	header?: unknown;

	/**
	 * The variant=fixed uses flex-box to make header and footer static
	 */
	variant?: 'auto' | 'fixed';
}

export type DBPageProps = DBPageDefaultProps & GlobalProps;

export interface DBPageDefaultState {
	fontsLoaded?: boolean;
}

export type DBPageState = DBPageDefaultState & GlobalState;
