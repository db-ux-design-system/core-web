import {
	ChangeEventState,
	DefaultVariantProps,
	EmphasisProps,
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
	 *	- static: default behaviour without remove button
	 *  - removable: add a remove button at the end of the tag
	 */
	behaviour?: 'static' | 'removable';

	/**
	 * Disable tag.
	 */
	disabled?: boolean;
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
	 * Alternative for children to set content as property.
	 */
	text?: string;
	/**
	 * If "interactive" is set to true, you can pass a value to the underlying checkbox or radio input.
	 */
	value?: string;
}

export type DBTagProps = DBTagDefaultProps &
	GlobalProps &
	IconProps &
	DefaultVariantProps &
	OverflowProps &
	EmphasisProps;

export interface DBTagDefaultState {
	getRemoveButtonText?: () => string;
	handleRemove?: () => void;
}

export type DBTagState = DBTagDefaultState &
	GlobalState ;
