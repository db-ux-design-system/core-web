import type {
	GlobalProps,
	GlobalState,
	MaterialProps
} from '../../shared/model';

export type DBDialogFooterDefaultProps = {};

export type DBDialogFooterProps = DBDialogFooterDefaultProps &
	GlobalProps &
	MaterialProps;

export type DBDialogFooterDefaultState = {};

export type DBDialogFooterState = DBDialogFooterDefaultState & GlobalState;
