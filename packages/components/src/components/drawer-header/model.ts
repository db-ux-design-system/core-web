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
	_headingId: string;
	setAriaLabelledBy: () => void;
	removeAriaLabelledBy: () => void;
};

export type DBDrawerHeaderState = DBDrawerHeaderDefaultState & GlobalState;
