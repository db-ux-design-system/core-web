import {
	CardProps,
	ClickEventProps,
	ClickEventState,
	DefaultVariantProps,
	GlobalProps,
	GlobalState,
	IconProps,
	InnerCloseButtonProps,
	LinkProps
} from '../../shared/model';

export interface DBAlertDefaultProps {
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
	 * The closeButtonText attribute changes the text inside the close button (only visible with behaviour="closeable").
	 */
	closeButtonText?: string;
	/**
	 * The headline attribute changes the text of the bold headline.
	 */
	headline?: string;
	/**
	 * The link attribute changes the props of the link (only available when using slotLink).
	 */
	link?: LinkProps;

	/**
	 * The type attribute changes the styling of the alert.
	 * The inline alert has a box-shadow and rounded corners (similar to card).
	 */
	type?: 'alert' | 'inline';
}

export type DBAlertProps = DBAlertDefaultProps &
	GlobalProps &
	ClickEventProps &
	IconProps &
	CardProps &
	DefaultVariantProps &
	InnerCloseButtonProps;

export interface DBAlertDefaultState {}

export type DBAlertState = DBAlertDefaultState & GlobalState & ClickEventState;
