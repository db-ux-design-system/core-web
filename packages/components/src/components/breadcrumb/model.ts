import { GlobalProps, GlobalState } from '../../shared/model';
import type { DBBreadcrumbItems } from '../breadcrumb-item/model';
export type { DBBreadcrumbItems } from '../breadcrumb-item/model';

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
	 *
	 * Supports passing a JSON string (for web component usage) or an array of
	 * `DBBreadcrumbItems`.
	 */
	items?: DBBreadcrumbItems[] | string;

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
	/**
	 * Returns icon weight based on breadcrumb size.
	 */
	iconWeight: () => '24' | '20';
	/**
	 * Normalizes incoming items prop to an array.
	 */
	parseItems: () => DBBreadcrumbItems[];
	/**
	 * Determines if breadcrumb should render in collapsed state.
	 */
	isCollapsed: () => boolean;
	/**
	 * Items that render after the ellipsis when collapsed.
	 */
	collapsedTailItems: () => DBBreadcrumbItems[];
	/**
	 * aria-current value for a breadcrumb item.
	 */
	ariaCurrent: (
		item: DBBreadcrumbItems,
		isLast: boolean
	) => DBBreadcrumbItems['ariaCurrent'] | undefined;
	/**
	 * Unique id per instance used for deterministic fallbacks.
	 */
	uniqueId: string;
	/**
	 * Normalized breadcrumb items derived from the `items` prop.
	 */
	normalizedItems: () => DBBreadcrumbItems[];
};

export type DBBreadcrumbState = DBBreadcrumbDefaultState & GlobalState;
