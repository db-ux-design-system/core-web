import { GlobalProps, GlobalState } from '../../shared/model';

export interface DBPageDefaultProps {
	type?: 'fixedHeaderFooter';
	header?: any;
	footer?: any;

	/**
	 * Set this to have a transition with opacity to avoid layout-shifts https://simonhearne.com/2021/layout-shifts-webfonts/
	 */
	fadeIn?: boolean;
}

export type DBPageProps = DBPageDefaultProps & GlobalProps;

export interface DBPageDefaultState {
	fontsLoaded?: boolean;
	// We use this to calculate small pixel changes in Windows caused by border-height
	devicePixelRatio: number;
	updatePixelRatio: () => void;
}

export type DBPageState = DBPageDefaultState & GlobalState;
