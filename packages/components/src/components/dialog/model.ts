import type {
	CancelEventProps,
	ClickEvent,
	CloseEventProps,
	CloseEventState,
	DialogDrawerDefaultState,
	GeneralEvent,
	GlobalProps,
	GlobalState
} from '../../shared/model';

export const DialogBackdropList = ['none', 'strong', 'weak'] as const;
export type DialogBackdropType = (typeof DialogBackdropList)[number];

export const DialogContainerSizeList = [
	'small',
	'medium',
	'large',
	'full'
] as const;
export type DialogContainerSizeType = (typeof DialogContainerSizeList)[number];

export type DBDialogDefaultProps = {
	/**
	 * The backdrop attribute changes the opacity of the backdrop.
	 * The backdrop 'none' will use `dialog.show()` instead of `dialog.showModal()`
	 */
	backdrop?: DialogBackdropType;

	/**
	 * Change the maximum inline size of the dialog. Defaults to `medium`.
	 */
	containerSize?: DialogContainerSizeType;

	/**
	 * Slot for changing the header of the dialog.
	 */
	header?: any;

	/**
	 * Slot for changing the footer of the dialog.
	 */
	footer?: any;

	/**
	 * The open attribute opens or closes the dialog based on the state.
	 */
	open?: boolean | string;

	/**
	 * React specific onClick to pass to forward ref. Composed with the
	 * backdrop-close ponyfill, so a consumer handler still fires.
	 */
	onClick?: (event: ClickEvent<HTMLDialogElement>) => void;
};

export type DBDialogProps = DBDialogDefaultProps &
	GlobalProps &
	CancelEventProps<HTMLDialogElement> &
	CloseEventProps<GeneralEvent<HTMLDialogElement>>;

export type DBDialogDefaultState = DialogDrawerDefaultState;

export type DBDialogState = DBDialogDefaultState &
	GlobalState &
	CloseEventState<GeneralEvent<HTMLDialogElement>>;
