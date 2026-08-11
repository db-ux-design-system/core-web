import type {
	AlignmentProps,
	EndSlotProps,
	GlobalProps,
	GlobalState,
	StartSlotProps
} from '../../shared/model';

/** @public */
export const HeadingAsList = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] as const;

/** @public */
export type HeadingAsType = (typeof HeadingAsList)[number];

/** @public */
export const HeadingSizeList = [
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
export type HeadingSizeType = (typeof HeadingSizeList)[number];

/** @public */
export const HeadingFontWeightList = ['black', 'light'] as const;

/** @public */
export type HeadingFontWeightType = (typeof HeadingFontWeightList)[number];

/** @public */
export type DBHeadingDefaultProps = {
	/**
	 * Selects the native heading element. Choose this from the document
	 * hierarchy; use `size` when only the visual size should change.
	 */
	as: HeadingAsType;
	/**
	 * Sets the visual headline size independently from the semantic `as` level.
	 * If omitted, the component maps h1 through h6 to the corresponding default
	 * headline sizes.
	 */
	size?: HeadingSizeType;
	/** Sets the headline font weight. Defaults to `black`. */
	fontWeight?: HeadingFontWeightType;
	/** Adds exactly `1lh` of margin at block-end when enabled. */
	paragraphSpacing?: boolean | string;
	/**
	 * Main heading content. Use phrasing content only; this content defines the
	 * accessible heading name together with non-decorative slot content.
	 */
	children?: any;
	/**
	 * Optional phrasing content rendered before `children`. Hide decorative
	 * content from assistive technology with `aria-hidden="true"`.
	 */
	startSlot?: any;
	/**
	 * Optional phrasing content rendered after `children`. Hide decorative
	 * content from assistive technology with `aria-hidden="true"`.
	 */
	endSlot?: any;
};

/** @public */
export type DBHeadingProps = DBHeadingDefaultProps &
	GlobalProps &
	AlignmentProps &
	StartSlotProps &
	EndSlotProps;

export type DBHeadingDefaultState = {};

export type DBHeadingState = DBHeadingDefaultState & GlobalState;
