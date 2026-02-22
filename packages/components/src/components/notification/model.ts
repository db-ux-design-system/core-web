import {
	ClickEvent,
	CloseEventProps,
	CloseEventState,
	GlobalProps,
	GlobalState,
	IconProps,
	InnerCloseButtonProps,
	PopoverProps,
	RoleProps,
	SemanticProps,
	ShowIconProps,
	TextProps
} from '../../shared/model';

export const NotificationVariantList = [
	'docked',
	'standalone',
	'overlay'
] as const;
export type NotificationVariantType = (typeof NotificationVariantList)[number];

export const NotificationLinkVariantList = ['block', 'inline'] as const;
export type NotificationLinkVariantType =
	(typeof NotificationLinkVariantList)[number];

export const NotificationAriaLiveList = ['assertive', 'polite', 'off'] as const;
export type NotificationAriaLiveType =
	(typeof NotificationAriaLiveList)[number];

export type DBNotificationDefaultProps = {
	/**
	 * The arialive attribute will lead to that the screenreader interrupts immediately
	 * and reads out the notification if set to "assertive", while it will wait for the
	 * user's idleness when set to "polite", compare to [aria-live](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-live)
	 */
	ariaLive?: NotificationAriaLiveType;

	/**
	 * The closeable attribute shows/hides the close button on the top right.
	 */
	closeable?: boolean | string;

	/**
	 * The headline attribute changes the text of the bold headline.
	 */
	headline?: string | any;

	/**
	 * The slotImage can be set instead of an icon.
	 */
	image?: any;

	/**
	 * The slotLink can be set for non overlay-notifications
	 */
	link?: any;

	/**
	 * The linkVariant will be used if slotLink is set.
	 */
	linkVariant?: NotificationLinkVariantType;

	/**
	 * Enables or disables the visibility of the headline.
	 */
	showHeadline?: boolean | string;

	/**
	 * The timestamp attribute can be set for overlay notifications
	 */
	timestamp?: string;

	/**
	 * Enables or disables the visibility of the timestamp.
	 */
	showTimestamp?: boolean | string;

	/**
	 * The variant attribute changes the styling of the notification.
	 * - The docked notifications are used e.g. between header and main content to show a global alert.
	 * - The standalone notifications are used  e.g. inside a form to show an alert for a specific field.
	 * - The overlay notifications are used for absolute and floating notifications like snackbars etc.
	 */
	variant?: NotificationVariantType;
};

export type DBNotificationProps = DBNotificationDefaultProps &
	GlobalProps &
	RoleProps &
	CloseEventProps<ClickEvent<HTMLButtonElement>> &
	IconProps &
	SemanticProps &
	InnerCloseButtonProps &
	PopoverProps &
	ShowIconProps &
	TextProps;

export type DBNotificationDefaultState = {};

export type DBNotificationState = DBNotificationDefaultState &
	GlobalState &
	CloseEventState<ClickEvent<HTMLButtonElement>>;
