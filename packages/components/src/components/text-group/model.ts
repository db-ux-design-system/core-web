import type {
	AlignmentProps,
	GlobalProps,
	GlobalState
} from '../../shared/model';

/** Groups block-level text and owns the spacing between its children. */
export type DBTextGroupDefaultProps = {
	/** Gives every child `0.5lh` of spacing above and below when enabled. */
	textSpacing?: boolean | string;
};
export type DBTextGroupProps = DBTextGroupDefaultProps &
	GlobalProps &
	AlignmentProps;

export type DBTextGroupDefaultState = {};
export type DBTextGroupState = DBTextGroupDefaultState & GlobalState;
