import { GapSpacingProps, GlobalProps, GlobalState } from '../../shared/model';

export const StackVariantList = ['simple', 'divider'] as const;
export type StackVariantType = (typeof StackVariantList)[number];

export const StackDirectionList = ['row', 'column'] as const;
export type StackDirectionType = (typeof StackDirectionList)[number];

export const StackAlignmentList = [
	'stretch',
	'start',
	'end',
	'center'
] as const;
export type StackAlignmentType = (typeof StackAlignmentList)[number];

export const StackJustifyContentList = [
	'space-between',
	'start',
	'end',
	'center'
] as const;
export type StackJustifyContentType = (typeof StackJustifyContentList)[number];

export type DBStackDefaultProps = {
	/**
	 * Change variant of stack. To use variant="divider" add a DBDivider after each element
	 */
	variant?: StackVariantType;
	/**
	 * Set the direction of the stack. Defaults to "column"
	 */
	direction?: StackDirectionType;
	/**
	 * If the stack should wrap if parent is too small otherwise you get an overflow
	 */
	wrap?: boolean | string;
	/**
	 * Represents css align-items
	 */
	alignment?: StackAlignmentType;
	/**
	 * Represents css justify-content
	 */
	justifyContent?: StackJustifyContentType;
};

export type DBStackProps = DBStackDefaultProps & GlobalProps & GapSpacingProps;

export type DBStackDefaultState = {};

export type DBStackState = DBStackDefaultState & GlobalState;
