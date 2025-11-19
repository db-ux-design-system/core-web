import { GlobalProps, GlobalState } from '../../shared/model';

export const BreadcrumbSizeList = ['small', 'medium'] as const;
export type BreadcrumbSize = (typeof BreadcrumbSizeList)[number];
export const BreadcrumbSeparatorList = ['chevron', 'slash'] as const;
export type BreadcrumbSeparator = (typeof BreadcrumbSeparatorList)[number];

export interface DBBreadcrumbItem {
	/**
	 * The URL the breadcrumb item links to
	 */
	href?: string;

	/**
	 * The text content of the breadcrumb item
	 */
	text: string;

	/**
	 * Indicates the current page in the breadcrumb
	 */
	ariaCurrent?: 'page' | 'step' | 'location' | 'date' | 'time' | 'true';
}

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
	 * Show collapsed items in a dropdown menu instead of expanding inline
	 */
	collapsedMenu?: boolean;

	/**
	 * Aria label for the ellipsis button in collapsed view
	 */
	ellipsisAriaLabel?: string;

	/**
	 * The breadcrumb items
	 */
	items?: DBBreadcrumbItem[];
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
