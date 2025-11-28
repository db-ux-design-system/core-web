import { GlobalProps, GlobalState } from '../../shared/model';
import type { DBBreadcrumbItemProps } from '../breadcrumb-item/model';

export const BreadcrumbSizeList = ['small', 'medium'] as const;
export type BreadcrumbSize = (typeof BreadcrumbSizeList)[number];
export const BreadcrumbSeparatorList = ['chevron', 'slash'] as const;
export type BreadcrumbSeparator = (typeof BreadcrumbSeparatorList)[number];

export interface DBBreadcrumbDefaultProps {
	/**
	 * The size of the breadcrumb items
	 */
	size?: BreadcrumbSize;

	/**
	 * The separator between breadcrumb items: 'chevron' or 'slash'
	 */
	separator?: BreadcrumbSeparator;

	/**
	 * Maximum number of items to display before collapsing
	 */
	maxItems?: number;

	/**
	 * Aria label for the ellipsis button in collapsed view
	 */
	ellipsisAriaLabel?: string;

	/**
	 * The breadcrumb items
	 */
	items?: DBBreadcrumbItemProps[];

	/**
	 * Aria label for the breadcrumb navigation
	 */
	ariaLabel?: string;
}

export interface DBBreadcrumbProps
	extends DBBreadcrumbDefaultProps,
		GlobalProps {}

export interface DBBreadcrumbDefaultState {
	/**
	 * Tracks whether the breadcrumb is expanded or collapsed
	 */
	isExpanded?: boolean;
	/**
	 * Toggle function for expanding/collapsing
	 */
	toggleExpanded: () => void;
}

export interface DBBreadcrumbState
	extends DBBreadcrumbDefaultState,
		GlobalState {}
