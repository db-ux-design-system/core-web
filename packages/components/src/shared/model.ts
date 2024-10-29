/* eslint-disable @typescript-eslint/no-explicit-any */

import { IconTypes } from './icon-types';

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
	class?: string;

	/**
	 * [`aria-describedby`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) is used to link to the elements that describe the element with the set attribute.
	 */
	describedbyid?: string;

	/**
	 * [ID](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id) of the component, generated automatically for some components as a fallback if unset.
	 */
	id?: string;

	/**
	 * React specific for render process.
	 */
	key?: string;
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
	 * Define an icon by its identifier (like e.g. _user_, compare to [Icons](https://db-ui.github.io/mono/review/main/foundations/icons/overview)) to get displayed in front of the elements content.
	 */
	icon?: IconTypes | string;
};

export type IconAfterProps = {
	/**
	 * Define an icon by its identifier (like e.g. _user_, compare to [Icons](https://db-ui.github.io/mono/review/main/foundations/icons/overview)) to get displayed in front of the elements content.
	 */
	iconAfter?: IconTypes | string;
};

export const SpacingList = ['medium', 'small', 'large', 'none'] as const;
export type SpacingType = (typeof SpacingList)[number];

export type SpacingProps = {
	/**
	 * The spacing attribute changes the padding of the component.
	 */
	spacing?: SpacingType;
};
export const MarginList = ['medium', 'small', 'large', 'none'] as const;
export type MarginType = (typeof MarginList)[number];

export type MarginProps = {
	/**
	 * The margin attribute changes the margin of the component.
	 */
	margin?: MarginType;
};

export const PlacementList = [
	'left',
	'right',
	'top',
	'bottom',
	'left-start',
	'left-end',
	'right-start',
	'right-end',
	'top-start',
	'top-end',
	'bottom-start',
	'bottom-end'
] as const;
export type PlacementType = (typeof PlacementList)[number];
export type PlacementProps = {
	/**
	 * The `placement` attributes values change the position to absolute and adds a transform based on the placement.
	 */
	placement?: PlacementType;
};

export type NavigationBehaviourState = {
	handleNavigationItemClick: (event: unknown) => void;
};

export type GapProps = {
	/**
	 * If the absolute element should have a gap between the parent element.
	 */
	gap?: boolean;
};

export type OverflowProps = {
	/**
	 * The overflow attribute sets a max-width and longer text will be dotted.
	 */
	overflow?: boolean;
};

export const OrientationList = ['horizontal', 'vertical'] as const;
export type OrientationType = (typeof OrientationList)[number];
export type OrientationProps = {
	orientation?: OrientationType;
};

export const WidthList = ['full', 'auto'] as const;
export type WidthType = (typeof WidthList)[number];
export type WidthProps = {
	/**
	 * Width of the component. Auto width based on children size, full width based on parent elements width.
	 */
	width?: WidthType;
};

export const MaxWidthList = ['full', 'medium', 'large'] as const;
export type MaxWidthType = (typeof MaxWidthList)[number];

export type ContainerWidthProps = {
	/**
	 * Set max width for the component
	 */
	width?: MaxWidthType;
};

export const PopoverDelayList = ['none', 'slow', 'fast'] as const;
export type PopoverDelayType = (typeof PopoverDelayList)[number];
export const PopoverAnimationList = ['enabled', 'disabled'] as const;
export type PopoverAnimationType = (typeof PopoverAnimationList)[number];
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
	animation?: PopoverAnimationType;
	/**
	 * Use fixed with for default max-width
	 */
	width?: PopoverWidthType;
};

export type PopoverState = {
	handleAutoPlacement: () => void;
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

export const CustomValidityList = [
	'invalid',
	'valid',
	'no-validation'
] as const;
export type CustomValidityType = (typeof CustomValidityList)[number];
export type FormProps = {
	/**
	 * Marks an input element as invalid (red) | valid(green) | no-validation(grey). Overwrites the :user-valid selector.
	 */
	customValidity?: CustomValidityType;
	/**
	 * The disabled attribute can be set to keep a user from clicking on the form element.
	 */
	disabled?: boolean;
	/**
	 * 	Associates the control with a form element
	 */
	form?: string;

	/**
	 * The label attribute specifies the caption of the form element.
	 */
	label?: string;

	/**
	 * The name attribute gives the name of the form control, as used in form submission and in the form element's elements object.
	 */
	name?: string;

	/**
	 * When the required attribute specified, the user will be required to fill the form element before submitting the form.
	 */
	required?: boolean;
	/**
	 * The value property is to receive results from the native form element.
	 */
	value?: any;
};

export type FormTextProps = {
	/**
	 * Maximum length (number of characters) of value
	 */
	maxLength?: number;
	/**
	 * Minimum length (number of characters) of value
	 */
	minLength?: number;
	/**
	 * The disabled attribute can be set to keep a user from edit on the form element
	 */
	readOnly?: boolean;
};

export const CheckVariantList = ['hidden'] as const;
export type CheckVariantType = (typeof CheckVariantList)[number];
export type FormCheckProps = {
	/**
	 * Define the radio or checkbox elements checked state
	 */
	checked?: boolean;

	/**
	 * Hide the label of a radio/checkbox.
	 */
	variant?: CheckVariantType;
};

export const LabelVariantList = ['above', 'floating', 'hidden'] as const;
export type LabelVariantType = (typeof LabelVariantList)[number];
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
};

export type FormState = {
	_messageId?: string;
	_validMessageId?: string;
	_invalidMessageId?: string;
	_descByIds?: string;
	_value?: string;

	/**
	 * https://www.davidmacd.com/blog/test-aria-describedby-errormessage-aria-live.html
	 * Currently VoiceOver isn't supporting changes from aria-describedby.
	 * This is an internal Fallback
	 */
	_voiceOverFallback?: string;
};

export type InitializedState = {
	initialized: boolean;
};

export const LinkCurrentList = [
	'time',
	'true',
	'false',
	'date',
	'page',
	'step',
	'location'
] as const;
export type LinkCurrentType = (typeof LinkCurrentList)[number];
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
	current?: boolean | LinkCurrentType;
	disabled?: boolean;
	href?: string;
	hreflang?: string;
	label?: string;
	target?: LinkTargetType;
	rel?: string;
	role?: string;
	referrerpolicy?: LinkReferrerPolicyType;
	selected?: boolean;
	text?: string;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export type ClickEvent<T> = MouseEvent;
export type ClickEventProps<T> = {
	/**
	 * React specific onClick to pass to forward ref.
	 */
	onClick?: (event: ClickEvent<T>) => void;
};

export type ClickEventState<T> = {
	handleClick: (event: ClickEvent<T>) => void;
};

export type ToggleEventProps = {
	onToggle?: (open: boolean) => void;
};

export type ToggleEventState<T> = {
	toggle: (event?: ClickEvent<T>) => void;
};

export type CloseEventProps = {
	/**
	 * Function to handle button click (close).
	 */
	onClose?: (event?: any) => void;
};

export type CloseEventState = {
	handleClose: (event: any) => void;
};

export const AlignmentList = ['start', 'center'] as const;
export type AlignmentType = (typeof AlignmentList)[number];
export type AlignmentProps = {
	/**
	 * Define the content alignment in full width
	 */
	alignment?: AlignmentType;
};

export type ActiveProps = {
	/**
	 * If the tab is checked/active.
	 */
	active?: boolean;
};

export type ItemClickState = {
	clickedId: string;
	handleItemClick: (id: string) => void;
};

export type InputEvent<T> = Event;
export type InputEventProps<T> = {
	input?: (event: InputEvent<T>) => void;
	onInput?: (event: InputEvent<T>) => void;
};

export type InputEventState<T> = {
	handleInput: (event: InputEvent<T>) => void;
};

export type ChangeEvent<T> = Event;
export type ChangeEventProps<T> = {
	change?: (event: ChangeEvent<T>) => void;
	onChange?: (event: ChangeEvent<T>) => void;
};

export type ChangeEventState<T> = {
	handleChange: (event: ChangeEvent<T>) => void;
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
	handleBlur: (event: InteractionEvent<T>) => void;
	handleFocus: (event: InteractionEvent<T>) => void;
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

export type AriaLabelledByProps = {
	/**
	 * Pass aria-labelledby to inner element
	 */
	labelledBy?: string;
};

export type AriaControlsProps = {
	/**
	 * Pass aria-controls to inner element
	 */
	controls?: string;
};

export type ValueLabelType = {
	value: string;
	label?: string;
};
