import {
	DefaultVariantProps,
	GlobalProps,
	GlobalState,
	IconProps,
	IconState
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
	 * The overflow attribute sets a max-width and longer text will be dotted.
	 */
	overflow?: boolean;
	/**
	 * The removeButton attribute shows the cancel button.
	 */
	removeButton?: string;
	/**
	 * Alternative for children to set content as property.
	 */
	text?: string;

	/**
	 * The emphasis attribute divides in between a weak or strong importance.
	 */
	emphasis?: 'weak' | 'strong';

	/**
	 * If "interactive" is set to true, you can pass a value to the underlying checkbox or radio input.
	 */
	value?: string;
}

export type DBTagProps = DBTagDefaultProps &
	GlobalProps &
	IconProps &
	DefaultVariantProps;

export interface DBTagDefaultState {
	getRemoveButtonText?: () => string;
	getTabIndex?: () => number | null;
	handleRemove?: () => void;
}

export type DBTagState = DBTagDefaultState & GlobalState & IconState;
