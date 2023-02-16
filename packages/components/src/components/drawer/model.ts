import { GlobalProps, GlobalState } from '../../shared/model';

export interface DBDrawerDefaultProps {
	open?: boolean;
	slotDrawerHeader?: any;
	onClose?: () => void;
}

export type DBDrawerProps = DBDrawerDefaultProps & GlobalProps;

export interface DBDrawerDefaultState {
	handleClose?: (event: any) => void;
}

export type DBDrawerState = DBDrawerDefaultState & GlobalState;
