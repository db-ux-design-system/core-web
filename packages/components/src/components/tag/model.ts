import {
	ContentSlotProps,
	GlobalProps,
	GlobalState,
	IconProps,
	InitializedState,
	OverflowProps,
	SemanticProps,
	ShowIconProps,
	TagEmphasisProps
} from '../../shared/model';

export const TagBehaviorList = ['static', 'removable'] as const;
export type TagBehaviorType = (typeof TagBehaviorList)[number];

export type DBTagDefaultProps = {
	/**
	 *	Defines the behavior of the component:
	 *	- static: default behavior without remove button
	 *  - removable: add a remove button at the end of the tag
	 */
	behavior?: TagBehaviorType | string;

	/**
	 * @deprecated Disable tag
	 */
	disabled?: boolean | string;
	/**
	 * Define the text next to the icon specified via the icon Property to get hidden.
	 */
	noText?: boolean | string;
	/**
	 * If "removeButton" attribute is set this function will be called when user clicks cancel button inside the tag.
	 */
	onRemove?: () => void;
	/**
	 * The removeButton attribute shows the cancel button.
	 */
	removeButton?: string;
	/**
	 * Enable/Disable icon for checkbox/radio inside tag.
	 */
	showCheckState?: boolean | string;
	/**
	 * Alternative for children to set content as property.
	 */
	text?: string;

	/**
	 * If "interactive" is set to true, you can pass a value to the underlying checkbox or radio input.
	 */
	value?: string;
};

export type DBTagProps = DBTagDefaultProps &
	GlobalProps &
	IconProps &
	SemanticProps &
	OverflowProps &
	TagEmphasisProps &
	ShowIconProps &
	ContentSlotProps;

export type DBTagDefaultState = {
	getRemoveButtonText: () => string;
	handleRemove: () => void;
};

export type DBTagState = DBTagDefaultState & GlobalState & InitializedState;
