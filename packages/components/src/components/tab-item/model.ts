import {
	ActiveProps,
	ChangeEventProps,
	ChangeEventState,
	GlobalProps,
	GlobalState,
	IconLeadingProps,
	IconProps,
	IconTrailingProps,
	InitializedState,
	NameProps,
	NameState,
	ShowIconLeadingProps,
	ShowIconProps,
	ShowIconTrailingProps
} from '../../shared/model';

export type DBTabItemDefaultProps = {
	/**
	 * To control the component
	 */
	checked?: boolean | string;

	/**
	 * The disabled attribute can be set to keep a user from clicking on the tab-item.
	 */
	disabled?: boolean | string;
	/**
	 * The label of the tab-item, if you don't want to use children.
	 */
	label?: string;
	/**
	 * Define the text next to the icon specified via the icon Property to get hidden.
	 */
	noText?: boolean | string;
};

export type DBTabItemProps = GlobalProps &
	DBTabItemDefaultProps &
	IconProps &
	IconTrailingProps &
	IconLeadingProps &
	ShowIconLeadingProps &
	ShowIconTrailingProps &
	ActiveProps &
	ChangeEventProps<HTMLButtonElement> &
	ShowIconProps &
	NameProps;

export type DBTabItemDefaultState = {
	_selected: boolean;
};

export type DBTabItemState = DBTabItemDefaultState &
	GlobalState &
	ChangeEventState<HTMLButtonElement> &
	InitializedState &
	NameState;
