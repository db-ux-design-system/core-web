import {
	EndSlotProps,
	GlobalProps,
	GlobalState,
	InnerCloseButtonProps,
	StartSlotProps,
	TextProps
} from '../../shared/model';

export type DBDrawerHeaderDefaultProps = {};

export type DBDrawerHeaderProps = DBDrawerHeaderDefaultProps &
	InnerCloseButtonProps &
	TextProps &
	GlobalProps &
	StartSlotProps &
	EndSlotProps;

export type DBDrawerHeaderDefaultState = {
	// Assigned on mount (client-only) to stay hydration-stable; undefined during SSR.
	_headingId?: string;
	_dialogId: string;
	// The resolved <dialog> element, held so aria-labelledby cleanup works even
	// for a drawer without an `id` and when the header is already detaching.
	_dialog?: HTMLDialogElement;
	_resolveDialog: () => void;
	removeAriaLabelledBy: () => void;
};

export type DBDrawerHeaderState = DBDrawerHeaderDefaultState & GlobalState;
