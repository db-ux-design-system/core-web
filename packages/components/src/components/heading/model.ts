import type {
	AlignmentProps,
	GlobalProps,
	GlobalState
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

/** @public */
export type DBHeadingH1DefaultProps = {
	size?: HeadingSizeType;
	fontWeight?: HeadingFontWeightType;
	paragraphSpacing?: boolean | string;
};
/** @public */ export type DBHeadingH1Props = DBHeadingH1DefaultProps &
	GlobalProps &
	AlignmentProps;
/** @public */
export type DBHeadingH2DefaultProps = {
	size?: HeadingSizeType;
	fontWeight?: HeadingFontWeightType;
	paragraphSpacing?: boolean | string;
};
/** @public */ export type DBHeadingH2Props = DBHeadingH2DefaultProps &
	GlobalProps &
	AlignmentProps;
/** @public */
export type DBHeadingH3DefaultProps = {
	size?: HeadingSizeType;
	fontWeight?: HeadingFontWeightType;
	paragraphSpacing?: boolean | string;
};
/** @public */ export type DBHeadingH3Props = DBHeadingH3DefaultProps &
	GlobalProps &
	AlignmentProps;
/** @public */
export type DBHeadingH4DefaultProps = {
	size?: HeadingSizeType;
	fontWeight?: HeadingFontWeightType;
	paragraphSpacing?: boolean | string;
};
/** @public */ export type DBHeadingH4Props = DBHeadingH4DefaultProps &
	GlobalProps &
	AlignmentProps;
/** @public */
export type DBHeadingH5DefaultProps = {
	size?: HeadingSizeType;
	fontWeight?: HeadingFontWeightType;
	paragraphSpacing?: boolean | string;
};
/** @public */ export type DBHeadingH5Props = DBHeadingH5DefaultProps &
	GlobalProps &
	AlignmentProps;
/** @public */
export type DBHeadingH6DefaultProps = {
	size?: HeadingSizeType;
	fontWeight?: HeadingFontWeightType;
	paragraphSpacing?: boolean | string;
};
/** @public */ export type DBHeadingH6Props = DBHeadingH6DefaultProps &
	GlobalProps &
	AlignmentProps;

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
