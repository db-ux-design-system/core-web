import {
	GlobalTextProps,
	ChangeEventState,
	ChangeEventProps,
	GlobalProps,
	GlobalState,
	DefaultVariantProps,
	FormProps,
	FormState,
	IconProps,
	IconState,
	FormCheckProps,
	InitializedState
} from '../../shared/model';

export interface DBTagDefaultProps {
	/**
	 *	Defines the behaviour of the component:
	 *	- static: default behaviour only label
	 *  - interactive: use the tag like a checkbox
	 *  - interactive-unique: use the tag like a radio
	 *  - removable: add a remove button at the end of the tag
	 */
	behaviour?: 'static' | 'interactive-unique' | 'interactive' | 'removable';

	/**
	 * Define the text next to the icon specified via the icon Property to get hidden.
	 */
	noText?: boolean;
	/**
	 * If "removeButton" attribute is set this function will be called when user clicks cancel button inside the tag.
	 */
	onRemove?: () => void;
	/**
	 * The overflow attribute sets a max-width and longer text will be dotted.
	 */
	overflow?: boolean;
	/**
	 * The removeButton attribute shows the cancel button.
	 */
	removeButton?: string;
	/**
	 * The type attribute divides in between a weak or strong importance.
	 */
	type?: 'weak' | 'strong';
	/**
	 * If "interactive" is set to true, you can pass a value to the underlying checkbox or radio input.
	 */
	value?: string;
}

export type DBTagProps = DBTagDefaultProps &
	GlobalProps &
	ChangeEventProps &
	FormProps &
	FormCheckProps &
	IconProps &
	DefaultVariantProps;

export interface DBTagDefaultState {
	getRemoveButtonText?: () => string;
	getTabIndex?: () => number | null;
	handleRemove?: () => void;
	isInteractive?: () => boolean;
}

export type DBTagState = DBTagDefaultState &
	GlobalState &
	ChangeEventState &
	FormState &
	InitializedState &
	IconState;
