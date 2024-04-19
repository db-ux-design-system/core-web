import { GlobalProps, GlobalState, InitializedState } from '../../shared/model';

export interface DBPageDefaultProps {
	/**
	 * The variant=fixed uses flex-box to make header and footer static
	 */
	variant?: 'default' | 'fixed';
	header?: unknown;
	footer?: unknown;

	/**
	 * Set this to have a transition with opacity to avoid layout-shifts https://simonhearne.com/2021/layout-shifts-webfonts/
	 */
	fadeIn?: boolean;
}

export type DBPageProps = DBPageDefaultProps & GlobalProps;

export interface DBPageDefaultState {
	fontsLoaded?: boolean;
}

export type DBPageState = DBPageDefaultState & GlobalState;
