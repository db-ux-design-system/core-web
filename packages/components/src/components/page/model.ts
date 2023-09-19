import { GlobalProps, GlobalState } from '../../shared/model';

export interface DBPageDefaultProps {
	type?: 'fixedHeaderFooter';
	slotHeader?: any;
	slotFooter?: any;

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
