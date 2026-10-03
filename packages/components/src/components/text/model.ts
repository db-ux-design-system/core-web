import type {
	AlignmentProps,
	GapSpacingProps,
	GlobalProps,
	GlobalState
} from '../../shared/model';

/** @public */
export const TextSizeList = [
	'3xl',
	'2xl',
	'xl',
	'lg',
	'md',
	'sm',
	'xs',
	'2xs',
	'3xs'
] as const;
/** @public */
export type TextSizeType = (typeof TextSizeList)[number];

/** @public */
export type DBTextBaseDefaultProps = {
	/**
	 * Sets the visual size. Omitting it inherits the size from the surrounding
	 * typography, which is why there is no default.
	 */
	size?: TextSizeType;
};

/**
 * Inline text. Renders a `span`, so it is valid phrasing content and can be
 * nested inside any element that accepts it, for example `dt`, `legend` or
 * `figcaption`.
 *
 * @public
 */
export type DBTextOwnProps = {
	/**
	 * Hides the text visually while keeping it available to assistive
	 * technology.
	 */
	visuallyHidden?: boolean | string;
};
/** @public */
export type DBTextDefaultProps = DBTextBaseDefaultProps & DBTextOwnProps;
/** @public */
export type DBTextProps = DBTextBaseDefaultProps & DBTextOwnProps & GlobalProps;

/**
 * Block-level body copy. Renders a `p`.
 *
 * @public
 */
export type DBParagraphDefaultProps = DBTextBaseDefaultProps;
/** @public */
export type DBParagraphProps = DBTextBaseDefaultProps &
	GlobalProps &
	AlignmentProps;

/**
 * Groups paragraphs and spaces them with a shared `gap`. Intended for
 * `DBParagraph` children.
 *
 * @public
 */
export type DBParagraphGroupDefaultProps = DBTextBaseDefaultProps;
/** @public */
export type DBParagraphGroupProps = DBTextBaseDefaultProps &
	GlobalProps &
	AlignmentProps &
	GapSpacingProps;

export type DBTextDefaultState = {};
export type DBTextState = DBTextDefaultState & GlobalState;
export type DBParagraphDefaultState = {};
export type DBParagraphState = DBParagraphDefaultState & GlobalState;
export type DBParagraphGroupDefaultState = {};
export type DBParagraphGroupState = DBParagraphGroupDefaultState & GlobalState;
