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
	// Assigned on mount (client-only) to stay hydration-stable; undefined during SSR.
	_headingId?: string;
	_dialogId: string;
	// The resolved <dialog> element, held so aria-labelledby cleanup works
	// regardless of the dialog `id` and when the header is already detaching.
	_dialog?: HTMLDialogElement;
	_resolveDialog: () => void;
	removeAriaLabelledBy: () => void;
};

export type DBDialogHeaderState = DBDialogHeaderDefaultState & GlobalState;
