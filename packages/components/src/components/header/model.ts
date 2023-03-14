import { GlobalProps, GlobalState } from '../../shared/model';

export interface DBHeaderDefaultProps {
	slotBrand?: any;
	slotDesktopNavigation?: any;
	slotMobileNavigation?: any;
	slotMetaNavigation?: any;
}

export type DBHeaderProps = DBHeaderDefaultProps & GlobalProps;

export interface DBHeaderDefaultState {}

export type DBHeaderState = DBHeaderDefaultState & GlobalState;
