import type { GlobalProps, GlobalState, SizeProps } from '../../shared/model';
import { DBBreadcrumbItemDefaultProps } from '../breadcrumb-item/model';

export const BreadcrumbSeparatorList = ['chevron', 'slash'] as const;
export type BreadcrumbSeparatorType = (typeof BreadcrumbSeparatorList)[number];

export type DBBreadcrumbDefaultProps = {
	separator?: BreadcrumbSeparatorType;

	expandText?: string;

	items?: DBBreadcrumbItemDefaultProps[];
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
};

export type DBBreadcrumbState = DBBreadcrumbDefaultState & GlobalState;
