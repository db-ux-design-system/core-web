import {
	ActiveProps,
	ClickEventProps,
	GlobalProps,
	GlobalState,
	IconLeadingProps,
	IconProps,
	IconTrailingProps,
	InitializedState,
	ShowIconLeadingProps,
	ShowIconProps,
	ShowIconTrailingProps,
	WidthProps
} from '../../shared/model';

export type DBTabItemDefaultProps = {
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
	 * Set the tabIndex manually (internal use).
	 */
	tabIndex?: number;
};

export type DBTabItemProps = DBTabItemDefaultProps &
	GlobalProps &
	ClickEventProps<HTMLButtonElement> &
	IconProps &
	ShowIconProps &
	IconTrailingProps &
	IconLeadingProps &
	ShowIconTrailingProps &
	ShowIconLeadingProps &
	ActiveProps &
	WidthProps;

export interface DBTabItemState extends GlobalState, InitializedState {}
