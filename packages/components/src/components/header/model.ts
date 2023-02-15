import { GlobalProps, GlobalState } from '../../shared/model';

export interface DBHeaderDefaultProps {
	slotBrand?: any;
	slotMetaNavigation?: any;
	slotCallToAction?: any;
	slotActionBar?: any;
}

export type DBHeaderProps = DBHeaderDefaultProps & GlobalProps;

export interface DBHeaderDefaultState {
	drawerOpen?: boolean;
}

export type DBHeaderState = DBHeaderDefaultState & GlobalState;
