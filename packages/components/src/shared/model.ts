/* eslint-disable @typescript-eslint/no-explicit-any */

import { IconTypes } from '@db-ux/core-foundations';

export type GlobalProps = {
	/**
	 * default slot
	 */

	children?: any;

	/**
	 * React specific for adding className to the component.
	 */
	className?: string;

	/**
	 * Workaround for TypeScript using class for all components.
	 */
	class?: string | any;

	/**
	 * [ID](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id) of the component, generated automatically for some components as a fallback if unset.
	 */
	id?: string;

	/**
	 * Before using please check for the [accessibility concerns](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/autofocus#accessibility_concerns)
	 */
	autofocus?: boolean | string;
};

export type GlobalState = {
	_id?: string;
};

export const SemanticList = [
	'adaptive',
	'neutral',
	'critical',
	'informational',
	'warning',
	'successful'
] as const;
export type SemanticType = (typeof SemanticList)[number];
export type SemanticProps = {
	/**
	 * The semantic defines the default variants for most components.
	 */
	semantic?: SemanticType;
};

export type IconProps = {
	/**
	 * Define an icon by its identifier (like e.g. _user_, compare to [Icons](https://design-system.deutschebahn.com/core-web/review/main/foundations/icons/overview)) to get displayed in front of the elements content.
	 */
	icon?: IconTypes;
};

export type ShowIconProps = {
	/**
	 * Enables or disables the visibility of the icon. The default value depends on the component.
	 * For many components this property is optional to reflect Figma properties.
	 */
	showIcon?: boolean | string;
};

export type ShowIconLeadingProps = {
	/**
	 * Enables or disables the visibility of the leading icon.
	 * For many components this property is optional to reflect Figma properties.
	 */
	showIconLeading?: boolean | string;
};

export type ShowIconTrailingProps = {
	/**
	 * Enables or disables the visibility of the trailing icon.
	 * For many components this property is optional to reflect Figma properties.
	 */
	showIconTrailing?: boolean | string;
};

export type IconLeadingProps = {
	/**
	 * Define an icon by its identifier (like e.g. _user_, compare to [Icons](https://design-system.deutschebahn.com/core-web/review/main/foundations/icons/overview)) to get displayed in front of the elements content.
	 */
	iconLeading?: IconTypes;
};

export type IconTrailingProps = {
	/**
	 * Define an icon by its identifier (like e.g. _user_, compare to [Icons](https://design-system.deutschebahn.com/core-web/review/main/foundations/icons/overview)) to get displayed in front of the elements content.
	 */
	iconTrailing?: IconTypes;
};

export const SpacingList = ['medium', 'small', 'large', 'none'] as const;
export type SpacingType = (typeof SpacingList)[number];

export type SpacingProps = {
	/**
	 * The spacing attribute changes the padding of the component.
	 */
	spacing?: SpacingType | string;
};
export const MarginList = ['medium', 'small', 'large', 'none'] as const;
export type MarginType = (typeof MarginList)[number];

export type MarginProps = {
	/**
	 * The margin attribute changes the margin of the component.
	 */
	margin?: MarginType;
};

export const PlacementHorizontalList = [
	'left',
	'right',
	'left-start',
	'left-end',
	'right-start',
	'right-end'
] as const;
export type PlacementHorizontalType = (typeof PlacementHorizontalList)[number];

export const PlacementVerticalList = [
	'top',
	'bottom',
	'top-start',
	'top-end',
	'bottom-start',
	'bottom-end'
] as const;
export type PlacementVerticalType = (typeof PlacementVerticalList)[number];

export const PlacementList = [
	...PlacementHorizontalList,
	...PlacementVerticalList
] as const;
export type PlacementType = (typeof PlacementList)[number];
export type PlacementProps = {
	/**
	 * The `placement` attributes values change the position to absolute and adds a transform based on the placement.
	 */
	placement?: PlacementType;
};

export type NavigationBehaviorState = {
	handleNavigationItemClick: (event: any) => void;
};

export type GapProps = {
	/**
	 * If the absolute element should have a gap between the parent element.
	 */
	gap?: boolean | string;
};

export const GapSpacingList = [
	'none',
	'3x-large',
	'2x-large',
	'x-large',
	'large',
	'medium',
	'small',
	'x-small',
	'2x-small',
	'3x-small'
] as const;
export type GapSpacingType = (typeof GapSpacingList)[number];
export type GapSpacingProps = {
	/**
	 * Set the gap/spacing between elements
	 */
	gap?: GapSpacingType;
};

export type OverflowProps = {
	/**
	 * The overflow attribute sets a max-width and longer text will be dotted.
	 */
	overflow?: boolean | string;
};

export type WrapProps = {
	/**
	 * Determines whether the text should wrap when its parent container is too small, preventing overflow.
	 */
	wrap?: boolean | string;
};

export const OrientationList = ['horizontal', 'vertical'] as const;
export type OrientationType = (typeof OrientationList)[number];
export type OrientationProps = {
	/**
	 * Change the orientation. Defaults to horizontal.
	 */
	orientation?: OrientationType;
};

export const WidthList = ['full', 'auto'] as const;
export type WidthType = (typeof WidthList)[number];
export type WidthProps = {
	/**
	 * Width of the component. Auto width based on children size, full width based on parent elements width.
	 */
	width?: WidthType | string;
};

export const MaxWidthList = ['full', 'medium', 'large', 'small'] as const;
export type MaxWidthType = (typeof MaxWidthList)[number];

export type ContainerWidthProps = {
	/**
	 * Set max width for the component
	 */
	width?: MaxWidthType;
};

export const PopoverDelayList = ['none', 'slow', 'fast'] as const;
export type PopoverDelayType = (typeof PopoverDelayList)[number];
export const PopoverWidthList = ['auto', 'fixed'] as const;
export type PopoverWidthType = (typeof PopoverWidthList)[number];
export type PopoverProps = {
	/**
	 * Add a delay before showing the tooltip
	 */
	delay?: PopoverDelayType;
	/**
	 * Disable animation
	 */
	animation?: boolean | string;
	/**
	 * Use fixed with for default max-width
	 */
	width?: PopoverWidthType;
};

export type NameProps = {
	/**
	 * The name attribute gives the name of the element to group it.
	 */
	name?: string;
};

export type NameState = {
	_name?: string;
	handleNameAttribute: () => void;
};

export type ContentSlotProps = {
	/**
	 * Default slot which is used to pass in additional content.
	 */
	content?: any;
};

export const SizeList = ['small', 'medium'] as const;
export type SizeType = (typeof SizeList)[number];
export type SizeProps = {
	/**
	 * The size attribute changes the font-size and other related sizes of the component.
	 */
	size?: SizeType;
};

export const EmphasisList = ['weak', 'strong'] as const;
export type EmphasisType = (typeof EmphasisList)[number];
export type EmphasisProps = {
	/**
	 * The emphasis attribute divides in between a weak or strong importance.
	 */
	emphasis?: EmphasisType;
};

export const ValidationList = ['invalid', 'valid', 'no-validation'] as const;
export type ValidationType = (typeof ValidationList)[number];

/**
 * Properties to control the required state and its visual annotation for input components.
 */
export type RequiredProps = {
	/**
	 * When the required attribute specified, the user will be required to fill the form element before submitting the form.
	 * The form element will be marked semantically as required and by default also visually with an asterisk '*' next to the label (unless the property `showRequiredAsterisk` is also set with the value `false`).
	 */
	required?: boolean | string;
	/**
	 * This attribute allows to specify whether a form field which is marked as required will show a visual indicator (an asterisk '*').
	 * It allows to prevent adding the visual indicator but still keep the field semantically required by setting its value to `false`.
	 * By default, its value is `true`, so the asterisk is shown when `required` is set.
	 */
	showRequiredAsterisk?: boolean | string;
};
export type ShowLabelProps = {
	/**
	 * Enables/disables the visibility of the label
	 */
	showLabel?: boolean | string;
};

export type ValueProps = {
	/**
	 * The value property is to receive results from the native form element.
	 */
	value?: any;
};

export type BaseFormProps = {
	/**
	 * The disabled attribute can be set to keep a user from clicking on the form element.
	 */
	disabled?: boolean | string;
	/**
	 * The label attribute specifies the caption of the form element.
	 */
	label?: string;

	/**
	 * The name attribute gives the name of the form control, as used in form submission and in the form element's elements object.
	 */
	name?: string;
};

export type CustomFormProps = {
	/**
	 * Overwrites auto handling for aria-describedby.
	 */
	ariaDescribedBy?: string;
	/**
	 * 	Associates the control with a form element
	 */
	form?: string;

	/**
	 * Marks an input element as invalid (red) / valid (green) / no-validation (grey). Overwrites the :user-valid selector.
	 */
	validation?: ValidationType;
};

export type FormProps = CustomFormProps &
	BaseFormProps &
	RequiredProps &
	ShowLabelProps &
	ValueProps;

export const FieldSizingList = ['fixed', 'content'] as const;
export type FieldSizingType = (typeof FieldSizingList)[number];

export type FormTextProps = {
	/**
	 * Maximum length (number of characters) of value
	 */
	maxLength?: number | string;
	/**
	 * Minimum length (number of characters) of value
	 */
	minLength?: number | string;
	/**
	 * Maximum length (number of characters) of value
	 */
	maxlength?: number | string;
	/**
	 * Minimum length (number of characters) of value
	 */
	minlength?: number | string;
	/**
	 * The disabled attribute can be set to keep a user from edit on the form element
	 */
	readOnly?: boolean | string;
	/**
	 * The disabled attribute can be set to keep a user from edit on the form element
	 */
	readonly?: boolean | string;

	/**
	 * Adds shrinkwrap for input and textarea: https://developer.mozilla.org/en-US/docs/Web/CSS/field-sizing
	 * Note: Only supported in Chromium browsers so far
	 */
	fieldSizing?: FieldSizingType;
};

export type FormSizeProps = {
	/**
	 * Size of the control
	 */
	size?: number;
};

export type FormCheckProps = {
	/**
	 * Define the radio or checkbox elements checked state
	 */
	checked?: boolean | string;
};

export const LabelVariantList = ['above', 'floating'] as const;
export type LabelVariantType = (typeof LabelVariantList)[number];

export const LabelVariantHorizontalList = ['leading', 'trailing'] as const;
export type LabelVariantHorizontalType =
	(typeof LabelVariantHorizontalList)[number];

export const AutoCompleteList = [
	'off',
	'on',
	'name',
	'honorific-prefix',
	'given-name',
	'additional-name',
	'family-name',
	'honorific-suffix',
	'nickname',
	'email',
	'username',
	'new-password',
	'current-password',
	'one-time-code',
	'organization-title',
	'organization',
	'street-address',
	'shipping',
	'billing',
	'address-line1',
	'address-line2',
	'address-line3',
	'address-level4',
	'address-level3',
	'address-level2',
	'address-level1',
	'country',
	'country-name',
	'postal-code',
	'cc-name',
	'cc-given-name',
	'cc-additional-name',
	'cc-family-name',
	'cc-number',
	'cc-exp',
	'cc-exp-month',
	'cc-exp-year',
	'cc-csc',
	'cc-type',
	'transaction-currency',
	'transaction-amount',
	'language',
	'bday',
	'bday-day',
	'bday-month',
	'bday-year',
	'sex',
	'tel',
	'tel-country-code',
	'tel-national',
	'tel-area-code',
	'tel-local',
	'tel-extension',
	'impp',
	'url',
	'photo',
	'webauthn'
] as const;
export type AutoCompleteType = (typeof AutoCompleteList)[number];
export type FormMessageProps = {
	/**
	 * Change the variant of the label to float or hidden
	 */
	variant?: LabelVariantType;
	/**
	 * Text that appears in the form control when it has no value set
	 */
	placeholder?: string;
	/**
	 * Optional helper message for form components
	 */
	message?: string;

	/**
	 * Helper message for valid form components
	 */
	validMessage?: string;

	/**
	 * Helper message for invalid form components
	 */
	invalidMessage?: string;

	/**
	 * Set/overwrite icon for helper message for form components
	 */
	messageIcon?: IconTypes;

	/**
	 * See https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete
	 */
	autocomplete?: string | AutoCompleteType;

	/**
	 * Enables or disables the visibility of the message.
	 */
	showMessage?: boolean | string;
};

export type FromValidState = {
	hasValidState: () => boolean;
	handleValidation: () => void;
	_invalidMessage?: string;
};

export type FormState = {
	_messageId?: string;
	_validMessageId?: string;
	_invalidMessageId?: string;
	_descByIds?: string;
	_value?: string;
	_invalidMessage?: string;
	/**
	 * https://www.davidmacd.com/blog/test-aria-describedby-errormessage-aria-live.html
	 * Currently VoiceOver isn't supporting changes from aria-describedby.
	 * This is an internal Fallback
	 */
	_voiceOverFallback?: string;

	/**
	 * We use this to remove form event listener
	 */
	abortController?: AbortController;
};

export type InitializedState = {
	initialized: boolean;
};

export const LinkTargetList = ['_self', '_blank', '_parent', '_top'] as const;
export type LinkTargetType = (typeof LinkTargetList)[number];
export const LinkReferrerPolicyList = [
	'no-referrer',
	'no-referrer-when-downgrade',
	'origin',
	'origin-when-cross-origin',
	'same-origin',
	'strict-origin',
	'strict-origin-when-cross-origin',
	'unsafe-url'
] as const;
export type LinkReferrerPolicyType = (typeof LinkReferrerPolicyList)[number];
export type LinkProps = {
	/**
	 * Disables the link.
	 */
	disabled?: boolean | string;
	/**
	 * The [URL that the hyperlink points to](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#href).
	 */
	href?: string;
	/**
	 * Hints for the human [language of the linked page or document](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#hreflang).
	 */
	hreflang?: string;
	/**
	 * Where to open the linked URL, as the name for a [browsing context](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#target).
	 */
	target?: LinkTargetType;
	/**
	 * The relationship of the linked URL as space-separated link types.
	 */
	rel?: string;
	/**
	 * Sets aria role based on [`aria-role`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles).
	 */
	role?: string;
	/**
	 * How much of the referrer to send when following the link.
	 */
	referrerpolicy?: LinkReferrerPolicyType;
};

export type TextProps = {
	/**
	 * Alternative for default slot/children.
	 */
	text?: string;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export type GeneralEvent<T> = Event;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export type GeneralKeyboardEvent<T> = KeyboardEvent;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export type ClickEvent<T> = MouseEvent;
export type ClickEventProps<T> = {
	/**
	 * React specific onClick to pass to forward ref.
	 */
	onClick?: (event: ClickEvent<T>) => void;
};

export type ClickEventState<T> = {
	handleClick: (event: ClickEvent<T> | any) => void;
};

export type ToggleEventProps = {
	toggle?: (open: boolean) => void;
	onToggle?: (open: boolean) => void;
};

export type ToggleEventState<T> = {
	handleToggle: (event?: ClickEvent<T> | any) => void;
};

export type CloseEventProps<T> = {
	/**
	 * Function to handle button click (close).
	 */
	onClose?: (event?: T) => void;
	/**
	 * Function to handle button click (close).
	 */
	close?: (event?: T) => void;
};

export type CloseEventState<T> = {
	handleClose: (event?: T | void, forceClose?: boolean) => void;
};

export const AlignmentList = ['start', 'center'] as const;
export type AlignmentType = (typeof AlignmentList)[number];
export type AlignmentProps = {
	/**
	 * Define the content alignment in full width
	 */
	alignment?: AlignmentType | string;
};

export type ActiveProps = {
	/**
	 * If the tab is checked/active.
	 */
	active?: boolean | string;
};

export type InputEvent<T> = Event;
export type InputEventProps<T> = {
	input?: (event: InputEvent<T>) => void;
	onInput?: (event: InputEvent<T>) => void;
};

export type InputEventState<T> = {
	handleInput: (event: InputEvent<T> | any, reset?: boolean) => void;
};

export type ChangeEvent<T> = Event;
export type ChangeEventProps<T> = {
	change?: (event: ChangeEvent<T>) => void;
	onChange?: (event: ChangeEvent<T>) => void;
};

export type ChangeEventState<T> = {
	handleChange: (event: ChangeEvent<T> | any, reset?: boolean) => void;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export type InteractionEvent<T> = FocusEvent;

export type FocusEventProps<T> = {
	blur?: (event: InteractionEvent<T>) => void;
	onBlur?: (event: InteractionEvent<T>) => void;
	focus?: (event: InteractionEvent<T>) => void;
	onFocus?: (event: InteractionEvent<T>) => void;
};

export type FocusEventState<T> = {
	handleBlur: (event: InteractionEvent<T> | any) => void;
	handleFocus: (event: InteractionEvent<T> | any) => void;
};

export type InnerCloseButtonProps = {
	/**
	 * The closeButtonId attribute changes the id inside the close button.
	 */
	closeButtonId?: string;
	/**
	 * The closeButtonText attribute changes the text inside the close button.
	 */
	closeButtonText?: string;
};

export type NavigationBackButtonProps = {
	/**
	 * The backButtonId attribute changes the id inside the back button.
	 */
	backButtonId?: string;
	/**
	 * The backButtonText attribute changes the text inside the back button.
	 */
	backButtonText?: string;
};

export type AriaControlsProps = {
	/**
	 * Pass `aria-controls` to inner element
	 */
	controls?: string;
};

export type ValueLabelType = {
	value: string;
	label?: string;
};

export type DocumentScrollState = {
	_documentScrollListenerCallbackId?: string;
	handleDocumentScroll: (event: any, parent?: HTMLElement) => void;
	_observer?: IntersectionObserver;
};

export type PopoverState = {
	handleEscape: (event: any) => void;
	handleAutoPlacement: (parent?: HTMLElement) => void;
	handleEnter: (parent?: HTMLElement) => void;
	handleLeave: (event?: any) => void;
} & DocumentScrollState;

// TODO: Remove this after we migrate to one-platform
export interface PatternhubProps {
	/**
	 * Used for Patternhub
	 */
	isPatternhub?: boolean;
}
