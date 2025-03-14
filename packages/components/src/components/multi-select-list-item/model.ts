import {
	BaseFormProps,
	ChangeEventProps,
	ChangeEventState,
	FormCheckProps,
	FormProps,
	GlobalProps,
	GlobalState,
	IconProps,
	ShowIconProps,
	ValueProps
} from '../../shared/model';

export const MultiSelectListItemTypeList = ['checkbox', 'radio'] as const;
export type MultiSelectListItemTypeType =
	(typeof MultiSelectListItemTypeList)[number];

export type DBMultiSelectListItemExtraProps = {
	/**
	 * If the item is a group title (only text)
	 */
	isGroupTitle?: boolean;
	/**
	 * Show a divider on the bottom of the list item for visual grouping (don't use it on every item)
	 */
	showDivider?: boolean;
} & IconProps &
	ShowIconProps;

export type DBMultiSelectListItemDefaultProps = {
	/**
	 * Set the title of a group of items - disables radio/checkbox behavior
	 */
	groupTitle?: string;
	/**
	 * Change the behavior of the item single(radio) or multiple(checkbox)
	 */
	type?: MultiSelectListItemTypeType;
};

export type DBMultiSelectListItemProps = DBMultiSelectListItemDefaultProps &
	GlobalProps &
	BaseFormProps &
	ValueProps &
	FormCheckProps &
	ChangeEventProps<HTMLInputElement> &
	DBMultiSelectListItemExtraProps;

export type DBMultiSelectListItemDefaultState = {
	getIconAfter: () => string | undefined;
};

export type DBMultiSelectListItemState = DBMultiSelectListItemDefaultState &
	ChangeEventState<HTMLInputElement> &
	GlobalState;
