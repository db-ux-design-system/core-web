import { GlobalProps, GlobalState } from '../../shared/model';

export const BreadcrumbSizeList = ['small', 'medium'] as const;
export type BreadcrumbSize = (typeof BreadcrumbSizeList)[number];

export interface DBBreadcrumbDefaultProps {
	/**
	 * The size of the breadcrumb items
	 */
	size?: BreadcrumbSize;
}

export interface DBBreadcrumbProps
	extends DBBreadcrumbDefaultProps,
		GlobalProps {}

export interface DBBreadcrumbDefaultState {}

export interface DBBreadcrumbState
	extends DBBreadcrumbDefaultState,
		GlobalState {}
