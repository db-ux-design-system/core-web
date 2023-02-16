import { GlobalProps, GlobalState } from '../../shared/model';

export interface DBHeaderDefaultProps {
	slotBrand?: any;
	slotMetaNavigation?: any;
	slotCallToAction?: any;
	slotActionBar?: any;
	drawerOpen?: boolean;
	onToggleDrawer?: (open: boolean) => void;
}

export type DBHeaderProps = DBHeaderDefaultProps & GlobalProps;

export interface DBHeaderDefaultState {
	toggleDrawer?: () => void;
}

export type DBHeaderState = DBHeaderDefaultState & GlobalState;
