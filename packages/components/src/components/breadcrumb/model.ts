import { GlobalProps, GlobalState } from '../../shared/model';

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
}

export interface DBBreadcrumbProps
	extends DBBreadcrumbDefaultProps,
		GlobalProps {}

export interface DBBreadcrumbDefaultState {}

export interface DBBreadcrumbState
	extends DBBreadcrumbDefaultState,
		GlobalState {}
