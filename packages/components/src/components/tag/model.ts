import {
	ChangeEventProps,
	ChangeEventState,
	DefaultVariantProps,
	EmphasisProps,
	FormCheckProps,
	FormProps,
	FormState,
	GlobalProps,
	GlobalState,
	IconProps,
	InitializedState,
	OverflowProps
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
	 * The removeButton attribute shows the cancel button.
	 */
	removeButton?: string;
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
	DefaultVariantProps &
	OverflowProps &
	EmphasisProps;

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
	InitializedState;
