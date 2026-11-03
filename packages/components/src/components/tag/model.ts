import {
	AltStateColorState,
	AltStateMaterialProps,
	ClickEvent,
	ColorState,
	ContentSlotProps,
	EmphasisProps,
	GlobalProps,
	GlobalState,
	IconProps,
	MaterialProps,
	MaterialType,
	NoTextProps,
	OverflowProps,
	SemanticProps,
	ShowIconProps
} from '../../shared/model';

export const TagBehaviorList = ['static', 'removable'] as const;
export type TagBehaviorType = (typeof TagBehaviorList)[number];

export type DBTagEventsProps = {
	/**
	 * If "removeButton" attribute is set this function will be called when user clicks cancel button inside the tag.
	 */
	onRemove?: (event?: ClickEvent<HTMLButtonElement> | void) => void;
	/**
	 * If "removeButton" attribute is set this function will be called when user clicks cancel button inside the tag.
	 */
	remove?: (event?: ClickEvent<HTMLButtonElement> | void) => void;
};

export type DBTagDefaultProps = {
	/**
	 *	Defines the behavior of the component:
	 *	- static: default behavior without remove button
	 *  - removable: add a remove button at the end of the tag
	 */
	behavior?: TagBehaviorType | string;

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
	MaterialProps &
	AltStateMaterialProps &
	IconProps &
	SemanticProps &
	OverflowProps &
	EmphasisProps &
	ShowIconProps &
	ContentSlotProps &
	DBTagEventsProps &
	NoTextProps;

export type DBTagDefaultState = {
	getRemoveButtonText: () => string;
	handleRemove: (event?: ClickEvent<HTMLButtonElement> | void) => void;

	initialized?: boolean;

	/**
	 * Whether the tag wraps an `<input>` (checkbox/radio). A MutationObserver
	 * keeps it in sync with the projected children, because the slotted input is
	 * not yet in the DOM on the first render and `querySelector` at render time
	 * would miss it. Drives the base and alt-state material: a tag with an input
	 * must not be `vibrant` at rest so its checked state can switch to the
	 * vibrant alt-state material.
	 */
	_hasInput?: boolean;
	_inputObserver?: MutationObserver;
	_checkForInput: () => void;

	/**
	 * Resolved materials, recomputed whenever `_hasInput` (or the relevant props)
	 * change. Stored in state - not derived in the template via a getter - so the
	 * change propagates in every framework output.
	 */
	_material?: MaterialType;
	_altStateMaterial?: MaterialType;
	_syncMaterials: () => void;
};

export type DBTagState = DBTagDefaultState &
	GlobalState &
	ColorState &
	AltStateColorState;
