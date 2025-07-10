import {
	BaseFormProps,
	ChangeEventProps,
	ChangeEventState,
	FormCheckProps,
	GlobalProps,
	GlobalState,
	IconProps,
	ShowIconProps,
	ValueProps
} from '../../shared/model';

export const CustomSelectListItemTypeList = ['checkbox', 'radio'] as const;
export type CustomSelectListItemTypeType =
	(typeof CustomSelectListItemTypeList)[number];

export type DBCustomSelectListItemExtraProps = {
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

export type DBCustomSelectListItemDefaultProps = {
	/**
	 * Set the title of a group of items - disables radio/checkbox behavior
	 */
	groupTitle?: string;
	/**
	 * Change the behavior of the item single(radio) or multiple(checkbox)
	 */
	type?: CustomSelectListItemTypeType;
};

export type DBCustomSelectListItemProps = DBCustomSelectListItemDefaultProps &
	GlobalProps &
	BaseFormProps &
	ValueProps &
	FormCheckProps &
	ChangeEventProps<HTMLInputElement> &
	DBCustomSelectListItemExtraProps;

export type DBCustomSelectListItemDefaultState = {
	getIconTrailing: () => string | undefined;
	hasDivider?: boolean;
};

export type DBCustomSelectListItemState = DBCustomSelectListItemDefaultState &
	ChangeEventState<HTMLInputElement> &
	GlobalState;
