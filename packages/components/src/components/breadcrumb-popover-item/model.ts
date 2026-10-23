import type {
	GlobalProps,
	GlobalState,
	MaterialProps
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
	GlobalProps &
	MaterialProps;

export type DBBreadcrumbPopoverItemDefaultState = {};

export type DBBreadcrumbPopoverItemState = DBBreadcrumbPopoverItemDefaultState &
	GlobalState;
