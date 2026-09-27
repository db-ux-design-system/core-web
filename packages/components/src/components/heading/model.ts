import type {
	AlignmentProps,
	EndSlotProps,
	GlobalProps,
	GlobalState,
	StartSlotProps,
	TextProps
} from '../../shared/model';

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
export type DBHeadingBaseDefaultProps = {
	/** Sets the visual size independently from the fixed semantic level. */
	size?: HeadingSizeType;
	/** Sets the headline font weight. Defaults to `black`. */
	fontWeight?: HeadingFontWeightType;
	/** Adds exactly `1lh` of margin at block-end when enabled. */
	paragraphSpacing?: boolean | string;
};
/** @public */
export type DBHeadingBaseProps = DBHeadingBaseDefaultProps &
	GlobalProps &
	AlignmentProps;

/**
 * Styling wrapper for a consumer-authored native heading plus optional sibling
 * content. Mirrors the Heading styling API the same way `DBCustomButton` mirrors
 * `DBButton`: the wrapper carries the styling properties, the nested native
 * element carries the native attributes.
 *
 * The default slot takes the native heading, `startSlot` and `endSlot` take the
 * content around it. Because that content is a sibling of the heading instead of
 * one of its children, it stays out of the accessible heading name.
 *
 * @public
 */
export type DBCustomHeadingDefaultProps = DBHeadingBaseDefaultProps;
/** @public */
export type DBCustomHeadingProps = DBHeadingBaseDefaultProps &
	GlobalProps &
	AlignmentProps &
	StartSlotProps &
	EndSlotProps;

/** @public */
export type DBHeadingH1DefaultProps = DBHeadingBaseDefaultProps;
/** @public */ export type DBHeadingH1Props = DBHeadingBaseDefaultProps &
	GlobalProps &
	AlignmentProps &
	TextProps;
/** @public */
export type DBHeadingH2DefaultProps = DBHeadingBaseDefaultProps;
/** @public */ export type DBHeadingH2Props = DBHeadingBaseDefaultProps &
	GlobalProps &
	AlignmentProps &
	TextProps;
/** @public */
export type DBHeadingH3DefaultProps = DBHeadingBaseDefaultProps;
/** @public */ export type DBHeadingH3Props = DBHeadingBaseDefaultProps &
	GlobalProps &
	AlignmentProps &
	TextProps;
/** @public */
export type DBHeadingH4DefaultProps = DBHeadingBaseDefaultProps;
/** @public */ export type DBHeadingH4Props = DBHeadingBaseDefaultProps &
	GlobalProps &
	AlignmentProps &
	TextProps;
/** @public */
export type DBHeadingH5DefaultProps = DBHeadingBaseDefaultProps;
/** @public */ export type DBHeadingH5Props = DBHeadingBaseDefaultProps &
	GlobalProps &
	AlignmentProps &
	TextProps;
/** @public */
export type DBHeadingH6DefaultProps = DBHeadingBaseDefaultProps;
/** @public */ export type DBHeadingH6Props = DBHeadingBaseDefaultProps &
	GlobalProps &
	AlignmentProps &
	TextProps;

export type DBCustomHeadingDefaultState = {};
export type DBCustomHeadingState = DBCustomHeadingDefaultState & GlobalState;
export type DBHeadingH1DefaultState = {};
export type DBHeadingH1State = DBHeadingH1DefaultState & GlobalState;
export type DBHeadingH2DefaultState = {};
export type DBHeadingH2State = DBHeadingH2DefaultState & GlobalState;
export type DBHeadingH3DefaultState = {};
export type DBHeadingH3State = DBHeadingH3DefaultState & GlobalState;
export type DBHeadingH4DefaultState = {};
export type DBHeadingH4State = DBHeadingH4DefaultState & GlobalState;
export type DBHeadingH5DefaultState = {};
export type DBHeadingH5State = DBHeadingH5DefaultState & GlobalState;
export type DBHeadingH6DefaultState = {};
export type DBHeadingH6State = DBHeadingH6DefaultState & GlobalState;
