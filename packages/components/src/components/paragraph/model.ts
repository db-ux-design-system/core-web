import type {
	AlignmentProps,
	GlobalProps,
	GlobalState
} from '../../shared/model';

export const ParagraphSizeList = ['lg', 'md', 'sm'] as const;
export type ParagraphSizeType = (typeof ParagraphSizeList)[number];
export const ParagraphFontWeightList = ['black', 'regular'] as const;
export type ParagraphFontWeightType = (typeof ParagraphFontWeightList)[number];

export type DBParagraphDefaultProps = {
	/** Sets the visual size. Inherits from the surrounding typography when omitted. */
	size?: ParagraphSizeType;
	/** Sets the font variant: `black` is weight 900, `regular` is 400. */
	fontWeight?: ParagraphFontWeightType;
};
export type DBParagraphProps = DBParagraphDefaultProps & GlobalProps;

/** Groups block-level text. Intended for `DBParagraph` children. */
export type DBTextGroupDefaultProps = {
	/** Adds `0.5lh` of margin above and below every child when enabled. */
	textSpacing?: boolean | string;
};
export type DBTextGroupProps = DBTextGroupDefaultProps &
	GlobalProps &
	AlignmentProps;

export type DBParagraphDefaultState = {};
export type DBParagraphState = DBParagraphDefaultState & GlobalState;
export type DBTextGroupDefaultState = {};
export type DBTextGroupState = DBTextGroupDefaultState & GlobalState;
