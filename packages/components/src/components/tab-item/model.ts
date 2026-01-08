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
	/**
	 * Handler for click events.
	 */
	onClick?: (event: any) => void;
};

export type DBTabItemProps = GlobalProps &
	DBTabItemDefaultProps &
	IconProps &
	IconTrailingProps &
	IconLeadingProps &
	ShowIconLeadingProps &
	ShowIconTrailingProps &
	ActiveProps &
	ChangeEventProps<HTMLInputElement> &
	ShowIconProps &
	NameProps;

export type DBTabItemDefaultState = {
	_selected: boolean;
	_listenerAdded: boolean;
	boundSetSelectedOnChange?: (event: any) => void;
	setSelectedOnChange: (event: any) => void;
};

export type DBTabItemState = DBTabItemDefaultState &
	GlobalState &
	ChangeEventState<HTMLInputElement> &
	InitializedState &
	NameState;
