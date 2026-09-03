import type { GlobalProps, GlobalState, SizeProps } from '../../shared/model';

/**
 * Which of the two layouts an item belongs to. `wide` items are hidden once the
 * page list collapses, `collapsed` items only appear there, `always` items are
 * part of both.
 */
export type PaginationItemLayout = 'always' | 'wide' | 'collapsed';

export type PaginationItemType = {
	/**
	 * One-based page number, or `0` for an ellipsis item.
	 */
	page: number;
	layout: PaginationItemLayout;
};

export type DBPaginationDefaultProps = {
	/**
	 * One-based number of the currently active page. Defaults to `1`.
	 */
	currentPage?: number | string;
	/**
	 * Total number of items across all pages. Defaults to `0`.
	 */
	totalCount?: number | string;
	/**
	 * Number of items displayed on one page. Defaults to `10`.
	 */
	pageSize?: number | string;
	/**
	 * Number of page buttons shown on each side of the current page.
	 */
	siblingCount?: number | string;
	/**
	 * Number of page buttons always shown at the start and end.
	 */
	boundaryCount?: number | string;
	/**
	 * URL template that turns the pages into links, for example `?page={page}`.
	 * `{page}` is replaced with the page number. Without it the component renders
	 * buttons and stays fully controlled.
	 */
	hrefPattern?: string;
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
	getTotalPages: () => number;
	getCurrentPage: () => number;
	getPages: (siblingCount: number) => number[];
	getPaginationItems: () => PaginationItemType[];
	getEllipsisLayout: (
		forWide: boolean,
		forCollapsed: boolean
	) => PaginationItemLayout;
	getItemAttribute: (item: PaginationItemType) => string;
	getHref: (page: number) => string | undefined;
	getPreviousHref: () => string | undefined;
	getNextHref: () => string | undefined;
	getPageLabel: (page: number) => string;
	handlePageChange: (page: number) => void;
};

export type DBPaginationState = DBPaginationDefaultState & GlobalState;
