import {
	CloseEventProps,
	CloseEventState,
	GlobalProps,
	GlobalState,
	IconProps,
	InnerCloseButtonProps,
	PopoverProps,
	SemanticProps
} from '../../shared/model';

export interface DBNotificationDefaultProps {
	/**
	 * The arialive attribute will lead to that the screenreader interrupts immediately
	 * and reads out the notification if set to "assertive", while it will wait for the
	 * user's idleness when set to "polite", compare to [aria-live](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-live)
	 */
	ariaLive?: 'assertive' | 'polite' | 'off' | undefined;

	/**
	 * The behaviour attribute shows/hides the close button on the top right.
	 */
	behaviour?: 'closable' | 'permanent';

	/**
	 * The headline attribute changes the text of the bold headline.
	 */
	headline?: string;

	/**
	 * The linkVariant will be used if slotLink is set.
	 */
	linkVariant?: 'block' | 'inline';

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
	variant?: 'docked' | 'standalone' | 'overlay';
}

export type DBNotificationProps = DBNotificationDefaultProps &
	GlobalProps &
	CloseEventProps &
	IconProps &
	SemanticProps &
	InnerCloseButtonProps &
	PopoverProps;

export interface DBNotificationDefaultState {}

export type DBNotificationState = DBNotificationDefaultState &
	GlobalState &
	CloseEventState;
