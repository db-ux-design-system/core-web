import type { GlobalProps, GlobalState, SizeProps } from '../../shared/model';
import { DBBreadcrumbItemDefaultProps } from '../breadcrumb-item/model';

export const BreadcrumbSeparatorList = ['chevron', 'slash'] as const;
export type BreadcrumbSeparatorType = (typeof BreadcrumbSeparatorList)[number];

export type DBBreadcrumbDefaultProps = {
	/**
	 * Visual separator rendered between the crumbs.
	 *
	 * Default: `chevron`.
	 */
	separator?: BreadcrumbSeparatorType;

	/**
	 * Accessible label for the auto-collapse toggle that expands the trail.
	 *
	 * Default: `Show more breadcrumbs`.
	 */
	expandText?: string;

	/**
	 * Breadcrumb items for the options API. When set, the trail is rendered
	 * from this array instead of slotted `DBBreadcrumbItem` children.
	 */
	items?: DBBreadcrumbItemDefaultProps[];

	/**
	 * Maximum number of crumbs to show before the trail auto-collapses the
	 * middle items behind an expand toggle. Values below `2` are treated as `2`.
	 *
	 * Default: `4`.
	 */
	maxItems?: number;
};

export type DBBreadcrumbProps = DBBreadcrumbDefaultProps &
	GlobalProps &
	SizeProps;

export type DBBreadcrumbDefaultState = {
	_autoCollapse: boolean;
	_expanded: boolean;
	/**
	 * Expands the auto-collapsed trail (shows all items, hides the toggle).
	 */
	handleExpand: () => void;
	/**
	 * Normalized breadcrumb items derived from the `items` prop (options API).
	 */
	getItems: () => DBBreadcrumbItemDefaultProps[];
	/**
	 * Resolves the `aria-current` value for an item, defaulting the last item
	 * of the trail to `page` when not explicitly set.
	 */
	getAriaCurrent: (
		item: DBBreadcrumbItemDefaultProps,
		index: number
	) => DBBreadcrumbItemDefaultProps['ariaCurrent'] | undefined;
	/**
	 * Keeps the tab order of the auto-collapsed trail predictable (home,
	 * expand toggle, then the remaining crumbs) and takes disabled, current
	 * and collapsed-hidden crumbs out of the tab order.
	 */
	syncTabindex: () => void;
};

export type DBBreadcrumbState = DBBreadcrumbDefaultState & GlobalState;
