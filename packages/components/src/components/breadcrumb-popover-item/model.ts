import type {
	GlobalProps,
	GlobalState
} from '../../shared/model';

export type DBBreadcrumbPopoverItemDefaultProps = {
	/**
	 * Accessible label for the truncation toggle that opens the popover with
	 * the hidden breadcrumb items.
	 *
	 * Default: `Show more breadcrumbs`.
	 */
	label?: string;
};

export type DBBreadcrumbPopoverItemProps = DBBreadcrumbPopoverItemDefaultProps &
	GlobalProps;

export type DBBreadcrumbPopoverItemDefaultState = {};

export type DBBreadcrumbPopoverItemState = DBBreadcrumbPopoverItemDefaultState &
	GlobalState;
