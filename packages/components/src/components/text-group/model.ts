import type {
	AlignmentProps,
	GlobalProps,
	GlobalState
} from '../../shared/model';

/** Groups block-level text and owns the spacing between its children. */
export type DBTextGroupDefaultProps = {
	/** Gives every block-text child `0.5lh` of spacing above and below. Omitting it inherits, `false` opts out. */
	textSpacing?: boolean | string;
};
export type DBTextGroupProps = DBTextGroupDefaultProps &
	GlobalProps &
	AlignmentProps;

export type DBTextGroupDefaultState = {};
export type DBTextGroupState = DBTextGroupDefaultState & GlobalState;
