import type { GlobalProps, GlobalState, SizeProps } from '../../shared/model';

export type PaginationItemType = number | 'start-ellipsis' | 'end-ellipsis';

export type DBPaginationDefaultProps = {
	/**
	 * One-based number of the currently active page.
	 */
	currentPage: number | string;
	/**
	 * Total number of items across all pages.
	 */
	totalCount: number | string;
	/**
	 * Number of items displayed on one page.
	 */
	pageSize: number | string;
	/**
	 * Number of page buttons shown on each side of the current page.
	 */
	siblingCount?: number | string;
	/**
	 * Number of page buttons always shown at the start and end.
	 */
	boundaryCount?: number | string;
	/**
	 * Accessible label for the pagination navigation landmark.
	 */
	label?: string;
	/**
	 * Accessible label for the previous-page button.
	 */
	previousLabel?: string;
	/**
	 * Accessible label for the next-page button.
	 */
	nextLabel?: string;
	/**
	 * Accessible page-button label. `{page}` and `{totalPages}` are replaced.
	 */
	pageLabel?: string;
	/**
	 * Informs the parent that a different page was requested. The parent must
	 * update `currentPage`; the component never changes it internally.
	 */
	onPageChange?: (page: number) => void;
};

export type DBPaginationProps = DBPaginationDefaultProps &
	GlobalProps &
	SizeProps;

export type DBPaginationDefaultState = {
	getInteger: (
		value: number | string | undefined,
		fallback: number,
		minimum: number
	) => number;
	getRange: (start: number, end: number) => number[];
	getPageNumber: (item: PaginationItemType) => number;
	getTotalPages: () => number;
	getCurrentPage: () => number;
	getPaginationItems: () => PaginationItemType[];
	getPageLabel: (page: number) => string;
	handlePageChange: (page: number) => void;
};

export type DBPaginationState = DBPaginationDefaultState & GlobalState;
