import {
	ClickEventProps,
	ClickEventState,
	GlobalProps,
	GlobalState,
	IconProps,
	IconState
} from '../../shared/model';

export type DBButtonDefaultProps = {
	/**
	 * If the button controls a grouping of other elements, the ariaexpanded state indicates whether the controlled grouping is currently expanded or collapsed.
	 */
	ariaexpanded?: boolean;

	/**
	 * Defines the button as a toggle button. The value of aria-pressed describes the state of the button.
	 */
	ariapressed?: boolean;

	/**
	 * The disabled attribute can be set to keep a user from clicking on the button.
	 */
	disabled?: boolean;

	/**
	 * Define the text next to the icon specified via the icon Property to get shown.
	 */
	icntxt?: boolean; // We had to rename this to icntxt because wc uses a regex and always finds "icon" instead of "onlyIcon"

	/**
	 * The label represents the aria-label of the button
	 */
	label?: string;

	/**
	 * The name attribute specifies a name for the button.
	 */
	name?: string;

	/**
	 * The type attribute specifies the type of button.
	 */
	type?: 'button' | 'reset' | 'submit';

	/**
	 * The value attribute specifies an initial value for the button.
	 */
	value?: string;

	/**
	 * Show loading progress inside button.
	 */
	state?: 'loading';

	/**
	 * The size of the button
	 */
	size?: 'small';

	/**
	 * Fallback for text inside button if you don't/can't use slot/children.
	 */
	text?: string;

	/**
	 * Width of the button. Auto width based on text size, full width based on parent width.
	 */
	width?: 'full' | 'auto';

	/**
	 * Width of the button. Auto width based on text size, full width based on parent width.
	 */
	variant?: 'outlined' | 'primary' | 'solid' | 'text';
};

export type DBButtonProps = DBButtonDefaultProps &
	GlobalProps &
	ClickEventProps &
	IconProps;

export type DBButtonDefaultState = {};

export type DBButtonState = DBButtonDefaultState &
	GlobalState &
	ClickEventState &
	IconState;
