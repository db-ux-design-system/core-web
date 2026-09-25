import type {
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

export type DBBreadcrumbTruncationItemDefaultState = {};

export type DBBreadcrumbTruncationItemState =
	DBBreadcrumbTruncationItemDefaultState & GlobalState;
