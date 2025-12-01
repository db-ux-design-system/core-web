import { GlobalProps, GlobalState } from '../../shared/model';
import type { DBBreadcrumbItemProps } from '../breadcrumb-item/model';

/**
 * Available sizes for breadcrumb items
 */
export const BreadcrumbSizeList = ['small', 'medium'] as const;
export type BreadcrumbSizeType = (typeof BreadcrumbSizeList)[number];
/**
 * Available separators between breadcrumb items
 */
export const BreadcrumbSeparatorList = ['chevron', 'slash'] as const;
export type BreadcrumbSeparatorType = (typeof BreadcrumbSeparatorList)[number];

export type DBBreadcrumbDefaultProps = {
	/**
	 * The size of the breadcrumb items.
	 *
	 * Options: `small`, `medium`.
	 * Default: `small`.
	 */
	size?: BreadcrumbSizeType;

	/**
	 * The separator shown between breadcrumb items.
	 *
	 * Options: `chevron`, `slash`.
	 * Default: `chevron`.
	 */
	separator?: BreadcrumbSeparatorType;

	/**
	 * Maximum number of items to display before collapsing.
	 *
	 * If the number of `items` exceeds this value, the middle items collapse
	 * into an ellipsis entry that can be expanded by the user.
	 */
	maxItems?: number;

	/**
	 * Aria label for the ellipsis button in collapsed view.
	 *
	 * Default: `Expand to show all breadcrumb items`.
	 */
	ellipsisAriaLabel?: string;

	/**
	 * The breadcrumb items to render.
	 *
	 * Each item can represent a link or the current page.
	 */
	items?: DBBreadcrumbItemProps[];

	/**
	 * Aria label for the breadcrumb navigation landmark.
	 *
	 * Default: `Breadcrumb`.
	 */
	ariaLabel?: string;
};

export type DBBreadcrumbProps = DBBreadcrumbDefaultProps & GlobalProps;

export type DBBreadcrumbDefaultState = {
	/**
	 * Tracks whether the breadcrumb is expanded or collapsed
	 */
	isExpanded?: boolean;
	/**
	 * Toggle function for expanding/collapsing
	 */
	toggleExpanded: () => void;
};

export type DBBreadcrumbState = DBBreadcrumbDefaultState & GlobalState;
