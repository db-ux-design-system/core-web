import type {
	GeneralEvent,
	GlobalProps,
	GlobalState,
	PlacementProps,
	PopoverProps
} from '../../shared/model';

export type DBBreadcrumbTruncationItemDefaultProps = {
	/**
	 * Accessible label for the truncation toggle that opens the popover with
	 * the hidden breadcrumb items.
	 *
	 * Default: `Show more breadcrumbs`.
	 */
	label?: string;
};

export type DBBreadcrumbTruncationItemProps =
	DBBreadcrumbTruncationItemDefaultProps &
		GlobalProps &
		PlacementProps &
		PopoverProps;

export type DBBreadcrumbTruncationItemDefaultState = {
	/**
	 * Callback id of the document click listener, registered while the popover
	 * is open so an outside click closes it.
	 */
	_documentClickListenerCallbackId?: string;
	/**
	 * Callback id of the document scroll listener, registered while the popover
	 * is open so it repositions on scroll.
	 */
	_documentScrollListenerCallbackId?: string;
	/**
	 * Callback id of the resize observer, registered while the popover is open
	 * so it repositions when the viewport changes.
	 */
	_resizeObserverCallbackId?: string;
	/**
	 * Handles the native `<details>` toggle: (de)registers the outside-click,
	 * scroll and resize handling depending on the open state.
	 */
	handleToggle: (event: GeneralEvent<HTMLDetailsElement>) => void;
	/**
	 * Closes the popover when a click happens outside the `<details>`.
	 */
	handleDocumentClose: (event: any) => void;
	/**
	 * Positions the popover so it stays within the viewport (flips when it
	 * would overflow an edge).
	 */
	handleAutoPlacement: () => void;
	/**
	 * Removes the listeners/observers registered while the popover was open.
	 */
	removeListeners: () => void;
};

export type DBBreadcrumbTruncationItemState =
	DBBreadcrumbTruncationItemDefaultState & GlobalState;
