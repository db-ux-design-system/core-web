import {
	EndSlotProps,
	GlobalProps,
	GlobalState,
	InnerCloseButtonProps,
	StartSlotProps,
	TextProps
} from '../../shared/model';

export type DBDialogHeaderDefaultProps = {};

export type DBDialogHeaderProps = DBDialogHeaderDefaultProps &
	InnerCloseButtonProps &
	TextProps &
	GlobalProps &
	StartSlotProps &
	EndSlotProps;

export type DBDialogHeaderDefaultState = {
	_headingId: string;
	_dialogId: string;
	_resolveDialog: () => void;
	removeAriaLabelledBy: () => void;
};

export type DBDialogHeaderState = DBDialogHeaderDefaultState & GlobalState;
