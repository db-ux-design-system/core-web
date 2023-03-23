import {
	CloseEventProps,
	CloseEventState,
	GlobalProps,
	GlobalState,
	InnerCloseButtonProps
} from '../../shared/model';

export interface DBDrawerDefaultProps {
	open?: boolean;
	slotDrawerHeader?: any;
	size?: 'medium' | 'small';

	width?: 'full';

	withCloseButton?: boolean;

	noBackdrop?: boolean;
	rounded?: boolean;

	direction?: 'left' | 'right' | 'up' | 'down';
}

export type DBDrawerProps = DBDrawerDefaultProps &
	GlobalProps &
	CloseEventProps &
	InnerCloseButtonProps;

export interface DBDrawerDefaultState {
	handleDialogOpen: () => void;
}

export type DBDrawerState = DBDrawerDefaultState &
	GlobalState &
	CloseEventState;
