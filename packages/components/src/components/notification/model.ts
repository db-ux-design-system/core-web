import {
	CloseEventProps,
	CloseEventState,
	GlobalProps,
	GlobalState,
	IconProps,
	InnerCloseButtonProps,
	PopoverProps,
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

export const NotificationBehaviourList = ['closable', 'permanent'] as const;
export type NotificationBehaviourType =
	(typeof NotificationBehaviourList)[number];

export type DBNotificationDefaultProps = {
	/**
	 * The arialive attribute will lead to that the screenreader interrupts immediately
	 * and reads out the notification if set to "assertive", while it will wait for the
	 * user's idleness when set to "polite", compare to [aria-live](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-live)
	 */
	ariaLive?: NotificationAriaLiveType;

	/**
	 * The behaviour attribute shows/hides the close button on the top right.
	 */
	behaviour?: NotificationBehaviourType;

	/**
	 * The headline attribute changes the text of the bold headline.
	 */
	headline?: string | any;

	/**
	 * The linkVariant will be used if slotLink is set.
	 */
	linkVariant?: NotificationLinkVariantType;

	/**
	 * The slotImage can be set instead of an icon.
	 */
	image?: unknown;

	/**
	 * The slotLink can be set for non overlay-notifications
	 */
	link?: unknown;

	/**
	 * The timestamp attribute can be set for overlay notifications
	 */
	timestamp?: string;

	/**
	 * The variant attribute changes the styling of the notification.
	 * The docked notifications are used e.g. between header and main content to show a global alert.
	 * The standalone notifications are used  e.g. inside a form to show an alert for a specific field.
	 * The overlay notifications are used for absolute and floating notifications like snackbars etc.
	 */
	variant?: NotificationVariantType;
};

export type DBNotificationProps = DBNotificationDefaultProps &
	GlobalProps &
	CloseEventProps &
	IconProps &
	SemanticProps &
	InnerCloseButtonProps &
	PopoverProps &
	ShowIconProps &
	TextProps;

export type DBNotificationDefaultState = {};

export type DBNotificationState = DBNotificationDefaultState &
	GlobalState &
	CloseEventState;
