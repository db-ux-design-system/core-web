import {
	ActiveProps,
	ClickEventProps,
	GlobalProps,
	GlobalState,
	IconLeadingProps,
	IconProps,
	IconTrailingProps,
	InitializedState,
	WidthProps
} from '../../shared/model';

export type DBTabItemDefaultProps = {
	/**
	 * If the tab is currently active/selected.
	 */
	active?: boolean;
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

export type DBTabItemProps = DBTabItemDefaultProps &
	GlobalProps &
	ClickEventProps<HTMLButtonElement> &
	IconProps &
	IconTrailingProps &
	IconLeadingProps &
	ActiveProps &
	WidthProps;

export interface DBTabItemState extends GlobalState, InitializedState {}
